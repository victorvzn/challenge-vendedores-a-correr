<template>
  <div class="PageHome">
    <ImageWinner />

    <p class="text-center PageHome__text">
      "Imágenes del mundo" ha realizado un concurso para sus vendedores, ¡una carrera para encontrar las imágenes más interesantes de la web!.
    </p>

    <h2 class="text-center PageHome__title"  v-if="!isLoading && thereIsAWinner">¡La carrera terminó!</h2>

    <div>
      <BaseButton v-if="isLoading" disabled="isLoading">Verificando resultados...</BaseButton>

      <BaseButton @click="goToPage('vote')" v-if="!isLoading && !thereIsAWinner">
        <IconHeart />
        ¡Vota por tu favorito aquí!
      </BaseButton>
    </div>

    <div>
      <BaseButton @click="goToPage('winner')" v-if="!isLoading && thereIsAWinner">
        <IconList />
        Ver resultados
      </BaseButton>

      <p class="text-center">ó</p>

      <ButtonShare />
    </div>
  </div>
</template>

<script>
import ButtonShare from '@/components/shared/ButtonShare.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'PageHome',
  components: {
    ButtonShare
  },
  computed: {
    ...mapGetters({
      isLoading: 'sellers/displayIsLoading',
      thereIsAWinner: 'sellers/thereIsAWinner'
    })
  },
  methods: {
    goToPage (name) {
      this.$store.commit('images/CLEAN_IMAGES_DATA')
      this.$router.push({ name })
    },
    shareWith () {
      console.log('sadasd')
    }
  }
}
</script>

<style lang="scss" scoped>
  .PageHome {
    margin-left: 2.8125rem; // 45 / 16
    margin-right: 2.8125rem; // 45 / 16
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .PageHome__text {
    margin: 2.8125rem 0;
  }
  .PageHome__title {
    margin-top: 0;
    margin-bottom: 2.8125rem;
    color: var(--green-100);
  }

  @media (min-width: 576px) {
    .PageHome {
      margin: 0 auto;
      padding: 0 0;
      width: 570px;
    }
  }
</style>
