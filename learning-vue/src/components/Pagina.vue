<template>
  <div>
    <section id="content">
      <h2 class="subheader">Página de pruebas</h2>
      <h3>{{id_desde_url}}</h3>
      <button @click="actualizarNombre()">Actualizar nombre</button>
      <button @click="redirigirAlBlog()">Redirigir al blog</button>

      <!-- Testing reactivity (two-way data binding) -->
      <h2>Reactividad</h2>
      <input type="text" name="nombre" v-model="nombre" />
      <h4>Mi nombre es: {{nombre}}</h4>

      <!-- Conditional directives (v-if, v-else-if, v-else) -->
      <h2>Directivas condicionales</h2>
      <input type="number" name="number" v-model="edad" />
      <h4>Mi edad es: {{edad}}</h4>
      <p
        style="color: green; font-weight: bold;"
        v-if="edad && edad >= 18 && edad < 65"
      >Hola mayor de edad</p>
      <p style="color: purple; font-weight: bold;" v-else-if="edad && edad >= 65">Hola anciano</p>
      <p style="color: red; font-weight: bold;" v-else>Hola menor de edad</p>

      <!-- Iterative directive (v-for) -->
      <h2>Directiva iterativa</h2>
      <ul>
        <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Pagina",
  /**
   * COMPONENT LIFECYCLE
   */
  // Whenever the component is created...
  created() {},
  // Whenever the component is built...
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  // Whenever the component is updated...
  updated() {},
  // Whenever the component is destroyed...
  destroyed() {},
  data() {
    return {
      id_desde_url: null,
      nombre: "Eduardo Orihuela",
      edad: 24,
      peliculas: ["Batman vs Superman", "TLOTR", "Cacatúa Sónica"]
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "EDUARDO ORIHUELA";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
    }
  }
};
</script>

<style scoped>
</style>