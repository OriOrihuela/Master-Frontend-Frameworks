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
        <article id="article-template" class="article-item">
          <div class="image-wrap">
            <img src={image} alt={titulo} />
          </div>
          <h2>{titulo}</h2>
          <span class="date">Hace 5 minutos</span>
          <a href="#">Leer más</a>
          {/* LIMPIAR FLOATS */}
          <div class="clearfix"></div>
        </article>
      </div>
    );
  }
}
