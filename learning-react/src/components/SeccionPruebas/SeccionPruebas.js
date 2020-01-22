import React, { Component } from "react";

export default class SeccionPruebas extends Component {
  render() {
    return (
      <div>
        <section id="content">
        <h2 class="subheader">Últimos artículos</h2>
        {/* ARTICLES LIST */}
        <div id="articles">
          <article id="article-template" class="article-item">
            <div class="image-wrap">
              <img
                src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"
                alt="Paisaje"
              />
            </div>
            <h2>Artículo de prueba</h2>
            <span class="date">Hace 5 minutos</span>
            <a href="#">Leer más</a>
            {/* CLEAN FLOATS */}
            <div class="clearfix"></div>
          </article>
        </div>
      </section>
      </div>
    );
  }
}
