<template>
  <div>
    <h1>Redirigiendo...</h1>
  </div>
</template>

<script>
export default {
  name: "Redirect",
  // Whenever the component is built...
  mounted() {
    const SEARCH_STRING = this.$route.params.searchString;
    this.$router.push("/buscador/" + SEARCH_STRING);
  }
};
</script>

<style scoped>
</style>