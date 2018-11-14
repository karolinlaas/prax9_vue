<template>
  <div class="container">
		
   <Navigation />
    
    <section class="cat-profile">
			<router-link to="/foundCats"><h5>← TAGASI LEITUD KASSIDE LEHELE</h5></router-link>

			<div class="left-profile">
				<img id="main-img" src="../assets/cat_1.jpg">
			</div>

			<div class="right-profile">
				<img src="../assets/male.svg">
				<h2>KASSI NIMI</h2>
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
  name: 'cat',
  components: {
    Footer,
    Navigation,
  },
};
</script>

<style>

  .cat-profile {
	width: 800px;
	margin: 100px auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.cat-profile a {
	flex-basis: 100%;
	margin-bottom: 20px;
  text-decoration: none;
  color: #000000;
}

.cat-profile a:hover {
    color: #33ccff;
}
</style>
