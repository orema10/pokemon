<template>
    <section class="battle">
      <battle-section :pokemon="getFirstInParty" playerSide="true"></battle-section>
      <battle-section :pokemon="opponent"></battle-section>
    </section>
</template>

<script>
import battleSection from "@/components/BattleSection";

export default {
  props: ["opponent"],
  computed: {
    getFirstInParty: function() {
      return this.$store.getters.getFirstInParty;
    }
  },
  components: {
    battleSection
  }
};
</script>

<style scoped>
.battle {
  background-image: url("../assets/images/battle-background-grass.jpg");
  width: 100%;
  height: 74vh;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row
}
</style>

