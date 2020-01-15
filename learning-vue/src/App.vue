<template>
  <div id="app">
    <Header></Header>
    <Slider></Slider>
    <div class="center">
      <LastArticles></LastArticles>
      <Sidebar></Sidebar>
      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import LastArticles from "./components/LastArticles";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Slider,
    Sidebar,
    LastArticles,
    Footer
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
