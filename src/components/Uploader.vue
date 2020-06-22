<template>
  <div>
    <div class="uploader">
      <div class="uploader-inner">
        <p>Upload your fav track.</p>
        <label class="uploader-placeholder" for="file_uploader">
          <span class="uploader-placeholder-btn">
            <font-awesome-icon icon="plus" />Choose file
          </span>
          <span>{{fileName}}</span>
        </label>
        <input id="file_uploader" type="file" hidden />
      </div>
      <div class="uploader-btn-wrap">
        <button class="uploader-btn">Upload!</button>
        <div class="progress">{{progress}}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      fileName: "Cities XL.mp3"
    };
  }
};
</script>

<style scoped lang="sass">
@import '../assets/placeholders'

.uploader
    &-inner
        p
            margin-bottom: 20px
    &-placeholder
        display: block
        margin-bottom: 30px
        &-btn
            margin-right: 30px
            @extend %button
    &-btn
        display: inline-block

        &-wrap
            display: flex

.progress
    line-height: 30px
    text-align: center
    border: 2px solid #ddd
    flex-basis: 300px
    margin-left: auto
</style>