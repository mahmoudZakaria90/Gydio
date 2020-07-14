<template>
  <div class="track col" @click="()=> changeSelectedTrack(downloadUrl)">
    <div class="track-placeholder">
      <img :src="img || placeholder" alt />
    </div>
    <div class="track-name" :title="name">{{name}}</div>
    <Date :creationDate="creationDate" />
    <User :user="user" />
  </div>
</template>

<script>
import placeholder from "../../assets/images/play-button.png";

import Date from "../Date";
import User from "../User";

export default {
  name: "Track",
  components: {
    Date,
    User
  },
  props: {
    name: String,
    downloadUrl: String,
    creationDate: Number,
    img: String,
    user: Object,
    changeSelectedTrack: Function
  },
  data() {
    return {
      placeholder
    };
  }
};
</script>

<style scoped lang="sass">
.track
  cursor: pointer
  &-name
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    margin-top: 10px
</style>