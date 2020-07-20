<template>
  <div>
    <Header>
      <template v-slot:nav-left>
        <router-link to="/explore">Explore</router-link>
      </template>
    </Header>
    <div class="uploader container">
      <div class="intro">
        <h1>Gydio</h1>
        <p>
          Your favorite place for
          <strong>Gaming/Cartoon</strong> related Music, Themes and Soundtracks.
        </p>
      </div>
      <h2 class="uploader-title">Upload your fav track.</h2>
      <div class="uploader-placeholder">
        <input
          id="file_uploader"
          @change="handleFile"
          type="file"
          :disabled="youtube.url || track.isProgress"
          hidden
          :value="null"
        />
        <label for="file_uploader" class="uploader-placeholder-btn">
          Choose file
          <font-awesome-icon :icon="['fas', 'plus-circle']" />
        </label>
        <span>{{ track.fileName }}</span>
        <font-awesome-icon
          class="cursor-pointer"
          @click="removeBlob"
          v-if="track.blob && track.fileName && !track.isProgress"
          :icon="['far', 'times-circle']"
        />
        <p>Or</p>
      </div>
      <div class="external-link">
        <div class="external-link-inner">
          <TextInput
            :label="'Copy/paste an external link e.g. youtube'"
            :isDisabled="Boolean(track.blob)"
            :isValid="youtube.isValid"
            :hasError="youtube.isError"
            :errorMsg="youtube.validationErrorMsg"
            :handleOnChange="validateExternalURL"
            v-model="youtube.url"
          />
        </div>
      </div>
      <div v-if="track.isProgress" class="progress-outer">
        <Message
          :text="track.progressState"
          :icon="track.isSuccess ? ['fas', 'check-circle'] : null"
          :iconStyle="{color: 'lightgreen'}"
          :color="track.isCancelled ? 'red' : null"
        />
        <div class="progress">
          <span>{{ track.progress }}%</span>
          <span class="progress-inner" :style="{ width: track.progress + '%' }"></span>
          <font-awesome-icon
            class="progress-cancel cursor-pointer"
            ref="cancelUploadEl"
            :icon="['far', 'times-circle']"
          />
        </div>
        <strong>
          {{ track.bytesTransferred / 1000000 +
          ' / ' +
          track.totalBytes / 1000000 +
          ' MB'}}
        </strong>
      </div>

      <div class="uploader-btn-wrap">
        <button
          :disabled="
            (!track.blob && !youtube.url) ||
              youtube.isError ||
              track.isProgress
          "
          v-on="{ click: track.blob ? upload_track : upload_youtube }"
        >
          Upload
          <font-awesome-icon :icon="['fas', 'arrow-circle-up']" />
        </button>
        <Message
          :text="youtube.successMsg"
          :icon="youtube.isSuccess ? ['fas', 'check-circle'] : null"
          :iconStyle="{color: 'lightgreen'}"
          v-if="youtube.isSuccess"
        />
        <Message v-if="track.uploadErrorMsg" :color="'red'" :text="track.uploadErrorMsg" />
        <Message v-if="youtube.uploadErrorMsg" :color="'red'" :text="youtube.uploadErrorMsg" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

import Message from "../components/Message";
import TextInput from "../components/TextInput";

import MusicModel from "../models/Music";
import UserModel from "../models/User";
import YoutubeModel from "../models/Youtube";

import { eventBus } from "../utils/bus";

