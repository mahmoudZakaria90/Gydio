<template>
  <div>
    <Header>
       <router-link to="/explore">Explore</router-link>
    </Header>
    <div class="uploader container">
      <div class="intro">
        <h1>Gydio</h1>
        <p>Your favorite place for Music, themes and soundtracks of Gaming.</p>
      </div>
      <h2 class="uploader-title">Upload your fav track.</h2>
      <div class="uploader-placeholder">
        <input
          id="file_uploader"
          @change="handleFile"
          type="file"
          :disabled="Boolean(database.externalLink) || storage.isProgress"
          hidden
        />
        <label for="file_uploader" class="uploader-placeholder-btn">
          Choose file
          <font-awesome-icon :icon="['fas', 'plus-circle']" />
        </label>
        <span>{{storage.fileName}}</span>
        <p>Or</p>
      </div>
      <div class="external-link">
        <div class="external-link-inner">
          <label for>Copy/paste an external link e.g. youtube</label>
          <input type="text" v-model="database.externalLink" :disabled="storage.blob" @change="validateURL" />
          <font-awesome-icon v-if="database.isValid" :icon="['fas', 'check-circle']" :style="{color: 'lightgreen'}"/>
          <p class="error" v-if="database.isError">{{database.errorMsg}}</p>
        </div>
      </div>
      <div v-if="storage.isProgress" class="progress-outer">
        <ProgressState :progressState="storage.progressState" :isSuccess="storage.isSuccess" />
        <div class="progress">
          <span>{{storage.progress}}%</span>
          <span class="progress-inner" :style="{width: storage.progress + '%'}"></span>
        </div>
        <p v-html="(storage.bytesTransferred / 1000000) + '/' + (storage.totalBytes / 1000000) + ' MB'"></p>
      </div>

      <div class="uploader-btn-wrap">
        <button
          :disabled="(!storage.blob && !database.externalLink )|| database.isError || storage.isProgress"
          class="uploader-btn"
          v-on="{click : storage.blob ? upload_storage : upload_database}"
        >
          Upload
          <font-awesome-icon :icon="['fas', 'arrow-circle-up']" />
        </button>
        <ProgressState :progressState="database.progressState" :isSuccess="database.isSuccess" v-if="database.isSuccess" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

import ProgressState from "../components/ProgressState";
import Header from "../components/Header";

export default {
  name: 'Uploader',
  components: {
    ProgressState,
    Header
  },
  data() {
    return {
      storage: {
        blob: null,
        progress: 0,
        bytesTransferred: 0,
        totalBytes: 0,
        progressState: "",
        fileName: "No file has been chosen.",
        isProgress: false,
        isSuccess: false
      },
      database: {
        externalLink: "",
        progressState: "",
        isSuccess: false,
        isError: false,
        isValid: false,
        errorMsg: 'You need to input a vaild youtube video URL.'
      }
    };
  },
  methods: {
    handleFile({ target }) {
      let file;
      if (target.files.length) {
        file = target.files[0];
      } else {
        return;
      }
      const { name } = file;
      this.storage.blob = file;
      this.storage.fileName = name;
    },
    upload_storage() {
      //Reset Database states
      this.database.progressState = '';
      this.database.isSuccess = false;

      const { name } = this.storage.blob;
      const storageRef = firebase.storage().ref("music/" + name);
      const task = storageRef.put(this.storage.blob);
      task.on(
        "state_changed",
        snapshot => {
          const { bytesTransferred, totalBytes, state } = snapshot;
          if (state === "running") {
            const progress = Math.floor((bytesTransferred / totalBytes) * 100);
            this.storage.progressState = "Uploading to Firebase storage...";
            this.storage.progress = progress;
            this.storage.bytesTransferred = bytesTransferred;
            this.storage.totalBytes = totalBytes;
            this.storage.isProgress = true;
          }
        },
        function error() {},
        () => {
          this.storage.progressState = `Uploading is done successfully`;
          this.storage.isSuccess = true;

          //Reset
          this.storage.blob = null;
          this.storage.isProgress = false;
          this.storage.fileName = "";
        }
      );
    },
    async upload_database() {
      //Reset Storage states
      this.storage.isProgress = false;
      this.storage.progressState = '';
      this.storage.isSuccess = false;

      const videoId = this.database.externalLink.split("?v=")[1].split("&list=");
      await firebase
        .database()
        .ref("music/" + videoId[0])
        .set({
          videoURL: this.database.externalLink
        });
      this.database.progressState = `Video url uploaded successfully!`;
      this.database.isSuccess = true;

      //Reset 
      this.database.isError = false;
      this.database.isValid = false;
      this.database.externalLink = ''

    },
    validateURL(){
      if(!/https:\/\/www.youtube.com\/watch\?v=\w+/g.test(this.database.externalLink)){
        if (!this.database.externalLink){
          this.database.isError = false;
          return;
        }
        this.database.isError = true;
        this.database.isValid = false;
        return;
      }  
      this.database.isError = false;
      this.database.isValid = true;
    }
  }
}
</script>

<style scoped lang="sass">
@import '../assets/sass/placeholders'

.intro
  padding-top: 30px
  margin-bottom: 50px

.uploader
    &-title
      margin-bottom: 10px
    &-placeholder
        position: relative
        text-align: center
        & > p
          margin: 20px 0
          font-size: 18px
          font-weight: 600
          text-align: center
        &-btn
            @extend %button
    &-btn
        &-wrap
            text-align: center

.external
  &-link
    text-align: center
    margin-bottom: 30px
    label
      display: block
      margin-bottom: 10px
    input
      width: 300px
      margin-right: 10px
    &-inner
      text-align: left
      display: inline-block

.progress
    position: relative
    line-height: 30px
    border: 1px solid #ddd
    margin-bottom: 10px
    text-align: center
    &-outer
        width: 75%
        margin: 0 auto 30px
    &-inner
        position: absolute
        top: 0
        left: 0
        bottom: 0
        background-color: $green
        z-index: -1
#file_uploader
  &:disabled + label
    background-color: $disabled
    cursor: not-allowed

.error
  color: red
  margin-top: 10px
</style>