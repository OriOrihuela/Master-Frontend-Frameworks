<template>
  <div>
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <div id="articles" v-if="articles">
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
  name: "Blog",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  // Whenever the component is built.
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      url: GLOBAL.url,
      articles: null
    };
  },
  // Own methods.
  methods: {
    getArticles() {
      axios.get(this.url + "articles").then(response => {
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