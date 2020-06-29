<template>
  <div>
    <header>
      <nav class="nav">
        <slot name="nav-left">
          <router-link to="/">Back</router-link>
        </slot>
        <ul v-if="!isAuthenticated" class="nav-right">
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
        <p class="user" v-if="isAuthenticated">Welcome back, {{user}}</p>
      </nav>
    </header>
  </div>
</template>

<script>
import { eventBus } from "../utils";
export default {
  name: "Header",
  data() {
    return {
      user: null,
      isAuthenticated: false
    };
  },
  mounted() {
    eventBus.$on("user_authenticated", ({ isAuthenticated, user }) => {
      this.user = user;
      this.isAuthenticated = isAuthenticated;
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
</style>