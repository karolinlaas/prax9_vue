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
						<li id="active"><router-link to="/kadunudLoom">Kadunud loomad</router-link></li>
						<li id="toeta"><router-link to="/toetaMeid">Toeta meid</router-link></li>
						<li><router-link to="/varjupaigast">Varjupaigast</router-link></li>
						<li><router-link to="/kontakt">Kontakt</router-link></li>
					</ul>
				</section>
			</section>
		</header>
    
    <section class="found-cats">

			<h2 id="lost-page">KADUNUD KOERAD</h2>

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
						<h4>KADUMISE AEG</h4>
					</button>
					<button>
						<h4>KADUMISE KOHT</h4>
					</button>
				</div>
			</div>


			<div class="animal-grid">
			
				<router-link to="/lostDogProfile">
				<div class="grid-cat">
					<img src="../assets/lost_dog.jpg">
					<img id="gender" src="../assets/female.svg">
          <h3>Koera Nimi</h3>
				</div>
        </router-link>

				<div class="grid-cat">
					<img src="../assets/lost_dog.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Koera Nimi</h3>
				</div>

				<div class="grid-cat">
					<img src="../assets/lost_dog.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Koera Nimi</h3>
				</div>

				<div class="grid-cat">
					<img src="../assets/lost_dog.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Koera Nimi</h3>
				</div>

				<div class="grid-cat">
					<img src="../assets/lost_dog.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Koera Nimi</h3>
				</div>

				<div class="grid-cat">
					<img src="../assets/lost_dog.jpg">
					<img id="gender" src="../assets/male.svg">
					<h3>Koera Nimi</h3>
				</div>

				<div class="grid-cat">
					<img src="../assets/lost_dog.jpg">
					<img id="gender" src="../assets/female.svg">
					<h3>Koera Nimi</h3>
				</div>

			</div>

		</section>
    
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';

export default {
  name: 'lostDogs',
  components: {
    Footer,
  },
};
</script>

<style>
  #varjupaigas a { 
    color: #33ccff; 
    border-bottom: none;
  }
</style>
