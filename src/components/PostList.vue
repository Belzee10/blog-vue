<template>
  <BaseBox>
    <BaseRow>
      <BaseCol>
        <PostFilter>
          <template v-slot:inputSearch>
            <BaseText tag="label" for="post-search">Search</BaseText>
            <BaseInput id="post-search" v-model="searchText" placeholder="Search for a blog" />
          </template>
          <template v-slot:sorting>
            <BaseText tag="label" for="post-sorting">Sorting</BaseText>
            <BaseSelect
              id="post-sorting"
              v-model="sortingBy"
              :options="sortingOptions"
              @select:change="updateSorting($event)"
            />
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
      searchText: '',
      sortingBy: '',
      sortingOptions: [
        {
          label: 'By Date',
          value: 'by_date'
        },
        {
          label: 'By Popularity',
          value: 'by_popularity'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['posts'])
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    updateSorting(value) {
      this.sortingBy = value;
    },
    ...mapActions(['fetchPosts'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/_postList.scss';
</style>
