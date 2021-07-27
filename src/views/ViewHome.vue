<template>
  <div class="home">
    <TheHeader />
    <PageHome />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue'
import TheFooter from '@/components/shared/TheFooter.vue'
import PageHome from '@/components/page-home/PageHome.vue'

export default {
  name: 'ViewHome',
  components: {
    TheHeader,
    TheFooter,
    PageHome
  }
}
</script>
