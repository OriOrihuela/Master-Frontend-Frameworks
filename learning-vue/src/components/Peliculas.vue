<template>
  <div>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Películas</h1>
        <div
          class="mis-datos"
          v-if="misDatos"
        >{{misDatos | mayusculas | concatenateYear("Este es el mejor año")}}</div>
        <div class="favorita" v-if="favorita">
          <p>La película marcada es:</p>
          <h2>{{favorita.title}}</h2>
        </div>
        <!-- LISTADO PELÍCULAS -->
        <div id="articles">
          <div v-for="pelicula in peliculasMayuscula" :key="pelicula">
            <Pelicula :pelicula="pelicula" @favorita="recibirFavorita"></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";

export default {
  name: "Peliculas",
  components: {
    Sidebar,
    Pelicula
  },
  data() {
    return {
      nombre: "Eduardo",
      apellidos: "Orihuela Verdugo",
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
      ],
      favorita: null
    };
  },
  // Own methods of the component.
  methods: {
    recibirFavorita(favorita) {
      this.favorita = favorita;
    }
  },
  // Computed properties
  computed: {
    peliculasMayuscula() {
      let peliculasMod = this.peliculas;
      for (let index = 0; index < peliculasMod.length; index++) {
        peliculasMod[index].title = peliculasMod[index].title.toUpperCase();
      }
      return peliculasMod;
    },
    misDatos() {
      return this.nombre + " " + this.apellidos;
    }
  },
  // Using filters.
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
    concatenateYear(value, message) {
      const DATE = new Date();
      return value + " " + DATE.getFullYear() + " " + message;
    }
  }
};
</script>

<style scoped>
</style>