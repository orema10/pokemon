<template>
    <section v-if="pokemon" class="battle-section">
        <div class="sprite-container">
            <img v-if="trainerPokemon" :src="pokemon.sprites.back_default" 
            class="battle-sprite"/>
            <img v-else :src="pokemon.sprites.front_default" class="battle-sprite-opponent"/>
        </div>
    </section>
</template>

<script>
export default {
  props: ["pokemon", "trainerPokemon"],
  created() {
  }
};
</script>

<style scoped>
.battle-sprite {
    width:420px;
}
.battle-sprite-opponent {
    width:252px;
    margin-right:45px;
    position: relative;
}
@media screen and (max-width: 1024px) {
    .battle-sprite-opponent {
        top: 46px;
    }
}

@media screen and (max-width: 768px) {
    .battle-sprite-opponent {
        margin-right:0;
        top: 60px
    }
}
</style>

