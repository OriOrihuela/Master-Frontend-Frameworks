<template>
  <div>
    <article class="article-item">
      <div class="image-wrap">
        <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" />
      </div>
      <h3>{{pelicula.title}}</h3>
      <span
        class="date"
        :class="{
              yeargreen: pelicula.year >= 2015,
              yearred: pelicula.year < 2015
          }"
      >{{pelicula.year}}</span>
      <a href="#">Leer más</a>

      <input type="button" value="Marcar como favorita" @click="pasarFavoritaAlPadre(pelicula)" />

      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Pelicula",
  props: ["pelicula"],
  methods: {
    pasarFavoritaAlPadre(pelicula) {
      this.$emit("favorita", pelicula);
    }
  }
};
</script>

<style scoped>
</style>