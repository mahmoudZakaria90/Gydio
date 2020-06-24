<template>
  <div>
    <Header>
        <router-link to="/">Back</router-link>
    </Header>
    <div class="container">
      <h1>Explore</h1>
      <TrackWrapper :row="true" :basis="'col-4'">
        <Track v-for="track in tracks" :key="track" :name="track" />
      </TrackWrapper> 
      <!-- <audio src="gs://musicstream-cb9d3.appspot.com/music/02 Wii Shop (Instrumental).mp3" autoplay controls></audio> -->
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

import Header from "../components/Header";

import TrackWrapper from '../components/Track/Wrapper';
import Track from '../components/Track/Track';

export default {
  name: 'Explore',
  components: {
    Header,
    Track,
    TrackWrapper
  },
  data(){
      return {
          tracks: null
      }
  },
 async mounted(){
      const storageRef = firebase.storage().ref('music');
      const {items} = await storageRef.listAll();
      this.tracks = items.map(item => item.name);
  }
};
</script>

<style>
</style>