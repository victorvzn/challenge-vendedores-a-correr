<template>
  <div class="BaseInput">
    <slot />
    <input
      class="input"
      :value="value"
      v-bind="$attrs"
      v-on="listeners" />
  </div>
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

<style lang="scss" scoped>
  .BaseInput {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    background-color: var(--white);
    padding: 0 24px;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .input {
    font-family: var(--font-family);
    font-size: var(--font-size);
    width: 100%;
    border: none;
    padding: 14px 0;
    outline: none;
  }
</style>
