<template>
  <div>
    <div class="container">
      <p v-if="!tracks && !externalTracks">{{loadingState}}</p>
      <h1 v-if="tracks">Explore</h1>
      <TrackWrapper :row="true" :basis="'col-4'">
        <Track
          v-for="track in tracks"
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
      tracks: null,
      selectedTrack: null,
      externalTracks: null,
      loadingState: null
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
    this.loadingState = "Loading...";
    const { items } = await storageRef.listAll();

    this.tracks =
      items &&
      (await Promise.all(
        items.map(async ({ name }) => {
          const childRef = storageRef.child(name);
          const { timeCreated, generation } = await childRef.getMetadata();
          const formattedDateTime = timeCreated.split("T");
          const [date, time] = formattedDateTime;
          const finalTime = time.split(".")[0];

          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];

          const formattedDate = new Date(date);
          const getFullYear = formattedDate.getFullYear();
          const getDay = formattedDate.getDay();
          const getMonth = months[formattedDate.getMonth()];
          const finalDateTime = `${getMonth} ${getDay}, ${getFullYear}, ${finalTime}.`;

          return {
            name,
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
      Object.entries(databaseResult).map(([id, { videoURL }]) => {
        const trimmedURL = videoURL.replace("watch?v=", "embed/");
        return {
          id,
          videoURL: trimmedURL
        };
      });
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