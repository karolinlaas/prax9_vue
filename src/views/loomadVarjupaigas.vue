<template>
  <div class="container">
    <MainNav />
    <LoomadVarjupaigas />
    <Kontakt />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import MainNav from '@/components/MainNav.vue';
import Footer from '@/components/Footer.vue';
import LoomadVarjupaigas from '@/components/LoomadVarjupaigas.vue';
import Kontakt from '@/components/Kontakt.vue';

export default {
  name: 'home',
  components: {
    MainNav,
    Footer,
    LoomadVarjupaigas,
    Kontakt,
  },
};
</script>

<style>
  #loomad-varjupaigas-main {
    border-bottom: solid 1px black;
  }
</style>
