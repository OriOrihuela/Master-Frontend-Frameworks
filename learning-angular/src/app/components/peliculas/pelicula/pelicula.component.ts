import { Component, OnInit, Input, Output } from "@angular/core";
import Pelicula from "src/app/models/Pelicula";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styleUrls: ["./pelicula.component.css"]
})
export class PeliculaComponent implements OnInit {
  /**
   * PROPERTIES
   */
  @Input() pelicula: Pelicula;
  @Output() marcarFavorita = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  // Method to pass data (selected movie) from this component to its father.
  pasarFavorita(pelicula) {
    this.marcarFavorita.emit(pelicula);
  }
}
