<template>
  <div>
    <Header>
      <router-link to="/">Back</router-link>
    </Header>
    <div class="container">
      <h1>Explore</h1>
      <TrackWrapper :row="true" :basis="'col-4'">
        <Track v-for="track in tracks" :key="track" :name="track" :callback="changeSelectedTrack" />
      </TrackWrapper>
    </div>
    <audio :src="selectedTrack" autoplay controls></audio>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

import Header from "../components/Header";

import TrackWrapper from "../components/Track/Wrapper";
import Track from "../components/Track/Track";

export default {
  name: "Explore",
  components: {
    Header,
    Track,
    TrackWrapper
  },
  data() {
    return {
      tracks: null,
      selectedTrack: null
    };
  },
  methods: {
    async changeSelectedTrack(newTrack) {
        const storageRef = firebase.storage().ref("music/" + newTrack);
        this.selectedTrack = await storageRef.getDownloadURL();
    }
  },
  async mounted() {
    const storageRef = firebase.storage().ref("music");
    const { items } = await storageRef.listAll();
    this.tracks = items.map(item => item.name);
  }
};
</script>

<style lang="sass" scoped>
    audio
        position: fixed
        bottom: 0
        width: 100%
</style>