import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import LastArticles from "./components/LastArticles";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Pagina from "./components/Pagina";
import ErrorComponent from './components/ErrorComponent';

Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: LastArticles },
    { path: "/home", component: LastArticles },
    { path: "/blog", component: Blog },
    { path: "/formulario", component: Formulario },
    // Redirection to component with optional parameter.
    { path: "/pagina/:id?", name: "pagina", component: Pagina },
    // Error or 404 page.
    { path: "*", component: ErrorComponent }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
