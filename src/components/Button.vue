<template>
  <button
    :class="iconPosition"
    :style="{styleObj, 'background-color': variant}"
    :text="text"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <font-awesome-icon v-if="icon &&  iconPosition !== 'right'" :icon="icon" :style="iconStyle"></font-awesome-icon>
    <slot></slot>
    <font-awesome-icon v-if="icon && iconPosition === 'right'" :icon="icon" :style="iconStyle"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    styleObj: Object,
    variant: String,
    text: String,
    icon: Array,
    iconStyle: Object,
    iconPosition: {
      default: "left",
      type: String
    },
    isDisabled: Boolean,
    handleClick: Function
  }
};
</script>

<style lang="sass" scoped>
.left
  .svg-inline--fa
    margin-left: 0
    margin-right: 10px
</style>