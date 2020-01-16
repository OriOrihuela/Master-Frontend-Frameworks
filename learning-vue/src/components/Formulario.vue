<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
      </section>
      <Sidebar></Sidebar>
      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "Formulario",
  components: {
    Sidebar
  }
};
</script>

<style scoped>
</style>