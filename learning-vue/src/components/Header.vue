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
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="formulario.html">Formulario</a>
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