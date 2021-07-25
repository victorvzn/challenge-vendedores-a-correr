<template>
  <div>
    <p>
      Busca un tema de tu elección y vota por tu favorito:
    </p>

    <BaseInput placeholder="Escriba un tema que más le guste." />

    <VoteList />
  </div>
</template>

<script>
import VoteList from '@/components/page-vote/VoteList.vue'

export default {
  name: 'PageHome',
  components: {
    VoteList
  }
}
</script>
