<template>
  <div class="container">
  
  <h2>LOOMAD VARJUPAIGAS</h2>

  <section class="loomad-varjupaigas">
    <section class="flex-cat">
      <router-link to="/foundCats"><img src="../assets/body_cat.jpg"></router-link>
      <h4>12 KASSI</h4>
    </section>
    <section class="flex-dog">
      <router-link to="/foundDogs"><img src="../assets/body_dog.jpg"></router-link>
      <h4>11 KOERA</h4>
    </section>
    <section class="flex-rabbit">
      <router-link to="/foundRabbits"><img src="../assets/body_rabbit.jpg"></router-link>
      <h4>8 JÄNEST</h4>
    </section>
  </section>

  </div>
</template>

<script>
export default {
  name: 'LoomadVarjupaigas',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loomad-varjupaigas {
    width: 1350px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
    padding-bottom: 150px;
  }

  .flex-cat img, .flex-dog img, .flex-rabbit img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    filter: blur(3px);
	  transition: 0.5s;
  }
  
  h2 {
    text-align: center;
    font-size: 30px;
    margin-top: 100px;
  }
  
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
  
</style>
