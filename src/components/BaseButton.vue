<template>
  <button :class="[isOutline ? 'btn-outline' : 'btn', getBtnColor]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return (
          ['', 'primary', 'secondary', 'success', 'danger', 'light', 'dark'].indexOf(value) !== -1
        );
      }
    },
    isOutline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getBtnColor() {
      const buttonTypeClass = this.isOutline ? 'btn-outline' : 'btn';
      return {
        [`${buttonTypeClass}-${this.color}`]: this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
