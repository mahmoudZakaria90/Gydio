<template>
  <button
    :class="[iconPosition, variant]"
    :style="{ styleObj }"
    :text="text"
    :disabled="isDisabled"
    :type="type"
    @click="handleClick"
  >
    <font-awesome-icon
      v-if="icon && iconPosition !== 'right'"
      :icon="icon"
      :style="iconStyle"
    />
    <slot></slot>
    <font-awesome-icon
      v-if="icon && iconPosition === 'right'"
      :icon="icon"
      :style="iconStyle"
    />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    styleObj: Object,
    variant: String,
    text: String,
    type: String,
    icon: Array,
    iconStyle: Object,
    iconPosition: {
      type: String,
      default: 'left',
    },
    isDisabled: Boolean,
    handleClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="sass" scoped>
.danger
  background-color: #d9372b
.left
  .svg-inline--fa
    margin-left: 0
    margin-right: 10px
</style>
