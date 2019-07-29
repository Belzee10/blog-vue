<template>
  <BaseBox>
    <BaseRow>
      <BaseCol>
        <PostFilter>
          <template v-slot:inputSearch>
            <BaseText tag="label" for="post-search">Search</BaseText>
            <BaseInput
              id="post-search"
              v-model="searchText"
              placeholder="Search for a blog"
              @input:change="updateInput($event)"
            />
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
          <template v-slot:info>
            <BaseBadge type="primary"> Showing {{ posts.length }} posts </BaseBadge>
            <BaseButton color="dark" :disabled="disableClearFilters" @button:click="clearFilters">
              Clear Filters
            </BaseButton>
          </template>
        </PostFilter>
      </BaseCol>
    </BaseRow>
    <BaseRow>
      <BaseCol v-for="(post, index) in posts" :key="post.id" width="50" class="post-list">
        <PostItem
          :id="post.id"
          :index="index + 1"
          :title="post.title"
          :content="post.content"
          :date="post.date"
          :popularity="post.popularity"
        />
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
  props: {
    hasInfinityScroll: {
      type: Boolean,
      default: true
    },
    scrollLimit: {
      type: Number,
      default: 10
    },
    paginationStep: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      searchText: '',
      sortingBy: '',
      paginationIndex: 0,
      sortingOptions: [
        {
          label: 'By Date',
          value: 'date'
        },
        {
          label: 'Hight to low popularity',
          value: 'popularity_desc'
        },
        {
          label: 'Low to hight popularity',
          value: 'popularity_asc'
        }
      ]
    };
  },
  computed: {
    disableClearFilters() {
      return !this.searchText && !this.sortingBy;
    },
    ...mapGetters(['posts'])
  },
  mounted() {
    this.scroll();
  },
  created() {
    this.fetchPosts({
      paginate: {
        limit: this.scrollLimit,
        page: this.paginationIndex
      }
    });
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.paginationIndex = this.paginationIndex + this.paginationStep;
          this.doFilter();
        }
      };
    },
    updateSorting(value) {
      this.sortingBy = value;
      this.doFilter();
    },
    updateInput(value) {
      this.searchText = value;
      this.doFilter();
    },
    doFilter() {
      this.filterPosts({
        searchText: this.searchText,
        sortingBy: this.sortingBy,
        paginate: {
          limit: this.scrollLimit,
          page: this.paginationIndex
        }
      });
    },
    clearFilters() {
      this.searchText = '';
      this.sortingBy = '';
      this.doFilter();
    },
    ...mapActions(['fetchPosts', 'filterPosts'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/_postList.scss';
</style>
