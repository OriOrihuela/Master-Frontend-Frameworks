<template>
  <div>
    <article class="article-item" v-for="article in articles" :key="article">
      <div class="image-wrap">
        <img :src="url + 'get-image/' + article.image" :alt="article.title" v-if="article.image" />
        <img src="../assets/logo.png" :alt="article.title" v-else />
      </div>
      <h2>{{article.title}}</h2>
      <span class="date">{{article.date}}</span>
      <a href="#">Leer más</a>
      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
import GLOBAL from "../Global";
export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      url: GLOBAL.url
    };
  }
};
</script>

<style scoped>
</style>