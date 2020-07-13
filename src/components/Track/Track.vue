<template>
  <div class="track col" @click="()=> changeSelectedTrack(downloadUrl)">
    <div class="track-placeholder">
      <img :src="img || placeholder" alt />
    </div>
    <div class="track-name" :title="name">{{name}}</div>
    <div class="track-date">
      <strong>Uploaded:</strong>
      {{dateTimeFormatted}}
    </div>
    <div v-if="user">
      <img class="user-pic" :src="user.photoUrl" alt />
      <span>{{user.name}}</span>
    </div>
    <div v-else>
      <img class="user-pic" :src="userPlaceholder" alt />
      <span>Anonymous</span>
    </div>
  </div>
</template>

<script>
import placeholder from "../../assets/images/play-button.png";
import userPlaceholder from "../../assets/images/user-placeholder.jpg";
export default {
  name: "Track",
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
      placeholder,
      userPlaceholder
    };
  },
  computed: {
    dateTimeFormatted() {
      const date = new Date(this.creationDate);
      const dateFormatted = date.toDateString();
      const timeFormatted = date.toLocaleTimeString();
      return `${dateFormatted}, ${timeFormatted}`;
    }
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
  &-date
    margin: 10px 0
    font-size: small

.user
  &-pic
    display: inline-block
    margin-right: 10px
    border-radius: 50%
    width: 25px
</style>