<template>
  <div>
    <Button
      :handleClick="handleClick"
      :icon="['fab', 'google']"
      :variant="'danger'"
      :style="{width: '100%', 'margin-right': 0}"
    >Login with Google</Button>
    <Message v-if="errorMsg" :color="'red'" :text="errorMsg" />
  </div>
</template>

<script>
import firebase from "firebase/app";
import Button from "../../components/Button";
import Message from "../../components/Message";

export default {
  name: "GoogleButton",
  data() {
    return {
      errorMsg: null
    };
  },
  components: {
    Button,
    Message
  },
  methods: {
    async handleClick() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await firebase.auth().signInWithPopup(provider);
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } catch (error) {
        this.errorMsg = error.message;
      }
    }
  }
};
</script>

<style>
</style>