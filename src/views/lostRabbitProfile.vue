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
        <section class="test">

        <section class="cat-profile">
          <router-link to="/lostRabbits"><h5>&#x21BC TAGASI KADUNUD JÄNESTE LEHELE</h5></router-link>

          <div class="left-profile">
            <img id="main-img" src="../assets/lost_rabbit.jpg">
            <div class="profile-flex">
              <img src="../assets/lost_rabbit.jpg">
              <img src="../assets/lost_rabbit.jpg">
              <img src="../assets/lost_rabbit.jpg">
            </div>
          </div>

          <div class="right-profile">
            <img id="gender" src="../assets/female.svg">
            <h2>Jänese nimi</h2>
            <div class="clearfix"></div>

            <h4>Liik</h4>
            <p>Jänes</p>
            <div class="clearfix"></div>
            <h4>Vanus</h4>
            <p>1 aasta</p>
            <div class="clearfix"></div>
            <h4>Sugu</h4>
            <p>Emane</p>
            <div class="clearfix"></div>
            <h4>Kadunud alates</h4>
            <p>11.11.2018</p>
            <div class="clearfix"></div>
            <h4>Kadumise koht</h4>
            <p>Supilinn</p>
            <div class="clearfix"></div>
            <h4>Ster. / Kastr.</h4>
            <p>Ei</p>
            <div class="clearfix"></div>
            <br>
            <div class="kirjeldus">
              <h4>Kirjeldus</h4>
              <p>Lühike lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
            </div>
            <br>
            <div class="kirjeldus">
              <h4>Leidmise korral helista +372 555 5555!</h4>
            <div class="clearfix"></div>

            <button><router-link to="/kontakt" id="alumine_nupp">MEIE ASUKOHT</router-link></button>

          	</div>
					</div>

        </section>
		</section>
    
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';

export default {
  name: 'lostRabbitProfile',
  components: {
    Footer,
  },
};
</script>

<style>
	
	* {
		overflow: visible;
	}

	.cat-profile {
	width: 800px;
	margin: 100px auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	overflow-x: visible;
}

.cat-profile a {
	flex-basis: 100%;
	margin-bottom: 20px;
	text-decoration: none;
	color: #000000;
	background-color: #E5E5E5;
	text-align: center;
	padding: 15px;
	border-radius: 50px;
	margin-left: auto;
	margin-right: auto;
	letter-spacing: 1px;
}

.cat-profile a:hover {
    color: #33ccff;
}

#main-img {
	width: 90%;
	height: auto;
	object-fit: fill;
	margin-bottom: 20px;
}

.left-profile {
	width: 55%;
	padding-left: 20px;
}

.profile-flex {
	display: flex;
	justify-content: space-between;
	width: 90%;
}

.profile-flex img {
	height: 90px;
	max-width: 100px;
	object-fit: cover;
}

.right-profile {
	width: 45%;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-right: 20px;
	overflow: visible;
}

.right-profile h2 {
	padding-left: 40px;
	text-transform: uppercase;
}

.right-profile button {
	margin: 25px auto 10px auto;
	display: block;
	border: none;
	background-color: white;
}

#alumine_nupp {
	background-color: #33ccff;
	transition: 0.3s;
}

#alumine_nupp:hover {
	color: black;
	background-color: #00bfff;
}

.right-profile button:active {
	transform: translate(0px, 5px);
}

.right-profile h4 {
	float: left;
	margin: 7px;
}

.right-profile p {
	float: right;
	margin: 7px;
}

.kirjeldus p {
	text-align: justify;
	margin-top: 0;
	margin-bottom: 15px;
}

.kadunud h3 {
	text-align: center;
	margin-bottom: 15px;
	font-size: 17px;
}
</style>
