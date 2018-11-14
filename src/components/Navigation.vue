<template>
  <div class="container">
  <header>
  <section class="header">
  <section class="row">
    <section class="logo">
      <router-link to="/">
        <img src="../assets/paw.png" alt="pawprint">
        <h1>Loomade Varjupaik</h1>
      </router-link>
    </section>

    <section class="nav">
      <ul>
        <li id="varjupaigas"><router-link exact-active-class="active"  class="nav-link" to="/loomadVarjupaigas">Loomad varjupaigas</router-link></li>
        <li id="kadunud_loom"><router-link class-active="active" to="/kadunudLoom">Kadunud loomad</router-link></li>
        <li id="toeta_meid"><router-link router-link-exact-active to="/toetaMeid">Toeta meid</router-link></li>
        <li id="varjupaigast"><router-link router-link-exact-active to="/varjupaigast">Varjupaigast</router-link></li>
        <li id="kontakt"><router-link router-link-exact-active to="/kontakt">Kontakt</router-link></li>
      </ul>
    </section>
  </section>
  </section>
  </header>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
	padding-top: 15px;
	padding-left: 150px;
	padding-right: 150px;
	margin: 0 auto;
}
  
.logo img {
	float: left;
	padding-top: 30px;
}
  
.logo img {
	width: 75px;
	float: left;
	transform: rotate(18deg);
	position: relative;
}

.logo h1 {
	float: left;
	font-size: 38px;
	position: absolute;
	padding-top: 78px;
	padding-left: 45px;
	font-weight: 400;
	color: white;
}

.nav {
	float: right;
	padding-top: 90px;
}

.nav ul {
	list-style-type: none;
}

.nav li {
	display: inline;
	margin-left: 18px;
	font-size: 18px;
}

.nav a {
	text-decoration: none;
	color: white;
	transition: border-bottom .1s linear;
}

.nav a:hover {
	border-bottom: solid 2px white;
}

#active a {
	color: #33ccff;
	border-bottom: none;
}
  
header {
	background-color: #715b5b;
	height: 200px;
	color: white;
}

.logo h1 {
	padding-top: 78px;
	padding-left: 45px;
}
</style>
