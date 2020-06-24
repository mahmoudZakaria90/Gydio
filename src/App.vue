<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/explore">Explore</router-link>
      </nav>
    </header>
    <div class="container">
      <div class="intro">
        <h1>Gydio</h1>
        <p>Your favorite place for Music, themes and soundtracks of Gaming.</p>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style lang="sass">
@import './assets/sass/placeholders'

button
  @extend %button

.intro
  padding-top: 30px
  margin-bottom: 50px
</style>
