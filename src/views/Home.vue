<template>
  <div class="home">
    <MainNav />
    <LoomadVarjupaigas />
    <hr>
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
  hr {
    width: 75%;
    margin: 0 auto;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
  }
</style>
