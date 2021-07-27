<template>
  <div class="PageVoteSearch">
    <div class="PageWinner__line">
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>

    <p class="PageWinner__p text-center">Busca un tema de tu elección y vota por tu favorito:</p>

    <VoteSearch />

    <div class="PageVoteSearch__image" v-if="count === 0">
      <ImageEmpty />
    </div>

    <VoteList>
      <VoteCard
        v-for="image in images"
        :key="image.id"
        :data="image" />
    </VoteList>
  </div>
</template>

<script>
import VoteSearch from '@/components/page-vote-search/VoteSearch.vue'
import VoteList from '@/components/page-vote-search/VoteList.vue'
import VoteCard from '@/components/page-vote-search/VoteCard.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'PageVoteSearch',
  components: { VoteSearch, VoteList, VoteCard },
  computed: {
    ...mapGetters({
      isLoadingSeller: 'sellers/displayIsLoading',
      images: 'images/displayImages',
      count: 'images/countImages'
    })
  }
}
</script>

<style lang="scss" scoped>
  .PageVoteSearch {
    margin-left: 2.8125rem; // 45 / 16
    margin-right: 2.8125rem; // 45 / 16
  }
  .PageVoteSearch__text {
    margin: 2.8125rem 0;
  }
  .PageVoteSearch__image {
    margin: 0 auto;
    width: 25rem;
  }

  .PageVoteSearch__image img {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .PageVoteSearch__strong {
    display: block;
    margin: 3rem;
    color: var(--green-100);
  }

  .PageWinner__line {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 576px) {
    .PageVoteSearch {
      margin: 0 auto;
      width: 56rem;
    }
  }
</style>
