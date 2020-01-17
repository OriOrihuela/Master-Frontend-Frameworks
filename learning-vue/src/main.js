import Vue from "vue";

// vue-moment and moment imports.
import VueMoment from "vue-moment";
import moment from "moment";
import "moment/locale/es";

// vue-router
import VueRouter from "vue-router";

// Custom components.
import App from "./App.vue";
import LastArticles from "./components/LastArticles";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Pagina from "./components/Pagina";
import ErrorComponent from "./components/ErrorComponent";
import Peliculas from "./components/Peliculas";
import Search from "./components/Search";
import Redirect from "./components/Redirect";
import Article from "./components/Article";

// Forms validator.
import Vuelidate from "vuelidate";

// Router and forms validator.
Vue.use(VueRouter);
Vue.use(Vuelidate);

// Vue-moment and moment modules to use on dates.
Vue.use(VueMoment, {
  moment
});

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: LastArticles },
    { path: "/home", component: LastArticles },
    { path: "/blog", component: Blog },
    { path: "/formulario", component: Formulario },
    { path: "/peliculas", name: "peliculas", component: Peliculas },
    { path: "/articulo/:id", name: "article", component: Article },
    // Whenever the user wnats to search something using the sidebar form...
    { path: "/buscador/:searchString", component: Search },
    { path: "/redirect/:searchString", component: Redirect },
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
