<template>
    <section v-if="pokemon" class="battle-section">
        <div>{{pokemon.name}}</div>
        <img v-if="trainerPokemon" :src="pokemon.sprites.back_default" />
        <img v-else :src="pokemon.sprites.front_default" />
    </section>
</template>

<script>
export default {
  props: ["pokemon", "trainerPokemon"],
  created() {
  }
};
</script>

<style>
</style>
