<template>
  <div class="container">
  
  <h2>LOOMAD VARJUPAIGAS</h2>

  <section class="loomad-varjupaigas">
    <section class="flex-cat">
      <router-link to="/foundCats"><img src="../assets/body_cat.jpg"></router-link>
    </section>
    <section class="flex-dog">
      <router-link to="/foundDogs"><img src="../assets/body_dog.jpg"></router-link>
    </section>
    <section class="flex-rabbit">
      <router-link to="/foundRabbits"><img src="../assets/body_rabbit.jpg"></router-link>
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
  }
  
  h2 {
    text-align: center;
    font-size: 30px;
    margin-top: 100px;
  }
  
</style>
