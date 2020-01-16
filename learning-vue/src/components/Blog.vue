<template>
  <div>
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
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
  name: "Blog",
  components: {
    Sidebar,
    Slider
  }
};
</script>

<style scoped>
</style>