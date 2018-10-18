<template>
  <section class="header">
      <header>
        <main-header></main-header>
        <img class="pokemon-logo" src="../assets/images/pokemon-logo.png" />
      </header>
      <div class="header-fix"></div>
      <side-bar></side-bar>
  </section>
</template>

<script>
import sideBar from "./SideBar";
import mainHeader from "./MainHeader";
export default {
  components: {
    sideBar,
    mainHeader
  }
};
</script>

<style scoped>
header {
  width: 100vw;
  height: 20vh;
  background-color: #fff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.12);
  z-index: 3;
  overflow: hidden;
}

header img.pokemon-logo {
  height: 125px;
}

.header-fix {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 20vh;
  z-index: 3;
}
</style>
