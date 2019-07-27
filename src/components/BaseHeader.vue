<script>
export default {
  name: 'BaseHeader',
  props: {
    type: {
      type: String,
      default: 'h1',
      // TODO maybe create a util func for validate this
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1;
      }
    }
  },
  render(createElement) {
    return createElement(this.type, this.$slots.default);
  }
};
</script>

<style lang="scss" scoped></style>
