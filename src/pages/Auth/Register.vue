<template>
  <div>
    <Header />
    <Dialog>
      <template v-slot:dialog-title>Register</template>
      <template v-slot:dialog-body>
        <form @submit="handleSubmit">
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
            <button type="submit">Submit</button>
          </div>
          <Message v-if="isSuccess" :color="'green'" :text="'User has been created successfully'" />
          <Message v-if="formHasError" :color="'red'" :text="formHasError.message" />
        </form>
      </template>
    </Dialog>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

import Dialog from "../../components/Dialog";
import Message from "../../components/Message";
import TextInput from "../../components/TextInput";

export default {
  name: "Register",
  components: {
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
      formHasError: ""
    };
  },
  computed: {
    isEmail() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(this.email.value);
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
          this.isSuccess = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 3000);
          this.formHasError = false;
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