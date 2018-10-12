<template>
  <section class="pokemon-page">
    <div class="single-pokemon" v-for="(pokemonName, i) in page" :key="i">
      <pokemon-preview :pokemonName="pokemonName"></pokemon-preview>
    </div>
  </section>
</template>

<script>
import pokemonPreview from './PokemonPreview'

export default {
  name:'pokemonPage',
  props: ["page", "pageNum"],
  components:{
    pokemonPreview
  }
};
</script>

<style scoped>
.pokemon-page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 90%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .pokemon-page {
    grid-template-columns: repeat(2, 1fr);

  }
}
</style>

