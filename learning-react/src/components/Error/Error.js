import React, { Component } from "react";

export default class Error extends Component {
  render() {
    return (
      <div>
        <section id="content">
          <h2 className="subheader">Página no encontrada</h2>
          <p>La página a la que intentas acceder no existe en la web</p>
        </section>
      </div>
    );
  }
}
