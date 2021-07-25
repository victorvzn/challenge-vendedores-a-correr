<template>
  <div class="home">
    <PageHome />
  </div>
</template>

<script>
import PageHome from '@/components/home/PageHome.vue'

import sellers from '@/services/sellers'

export default {
  name: 'Home',
  components: {
    PageHome
  },
  mounted () {
    console.log('mounted')
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
