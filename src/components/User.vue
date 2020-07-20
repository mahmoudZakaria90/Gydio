<template>
  <div :is="user ? 'router-link' : 'div'" :to="user  ? `/profile/${user.uid}` : null">
    <img class="user-pic" :src="user ? user.photoUrl || userPlaceholder : userPlaceholder" alt />
    <span>{{user ? user.name : 'Anonymous'}}</span>
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