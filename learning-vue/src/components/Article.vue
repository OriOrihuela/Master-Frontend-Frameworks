<template>
  <div>
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="this.url + 'get-image/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img src="../assets/logo.png" :alt="article.title"
              v-else>
          </div>
          <h1 class="subheader">{{article.title}}</h1>
          <span class="date">{{article.date | moment("from", "now")}}</span>
          <p>{{article.content}}</p>

          <!-- LIMPIAR FLOATS -->
          <div class="clearfix"></div>
        </article>
      </section>
      <Sidebar></Sidebar>
      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import GLOBAL from "../Global";
import axios from "axios";

export default {
  name: "Articles",
  components: {
    Sidebar
  },
  data() {
    return {
      url: GLOBAL.url,
      article: null
    };
  },
  // Whenever the component is built...
  mounted() {
    const ARTICLE_ID = this.$route.params.id;
    this.getArticle(ARTICLE_ID);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "/article/" + articleId).then(response => {
        if (response.data.status === "success") {
          this.article = response.data.article;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>