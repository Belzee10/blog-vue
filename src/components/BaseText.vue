<script>
export default {
  name: 'BaseText',
  props: {
    tag: {
      type: String,
      default: 'span',
      validator(value) {
        return ['span', 'p', 'label'].indexOf(value) !== -1;
      }
    },
    htmlFor: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    }
  },
  render(createElement) {
    return createElement(this.tag, this.$slots.default);
  }
};
</script>

<style lang="scss" scoped></style>
