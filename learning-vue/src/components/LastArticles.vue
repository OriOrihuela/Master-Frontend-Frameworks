<template>
  <div>
    <Slider texto="Bienvenido al curso de Vue" home="true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!-- LISTADO ARTÍCULOS -->
        <div id="articles">
          <article id="article-template" class="article-item">
            <div class="image-wrap">
              <img
                src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"
                alt="Paisaje"
              />
            </div>
            <h2>Artículo de prueba</h2>
            <span class="date">Hace 5 minutos</span>
            <a href="#">Leer más</a>
            <!-- LIMPIAR FLOATS -->
            <div class="clearfix"></div>
          </article>
        </div>
      </section>
      <Sidebar></Sidebar>
      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";

export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar
  }
};
</script>

<style scoped>
</style>