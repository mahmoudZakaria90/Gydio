<template>
  <div class="col">
    <div :id="`player${id}`"></div>
    <Date :creationDate="creationDate" />
    <User :user="user" />
  </div>
</template>

<script>
import YouTubeIframeLoader from "youtube-iframe";

import Date from "../Date";
import User from "../User";

import { eventBus } from "../../utils/bus";

export default {
  name: "ExternalTrack",
  components: {
    Date,
    User
  },
  props: {
    id: String,
    videoId: String,
    user: Object,
    creationDate: Number
  },
  mounted() {
    let player;
    const onReady = () => {
      eventBus.$on("pauseYoutube", () => {
        player.pauseVideo();
      });
    };
    const onStateChange = ({ data }) => {
      if (data === 1) {
        eventBus.$emit("pauseAudio");
      }
    };
    YouTubeIframeLoader.load(YT => {
      player = new YT.Player(`player${this.id}`, {
        height: "400",
        width: "100%",
        videoId: this.videoId,
        events: {
          onReady,
          onStateChange
        }
      });
    });
  }
};
</script>

<style lang="sass" scoped>
iframe
  width: 100%
</style>