<template>
  <div>
    <div class="uploader">
      <div class="uploader-inner">
        <p>Upload your fav track.</p>
        <div class="uploader-placeholder">
          <div class="uploader-placeholder-inner">
            <label for="file_uploader" class="uploader-placeholder-btn">
              Choose file
              <font-awesome-icon :icon="['fas', 'plus-circle']" />
            </label>
            <span>{{fileName}}</span>
          </div>
          <div v-if="isProgress" class="progress-outer">
            <div class="progress">
              <span>{{progress}}%</span>
              <span class="progress-inner" :style="{width: progress + '%'}"></span>
            </div>
            <p v-html="(bytesTransferred / 1000000) + '/' + (totalBytes / 1000000) + ' MB'"></p>
          </div>
        </div>
        <input id="file_uploader" @change="handleFileName" type="file" hidden />
      </div>
      <div class="uploader-btn-wrap">
        <button :disabled="isDisabled" class="uploader-btn" @click="upload">
          Upload
          <font-awesome-icon :icon="['fas', 'arrow-circle-up']" />
        </button>
        <p>
          {{progressState}}
          <font-awesome-icon
            :icon="['fas', 'check-circle']"
            :style="{ color: 'lightgreen' }"
            v-if="isSuccess"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      blob: null,
      progress: 0,
      bytesTransferred: 0,
      totalBytes: 0,
      progressState: "",
      fileName: "No file has been chosen.",
      isDisabled: true,
      isProgress: false,
      isSuccess: false
    };
  },
  methods: {
    handleFileName({ target }) {
      let file;
      if (target.files.length) {
        file = target.files[0];
      } else {
        return;
      }
      const { name } = file;
      this.blob = file;
      this.fileName = name;
      if (name) {
        this.isDisabled = false;
      }
    },
    upload() {
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
          this.isDisabled = true;
        }
      );
    }
  }
};
</script>

<style scoped lang="sass">
@import '../assets/sass/placeholders'

.uploader
    &-inner
        p
            margin-bottom: 20px
    &-placeholder
        display: flex
        margin-bottom: 30px
        &-btn
            @extend %button
    &-btn
        &-wrap
            text-align: center

.progress
    position: relative
    line-height: 30px
    border: 1px solid #ddd
    margin-bottom: 10px
    &-outer
        text-align: center
        flex-basis: 300px
        margin-left: auto
    &-inner
        position: absolute
        top: 0
        left: 0
        bottom: 0
        background-color: $green
        z-index: -1
</style>