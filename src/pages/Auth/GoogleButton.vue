<template>
  <Button
    :handleClick="handleClick"
    :icon="['fab', 'google']"
    :variant="'danger'"
    :style="{width: '100%'}"
  >Login with Google</Button>
</template>

<script>
import firebase from "firebase/app";
import Button from "../../components/Button";

export default {
  name: "GoogleButton",
  components: {
    Button
  },
  methods: {
    async handleClick() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  }
};
</script>

<style>
</style>