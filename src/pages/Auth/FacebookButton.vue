<template>
  <div>
    <Button
      :handleClick="handleClick"
      :icon="['fab', 'facebook-f']"
      :style="{width: '100%', 'margin-right': 0}"
    >Login with Facebook</Button>
    <Message v-if="errorMsg" :color="'red'" :text="errorMsg" />
  </div>
</template>

<script>
import firebase from "firebase/app";
import Button from "../../components/Button";
import Message from "../../components/Message";

export default {
  name: "FacebookButton",
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
      const provider = new firebase.auth.FacebookAuthProvider();
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