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
    for: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      {
        attrs: {
          id: this.id,
          htmlFor: this.for
        }
      },
      this.$slots.default
    );
  }
};
</script>

<style lang="scss" scoped></style>
