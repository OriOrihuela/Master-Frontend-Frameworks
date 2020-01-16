<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
        <form action="#" class="mid-form" @submit.prevent="mostrarUsuario">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellidos" />
          </div>
          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" cols="30" rows="10" v-model="user.bio"></textarea>
          </div>
          <div class="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" checked v-model="user.genero" /> Hombre
            <input type="radio" name="mujer" v-model="user.genero" /> Mujer
            <input type="radio" name="otro" v-model="user.genero" /> Otro
          </div>

          <!-- LIMPIAR FLOATS -->
          <div class="clearfix"></div>

          <!-- SUBMIT -->
          <input type="submit" value="Enviar" class="btn btn-success" />
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

export default {
  name: "Formulario",
  components: {
    Sidebar
  },
  data() {
    return {
      user: {
        nombre: "",
        apellidos: "",
        bio: "",
        genero: ""
      }
    };
  },
  // Own methods.
  methods: {
    mostrarUsuario() {
      console.log(this.user);
    }
  }
};
</script>

<style scoped>
</style>