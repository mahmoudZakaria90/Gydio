<template>
  <router-link :to="`/profile/${user.uid}`" v-if="user">
    <img class="user-pic" :src="user.photoUrl" alt />
    <span>{{user.name}}</span>
  </router-link>
  <div v-else>
    <img class="user-pic" :src="userPlaceholder" alt />
    <span>Anonymous</span>
  </div>
</template>

<script>
import userPlaceholder from "../assets/images/user-placeholder.jpg";

export default {
  name: "User",
  data() {
    return {
      userPlaceholder
    };
  },
  props: {
    user: Object
  }
};
</script>

<style lang="sass" scoped>
.user
  &-pic
    display: inline-block
    margin-right: 10px
    border-radius: 50%
    width: 25px
</style>