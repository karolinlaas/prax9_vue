<template>
  <div class="container">
    <header>
			<section class="row">
				<section class="logo">
					<router-link to="/">
						<img src="../assets/paw.png" alt="pawprint">
						<h1>Loomade Varjupaik</h1>
					</router-link>
				</section>

				<section class="nav">
					<ul>
						<li><router-link to="/loomadVarjupaigas">Loomad varjupaigas</router-link></li>
						<li><router-link to="/kadunudLoom">Kadunud loomad</router-link></li>
						<li><router-link to="/toetaMeid">Toeta meid</router-link></li>
						<li><router-link to="/varjupaigast">Varjupaigast</router-link></li>
						<li id="active"><router-link to="/kontakt">Kontakt</router-link></li>
					</ul>
				</section>
			</section>
		</header>
    
    <Kontakt />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Kontakt from '@/components/Kontakt.vue';

export default {
  name: 'kontakt',
  components: {
    Footer,
    Kontakt,
  },
};
</script>

<style>

</style>