export default {
  name: "Uploader",
  components: {
    Message,
    TextInput
  },
  data() {
    return {
      track: {
        blob: null,
        progress: 0,
        bytesTransferred: 0,
        progressState: null,
        totalBytes: 0,
        fileName: null,
        isProgress: false,
        isSuccess: false,
        uploadErrorMsg: null
      },
      youtube: {
        url: null,
        isSuccess: false,
        successMsg: `Video url uploaded successfully!`,
        isError: false,
        isValid: false,
        validationErrorMsg: "You need to input a vaild youtube video URL.",
        uploadErrorMsg: null,
        pattern: /^https:\/\/www.youtube.com\/watch\?v=\w+(-)?\w+/g
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
      this.track.blob = file;
      this.track.fileName = name;
    },
    upload_track() {
      const { name, size } = this.track.blob;

      const { auth, storage, firestore } = firebase;

      const musicDb = firestore();
      const musicCollection = musicDb.collection("music");

      const trackRef = storage().ref("music/" + name);
      const task = trackRef.put(this.track.blob);

      //For cancelling the uploading
      //Not the most recommended way
      this.cancelUpload = () => {
        if (this.$refs.cancelUploadEl) {
          this.$refs.cancelUploadEl.addEventListener("click", () =>
            task.cancel()
          );
        }
      };

      task.on(
        "state_changed",
        snapshot => {
          const { bytesTransferred, totalBytes, state } = snapshot;
          if (state === "running") {
            this.track.progressState = `Uploading ${name} to Firebase Storage...`;
            const progress = Math.floor((bytesTransferred / totalBytes) * 100);
            this.track.progress = progress;
            this.track.bytesTransferred = bytesTransferred;
            this.track.totalBytes = totalBytes;
            this.track.isProgress = true;
          }
        },
        err => {
          this.track.progressState = err.message;
          this.track.isCancelled = true;
          //Reset
          this.resetState(
            "track",
            [
              { key: "blob", value: null },
              { key: "fileName", value: null },
              { key: "isProgress", value: false },
              { key: "isCancelled", value: false }
            ],
            2000
          );
        },
        async () => {
          const { currentUser } = auth();
          if (currentUser) {
            var {
              uid,
              displayName,
              photoURL,
              email,
              metadata: { lastSignInTime }
            } = currentUser;
          }
          const userName = displayName ? displayName : email;
          try {
            const downloadUrl = await trackRef.getDownloadURL();
            await musicCollection.add(
              MusicModel(
                name,
                size,
                downloadUrl,
                currentUser &&
                  UserModel(uid, userName, photoURL, email, lastSignInTime)
              )
            );
          } catch (error) {
            this.track.uploadErrorMsg = error.message;
          }

          this.track.isSuccess = true;
          this.track.progressState = `Uploading is done successfully.`;

          //Reset
          this.resetState(
            "track",
            [
              { key: "blob", value: null },
              { key: "fileName", value: null },
              { key: "isProgress", value: false },
              { key: "isSuccess", value: false }
            ],
            2000
          );
        }
      );
    },
    async upload_youtube() {
      const { auth, firestore } = firebase;
      const { currentUser } = auth();
      if (currentUser) {
        var {
          uid,
          displayName,
          email,
          photoURL,
          metadata: { lastSignInTime }
        } = currentUser;
      }
      const userName = displayName ? displayName : email;
      const youtubeDb = firestore();
      const youtubeCollection = youtubeDb.collection("youtube");
      const [videoURL] = this.youtube.url.match(this.youtube.pattern);
      let [, videoId] = videoURL.split("watch?v=");

      try {
        await youtubeCollection.add(
          YoutubeModel(
            videoId,
            currentUser &&
              UserModel(uid, userName, photoURL, email, lastSignInTime)
          )
        );
      } catch (error) {
        this.youtube.uploadErrorMsg = error.message;
      }
      this.youtube.isSuccess = true;

      //Reset
      this.resetState(
        "youtube",
        [
          { key: "isError", value: false },
          { key: "isValid", value: false },
          { key: "isSuccess", value: false },
          { key: "url", value: "" }
        ],
        2000,
        () => eventBus.$emit("resetInput", this.youtube.url)
      );
    },
    validateExternalURL() {
      if (!this.youtube.pattern.test(this.youtube.url)) {
        if (!this.youtube.url) {
          this.youtube.isError = false;
          return;
        }
        this.youtube.isError = true;
        this.youtube.isValid = false;
        return;
      }
      this.youtube.isError = false;
      this.youtube.isValid = true;
    },
    resetState(state, options, timeout, cb) {
      setTimeout(() => {
        options.forEach(option => {
          this[state][option.key] = option.value;
        });
        if (cb) cb();
      }, timeout);
    },
    removeBlob() {
      this.track.blob = null;
      this.track.fileName = null;
    },
    cancelUpload() {}
  },
  updated() {
    this.cancelUpload();
  }
};
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
      font-size: 14px
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
  &-cancel
    position: absolute
    right: -40px
    top: 0px
    color: red
    font-size: 25px
#file_uploader
  &:disabled + label
    background-color: $disabled
    cursor: not-allowed

.error
  color: red
  margin-top: 10px
</style>
