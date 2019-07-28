<template>
  <BaseBox>
    <BaseRow>
      <BaseCol>
        <PostFilter>
          <template v-slot:inputSearch>
            <BaseText tag="label" for="search">Search</BaseText>
            <BaseInput id="search" v-model="searchText" placeholder="search for a blog" />
          </template>
          <template v-slot:sorting>
            sorting
          </template>
        </PostFilter>
      </BaseCol>
    </BaseRow>
    <BaseRow>
      <BaseCol v-for="(post, index) in posts" :key="post.id" width="50" class="post-list">
        <PostItem :id="post.id" :index="index + 1" :title="post.title" :content="post.content" />
      </BaseCol>
    </BaseRow>
  </BaseBox>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import PostItem from '@/components/PostItem.vue';
import PostFilter from '@/components/PostFilter.vue';

export default {
  name: 'PostList',
  components: {
    PostItem,
    PostFilter
  },
  data() {
    return {
      searchText: ''
    };
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
