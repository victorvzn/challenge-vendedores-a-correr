<template>
  <div class="VoteCard">
    <div class="VoteCard__score">
      <IconHeartRed />
      <span>{{ score }} / 20</span>
    </div>

    <div class="VoteCard__img">
      <img :src="data.link">
    </div>

    <div v-if="!showOnlyInfo" class="VoteCard__title">
      <BaseButton @click="validateVote">
        ¡Votar por esta imagen!
      </BaseButton>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VoteCard',
  props: {
    data: {
      type: Object,
      required: true
    },
    showOnlyInfo: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    score () {
      if (this.data.observations > 20) {
        return 20
      }
      return this.data.observations
    }
  },
  methods: {
    validateVote () {
      this.$store.dispatch('sellers/lookForWinner')
        .then(thereIsAWinner => {
          if (thereIsAWinner) {
            console.log('sorry, there is a winner!')
            const message = 'Lo sentimos pero las votaciones se cerraron por que ya tenemos un ganador.'
            const config = { position: 'top-center', duration: 10000 }
            this.$toasted.show(message, config)
            this.goToPage('home')
          } else {
            this.voteForMe()
          }
        })
    },
    voteForMe () {
      let currentSellerVotes = Number(this.data.observations)
      currentSellerVotes = currentSellerVotes + 3
      const payload = {
        id: this.data.sellerId,
        data: {
          observations: `${currentSellerVotes}`
        }
      }
      this.$store.dispatch('sellers/update', payload)
      this.$store.commit('sellers/SET_SELLER_VOTED_DATA', {
        data: {
          ...this.data,
          observations: payload.data.observations
        }
      })
      this.goToPage('voteResult')
    },
    goToPage (name) {
      this.$router.replace({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
  .VoteCard {
    position: relative;
    overflow: hidden;
    padding: 1rem;
    background-color: var(--white);
    border-radius: .3rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    color: var(--black-100);
  }
  .VoteCard__img {
    display: flex;
    justify-content: center;
    height: 16rem;
    transition: all 1s ease;
  }
  .VoteCard__img img {
    object-fit: scale-down;
    width: 100%;
    height: 100%;
  }

  .VoteCard__img:hover {
    transform: scale(1.1, 1.1);
  }

  .VoteCard__title {
    padding: 1rem .1rem;
  }

  .VoteCard button {
    background: var(--red-100);
    transition: all .5s ease;
    cursor: pointer;
  }

  .VoteCard button:hover {
    background: var(--green-100);
  }

  .VoteCard__score {
    position: absolute;
    top: 1rem;
    right: 0;
    padding: .5rem;
    color: var(--white);
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px 0px 0px 6px;
    z-index: 100;
    font-weight: 700;
  }

  .VoteCard__score span {
    margin-left: .5rem;
  }
</style>
