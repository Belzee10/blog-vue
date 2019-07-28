<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input:change', $event.target.value)"
  />
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
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
