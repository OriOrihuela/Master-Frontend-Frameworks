import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  /**
   * PROPERTIES
   */
  titulo: string;

  // Constructor
  constructor() {
    this.titulo = "Componente peliculas";
    console.log("Constructor lanzado");
  }

  /**
   * COMPONENT LIFECYCLE -> HOOKS
   */

  // Whenever the component is built...
  ngOnInit() {
    console.log("Componente iniciado");
  }

  // Whenever the component is updated...
  ngDoCheck() {
    console.log("DoCheck lanzado");
  }

  // Whenever the component is destroyed...
  OnDestroy() {
    console.log("OnDestroy lanzado");
  }

  /**
   * OWN METHODS
   */
  cambiarTitulo() {
    this.titulo = "El título ha sido cambiado";
  }
}
