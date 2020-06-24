<template>
  <div class="track col" @click="()=> callback(name)">
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
    img: String,
    callback: Function
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
    cursor: pointer
    &-name
      overflow: hidden
      text-overflow: ellipsis
      margin-top: 10px

</style>