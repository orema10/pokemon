<template>
    <section v-if="pokemon" class="battle-section">
        <div>{{pokemon.name}}</div>
        <img :src="pokemon.sprites.front_default" />
    </section>
</template>

<script>
export default {
  props: ["pokemon"]
};
</script>

<style>
</style>
