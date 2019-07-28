<template>
  <BaseBox>
    <BaseRow>
      <BaseCol>
        <PostFilter />
      </BaseCol>
    </BaseRow>
    <BaseRow>
      <BaseCol>
        <BaseHeader type="h3"> List of Posts</BaseHeader>
        <PostList />
      </BaseCol>
    </BaseRow>
  </BaseBox>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostFilter from '@/components/PostFilter.vue';

export default {
  name: 'Home',
  components: {
    PostList,
    PostFilter
  }
};
</script>
