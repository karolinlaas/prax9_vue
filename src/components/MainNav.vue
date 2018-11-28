<template>
  <div class="container">

  <section class="main-header">
  <section class="main-row">
    <section class="main-logo">
      <router-link to="/">
        <img src="../assets/paw.png" alt="pawprint">
        <h1>Loomade Varjupaik</h1>
      </router-link>
    </section>

    <section class="main-nav">
      <ul>
        <li id="loomad_varjupaigas"><router-link to="/loomadVarjupaigas">Loomad varjupaigas</router-link></li>
        <li id="kadunud_loom"><router-link to="/kadunudLoom">Kadunud loomad</router-link></li>
        <li id="toeta_meid"><router-link to="/toetaMeid">Toeta meid</router-link></li>
        <li id="varjupaigast"><router-link to="/varjupaigast">Varjupaigast</router-link></li>
        <li id="kontakt"><router-link to="/kontakt">Kontakt</router-link></li>
      </ul>
    </section>
  </section>
  </section>

  </div>
</template>

<script>
export default {
  name: 'MainNav',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(header-kass.jpg);
    height: 45vh;
    background-position: bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }

  .main-row {
    padding-top: 50px;
    padding-left: 150px;
    padding-right: 150px;
    margin: 0 auto;
  }

  .main-logo {
    float: left;
    padding-top: 30px;
    overflow: hidden;
  }

  .main-logo img {
    width: 75px;
    float: left;
    transform: rotate(18deg);
    position: relative;
  }

  .main-logo h1 {
    float: left;
    font-size: 38px;
    padding-top: 45px;
    position: absolute;
    padding-left: 48px;
    font-weight: 400;
    color: white;
  }

  .main-nav {
    float: right;
    padding-top: 90px;
  }

  .main-nav ul {
    list-style-type: none;
  }

  .main-nav li {
    display: inline;
    margin-left: 18px;
    font-size: 18px;
  }

  .main-nav a {
    text-decoration: none;
    color: white;
    transition: border-bottom .1s linear;
  }

  .main-nav a:hover {
    border-bottom: solid 2px white;
  }
	
	@media all and (max-width: 1380px) {		
		.main-row, .row {
			overflow: hidden;
			width: 1250px;
			padding-left: 30px;
			padding-right: 30px;}
	}
</style>
