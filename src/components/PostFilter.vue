<template>
  <BaseBox class="post-filter">
    <BaseRow>
      <BaseCol width="33">
        <BaseInput placeholder="search for a blog" />
      </BaseCol>
      <BaseCol width="33">sorting</BaseCol>
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
