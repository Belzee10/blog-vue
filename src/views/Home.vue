<template>
  <v-fragment>
    <BaseRow>
      <BaseCol>
        dsfsdf
      </BaseCol>
    </BaseRow>
    <BaseRow>
      <BaseCol>
        <BaseHeader type="h3"> List of Posts</BaseHeader>
        <PostsList />
      </BaseCol>
    </BaseRow>
  </v-fragment>
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
