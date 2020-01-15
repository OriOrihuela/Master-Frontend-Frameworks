<template>
  <div>
    <section id="content">
      <h2 class="subheader">Películas</h2>
      <!-- LISTADO PELÍCULAS -->
      <div id="articles">
        <article class="article-item" v-for="pelicula in peliculas" :key="pelicula">
          <div class="image-wrap">
            <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" />
          </div>
          <h2>{{pelicula.title}}</h2>
          <span class="date">{{pelicula.year}}</span>
          <a href="#">Leer más</a>

          <!-- LIMPIAR FLOATS -->
          <div class="clearfix"></div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Peliculas",
  data() {
    return {
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tNuPs5PSfZmfuZgHqnbnXvaKVC7tyZ53YIW0K8BwMUJh8QWq&s"
        },
        {
          title: "Gran Torino",
          year: 2015,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--DQBBY_3MqtNHYlJOe3C3jPK4mM3UrZM-PfpNYSh9ml5pCS5&s"
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gOGi-dQQ5xaBpdS0a8YyMrnMUslwsFTtq4QDJ4REyPLRp64DjQ&s"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>