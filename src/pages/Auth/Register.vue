<template>
  <Dialog>
    <template v-slot:dialog-title>Register</template>
    <template v-slot:dialog-body>
      <TextInput :label="'Email'" v-model="email" :isValid="Boolean(email)" />
      <TextInput
        :label="'Password'"
        :inputType="'password'"
        :isValid="matchPassword"
        v-model="password"
      />
      <TextInput
        :label="'Confirm password'"
        :inputType="'password'"
        :isValid="matchPassword"
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
      confirmPassword: ""
    };
  },
  computed: {
    matchPassword() {
      return (
        Boolean(this.password) &&
        Boolean(this.confirmPassword) &&
        this.password === this.confirmPassword
      );
    }
  }
};
</script>

<style>
</style>