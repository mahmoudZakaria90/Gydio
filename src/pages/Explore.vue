<template>
  <div>
    <div class="container">
      <h1 v-if="tracks">Explore</h1>
      <Message v-if="!tracks.length" :text="loadingState"></Message>
      <Message v-if="errorMsg" :text="errorMsg" :color="'red'" />
      <TrackWrapper :row="true" :basis="'col-4'">
        <Track
          v-for="({id, data}) in tracks"
          :key="id"
          :id="id"
          :name="data.name"
          :creationDate="data.creationDate"
          :downloadUrl="data.downloadUrl"
          :selected="id === selectedTrack.id"
          :user="data.user"
          :changeSelectedTrack="changeSelectedTrack"
        />
      </TrackWrapper>
    </div>
    <div class="container">
      <h1>External videos 'Youtube'</h1>
      <Message v-if="!externalTracks.length" :text="loadingState"></Message>
      <TrackWrapper :row="true" :basis="'col-6'">
        <ExternalTrack
          v-for="({id, data}) in externalTracks"
          :key="id"
          :creationDate="data.creationDate"
          :user="data.user"
          :videoURL="data.url"
        />
      </TrackWrapper>
    </div>
    <audio :src="selectedTrack.value" autoplay controls controlslist="nodownload"></audio>
  </div>
</template>

<script>
import firebase from "firebase/app";

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
      tracks: [],
      selectedTrack: {
        id: null,
        value: null
      },
      externalTracks: [],
      loadingState: null,
      errorMsg: null
    };
  },
  methods: {
    changeSelectedTrack(id, value) {
      this.selectedTrack = { id, value };
    }
  },
  async mounted() {
    this.loadingState = "Loading...";
    const { firestore } = firebase;
    const db = firestore();

    try {
      const { docs } = await db
        .collection("music")
        .orderBy("creationDate", "desc")
        .get();
      const tracks = docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }));
      this.tracks = tracks;
    } catch (error) {
      this.errorMsg = error.message;
    }

    try {
      //External videos
      const { docs } = await db
        .collection("youtube")
        .orderBy("creationDate", "desc")
        .get();
      const externalTracks = docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }));
      this.externalTracks = externalTracks;
    } catch (error) {
      this.errorMsg = error.message;
    }
    if (!this.tracks.length && !this.externalTracks.length) {
      this.loadingState = "No files to explore!";
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