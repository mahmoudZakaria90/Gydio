<template>
  <div class="track-date">
    <strong>Uploaded:</strong>
    {{ dateTimeFormatted }}
  </div>
</template>

<script>
export default {
  name: 'Date',
  props: {
    creationDate: Number,
  },
  computed: {
    dateTimeFormatted() {
      const date = new Date(this.creationDate);
      const dateFormatted = date.toDateString();
      const timeFormatted = date.toLocaleTimeString();
      return `${dateFormatted}, ${timeFormatted}`;
    },
  },
};
</script>

<style lang="sass" scoped>
.track
    &-date
        margin: 10px 0
        font-size: small
</style>
