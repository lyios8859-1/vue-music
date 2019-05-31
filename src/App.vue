<template>
  <div id="app">
    <music-header />
    <music-tab />
    <router-view />
  </div>
</template>

<script>
import MusicHeader from "./components/m-header/music-header.vue";
import MusicTab from "./components/m-tab/music-tab.vue";

export default {
  name: "app",
  components: {
    MusicHeader,
    MusicTab
  }
};
</script>

<style lang="stylus">
@import './common/style/index.styl';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: $font-size-small-s;
}
</style>
