<template>
  <Dialog>
    <template v-slot:dialog-title>Login</template>
    <template v-slot:dialog-body>
      <form @submit="handleSubmit">
        <TextInput :label="'Email'" :isRequired="true" v-model="email" />
        <TextInput
          :label="'Password'"
          :inputType="'password'"
          :isRequired="true"
          v-model="password"
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
      email: "",
      password: "",
      isSubmitted: null,
      isSuccess: null,
      formHasError: null
    };
  },
  methods: {
    async handleSubmit() {
      if (this.email && this.password) {
        try {
          const { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
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