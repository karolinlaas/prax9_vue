<template>
  <div class="container">

  <section id="loomad-varjupaigas-main" class="loomad-varjupaigas">
    <section class="flex-cat">
      <a href="found_cats.html"><img src="../assets/body_cat.jpg"></a>
    </section>
    <section class="flex-dog">
      <a href="found_dogs.html"><img src="../assets/body_dog.jpg"></a>
    </section>
    <section class="flex-rabbit">
      <a href="found_rabbits.html"><img src="../assets/body_rabbit.jpg"></a>
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
    padding-top: 150px;
    padding-bottom: 150px;
  }

  .flex-cat img, .flex-dog img, .flex-rabbit img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
</style>
