<template>
  <div>
    <header>
      <nav class="nav">
        <slot name="nav-left">
          <router-link to="/">Back</router-link>
        </slot>
        <ul v-if="!user" class="nav-right">
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
        <ul class="nav-right" v-else>
          <li>Welcome back, {{user.email}}</li>
          <li>
            <a @click.prevent="signOut">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Header",
  data() {
    return {
      user: null,
      isAuthenticated: false
    };
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.user = user;
        return;
      }
      this.user = null;
    });
  }
};
</script>

<style scoped lang="sass">
.router-link-exact-active
  text-decoration: underline
.nav
  display: flex
  &-right
    margin-left: auto
    & > li
      display: inline-block
      margin: 0 20px
.user
  margin-left: auto
  margin-bottom: 0
</style>