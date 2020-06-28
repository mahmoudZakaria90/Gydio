<template>
  <div>
    <header>
      <nav class="nav">
        <slot name="nav-left">
          <router-link to="/">Back</router-link>
        </slot>
        <ul class="nav-right">
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="sass">
.nav
  display: flex
  &-right
    margin-left: auto
    & > li
      display: inline-block
      margin: 0 20px
</style>