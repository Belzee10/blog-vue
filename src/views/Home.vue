<template>
  <BaseRow>
    <BaseCol>
      <BaseHeader type="h3"> List of Posts</BaseHeader>
      <PostList />
    </BaseCol>
  </BaseRow>
</template>

<script>
import PostList from '@/components/PostList.vue';

export default {
  name: 'Home',
  components: {
    PostList
  }
};
</script>
