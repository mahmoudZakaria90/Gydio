<template>
  <Dialog>
    <template v-slot:dialog-title>Login</template>
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
          :isValid="Boolean(password.value)"
          :hasError="password.hasError"
          :errorMsg="password.errorMsg"
          v-model="password.value"
        />
        <div style="text-align: center">
          <button type="submit">Submit</button>
        </div>
        <Message v-if="isSuccess" :color="'green'" :text="'User has been Logged in successfully'" />
        <Message v-if="formHasError" :color="'red'" :text="formHasError.message" />
      </form>
    </template>
  </Dialog>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

import { eventBus } from "../../utils";

import Dialog from "../../components/Dialog";
import Message from "../../components/Message";
import TextInput from "../../components/TextInput";

export default {
  name: "Login",
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
        errorMsg: ""
      },
      isSubmitted: null,
      isSuccess: null,
      formHasError: null
    };
  },
  computed: {
    isEmail() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(this.email.value);
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

      if (this.email.value && this.password.value) {
        try {
          const { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email.value, this.password.value);
          const { email } = user;
          this.isSuccess = true;
          this.formHasError = null;
          eventBus.$emit("user_authenticated", {
            isAuthenticated: this.isSuccess,
            user: email
          });
        } catch (error) {
          this.isSuccess = false;
          this.formHasError = error;
          this.isSubmitted = false;
          eventBus.$emit("resetInput", "");
          alert("Fail");
        }
      }
    }
  }
};
</script>

<style>
</style>