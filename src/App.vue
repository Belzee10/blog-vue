<template>
  <div id="app">
    <BaseLayout>
      <template v-slot:header>
        <TheNavbar></TheNavbar>
      </template>
      <BaseBox class="container">
        <router-view />
      </BaseBox>
      <template v-slot:footer>
        <TheFooter></TheFooter>
      </template>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    BaseLayout,
    TheNavbar,
    TheFooter
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
