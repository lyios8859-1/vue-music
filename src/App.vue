<template>
  <div id="app">
    <music-header />
    <music-title />
    <router-view />
  </div>
</template>

<script>
import MusicHeader from "./components/m-header/music-header.vue";
import MusicTitle from "./components/m-title/music-title.vue";

export default {
  name: "app",
  components: {
    MusicHeader,
    MusicTitle
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
