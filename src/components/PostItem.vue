<template>
  <BaseBox class="post-item">
    <BaseHeader type="h5" class="title">{{ index }}. {{ title }} </BaseHeader>
    <BaseText class="date">
      {{ date }}
    </BaseText>
    <BaseText tag="p" class="content"> {{ content | truncate(250) }} </BaseText>
  </BaseBox>
</template>

<script>
export default {
  name: 'PostsItem',
  props: {
    id: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/_postItem.scss';
</style>
