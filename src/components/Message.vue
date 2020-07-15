<template>
  <p :style="{...styleObj, color}">
    <span>{{text}}</span>
    <font-awesome-icon v-if="icon" :icon="icon" :style="iconStyle" />
  </p>
</template>

<script>
export default {
  name: "Message",
  props: {
    text: String,
    color: String,
    styleObj: Object,
    icon: Array,
    iconStyle: Object
  }
};
</script>

<style>
</style>