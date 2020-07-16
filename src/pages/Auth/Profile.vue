<template>
  <div v-if="user" class="container" style="text-align:center">
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
    <p>{{errorMsg}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: null,
      errorMsg: null
    };
  },
  methods: {
    async getUser() {
      const { VUE_APP_USERS_ENDPOINT } = process.env;
      try {
        const data = await fetch(
          `${VUE_APP_USERS_ENDPOINT}${this.$route.params.id}`
        );
        const user = await data.json();
        this.user = user;
      } catch (error) {
        this.errorMsg = error.message;
      }
    }
  },
  mounted() {
    this.getUser();
  },
  updated() {
    this.getUser();
  }
};
</script>

<style lang="sass" scoped>
img
  margin: 0 auto
</style>