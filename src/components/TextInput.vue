<template>
  <label>
    <span class="text-input-label">{{ label }}</span>
    <font-awesome-icon v-if="isValid" :icon=" ['fas', 'check-circle']"></font-awesome-icon>
    <input class="text-input" :type="inputType || 'text'" v-model="newVal" />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      newVal: this.value
    };
  },
  watch: {
    newVal() {
      this.$emit("input", this.newVal);
    }
  }
};
</script>

<style lang="sass" scoped>
.text-input
  display: block
  padding: 10px
  border-radius: 5px
  width: 100%
  margin-top: 5px
  margin-bottom: 20px
  &-label
    font-size: 20px
    margin-right: 10px
</style>
