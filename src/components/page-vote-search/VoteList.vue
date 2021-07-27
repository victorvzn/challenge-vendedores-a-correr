<template>
  <div class="VoteList">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VoteList'
}
</script>

<style lang="scss" scoped>
.VoteList {
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
}
</style>
