<template>
  <Dialog>
    <template v-slot:dialog-title>Register</template>
    <template v-slot:dialog-body>
      <TextInput :label="'Email'" v-model="email" :isValid="isEmail" />
      <Message
        v-if="isSubmitted && !Boolean(email)"
        :color="'red'"
        :text="'Please enter your email address.'"
        :icon="['far', 'times-circle']"
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
        <button @click="handleSubmit">Submit</button>
      </div>
      <Message v-if="isSuccess" :color="'green'" :text="'User has been created successfully'" />
      <Message v-if="error" :color="'red'" :text="error.message" />
    </template>
  </Dialog>
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
      email: "",
      password: "",
      confirmPassword: "",
      isSubmitted: null,
      isSuccess: null,
      error: ""
    };
  },
  computed: {
    isEmail() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return Boolean(this.email) && pattern.test(this.email);
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
      if (this.isEmail && this.matchPassword) {
        try {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);
          this.isSuccess = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 3000);
        } catch (error) {
          this.isSuccess = false;
          this.error = error;
        }
      }
    }
  }
};
</script>

<style>
</style>