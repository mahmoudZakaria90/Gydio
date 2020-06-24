<template>
  <div class="track col">
    <div class="track-placeholder">
      <img :src="img || placeholder" alt />
    </div>
    <div class="track-name" :title="name">{{name}}</div>
  </div>
</template>

<script>
import placeholder from '../../assets/images/Placeholder.svg';
export default {
  props: {
    name: String,
    img: String
  },
  data(){
      return {
          placeholder
      }
  }
};
</script>

<style scoped lang="sass">
  .track
    margin-bottom: 30px
    &-name
      overflow: hidden
      text-overflow: ellipsis
      margin-top: 10px

</style>