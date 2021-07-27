<template>
  <div class="PageVoteResult text-center">
    <div class="PageWinner__line">
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>

    <h1>¡Gracias por tu voto!</h1>
    <p>Le diste 3 puntos al dueño de esta imagen.</p>

    <VoteCard :data="displaySellerVoted" :showOnlyInfo="true" />

    <ButtonShare />
  </div>
</template>

<script>
import VoteCard from '@/components/page-vote-search/VoteCard.vue'
import ButtonShare from '@/components/shared/ButtonShare.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'PageVoteResult',
  components: {
    VoteCard,
    ButtonShare
  },
  data () {
    return {
      label: 'Comparte con tus amigos'
    }
  },
  computed: {
    ...mapGetters({
      displaySellerVoted: 'sellers/displaySellerVoted'
    }),
    messageToCopy () {
      return `${location.hostname}`
    }
  },
  methods: {
    onCopy (e) {
      this.label = 'Revisa tu portapapeles!'
      setTimeout(() => {
        this.label = 'Comparte con tus amigos'
      }, 1500)
    },
    onError () {
      console.log('Failed to copy texts')
    }
  }
}
</script>

<style lang="scss" scoped>
  .PageVoteResult {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-left: 1rem; // 45 / 16
    margin-right: 1rem; // 45 / 16
    background-color: var(--white);
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }

  .PageVoteResult__button {
    margin-top: 2rem;
  }

  .PageWinner__line {
    display: flex;
    align-self: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 576px) {
    .PageVoteResult {
      margin: 0 auto;
      width: 570px;
    }
  }
</style>
