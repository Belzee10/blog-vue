<template>
  <BaseBox class="post-filter">
    <BaseRow>
      <BaseCol width="33" class="input-search">
        <slot name="inputSearch"></slot>
      </BaseCol>
      <BaseCol width="33" class="sorting">
        <slot name="sorting"></slot>
      </BaseCol>
      <BaseCol width="33" class="info">
        <slot name="info"></slot>
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
