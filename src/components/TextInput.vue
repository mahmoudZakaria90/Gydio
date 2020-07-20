<template>
  <label>
    <span class="text-input-label">{{ label }} {{isRequired ? '*' : ''}}</span>
    <Message
      v-if="isSubmitted && isRequired && !Boolean(injectedVal)"
      :text="'This field is required!'"
      :color="'red'"
      :styleObj="{display: 'inline-block'}"
    />
    <font-awesome-icon class="text-input-icon" v-if="isValid" :icon="['fas', 'check-circle']" />
    <input
      class="text-input"
      :class="{hasError: (hasError && !isValid) || (isSubmitted && isRequired && !Boolean(injectedVal))}"
      :type="inputType || 'text'"
      :disabled="isDisabled"
      @change="handleOnChange"
      v-model="injectedVal"
    />
    <Message
      v-show="hasError && !isValid"
      :color="'red'"
      :text="errorMsg"
      :icon="['far', 'times-circle']"
    />
  </label>
</template>

<script>
import Message from "./Message";
import { eventBus } from "../utils/bus";

export default {
  name: "TextInput",
  components: {
    Message
  },
  props: {
    label: String,
    inputType: String,
    value: String,
    isRequired: Boolean,
    isSubmitted: Boolean,
    isValid: Boolean,
    isDisabled: Boolean,
    hasError: Boolean,
    errorMsg: String,
    handleOnChange: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      injectedVal: this.value
    };
  },
  mounted() {
    eventBus.$on("resetInput", () => (this.injectedVal = ""));
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
  &-icon
    margin-left: 0
  &-label
    font-size: 20px
    margin-right: 10px
  &.hasError
    border-color: red
</style>
