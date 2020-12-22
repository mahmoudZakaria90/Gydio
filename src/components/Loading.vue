<template>
  <div class="loading-overlay">
    <div class="loading-body">
      <p>{{ text }}</p>
      <font-awesome-icon class="loading-icon" :icon="['fas', 'cog']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    text: String,
  },
};
</script>

<style scoped lang="sass">
@import ../assets/sass/colors

@keyframes loading
    to
        transform: rotate(360deg)
.loading
    &-overlay
        display: flex
        align-items: center
        justify-content: center
        position: fixed
        width: 100%
        height: 100%
        background-color: rgba($disabled, .9)
        z-index: 999999
    &-body
        text-align: center
    &-icon
        font-size: 50px
        animation: loading 2s infinite linear
</style>
