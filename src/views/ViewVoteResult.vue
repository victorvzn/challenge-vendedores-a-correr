<template>
  <div class="vote-result">
    <TheHeader />
    <PageVoteResult />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue'
import PageVoteResult from '@/components/page-vote-result/PageVoteResult.vue'
import TheFooter from '@/components/shared/TheFooter.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'ViewVoteResult',
  components: {
    TheHeader,
    PageVoteResult,
    TheFooter
  },
  computed: {
    ...mapGetters({
      displaySellerVoted: 'sellers/displaySellerVoted'
    })
  },
  beforeMount () {
    if (!this.displaySellerVoted) {
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
