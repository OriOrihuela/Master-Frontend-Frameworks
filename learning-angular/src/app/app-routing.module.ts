import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Component Imports.
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ErrorComponent } from "./components/error/error.component";

// Array of routes.
const ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "formulario",
    component: FormularioComponent
  },
  {
    path: "peliculas",
    component: PeliculasComponent
  },

  // Routes with params.
  {
    path: "pagina-de-pruebas",
    component: PaginaComponent
  },
  {
    path: "pagina-de-pruebas/:nombre",
    component: PaginaComponent
  },
  {
    path: "pagina-de-pruebas/:nombre/:apellidos",
    component: PaginaComponent
  },

  // Error Route MUST BE the last one.
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
