<template>
  <div class="track col">
    <div
      class="track-placeholder cursor-pointer"
      :style="{ 'background-image': img }"
      @click="() => changeSelectedTrack(id, downloadUrl)"
    >
      <font-awesome-icon
        :icon="selected ? ['far', 'pause-circle'] : ['far', 'play-circle']"
        :style="{ 'font-size': '75px' }"
      />
    </div>
    <div class="track-name" :title="name">{{ name }}</div>
    <Date :creationDate="creationDate" />
    <User :user="user" />
  </div>
</template>

<script>
import Date from '../Date';
import User from '../User';

export default {
  name: 'Track',
  components: {
    Date,
    User,
  },
  props: {
    id: String,
    name: String,
    downloadUrl: String,
    creationDate: Number,
    img: String,
    user: Object,
    selected: Boolean,
    changeSelectedTrack: Function,
  },
};
</script>

<style scoped lang="sass">
.track
  &-placeholder
    display: flex
    justify-content: center
    align-items: center
    height: 210px
    background-color: #cacaca
    background-repeat: no-repeat
    background-position: center
    background-size: cover
  &-name
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    margin-top: 10px
</style>
