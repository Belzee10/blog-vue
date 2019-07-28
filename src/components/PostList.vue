<template>
  <BaseRow>
    <BaseCol v-for="(post, index) in posts" :key="post.id" width="50" class="post-list">
      <PostItem :id="post.id" :index="index + 1" :title="post.title" :content="post.content" />
    </BaseCol>
  </BaseRow>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import PostItem from '@/components/PostItem.vue';

export default {
  name: 'PostList',
  components: {
    PostItem
  },
  computed: {
    ...mapGetters(['posts'])
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/_postList.scss';
</style>
