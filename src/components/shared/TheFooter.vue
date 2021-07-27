<template>
  <div class="TheFooter__title">
    Powered by Victor Villazón - <span>July 2021</span>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
  .TheFooter__title {
    margin-top: 2.8125rem; // 45 / 16
    margin-bottom: 3.125rem; // 50px / 16px
    text-align: center;
    font-weight: 700;
  }
  .TheFooter__title span {
    font-weight: 300;
  }
</style>
