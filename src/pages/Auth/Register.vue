<template>
  <Dialog>
    <template v-slot:dialog-title>Register</template>
    <template v-slot:dialog-body>
      <TextInput :label="'Email'" v-model="email" :isValid="true" />
      <TextInput
        :label="'Password'"
        :inputType="'password'"
        @change="matchPassword"
        :isValid="passwordMatch"
        v-model="password"
      />
      <TextInput
        :label="'Confirm password'"
        :inputType="'password'"
        :isValid="passwordMatch"
        @change="matchPassword"
        v-model="confirmPassword"
      />
    </template>
  </Dialog>
</template>

<script>
import Dialog from "../../components/Dialog";
import TextInput from "../../components/TextInput";

export default {
  name: "Register",
  components: {
    Dialog,
    TextInput
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      passwordMatch: false
    };
  },
  methods: {
    matchPassword() {
      if (this.password === this.confirmPassword) {
        this.passwordMatch = true;
        console.log("Maaatch");
        return;
      }
      this.passwordMatch = false;
    }
  }
};
</script>

<style>
</style>