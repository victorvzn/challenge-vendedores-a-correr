<template>
  <BaseInput
    placeholder="Escriba un tema que más le guste."
    v-model="q">
    <IconSearch v-if="!isSearching" />
    <img src="/images/loader3.gif" width="24" v-else>
  </BaseInput>
</template>

<script>
import debounce from 'lodash/debounce'

import { mapGetters } from 'vuex'

export default {
  name: 'VoteSearch',
  data () {
    return {
      isSearching: false,
      hasErrors: true,
      q: ''
    }
  },
  computed: {
    ...mapGetters({
      countSellers: 'sellers/countSellers',
      displaySellers: 'sellers/displaySellers'
    })
  },
  watch: {
    q: function (newValue, oldValue) {
      this.isSearching = true
      this.debouncedGetQuery()
    }
  },
  created: function () {
    this.debouncedGetQuery = debounce(this.getQuery, 500)
  },
  methods: {
    fetchImages (payload) {
      this.$store
        .dispatch('images/fetchListImages', payload)
        .then(() => {
          this.isSearching = false
        })
        .catch(() => {
          this.hasErrors = true
        })
    },
    getQuery: function () {
      if (!this.q) {
        this.$store.commit('images/CLEAN_IMAGES_DATA')
        this.isSearching = false
        this.hasErrors = false
        return false
      }

      this.isSearching = true
      this.hasErrors = false

      this.$store
        .dispatch('sellers/fetchListSellers')
        .then(() => {
          const payload = {
            q: this.q,
            num: this.countSellers,
            sellers: this.displaySellers
          }

          this.fetchImages(payload)
        })
        .catch(() => {
          this.hasErrors = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
