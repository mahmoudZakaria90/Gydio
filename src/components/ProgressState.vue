<template>
  <p :class="{isCancelled}">
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
  name: "ProgressState",
  props: {
    progressState: String,
    isSuccess: Boolean,
    isCancelled: Boolean
  }
};
</script>

<style scoped lang="sass">
.isCancelled
  color: red
</style>