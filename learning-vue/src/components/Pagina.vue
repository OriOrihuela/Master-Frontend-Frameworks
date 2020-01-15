<template>
  <div>
    <section id="content">
      <h2 class="subheader">Página de pruebas</h2>
      <h3>{{id_desde_url}}</h3>
    </section>
  </div>
</template>

<script>
export default {
  name: "Pagina",
  // Whenever the component is uploaded...
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null
    };
  }
};
</script>

<style scoped>
</style>