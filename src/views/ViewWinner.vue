<template>
  <div class="winner">
    <TheHeader />
    <PageWinner />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue'
import PageWinner from '@/components/page-winner/PageWinner.vue'
import TheFooter from '@/components/shared/TheFooter.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'ViewWinner',
  components: {
    TheHeader,
    PageWinner,
    TheFooter
  },
  computed: {
    ...mapGetters({
      displaySellerWinner: 'sellers/displaySellerWinner'
    })
  },
  beforeMount () {
    if (!this.displaySellerWinner) {
      this.redirectTo('home')
    }
  },
  methods: {
    redirectTo (name = '') {
      this.$router.replace({ name })
    }
  }
}
</script>
