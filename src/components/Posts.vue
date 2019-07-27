<template>
  <span>dsfsdf</span>
  <!-- <table class="table">
    <thead>
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Title
        </th>
        <th scope="col">
          Content
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post, index) in posts" :key="post.id">
        <th scope="row">
          {{ index + 1 }}
        </th>
        <td>{{ post.title }}</td>
        <td>{{ post.content }}</td>
      </tr>
    </tbody>
  </table> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Posts',
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

<style></style>
