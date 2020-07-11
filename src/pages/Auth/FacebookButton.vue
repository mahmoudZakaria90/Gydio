<template>
  <Button
    :handleClick="handleClick"
    :icon="['fab', 'facebook-f']"
    :style="{width: '100%'}"
  >Login with Facebook</Button>
</template>

<script>
import firebase from "firebase/app";
import Button from "../../components/Button";

export default {
  name: "FacebookButton",
  components: {
    Button
  },
  methods: {
    async handleClick() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  }
};
</script>

<style>
</style>