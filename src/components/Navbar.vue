<template>
  <nav class="navbar">
    <a class="navbar-brand" href="#">Post Vue</a>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      quote: 'mkjbjjmbnknkjn'
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/_navbar.scss';
</style>
