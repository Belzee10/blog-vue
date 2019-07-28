<template>
  <BaseBox class="post-filter">
    <BaseRow>
      <BaseCol width="33">
        <slot name="inputSearch"></slot>
      </BaseCol>
      <BaseCol width="33">
        <slot name="sorting"></slot>
      </BaseCol>
    </BaseRow>
  </BaseBox>
</template>

<script>
export default {
  name: 'PostFilter'
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/_postFilter.scss';
</style>
