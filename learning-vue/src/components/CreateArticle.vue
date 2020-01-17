<template>
  <div>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crea tu propio artículo</h1>
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

export default {
  name: "CreateArticle",
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
      axios.post(this.url + "save", this.article).then(response => {
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
              // Redirection.
              this.$router.push("/blog");
            }
          });
      } else {
        // Redirection.
        this.$router.push("/blog");
      }
    },
    // Linking the introduced image by the user to the article.
    fileChange() {
      this.file = this.$refs.file.files[0];
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
</style>