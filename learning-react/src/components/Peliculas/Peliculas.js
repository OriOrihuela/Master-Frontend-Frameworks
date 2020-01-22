import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";

export default class Peliculas extends Component {
  /**
   * PROPERTIES
   */
  state = {
    peliculas: [
      {
        titulo: "Batman vs Superman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tNuPs5PSfZmfuZgHqnbnXvaKVC7tyZ53YIW0K8BwMUJh8QWq&s"
      },
      {
        titulo: "Gran Torino",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--DQBBY_3MqtNHYlJOe3C3jPK4mM3UrZM-PfpNYSh9ml5pCS5&s"
      },
      {
        title: "El señor de los anillos",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gOGi-dQQ5xaBpdS0a8YyMrnMUslwsFTtq4QDJ4REyPLRp64DjQ&s"
      }
    ],
    nombre: "Eduardo Orihuela Verdugo"
  };

  // Render method.
  render() {
    return (
      <div id="content" className="peliculas">
        <h2 className="subheader">Peliculas</h2>
        <p>Selección de las películas favoritas de {this.state.nombre}</p>
        {/* CREATE FILM COMPONENT */}
        <div id="articles" className="peliculas">
          {this.state.peliculas.map((pelicula, index) => {
            return <Pelicula key={index} pelicula={pelicula}></Pelicula>;
          })}
        </div>
      </div>
    );
  }
}
