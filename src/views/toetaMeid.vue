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
						<li id="active"><router-link to="/toetaMeid">Toeta meid</router-link></li>
						<li><router-link to="/varjupaigast">Varjupaigast</router-link></li>
						<li><router-link to="/kontakt">Kontakt</router-link></li>
					</ul>
				</section>
			</section>
		</header>
    
   <section class="toetamine">
			<h2 id="lost-page">TOETAJAD</h2>
			<p>Cat ipsum dolor sit amet, adventure always and munch on tasty moths. Annoy the old grumpy cat, start a fight and then retreat to wash when i lose. Ooh, are those your $250 dollar sandals? lemme use that as my litter box. Furrier and even more furrier hairball wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again pose purrfectly to show my beauty immediately regret falling into bathtub.</p>
			
			<p>Licks your face while happily ignoring when being called curl into a furry donut freak human out make funny noise mow mow mow mow mow mow success now attack human lick arm hair paw at your fat belly.</p>
			
			<p>Meow all night. I show my fluffy belly but it's a trap! if you pet it i will tear up your hand bleghbleghvomit my furball really tie the room together kitty scratches couch bad kitty so love to play with owner's hair tie floof tum, tickle bum, jellybean footies curly toes so fight an alligator and win and annoy kitten brother with poking. Human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! Gate keepers of hell curl up and sleep on the freshly laundered towels. Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me while happily ignoring when being called yet sweet beast, so have my breakfast spaghetti yarn. </p>
			
			<h3>ÜLDRAVI, HOOLDUSVAHENDID</h3>
			<h4>EE22 1111 2222 3333 4444</h4>
			
			<h3>VIGASTATUD LOOMADE OPERATIIVNE RAVI</h3>
			<h4>EE22 1111 2222 3333 4444</h4>
			
			<h3>HOIUPAIKADE REMONT JA EHITUS</h3>
			<h4>EE33 1111 2222 3333 4444</h4>

		</section>
     
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import LoomadVarjupaigas from '@/components/LoomadVarjupaigas.vue';

export default {
  name: 'toetaMeid',
  components: {
    Footer,
  },
};
</script>

<style>

</style>