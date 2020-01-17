<template>
  <div>
    <aside id="sidebar">
      <div id="search" class="sidebar-item">
        <h3>Puedes hacer esto</h3>
        <a href="#" class="btn btn-success">Crear artículo</a>
      </div>

      <div id="search" class="sidebar-item">
        <h3>Buscador</h3>
        <p>Encuentra el artículo que buscas</p>
        <form action="#" @submit.prevent="goSearch">
          <input type="text" name="search" v-model="searchString" />
          <input type="submit" value="Buscar" name="submit" class="btn" />
        </form>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      searchString: null
    };
  },
  methods: {
    goSearch() {
      // Redirection
      this.$router.push("/redirect/" + this.searchString)
    }
  }
};
</script>

<style scoped>
</style>