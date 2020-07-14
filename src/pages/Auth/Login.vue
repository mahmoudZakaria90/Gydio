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
          :isValid="Boolean(password.value) && password.value.length >= 6"
          :hasError="password.hasError"
          :errorMsg="password.errorMsg"
          v-model="password.value"
        />
        <div style="text-align: center">
          <Button :type="'submit'">Submit</Button>
        </div>
        <Message v-if="isSuccess" :color="'green'" :text="'User has been Logged in successfully'" />
        <Message v-if="formHasError" :color="'red'" :text="formHasError.message" />
      </form>
    </template>
    <div class="login-social">
      <Button
        :handleClick="googleLogin"
        :icon="['fab', 'google']"
        :variant="'danger'"
        :style="{width: '100%', 'margin-right': 0}"
      >Login with Google</Button>
      <Button
        :handleClick="facebookLogin"
        :icon="['fab', 'facebook-f']"
        :style="{width: '100%', 'margin-right': 0}"
      >Login with Facebook</Button>
    </div>
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
      return isEmail(this.email.value);
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
          await firebase
            .auth()
            .signInWithEmailAndPassword(this.email.value, this.password.value);
          this.isSuccess = true;
          this.formHasError = null;
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
        } catch (error) {
          this.isSuccess = false;
          this.formHasError = error;
          this.isSubmitted = false;
          eventBus.$emit("resetInput", "");
        }
      }
    },
    async facebookLogin() {
      const provider = new firebase.auth.FacebookAuthProvider();
      try {
        await firebase.auth().signInWithPopup(provider);
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } catch (error) {
        this.formHasError = error;
      }
    },
    async googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await firebase.auth().signInWithPopup(provider);
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } catch (error) {
        this.formHasError = error;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.login
  &-social
    margin-top: 50px
</style>