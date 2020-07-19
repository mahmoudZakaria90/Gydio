<template>
  <div>
    <div class="container">
      <h1>Explore</h1>
      <Message v-if="!tracks.items.length" :text="tracks.loadingState" />
      <Message v-if="tracks.errorMsg" :text="tracks.errorMsg" :color="'red'" />
      <TrackWrapper :row="true" :basis="'col-4'">
        <Track
          v-for="({id, data}) in tracks.items"
          :key="id"
          :id="id"
          :name="data.name"
          :creationDate="data.creationDate"
          :downloadUrl="data.downloadUrl"
          :selected="(id === tracks.selectedTrack.id) && tracks.selectedTrack.isPlayed"
          :user="data.user"
          :changeSelectedTrack="changeSelectedTrack"
        />
      </TrackWrapper>
    </div>
    <div class="container">
      <h1>External videos 'Youtube'</h1>
      <Message v-if="!youtubeTracks.items.length" :text="youtubeTracks.loadingState" />
      <Message v-if="youtubeTracks.errorMsg" :text="youtubeTracks.errorMsg" :color="'red'" />
      <TrackWrapper :row="true" :basis="'col-6'">
        <ExternalTrack
          v-for="({id, data}) in youtubeTracks.items"
          :key="id"
          :id="id"
          :creationDate="data.creationDate"
          :user="data.user"
          :videoId="data.videoId"
        />
      </TrackWrapper>
    </div>
    <audio
      preload="none"
      :src="tracks.selectedTrack.value"
      ref="audio"
      autoplay
      controls
      controlslist="nodownload"
    ></audio>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { eventBus } from "../utils/bus";

import TrackWrapper from "../components/Track/Wrapper";
import Track from "../components/Track/Track";
import ExternalTrack from "../components/Track/ExternalTrack";

import Message from "../components/Message";

export default {
  name: "Explore",
  components: {
    Track,
    TrackWrapper,
    ExternalTrack,
    Message
  },
  data() {
    return {
      tracks: {
        items: [],
        selectedTrack: {
          id: null,
          value: null,
          isPlayed: false
        },
        loadingState: "Loading...",
        errorMsg: null
      },
      youtubeTracks: {
        items: [],
        allYouTubePlayers: [],
        loadingState: "Loading...",
        errorMsg: null
      }
    };
  },
  methods: {
    changeSelectedTrack(id, value) {
      this.tracks.selectedTrack.id = id;
      this.tracks.selectedTrack.value = value;

      //Toggling
      if (this.tracks.selectedTrack.isPlayed) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
    }
  },
  async mounted() {
    eventBus.$on("pauseAudio", () => {
      if (this.tracks.selectedTrack.isPlayed) {
        this.$refs.audio.pause();
      }
    });

    eventBus.$on("allYoutubePlayers", data => {
      if (
        this.youtubeTracks.allYouTubePlayers.findIndex(
          player => player.id === data.id
        ) === -1
      ) {
        this.youtubeTracks.allYouTubePlayers.push(data);
      }
      if (this.youtubeTracks.allYouTubePlayers.length > 1) {
        this.youtubeTracks.allYouTubePlayers.forEach(YTPlayer => {
          if (YTPlayer.id !== data.id) {
            YTPlayer.player.pauseVideo();
          }
        });
      }
    });

    this.$refs.audio.onplay = () => {
      this.tracks.selectedTrack.isPlayed = true;
      eventBus.$emit("pauseYoutube");
    };
    this.$refs.audio.onpause = () => {
      this.tracks.selectedTrack.isPlayed = false;
    };

    const { firestore } = firebase;
    const db = firestore();

    //Tracks
    try {
      const { docs } = await db
        .collection("music")
        .orderBy("creationDate", "desc")
        .get();
      const tracks = docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }));
      this.tracks.items = tracks;
    } catch (error) {
      this.tracks.errorMsg = error.message;
    }

    //Youtube videos
    try {
      const { docs } = await db
        .collection("youtube")
        .orderBy("creationDate", "desc")
        .get();
      const youtubeTracks = docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }));
      this.youtubeTracks.items = youtubeTracks;
    } catch (error) {
      this.youtubeTracks.errorMsg = error.message;
    }
    if (!this.tracks.items.length || !this.youtubeTracks.items.length) {
      if (!this.tracks.items.length) {
        this.tracks.loadingState = "No files to explore!";
      }
      if (!this.youtubeTracks.items.length) {
        this.youtubeTracks.loadingState = "No videos to explore!";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
audio
  position: fixed
  bottom: 0
  width: 100%
</style>