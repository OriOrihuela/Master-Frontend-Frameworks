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
            <img src="../assets/logo.png" :alt="article.title" v-else />
          </div>
          <h1 class="subheader">{{article.title}}</h1>
          <span class="date">{{article.date | moment("from", "now")}}</span>
          <p>{{article.content}}</p>

          <!-- LIMPIAR FLOATS -->
          <div class="clearfix"></div>
          <div class="buttons">
            <router-link id="edit" :to="'/editar/' + article._id" class="btn btn-warning">Editar</router-link>
            <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a>
          </div>
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
import swal from "sweetalert";

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
    // MEthod to retrieve an article from the DB.
    getArticle(articleId) {
      axios.get(this.url + "/article/" + articleId).then(response => {
        if (response.data.status === "success") {
          this.article = response.data.article;
        }
      });
    },
    // Method to delete an article from the DB.
    deleteArticle(articleId) {
      swal({
        title: "¿Está seguro de querer borrar el artículo?",
        text: "Una vez borrado, será irrecuperable",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(this.url + "article/" + articleId).then(response => {
            if (response.data.status === "success") {
              swal(
                "Artículo borrado",
                "El artículo ha borrado correctamente",
                "success"
              );
              this.$router.push("/blog");
            }
          });
        } else {
          swal("El artículo no ha sido borrado");
        }
      });
    }
  }
};
</script>

<style scoped>
.buttons {
  display: flex;
}

.buttons #edit {
  margin-right: 15px;
}
</style>