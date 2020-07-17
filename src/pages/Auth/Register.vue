<template>
  <Dialog>
    <template v-slot:dialog-title>Register</template>
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
        <TextInput
          :label="'Password'"
          :inputType="'password'"
          :isRequired="true"
          :isSubmitted="isSubmitted"
          :isValid="matchPassword"
          :hasError="password.hasError"
          :errorMsg="password.errorMsg"
          v-model="password.value"
        />
        <TextInput
          :label="'Confirm password'"
          :inputType="'password'"
          :isRequired="true"
          :isSubmitted="isSubmitted"
          :isValid="matchPassword"
          :hasError="password.hasError"
          :errorMsg="password.errorMsg"
          v-model="password.confirmPassword.value"
        />
      </Form>
    </template>
  </Dialog>
</template>

<script>
import firebase from "firebase/app";

import Dialog from "../../components/Dialog";
import Form from "../../components/Form";
import TextInput from "../../components/TextInput";

import { isEmail } from "../../utils/validation";

export default {
  name: "Register",
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
      password: {
        value: "",
        hasError: false,
        errorMsg: "Please match the 2 password inputs.",
        confirmPassword: {
          value: ""
        }
      },
      isSubmitted: null,
      isSuccess: null,
      successMsg: "User has been created successfully.",
      formHasError: null
    };
  },
  computed: {
    isEmail() {
      return isEmail(this.email.value);
    },
    matchPassword() {
      return (
        Boolean(this.password.value) &&
        Boolean(this.password.confirmPassword.value) &&
        this.password.value === this.password.confirmPassword.value
      );
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitted = true;
      if (this.email.value && !this.isEmail) {
        this.email.hasError = true;
      } else {
        this.email.hasError = false;
      }

      if (
        this.password.value &&
        this.password.confirmPassword.value &&
        !this.matchPassword
      ) {
        this.password.hasError = true;
        return;
      } else {
        this.password.hasError = false;
      }

      if (this.isEmail && this.matchPassword) {
        try {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.email.value,
              this.password.value
            );
          const { currentUser } = firebase.auth();
          await currentUser.sendEmailVerification();
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
          this.isSuccess = true;
          this.formHasError = null;
        } catch (error) {
          this.isSuccess = false;
          this.isSubmitted = false;
          this.formHasError = error;
        }
      }
    }
  }
};
</script>

<style>
</style>