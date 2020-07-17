<template>
  <Dialog>
    <template v-slot:dialog-title>Reset password</template>
    <template v-slot:dialog-body>
      <form @submit.prevent="handleSubmit">
        <TextInput
          :label="'Email'"
          :isRequired="true"
          :isSubmitted="isSubmitted"
          :isValid="isEmail"
          :hasError="email.hasError"
          :errorMsg="email.errorMsg"
          v-model="email.value"
        />
        <div style="text-align: center">
          <Button :type="'submit'">Submit</Button>
        </div>
        <Message v-if="isSuccess" :color="'green'" :text="successMsg" />
        <Message v-if="formHasError" :color="'red'" :text="formHasError.message" />
      </form>
    </template>
  </Dialog>
</template>

<script>
import firebase from "firebase/app";

import { eventBus } from "../../utils/bus";
import { isEmail } from "../../utils/validation";

import Button from "../../components/Button";
import Dialog from "../../components/Dialog";
import Message from "../../components/Message";
import TextInput from "../../components/TextInput";

export default {
  name: "Login",
  components: {
    Button,
    Dialog,
    Message,
    TextInput
  },
  data() {
    return {
      email: {
        value: "",
        hasError: false,
        errorMsg: "Enter a valid email address."
      },
      isSubmitted: null,
      isSuccess: null,
      successMsg: "A reset password email has been sent to your inbox.",
      formHasError: null
    };
  },
  computed: {
    isEmail() {
      return isEmail(this.email.value);
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitted = true;

      if (this.email.value && !this.isEmail) {
        this.email.hasError = true;
        return;
      } else {
        this.email.hasError = false;
      }

      if (this.email.value) {
        try {
          await firebase.auth().sendPasswordResetEmail(this.email.value);
          this.isSuccess = true;
          this.formHasError = null;
        } catch (error) {
          this.formHasError = error;
          this.isSuccess = false;
          this.isSubmitted = false;
          eventBus.$emit("resetInput", "");
        }
      }
    }
  }
};
</script>

<style lang="sass" scoped>
</style>