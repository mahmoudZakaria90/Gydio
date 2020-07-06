<template>
  <div class="track col" @click="()=> callback(name)">
    <div class="track-placeholder">
      <img :src="img || placeholder" alt />
    </div>
    <div class="track-name" :title="name">{{name}}</div>
    <small>
      <strong>Uploaded:</strong>
      {{dateUploaded}}
    </small>
  </div>
</template>

<script>
import placeholder from "../../assets/images/play-button.png";
export default {
  name: "Track",
  props: {
    name: String,
    dateUploaded: String,
    img: String,
    callback: Function
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