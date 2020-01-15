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
              <router-link to="/home" active-class="active">Inicio</router-link>
            </li>
            <li>
              <router-link to="/blog" active-class="active">Blog</router-link>
            </li>
            <li>
              <router-link to="/formulario" active-class="active">Formulario</router-link>
            </li>
            <li>
              <router-link :to="{name: 'pagina', params: {id: 'Soy el parámetro'}}" active-class="active">Página</router-link>
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