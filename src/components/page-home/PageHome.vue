<template>
  <div>
    <ImageWinner />

    <p>
      "Imágenes del mundo" ha realizado un concurso para sus vendedores, ¡una carrera para encontrar las imágenes más interesantes de la web!.
    </p>

    <router-link :to="{ name: 'vote' }">¡Vota por tu favorito aquí!</router-link>

    <p>o</p>

    <BaseButton>
      Comparte con tus amigos
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'PageHome'
}
</script>
