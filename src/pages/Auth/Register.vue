<template>
  <Dialog>
    <template v-slot:dialog-title>Register</template>
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
          v-model="password.confirmPassword.value"
        />
        <div style="text-align: center">
          <Button :type="'submit'">Submit</Button>
        </div>
        <Message v-if="isSuccess" :color="'green'" :text="'User has been created successfully'" />
        <Message v-if="formHasError" :color="'red'" :text="formHasError.message" />
      </form>
    </template>
  </Dialog>
</template>

<script>
import firebase from "firebase/app";

import Button from "../../components/Button";
import Dialog from "../../components/Dialog";
import Message from "../../components/Message";
import TextInput from "../../components/TextInput";

import { isEmail } from "../../utils/validation";

export default {
  name: "Register",
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
        errorMsg: ""
      },
      password: {
        value: "",
        hasError: false,
        errorMsg: "",
        confirmPassword: {
          value: ""
        }
      },
      isSubmitted: null,
      isSuccess: null,
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
        this.email.errorMsg = "Enter a valid email address.";
      } else {
        this.email.hasError = false;
        this.email.errorMsg = "";
      }

      if (
        this.password.value &&
        this.password.confirmPassword.value &&
        !this.matchPassword
      ) {
        this.password.hasError = true;
        this.password.errorMsg = "Please match the 2 password inputs.";
      } else {
        this.password.hasError = false;
        this.password.errorMsg = "";
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
          this.formHasError = error;
        }
      }
    }
  }
};
</script>

<style>
</style>