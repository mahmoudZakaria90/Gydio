<template>
  <div>
    <Loading v-if="isLoading" :text="'Fetching user...'" />
    <div v-if="user && !hasError" class="container" style="text-align:center">
      <p v-if="user.metadata.lastSignInTime">
        Last sign-in on:
        <strong>{{user.metadata.lastSignInTime}}</strong>
      </p>
      <h1>
        <span style="color: lightcoral">{{user.displayName || user.email}}</span>'s profile.
      </h1>
      <div style="margin-bottom: 10px">
        <img :src="user.photoURL" alt />
      </div>
      <div>
        <h1>Email</h1>
        {{user.email}}
      </div>
    </div>
    <Message v-if="hasError" :color="'red'" :text="errorMsg" />
  </div>
</template>

<script>
import Message from "../../components/Message";
import Loading from "../../components/Loading";

export default {
  name: "Profile",
  components: {
    Message,
    Loading
  },
  data() {
    return {
      user: null,
      isLoading: true,
      hasError: false,
      errorMsg: "User is not found (404)"
    };
  },
  methods: {
    async getUser(id) {
      const { VUE_APP_USERS_ENDPOINT } = process.env;
      try {
        const data = await fetch(`${VUE_APP_USERS_ENDPOINT}${id}`);
        const user = await data.json();
        this.user = user;
      } catch (error) {
        this.hasError = true;
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.getUser(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.getUser(to.params.id);
    next();
  }
};
</script>

<style lang="sass" scoped>
img
  margin: 0 auto
</style>