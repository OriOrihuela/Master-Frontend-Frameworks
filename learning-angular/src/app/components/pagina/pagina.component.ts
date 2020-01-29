import { Component, OnInit } from "@angular/core";

// Routing imports.
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-pagina",
  templateUrl: "./pagina.component.html",
  styleUrls: ["./pagina.component.css"]
})
export class PaginaComponent implements OnInit {
  /**
   * PROPERTIES
   */
  nombre: String;
  apellidos: String;

  // Constructor.
  constructor(private route: ActivatedRoute, private router: Router) {}

  // Whenever the component is built...
  ngOnInit() {
    // Retrieve the params from the URL.
    this.route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellidos = params.apellidos
    });
  }
}
