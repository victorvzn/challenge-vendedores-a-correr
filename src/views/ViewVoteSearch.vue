<template>
  <div class="VoteSearch">
    <TheHeader />
    <PageVoteSearch v-if="!isLoadingSeller" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue'
import PageVoteSearch from '@/components/page-vote-search/PageVoteSearch.vue'
import TheFooter from '@/components/shared/TheFooter.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'ViewVoteSearch',
  components: {
    TheHeader,
    PageVoteSearch,
    TheFooter
  },
  computed: {
    ...mapGetters({
      isLoadingSeller: 'sellers/displayIsLoading'
    })
  }
}
</script>
