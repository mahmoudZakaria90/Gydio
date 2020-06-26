<template>
  <div>
    <Header>
      <router-link to="/">Back</router-link>
    </Header>
    <Dialog>
      <template v-slot:dialog-title>Register</template>
      <template v-slot:dialog-body>
        <form @submit="handleSubmit">
          <TextInput
            :label="'Email'"
            :isRequired="isSubmitted"
            :isValid="isEmail"
            :hasError="email.hasError"
            :errorMsg="email.errorMsg"
            v-model="email.value"
          />
          <TextInput
            :label="'Password'"
            :inputType="'password'"
            :isValid="matchPassword"
            v-model="password"
          />
          <Message
            v-if="isSubmitted && !password"
            :color="'red'"
            :text="'Please enter your password.'"
            :icon="['far', 'times-circle']"
          />
          <TextInput
            :label="'Confirm password'"
            :inputType="'password'"
            :isValid="matchPassword"
            v-model="confirmPassword"
          />
          <Message
            v-if="isSubmitted && !matchPassword"
            :color="'red'"
            :text="'Please match your passwords.'"
            :icon="['far', 'times-circle']"
          />
          <div style="text-align: center">
            <button type="submit">Submit</button>
          </div>
          <Message v-if="isSuccess" :color="'green'" :text="'User has been created successfully'" />
          <Message v-if="hasError" :color="'red'" :text="hasError.message" />
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
      password: "",
      confirmPassword: "",
      isSubmitted: null,
      isSuccess: null,
      hasError: ""
    };
  },
  computed: {
    isEmail() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(this.email.value);
    },
    matchPassword() {
      return (
        Boolean(this.password) &&
        Boolean(this.confirmPassword) &&
        this.password === this.confirmPassword
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
      if (this.isEmail && this.matchPassword) {
        try {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(this.email.value, this.password);
          this.isSuccess = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 3000);
          this.hasError = false;
        } catch (error) {
          this.isSuccess = false;
          this.hasError = error;
        }
      }
    }
  }
};
</script>

<style>
</style>