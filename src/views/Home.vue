<template>
  <BaseRow>
    <BaseCol>
      <BaseHeader type="h3"> List of Posts</BaseHeader>
      <PostsList />
    </BaseCol>
  </BaseRow>
</template>

<script>
import PostsList from '../components/PostsList.vue';

export default {
  name: 'Home',
  components: {
    PostsList
  }
};
</script>
