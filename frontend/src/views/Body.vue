<template>
    <body>
        <router-view/>
    </body>
</template>

<script>
import pokemonList from "../components/PokemonList";
export default {
  components: {
    pokemonList
  }
};
</script>

<style>
  @import url('../assets/css/style.css');
</style>
