<template>
  <div class="col">
    <div :id="`player${id}`" class="youtube-player"></div>
    <Date :creationDate="creationDate" />
    <User :user="user" />
  </div>
</template>

<script>
import YouTubeIframeLoader from 'youtube-iframe';

import Date from '../Date';
import User from '../User';

import { eventBus } from '../../utils/bus';

export default {
  name: 'ExternalTrack',
  components: {
    Date,
    User,
  },
  data() {
    return {
      isPlayed: false,
    };
  },
  props: {
    id: String,
    videoId: String,
    user: Object,
    creationDate: Number,
  },
  mounted() {
    let player;
    const onReady = () => {
      eventBus.$on('pauseYoutube', () => {
        if (this.isPlayed) {
          player.pauseVideo();
        }
      });
    };
    const onStateChange = ({ data }) => {
      if (data === 1) {
        this.isPlayed = true;
        eventBus.$emit('pauseAudio');
        eventBus.$emit('allYoutubePlayers', {
          id: this.id,
          player,
        });
      } else if (data === 2) {
        this.isPlayed = false;
      }
    };
    YouTubeIframeLoader.load(YT => {
      player = new YT.Player(`player${this.id}`, {
        height: '400',
        width: '100%',
        videoId: this.videoId,
        events: {
          onReady,
          onStateChange,
        },
      });
    });
  },
};
</script>

<style lang="sass" scoped>
iframe
  width: 100%
</style>
