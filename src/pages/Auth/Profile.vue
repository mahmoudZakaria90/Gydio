<template>
  <div>
    <div v-if="user && !hasError" class="container" style="text-align:center">
      <p v-if="user.metadata.lastSignInTime">
        Last sign-in on:
        <strong>{{user.metadata.lastSignInTime}}</strong>
      </p>
      <h1>
        <span style="color: lightcoral">{{user.displayName}}</span>'s profile.
      </h1>
      <div style="margin-bottom: 10px">
        <img :src="user.photoURL" alt />
      </div>
      <div>
        <h1>Email</h1>
        {{user.email}}
      </div>
    </div>
    <div class="container">
      <Message v-if="hasError" :color="'red'" :text="errorMsg" />
    </div>
  </div>
</template>

<script>
import Message from "../../components/Message";
export default {
  name: "Profile",
  components: {
    Message
  },
  data() {
    return {
      user: null,
      id: this.$route.params.id,
      hasError: false,
      errorMsg: "User is not found (404)"
    };
  },
  async mounted() {
    const { VUE_APP_USERS_ENDPOINT } = process.env;
    try {
      const data = await fetch(`${VUE_APP_USERS_ENDPOINT}${this.id}`);
      const user = await data.json();
      this.user = user;
    } catch (error) {
      this.hasError = true;
    }
  }
};
</script>

<style lang="sass" scoped>
img
  margin: 0 auto
</style>