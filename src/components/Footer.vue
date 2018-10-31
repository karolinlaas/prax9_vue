<template>
  <div class="container">
  <footer>
    <section class="footer-flex">

      <section class="footer-kontakt">

        <div class="grid-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 9l24-9-8.986 24-3.014-12z"/></svg>
        </div>
        <div class="grid-right">
          <h3>+372 555 55555</h3>
        </div>

        <div class="grid-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
        </div>
        <div class="grid-right">
          <h3>1337 Random Road, Tartu,<br>Tartumaa, 123456</h3>
        </div>

        <div class="grid-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
        </div>
        <div class="grid-right">
          <h3>loomadevarjupaik@gmail.com</h3>
        </div>

      </section>

      <section class="footer-social">
        <h2>Jälgi meid</h2>
        <div class="footer-icons">
          <a id="facebook" href="https://www.facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
          <a id="twitter" href="https://www.twitter.com"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
          <a id="instagram" href="https://www.instagram.com"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z" fill-rule="evenodd" clip-rule="evenodd"/></svg></a>
        </div>
      </section>

      <section class="footer-toetaja">
        <h2>Toetaja</h2>
        <div class="toetaja-image">
          <img src="../assets/purina_logo.png" alt="Purina">
        </div>
      </section>

    </section>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer {
    background-color: #4F4F4F;
    color: #E5E5E5;
  }

  .footer-flex {
    display: flex;
    justify-content: space-around;
    padding: 50px 100px;
  }

  .footer-kontakt {
    display: grid;
    grid-template-columns: 30px 250px;
    grid-template-rows: 30px 50px 30px;
    grid-row-gap: 15px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .grid-left {
    align-self: center;
  }

  .grid-right {
    align-self: center;
  }

  .footer-kontakt h3 {
    font-weight: 400;
    font-size: 20px;
  }

  .footer-kontakt svg {
    fill: #FFFFFF;
  }

  .footer-icons svg {
    fill: #FFFFFF;
  }

  .footer-social {
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
  }

  .footer-icons {
    text-align: center;
    margin: 15px 0 0 0;
  }

  .footer-icons svg {
    margin: 20px 25px 0px 25px;
  }

  .footer-toetaja {
    text-align: center;
    margin: auto 0 auto 0;
  }
</style>
