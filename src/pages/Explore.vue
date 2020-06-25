<template>
  <div>
    <Header>
      <template v-slot:nav-left>
        <router-link to="/">Back</router-link>
      </template>
    </Header>
    <div class="container">
      <p v-if="!tracks && !externalTracks">No tracks to show please upload some!</p>
      <h1 v-if="tracks">Explore</h1>
      <TrackWrapper :row="true" :basis="'col-4'">
        <Track v-for="track in tracks" :key="track" :name="track" :callback="changeSelectedTrack" />
      </TrackWrapper>
    </div>
    <div class="container">
      <h1 v-if="externalTracks">External videos 'Youtube'</h1>
      <TrackWrapper :row="true" :basis="'col-6'">
        <ExternalTrack v-for="track in externalTracks" :key="track.id" :videoURL="track.videoURL" />
      </TrackWrapper>
    </div>
    <audio :src="selectedTrack" autoplay controls controlslist="nodownload"></audio>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

import Header from "../components/Header";

import TrackWrapper from "../components/Track/Wrapper";
import Track from "../components/Track/Track";
import ExternalTrack from "../components/Track/ExternalTrack";

export default {
  name: "Explore",
  components: {
    Header,
    Track,
    TrackWrapper,
    ExternalTrack
  },
  data() {
    return {
      tracks: null,
      selectedTrack: null,
      externalTracks: null
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
    this.tracks = items && items.map(item => item.name);

    //External videos
    const databaseFetch = await fetch(
      "https://musicstream-cb9d3.firebaseio.com/music.json"
    );
    const databaseResult = await databaseFetch.json();
    this.externalTracks =
      databaseResult &&
      Object.entries(databaseResult).map(([id, { videoURL }]) => {
        const trimmedURL = videoURL.replace("watch?v=", "embed/");
        return {
          id,
          videoURL: trimmedURL
        };
      });
  }
};
</script>

<style lang="sass" scoped>
audio
  position: fixed
  bottom: 0
  width: 100%
</style>