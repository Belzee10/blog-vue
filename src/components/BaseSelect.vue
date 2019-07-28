<template>
  <select :id="id" v-model="selectedOption" @change="updateValue">
    <option disabled value=""> {{ disabledOption }} </option>
    <option v-for="option in options" :key="option.label" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    id: {
      type: String,
      default: ''
    },
    disabledOption: {
      type: String,
      default: 'Sorting by:'
    },
    value: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedOption: this.value
    };
  },
  methods: {
    updateValue() {
      this.$emit('select:change', this.selectedOption);
    }
  }
};
</script>

<style lang="scss" scoped></style>
