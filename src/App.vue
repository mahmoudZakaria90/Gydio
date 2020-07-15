<template>
  <div>
    <Header v-if="$route.name !== 'Uploader'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="sass">
</style>
