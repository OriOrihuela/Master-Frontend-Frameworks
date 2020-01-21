<template>
  <div>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Editar artículo</h1>
        <!-- FORM -->
        <form class="mid-form" @submit.prevent="submit">
          <div class="form-group">
            <label for="title">Título</label>
            <input type="text" name="title" v-model="article.title" />
            <div v-if="submitted && !$v.article.title.required">Introduce un título</div>
          </div>
          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea type="text" name="content" v-model="article.content" />
            <div
              v-if="submitted && !$v.article.content.required"
            >Introduce contenido para el artículo</div>
          </div>
          <div class="form-group">
            <label for="image">Imagen</label>
            <input type="file" name="file0" id="file" ref="file" @change="fileChange" />
            <img
              v-if="article.image"
              :src="this.url + 'get-image/' + article.image"
              :alt="article.title"
            />
          </div>
          <!-- LIMPIAR FLOATS -->
          <div class="clearfix"></div>
          <input type="submit" value="Guardar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar></Sidebar>
      <!-- LIMPIAR FLOATS -->
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import ARTICLE from "../models/article";
import GLOBAL from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      article: ARTICLE,
      file: null,
      url: GLOBAL.url,
      submitted: false
    };
  },
  // Whenever the component is built.
  mounted() {
    const ARTICLE_ID = this.$route.params.id;
    this.getArticle(ARTICLE_ID);
  },
  methods: {
    // Method to submit the form.
    submit() {
      this.submitted = true;
      // The validations have been touched...
      this.$v.$touch();
      // If the form is invalid...
      if (this.$v.$invalid) {
        // Fails silently.
        return false;
      } else {
        // Save the data submitted by the form.
        this.saveData();
      }
    },
    // Method to save any article created by the user.
    saveData() {
      // Retrieve the article._id from the route.
      const ARTICLE_ID = this.$route.params.id;
      axios
        .put(this.url + "article/" + ARTICLE_ID, this.article)
        .then(response => {
          if (response.data.status === "success") {
            this.saveArticle(response);
          }
        });
    },
    // In case the response.data.status is === "success".
    saveArticle(response) {
      // Uploading the image file in case has content.
      if (this.file !== null && this.file !== undefined && this.file !== "") {
        // Create a FormData instance.
        const FORM_DATA = new FormData();
        // /**
        //  * Append to it the key "file0" with the image value
        //  * (this.file.name) and the full content  of the file
        //  */
        FORM_DATA.append("file0", this.file, this.file.name);
        axios
          .post(
            this.url + "upload-image/" + response.data.article._id,
            FORM_DATA
          )
          .then(response => {
            if (response.data.article) {
              swal(
                "Artículo editado",
                "El artículo se ha editado correctamente",
                "success"
              );
              // Redirection.
              this.$router.push("/articulo/" + this.article._id);
            } else {
              swal(
                "Creación fallida",
                "El artículo no se ha guardado bien",
                "error"
              );
            }
          })
          .catch(error => {
            swal(
              "Creación fallida",
              "El artículo no se ha guardado bien",
              "error"
            );
          });
      } else {
        swal(
          "Artículo editado",
          "El artículo se ha editado correctamente",
          "success"
        );
        // Redirection.
        this.$router.push("/articulo/" + this.article._id);
      }
    },
    // Linking the introduced image by the user to the article.
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    // Method to retrieve a desired article from the DB.
    getArticle(articleId) {
      axios.get(this.url + "/article/" + articleId).then(response => {
        if (response.data.status === "success") {
          this.article = response.data.article;
        }
      });
    }
  },
  validations: {
    article: {
      title: { required },
      content: { required }
    }
  }
};
</script>

<style scoped>
#file {
  border: none;
}

img {
  width: 100%;
  margin-bottom: 15px;
}
</style>