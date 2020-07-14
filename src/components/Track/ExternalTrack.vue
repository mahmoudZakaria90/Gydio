<template>
  <div class="col">
    <iframe
      height="315"
      same-origin
      :src="videoURL"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <Date :creationDate="creationDate" />
    <User :user="user" />
  </div>
</template>

<script>
import Date from "../Date";
import User from "../User";

export default {
  name: "ExternalTrack",
  components: {
    Date,
    User
  },
  props: {
    videoURL: String,
    user: Object,
    creationDate: Number
  }
};
</script>

<style lang="sass" scoped>
iframe
  width: 100%
</style>