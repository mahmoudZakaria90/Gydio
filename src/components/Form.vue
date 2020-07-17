<template>
  <form class="form" @submit.prevent="handleSubmit">
    <slot></slot>
    <div class="form-submit" style="text-align: center">
      <Button :type="'submit'">Submit</Button>
    </div>
    <Message v-if="isSuccess" :color="'green'" :text="successMsg" />
    <Message v-if="hasError" :color="'red'" :text="errorMsg" />
  </form>
</template>

<script>
import Message from "./Message";

export default {
  name: "Form",
  components: {
    Message
  },
  props: {
    isSuccess: Boolean,
    successMsg: String,
    hasError: Object,
    errorMsg: String,
    handleSubmit: Function
  }
};
</script>

<style lang="sass" scoped>
.form
    &-submit
        text-align: center
</style>