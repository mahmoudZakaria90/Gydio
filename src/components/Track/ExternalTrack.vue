<template>
  <iframe class="col" height="315" same-origin :src="videoURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
    props: {
        videoURL: String
    }
}
</script>

<style>

</style>