<template>
    <section class="pokemon-preview">
        <div class="loader" v-if="loading">
            <loader></loader>
        </div>
        <div class="pokemon-items" v-else-if="pokemon.name">
          <img :src="pokemon.sprites.front_default" />
          <div>{{pokemon.name}}</div>

          <button class="btn"
          @click="addToTeam">add to team</button>

          <button v-if=teamMember class="btn"
          @click="move">swap</button>

          <button v-else class="btn"
          @click="newBattle">Fight!</button>
        </div>
    </section>
</template>

<script>
import service from "../services/pokemon.service";
import loader from "../views/Loader";

export default {
  props: ["pokemonName", "teamMember"],
  data() {
    return {
      pokemon: {},
      loading: true
    };
  },
  watch: {
    teamMember: function(newProp) {
      this.pokemon = newProp;
    }
  },
  created() {
    if (this.teamMember) {
      this.pokemon = this.teamMember;
      setTimeout(() => (this.loading = false), 1000);
    } else
      service.getPokemonData(this.pokemonName).then(pokemon => {
        this.pokemon = pokemon;
        setTimeout(() => (this.loading = false), 1000);
      });
  },
  methods: {
    addToTeam: function() {
      this.$store.commit({
        type: "addToTeam",
        pokemon: this.pokemon
      });
      this.$router.push("/team");
    },
    newBattle: function() {
      this.$router.push({ name: "Battle", params: { opponent: this.pokemon } });
    },
    move: function() {
      this.$store.commit({
        type: "move",
        pokemon: this.pokemon
      });
    }
  },
  components: {
    loader
  }
};
</script>

<style scoped>
.pokemon-preview {
  background: lightgray;
  height: 300px;
  display: flex;
  align-items: center;
}

.pokemon-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.pokemon-items * {
  width: 50%;
  margin-top: 13px;
}

.loader {
  width: 100%;
}
</style>
