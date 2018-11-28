<template>
  <div class="container">
		
   <Navigation />
        <section class="test">

        <section class="cat-profile">
          <router-link to="/foundDogs"><h5>&#x21BC TAGASI LEITUD KOERTE LEHELE</h5></router-link>

          <div class="left-profile">
            <img id="main-img" src="../assets/dog_1.jpg">
            <div class="profile-flex">
              <img src="../assets/dog_1.jpg">
              <img src="../assets/dog_1.jpg">
              <img src="../assets/dog_1.jpg">
            </div>
          </div>

          <div class="right-profile">
            <img id="gender" src="../assets/male.svg">
            <h2>koera nimi</h2>
            <div class="clearfix"></div>

            <h4>Liik</h4>
            <p>Koer</p>
            <div class="clearfix"></div>
            <h4>Vanus</h4>
            <p>5 aastat</p>
            <div class="clearfix"></div>
            <h4>Sugu</h4>
            <p>Isane</p>
            <div class="clearfix"></div>
            <h4>Varjupaigas alates</h4>
            <p>11.11.2018</p>
            <div class="clearfix"></div>
            <h4>Ster. / Kastr.</h4>
            <p>Jah</p>
            <div class="clearfix"></div>
            <br>
            <div class="kirjeldus">
              <h4>Kirjeldus</h4>
              <p>Lühike lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
            </div>
                    <div class="clearfix"></div>
            <br>
            <div class="kirjeldus" id="responsive">
              <h4>Tule mind vaatama!</h4>
                        <div class="clearfix"></div>
              <p> Helista <b>+372 555 5555</b> ja lepi kokku kohtumine! </p>
            </div>
            <div class="clearfix"></div>

            <button><router-link to="/kontakt" id="alumine_nupp">MEIE ASUKOHT</router-link></button>

          </div>

        </section>
		</section>
    
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'dog',
  components: {
    Footer,
    Navigation,
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
