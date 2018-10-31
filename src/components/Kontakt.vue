<template>
  <div class="container">

    <section class="main-kontakt">
      <h2>VÕTA ÜHENDUST</h2>
      <section class="main-kontakt-flex">
        <section class="main-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.6112826405433!2d26.71251095172513!3d58.349359096153485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb37487c7817f9%3A0x31f91313d1bbe0ee!2sTartu+Vocational+Education+Center!5e0!3m2!1sen!2see!4v1540968749360" frameborder="0" allowfullscreen></iframe>
        </section>

        <section class="main-info">
          <h3>Telefon:</h3>
          <p>+372 555 5555</p>
          <h3>Aadress:</h3>
          <p>1337 Random Road, Tartu,<br> Tartumaa, 123456</p>
          <h3>E-mail:</h3>
          <p>loomadevarjupaik@gmail.com</p>
        </section>	
      </section>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Kontakt',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-kontakt {
    margin-bottom: 150px;
    margin-top: 120px;
  }

  .main-kontakt h2 {
    text-align: center;
    padding-bottom: 50px;
    font-size: 30px;
  }

  .main-kontakt-flex {
    display: flex;
    justify-content: center;
  }

  .main-map {
    margin-right: 50px;
  }

  .main-map iframe {
    width: 500px;
    height: 35vh;
    border: 0;
  }

  .main-info {
    margin-left: 50px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .main-info h3 {
    font-size: 25px;
    padding-bottom: 3px;
  }

  .main-info p {
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>
