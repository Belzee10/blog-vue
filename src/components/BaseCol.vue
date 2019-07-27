<template>
  <BaseBox class="col" :class="getColWidth"></BaseBox>
</template>

<script>
export default {
  name: 'BaseCol',
  props: {
    width: {
      type: String,
      default: '',
      validator(value) {
        return (
          ['', '10', '20', '25', '33', '40', '50', '60', '67', '75', '80', '90'].indexOf(value) !==
          -1
        );
      }
    }
  },
  computed: {
    getColWidth() {
      return {
        [`col-${this.width}`]: this.width
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
