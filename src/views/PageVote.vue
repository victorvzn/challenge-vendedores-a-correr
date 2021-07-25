<template>
  <div class="home">
    <TheHeader />
    <PageVote />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue'
import TheFooter from '@/components/shared/TheFooter.vue'
import PageVote from '@/components/page-vote/PageVote.vue'

import sellers from '@/services/sellers'

export default {
  name: 'PageHome',
  components: {
    TheHeader,
    TheFooter,
    PageVote
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
