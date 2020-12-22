<template>
  <div class="dialog-outer">
    <div class="container">
      <h1 class="dialog-title">
        <slot name="dialog-title"></slot>
      </h1>
      <div class="dialog-body">
        <slot name="dialog-body"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
};
</script>

<style scoped lang="sass">
.dialog
  &-outer
    display: flex
    background-color: #d6d6d6
    height: 100vh
    align-items: center
    justify-content: center
    .container
      flex-basis: 500px
  &-body
    padding: 40px
    border-radius: 5px
    margin: auto
    background-color: #ddd
</style>
