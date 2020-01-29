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
  peliculas: Array<any>;

  // Constructor
  constructor() {
    this.peliculas = [
      {
        title: "Batman vs Superman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tNuPs5PSfZmfuZgHqnbnXvaKVC7tyZ53YIW0K8BwMUJh8QWq&s",
        year: 2019
      },
      {
        title: "Gran Torino",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--DQBBY_3MqtNHYlJOe3C3jPK4mM3UrZM-PfpNYSh9ml5pCS5&s",
        year: 2065
      },
      {
        title: "El señor de los anillos",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gOGi-dQQ5xaBpdS0a8YyMrnMUslwsFTtq4QDJ4REyPLRp64DjQ&s",
        year: 3000
      }
    ];
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
  ngOnDestroy() {
    console.log("OnDestroy lanzado");
  }
}
