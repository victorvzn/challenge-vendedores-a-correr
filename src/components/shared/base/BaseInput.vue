<template>
  <input
    :value="value"
    v-bind="$attrs"
    v-on="listeners" />
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    validator: {
      type: Object,
      required: false
    },
    value: [String, Number],
    isSmallSize: {
      type: Boolean,
      default: false
    },
    isLargeSize: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
