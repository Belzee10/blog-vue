<template>
  <BaseBox class="row" :class="{ 'row-wrap': wrap, 'row-no-padding': noPadding }">
    <slot></slot>
  </BaseBox>
</template>

<script>
export default {
  name: 'BaseRow',
  props: {
    wrap: {
      type: Boolean,
      default: true
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
