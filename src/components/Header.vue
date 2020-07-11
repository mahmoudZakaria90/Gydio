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
          <li v-if="user.email && !user.displayName">
            Welcome back,
            <strong>{{emailUsername}}</strong>
          </li>
          <li v-else-if="user.displayName">
            Welcome back,
            <strong>{{firstName}}</strong>
          </li>
          <li class="nav-right-img" v-if="user.photoURL">
            <img :src="user.photoURL" alt />
          </li>
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

export default {
  name: "Header",
  data() {
    return {
      user: null,
      firstName: null,
      emailUsername: null,
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
        this.user = user;
        const emailUsername = user.email && user.email.split("@")[0];
        const firstName = user.displayName && user.displayName.split(" ")[0];
        this.firstName = firstName;
        this.emailUsername = emailUsername;
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
    &-img
      position: relative
      width: 25px
      & img
        position: absolute
        top: -18px
        left: 0
        border-radius: 50%
    & > li
      display: inline-block
      margin: 0 20px
      position: relative
      &.nav-right-img
        margin-left: 0
.user
  margin-left: auto
  margin-bottom: 0
</style>