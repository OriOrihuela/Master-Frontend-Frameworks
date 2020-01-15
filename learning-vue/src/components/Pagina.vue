<template>
  <div>
    <section id="content">
      <h2 class="subheader">Página de pruebas</h2>
      <h3>{{id_desde_url}}</h3>
      <button @click="actualizarNombre()">Actualizar nombre</button>
      <h4>{{nombre}}</h4>
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
      nombre: "Eduardo Orihuela"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "EDUARDO ORIHUELA";
      console.log(this.nombre);
    }
  }
};
</script>

<style scoped>
</style>