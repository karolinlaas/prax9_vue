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
						<li><router-link to="/toetaMeid">Toeta meid</router-link></li>
						<li><router-link to="/varjupaigast">Varjupaigast</router-link></li>
						<li><router-link to="/kontakt">Kontakt</router-link></li>
					</ul>
				</section>
			</section>
		</header>
    
    <h2 id="lost-page">KADUNUD LOOMAD</h2>

    <section class="loomad-varjupaigas">
      <section class="flex-cat">
        <router-link to="/lostCats"><img src="../assets/body_cat.jpg"></router-link>
        <h4>10 KASSI</h4>
      </section>
      <section class="flex-dog">
        <router-link to="/lostDogs"><img src="../assets/body_dog.jpg"></router-link>
        <h4>7 KOERA</h4>
      </section>
      <section class="flex-rabbit">
        <router-link to="/lostRabbits"><img src="../assets/body_rabbit.jpg"></router-link>
        <h4>2 JÄNEST</h4>
      </section>
    </section>
    
    <hr>
    
    <section class="kuulutus">
		
			<h2 id="lost-page">Kadunud looma kuulutuse ankeet</h2>
			
			<section class="ankeet">
				<div class="ankeet-flex">
					<h3>Liik</h3>
					<select id="liik" name="liik">
						<option value="kass">Kass</option>
						<option value="koer">Koer</option>
						<option value="jänes">Jänes</option>
					</select>
				</div>
				
				<div class="ankeet-flex">
					<h3>Nimi ja/või tõug</h3>
					<input type="text" id="nimi" name="nimi" placeholder="Nimi ja/või tõug">
				</div>
				
				<div class="ankeet-flex">
					<h3>Info kadunud looma<br> kohta / Kirjeldus</h3>
					<input type="text" id="kirjeldus" name="kirjeldus" placeholder="Kirjeldus">
				</div>
				
				<div class="ankeet-flex">
					<h3>Kadumise kuupäev</h3>
					<input type="date" name="date">
				</div>
				
				<div class="ankeet-flex">
					<h3>Lisa pilt</h3>
					<input type="file" name="pilt">
				</div>
				
				<div class="ankeet-flex">
					<h3>Teie e-mail</h3>
					<input type="text" id="email" name="email" placeholder="Teie e-mail">
				</div>
				
				<div class="ankeet-flex">
					<h3>Teie telefoninumber</h3>
					<input type="text" id="telefon" name="telefon" placeholder="Teie telefoninumber">
				</div>
				
				<button>SAADA</button>
				
				<p>Vaatame Teie kuulutust esimesel võimalused ning paneme lehele üles!</p>
			</section>
		</section>
     
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import LoomadVarjupaigas from '@/components/LoomadVarjupaigas.vue';

export default {
  name: 'kadunudLoom',
  components: {
    Footer,
  },
};
</script>

<style>
  .flex-cat h4, .flex-dog h4, .flex-rabbit h4 {
	 position: absolute;
	  top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    text-shadow: 2px 2px 6px black;
    transition: 0.5s;
    
  }

  .flex-cat, .flex-dog, .flex-rabbit {
    position: relative;
  }

  .flex-cat:hover img, .flex-dog:hover img, .flex-rabbit:hover img {
    filter: blur(0px);
  }

  .flex-cat:hover h4, .flex-dog:hover h4, .flex-rabbit:hover h4 {
    opacity: 0;
  }
  
  .flex-cat img, .flex-dog img, .flex-rabbit img {
	width: 300px;
	height: 300px;
	object-fit: cover;
	filter: blur(3px);
	transition: 0.5s;
}
  
</style>