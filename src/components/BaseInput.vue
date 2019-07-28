<template>
  <input :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'number', 'email', 'password', 'textarea'].indexOf(value) !== -1;
      }
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
