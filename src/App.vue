<template>
  <div id="app">
    <TheNavbar />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
