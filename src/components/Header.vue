<template>
  <div>
    <header>
      <nav class="nav">
        <slot name="nav-left"></slot>
        <ul class="nav-right">
          <li>
            <a href>Login</a>
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
export default {};
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