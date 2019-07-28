<template>
  <span class="badge" :class="getBadgeType">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: {
    type: {
      type: String,
      default: '',
      validator(value) {
        return (
          ['', 'primary', 'secondary', 'success', 'danger', 'light', 'dark'].indexOf(value) !== -1
        );
      }
    }
  },
  computed: {
    getBadgeType() {
      return {
        [`badge-${this.type}`]: this.type
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
