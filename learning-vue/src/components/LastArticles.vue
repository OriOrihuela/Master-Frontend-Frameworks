<template>
  <div>
    <Slider texto="Bienvenido al curso de Vue" home="true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>
        <!-- LISTADO ARTÍCULOS -->
        <div id="articles">
          <Articles :articles="articles"></Articles>
        </div>
      </section>
      <Sidebar></Sidebar>
      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import GLOBAL from "../Global";
import axios from "axios";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

export default {
  name: "LastArticles",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  // Whenever the component is built.
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      url: GLOBAL.url,
      articles: null
    };
  },
  // Own methods.
  methods: {
    getLastArticles() {
      axios.get(this.url + "articles/true").then(response => {
        if (response.data.status === "success") {
          this.articles = response.data.articles;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>