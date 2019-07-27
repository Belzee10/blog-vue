<script>
export default {
  name: 'BaseHeader',
  props: {
    type: {
      type: String,
      default: 'h1'
    }
  },
  render(createElement) {
    return createElement(this.type, this.$slots.default);
  }
};
</script>

<style lang="scss" scoped></style>
