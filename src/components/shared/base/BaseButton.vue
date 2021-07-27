<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
  .btn {
    border: none;
    background-color: var(--red-100);
    color: var(--white);
    padding: .5rem 1.5rem;
    font-size: var(--font-size);
    font-weight: bold;
    border-radius: 60px;
    width: 100%;
    line-height: 150%;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    cursor: pointer;
  }
  .btn--secondary {
    background-color: var(--green-100);
  }
</style>
