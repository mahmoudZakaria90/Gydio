<template>
  <label>
    <Message
      v-if="isSubmitted && !Boolean(injectedVal)"
      :text="'This field is required!'"
      :color="'red'"
    />
    <span class="text-input-label">{{ label }} {{isRequired ? '*' : ''}}</span>
    <font-awesome-icon v-if="isValid" :icon=" ['fas', 'check-circle']"></font-awesome-icon>
    <input class="text-input" :type="inputType || 'text'" v-model="injectedVal" />
    <Message v-if="hasError" :color="'red'" :text="errorMsg" :icon="['far', 'times-circle']" />
  </label>
</template>

<script>
import Message from "./Message";
export default {
  components: {
    Message
  },
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
    isRequired: {
      type: Boolean,
      required: false
    },
    isSubmitted: {
      type: Boolean,
      required: false
    },
    isValid: {
      type: Boolean,
      required: true
    },
    hasError: {
      type: Boolean,
      required: false
    },
    errorMsg: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      injectedVal: this.value
    };
  },
  watch: {
    injectedVal() {
      this.$emit("input", this.injectedVal);
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
