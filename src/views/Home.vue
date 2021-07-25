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

import sellers from '@/services/sellers'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheFooter,
    PageHome
  },
  mounted () {
    sellers.getSellers()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
