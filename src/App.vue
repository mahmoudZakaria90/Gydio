<template>
  <div id="app">
    <header>
      <nav>
        <a href>Explore</a>
      </nav>
    </header>
    <div class="container">
      <div class="intro">
        <h1>Aydio</h1>
        <p>Your favorite place for Music, themes and soundtracks of Gaming.</p>
      </div>
      <Uploader />
    </div>
  </div>
</template>

<script>
import Uploader from "./components/Uploader";

export default {
  name: "App",
  components: {
    Uploader
  }
};
</script>

<style lang="sass">
@import './assets/placeholders'

button
  @extend %button

.intro
  padding-top: 30px
  margin-bottom: 50px
</style>
