import React, { Component } from "react";

export default class Pelicula extends Component {
  /**
   * PROPERTIES
   */

  // Render method
  render() {
    const { titulo, image } = this.props.pelicula;
    return (
      <div>
        <article id="article-template" className="article-item">
          <div className="image-wrap">
            <img src={image} alt={titulo} />
          </div>
          <h2>{titulo}</h2>
          <span className="date">Hace 5 minutos</span>
          {/* <a href="#">Leer más</a> */}
          <button onClick={this.marcar}>Marcar como favorita</button>
          {/* LIMPIAR FLOATS */}
          <div className="clearfix"></div>
        </article>
      </div>
    );
  }

  /**
   * METHODS
   */
  marcar = () => {
    this.props.marcarFavorita(this.props.pelicula);
  };
}
