import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";

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
        titulo: "El señor de los anillos",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gOGi-dQQ5xaBpdS0a8YyMrnMUslwsFTtq4QDJ4REyPLRp64DjQ&s"
      }
    ],
    nombre: "Eduardo Orihuela Verdugo",
    favorita: {}
  };

  // Render method.
  render() {
    return (
      <div id="peliculas">
        <Slider title="Peliculas" size="slider-small"></Slider>
        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="subheader">Listado de peliculas</h2>
            <p>Selección de las películas favoritas de {this.state.nombre}</p>
            <button className="btn" onClick={this.changeTitle}>
              Cambiar título de Batman
            </button>
            {this.state.favorita.titulo ? (
              <p className="favorita">
                <strong>La pelicula favorita es: </strong>
                <span>{this.state.favorita.titulo}</span>
              </p>
            ) : (
              <p>No hay película favorita</p>
            )}
            {/* CREATE FILM COMPONENT */}
            <div id="articles" className="peliculas">
              {this.state.peliculas.map((pelicula, index) => {
                return (
                  <Pelicula
                    key={index}
                    pelicula={pelicula}
                    marcarFavorita={this.favorita}
                  ></Pelicula>
                );
              })}
            </div>
          </div>
          <Sidebar blog="false"></Sidebar>
        </div>
      </div>
    );
  }

  /**
   * METHODS
   */
  changeTitle = () => {
    let { peliculas } = this.state;
    peliculas[0].titulo = "Batman Begins";
    this.setState({
      peliculas: peliculas
    });
  };

  favorita = pelicula => {
    this.setState({
      favorita: pelicula
    });
  };
}
