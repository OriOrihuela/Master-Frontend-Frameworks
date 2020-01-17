<template>
  <div>
    <Slider :texto="'Búsqueda: ' + searchString"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles">Artículos encontrados</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>
        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>
        <div v-else>
          <h2>No hay artículos que coincidan con tu búsqueda</h2>
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
  name: "Search",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  // Whenever the component is built.
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
      url: GLOBAL.url,
      articles: null,
      searchString: null
    };
  },
  // Own methods.
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url + "search/" + searchString).then(response => {
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