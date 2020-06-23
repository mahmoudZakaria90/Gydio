<template>
  <p>
    {{progressState}}
    <font-awesome-icon
      :icon="['fas', 'check-circle']"
      :style="{ color: 'lightgreen' }"
      v-if="isSuccess"
    />
  </p>
</template>

<script>
export default {
  props: {
    progressState: String,
    isSuccess: Boolean
  }
};
</script>

<style>
</style>