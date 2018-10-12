<template>
    <section class="pokemon-team">
      <div v-for="(teamMember, i) in team" :key="i">
        <pokemon-preview :teamMember="teamMember" :notFirst="i===0? false: true"></pokemon-preview>
      </div>
    </section>
</template>

<script>
import service from "@/services/pokemon.service";
import pokemonPreview from "@/components/PokemonPreview";

export default {
  data() {
    return {
      team: []
    };
  },
  mounted() {
    this.$watch(
      "getTeam",
      getNewTeam => {
        this.team = getNewTeam;
      },
      { immediate: true }
    );
  },
  computed: {
    getTeam: function() {
      this.team = this.$store.getters.team;
      return this.$store.getters.team;
    }
  },
  components: {
    pokemonPreview
  }
};
</script>

<style scoped>
.pokemon-team {
  margin: 50px auto;
  padding-top: 6px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 90%;
}
</style>
