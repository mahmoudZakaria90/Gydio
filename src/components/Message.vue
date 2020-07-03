<template>
  <p :style="{color}">
    <span>{{text}}</span>
    <font-awesome-icon v-if="icon" :icon="icon" :style="iconStyle"></font-awesome-icon>
  </p>
</template>

<script>
export default {
  name: "Message",
  props: {
    text: String,
    color: String,
    icon: Array,
    iconStyle: Object
  }
};
</script>

<style>
</style>