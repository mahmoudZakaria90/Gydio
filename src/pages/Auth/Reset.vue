<template>
  <Dialog>
    <template v-slot:dialog-title>Reset password</template>
    <template v-slot:dialog-body>
      <Form
        :isSuccess="isSuccess"
        :successMsg="successMsg"
        :hasError="formHasError"
        :errorMsg="formHasError && formHasError.message"
        :handleSubmit="handleSubmit"
      >
        <TextInput
          :label="'Email'"
          :isRequired="true"
          :isSubmitted="isSubmitted"
          :isValid="isEmail"
          :hasError="email.hasError"
          :errorMsg="email.errorMsg"
          v-model="email.value"
        />
      </Form>
    </template>
  </Dialog>
</template>

<script>
import firebase from "firebase/app";

import { eventBus } from "../../utils/bus";
import { isEmail } from "../../utils/validation";

import Dialog from "../../components/Dialog";
import Form from "../../components/Form";
import TextInput from "../../components/TextInput";

export default {
  name: "Login",
  components: {
    Dialog,
    Form,
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
          setTimeout(() => {
            this.$router.push("/login");
          }, 3000);
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