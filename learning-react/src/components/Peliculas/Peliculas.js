import React, { Component } from "react";
import MensajeEstatico from '../MensajeEstatico/MensajeEstatico';

export default class Peliculas extends Component {
  render() {
    return (
      <div>
        <h4>Soy el componente de Película</h4>
        <MensajeEstatico></MensajeEstatico>
      </div>
    );
  }
}
