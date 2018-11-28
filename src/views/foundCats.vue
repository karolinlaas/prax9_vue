<template>
  <div class="container">
   
   <Navigation />
    
    <section class="found-cats">

			<h2 id="lost-page">LEITUD KASSID</h2>

			<div class="filter-flex">
				<div class="filter">
					<h3>Filtreeri:</h3>
				</div>
				
				<div class="filter-buttons">
					<button>
						<h4>SUGU</h4>
					</button>
					<button>
						<h4>VANUS</h4>
					</button>
					<button>
						<h4>SAABUMISE AEG</h4>
					</button>
				</div>
			</div>


			<div class="animal-grid">
			
				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/male.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/male.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/female.svg">
          <h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/male.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/male.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

				<router-link to="/cat">
				<div class="grid-cat">
					<img src="../assets/cat_1.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Kassi Nimi</h3>
				</div>
				</router-link>

			</div>

		</section>
    
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'foundCats',
  components: {
    Footer,
    Navigation,
  },
};
</script>

<style>

</style>
