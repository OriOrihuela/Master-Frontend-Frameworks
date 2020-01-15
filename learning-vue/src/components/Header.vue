<template>
  <div>
    <header id="header">
      <div class="center">
        <!-- LOGO -->
        <div id="logo">
          <img src="../assets/logo.png" alt="logotipo" class="app-logo" />
          <span id="brand">
            <strong>Curso</strong> Vue
          </span>
        </div>

        <!-- NAVIGATION MENU -->
        <nav id="menu">
          <ul>
            <li>
              <router-link to="/home">Inicio</router-link>
            </li>
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
            <li>
              <router-link to="/formulario">Formulario</router-link>
            </li>
            <li>
              <router-link :to="{name: 'pagina', params: {id: 'Soy el parámetro'}}">Página</router-link>
            </li>
          </ul>
        </nav>

        <!-- LIMPIAR FLOATS -->
        <div class="clearfix"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>