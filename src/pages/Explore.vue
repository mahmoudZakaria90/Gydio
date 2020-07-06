<template>
  <div>
    <div class="container">
      <h1 v-if="tracks">Explore</h1>
      <p v-if="!tracks.length && !externalTracks">{{loadingState}}</p>
      <TrackWrapper :row="true" :basis="'col-4'">
        <Track
          v-for="track in sortedTracks"
          :key="track.generation"
          :name="track.name"
          :dateUploaded="track.dateUploaded"
          :callback="changeSelectedTrack"
        />
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

import TrackWrapper from "../components/Track/Wrapper";
import Track from "../components/Track/Track";
import ExternalTrack from "../components/Track/ExternalTrack";

export default {
  name: "Explore",
  components: {
    Track,
    TrackWrapper,
    ExternalTrack
  },
  data() {
    return {
      tracks: [],
      selectedTrack: null,
      externalTracks: null,
      loadingState: null
    };
  },
  computed: {
    sortedTracks() {
      return this.tracks.slice(0).sort((a, b) => {
        const aObj = a;
        const bObj = b;
        const { originalDate: aOriginalDate } = aObj;
        const { originalDate: bOriginalDate } = bObj;

        return (
          new Date(bOriginalDate).getTime() - new Date(aOriginalDate).getTime()
        );
      });
    }
  },

  methods: {
    async changeSelectedTrack(newTrack) {
      const storageRef = firebase.storage().ref("music/" + newTrack);
      this.selectedTrack = await storageRef.getDownloadURL();
    }
  },
  async mounted() {
    const storageRef = firebase.storage().ref("music");
    this.loadingState = "Loading...";
    const { items } = await storageRef.listAll();

    this.tracks =
      items &&
      (await Promise.all(
        items.map(async ({ name }) => {
          const childRef = storageRef.child(name);
          const { timeCreated, generation } = await childRef.getMetadata();

          const formattedDate = new Date(timeCreated).toDateString();
          const formattedTime = new Date(timeCreated)
            .toTimeString()
            .split(" GMT")[0];

          const finalDateTime = `${formattedDate}, ${formattedTime}.`;

          return {
            name,
            originalDate: timeCreated,
            dateUploaded: finalDateTime,
            generation
          };
        })
      ));

    //External videos
    const databaseFetch = await fetch(
      "https://musicstream-cb9d3.firebaseio.com/music.json"
    );
    const databaseResult = await databaseFetch.json();
    this.externalTracks =
      databaseResult &&
      Object.entries(databaseResult)
        .map(([id, { videoURL, uploaded }]) => {
          const trimmedURL = videoURL.replace("watch?v=", "embed/");
          return {
            id,
            videoURL: trimmedURL,
            uploaded
          };
        })
        .sort((a, b) => b.uploaded - a.uploaded);
    if (!this.tracks.length && !this.externalTracks) {
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