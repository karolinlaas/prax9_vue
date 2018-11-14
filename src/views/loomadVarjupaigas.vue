<template>
  <div class="container">
    <Navigation />
    <LoomadVarjupaigas />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import LoomadVarjupaigas from '@/components/LoomadVarjupaigas.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'loomadVarjupaigas',
  components: {
    Footer,
    LoomadVarjupaigas,
    Navigation,
  },
};
</script>

<style>

</style>
