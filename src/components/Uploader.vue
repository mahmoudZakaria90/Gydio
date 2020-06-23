<template>
  <div class="uploader">
    <h2 class="uploader-title">Upload your fav track.</h2>
    <div class="uploader-placeholder">
      <input
        id="file_uploader"
        @change="handleFile"
        type="file"
        :disabled="Boolean(externalLink)"
        hidden
      />
      <label for="file_uploader" class="uploader-placeholder-btn">
        Choose file
        <font-awesome-icon :icon="['fas', 'plus-circle']" />
      </label>
      <span>{{fileName}}</span>
      <p>Or</p>
    </div>
    <div class="external-link">
      <div class="external-link-inner">
        <label for>Copy/paste an external link e.g. youtube</label>
        <input type="text" v-model="externalLink" :disabled="blob" />
      </div>
    </div>
    <div v-if="isProgress" class="progress-outer">
      <Success :progressState="progressState" :isSuccess="isSuccess" />
      <div class="progress">
        <span>{{progress}}%</span>
        <span class="progress-inner" :style="{width: progress + '%'}"></span>
      </div>
      <p v-html="(bytesTransferred / 1000000) + '/' + (totalBytes / 1000000) + ' MB'"></p>
    </div>

    <div class="uploader-btn-wrap">
      <button
        :disabled="!blob && !externalLink"
        class="uploader-btn"
        v-on="{click : blob ? upload_storage : upload_database}"
      >
        Upload
        <font-awesome-icon :icon="['fas', 'arrow-circle-up']" />
      </button>
      
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

import Success from "./Success";

export default {
  components: {
    Success
  },
  data() {
    return {
      blob: null,
      externalLink: "",
      progress: 0,
      bytesTransferred: 0,
      totalBytes: 0,
      progressState: "",
      fileName: "No file has been chosen.",
      isProgress: false,
      isSuccess: false
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
      this.blob = file;
      this.fileName = name;
    },
    upload_storage() {
      const { name } = this.blob;
      const storageRef = firebase.storage().ref("music/" + name);
      const task = storageRef.put(this.blob);
      task.on(
        "state_changed",
        snapshot => {
          const { bytesTransferred, totalBytes, state } = snapshot;
          if (state === "running") {
            const progress = Math.floor((bytesTransferred / totalBytes) * 100);
            this.progressState = "Uploading to Firebase storage...";
            this.progress = progress;
            this.bytesTransferred = bytesTransferred;
            this.totalBytes = totalBytes;
            this.isProgress = true;
          }
        },
        function error() {},
        () => {
          this.progressState = `Uploading is done successfully`;
          this.isSuccess = true;

          //reset
          this.blob = null;
          this.fileName = "";
        }
      );
    },
    async upload_database() {
      const videoId = this.externalLink.split("?v=")[1].split("&list=");
      await firebase
        .database()
        .ref("music/" + videoId[0])
        .set({
          videoURL: this.externalLink
        });
      this.progressState = `Video url uploaded successfully!`;
      this.isSuccess = true;
        
    }
  }
};
</script>

<style scoped lang="sass">
@import '../assets/sass/placeholders'

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
</style>