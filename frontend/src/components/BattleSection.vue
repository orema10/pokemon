<template>
    <section v-if="pokemon" :class="[playerSide ? 'player-side' : 'opponent-side']">
        <div v-if="playerSide" :style="playerImg"></div>
        <div v-else :style="opponentImg"></div>
    </section>
</template>

<script>
export default {
  props: ["pokemon", "playerSide"],
  data() {
    return {
      playerImg: {
        "background-image": `url(${this.pokemon.sprites.back_default})`
      },
      opponentImg: {
        "background-image": `url(${this.pokemon.sprites.front_default})`
      }
    };
  },
  created() {}
};
</script>

<style scoped>
.player-side {
  width: 60%;
  align-self: flex-end;
}
.player-side div {
  width: 43vw;
  height: 43vh;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
}
.opponent-side {
  width: 40%;
  align-self: center;
}
.opponent-side div {
  margin: 0 25px 264px;
  width: 30vw;
  height: 30vh;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
}

@media screen and (max-width: 1024px) {
  .opponent-side div {
    margin: 0 auto 230px;;
  }
}

@media screen and (max-width: 768px) {
  .opponent-side div {
    margin: 0 auto 74px;
  }
}
</style>

