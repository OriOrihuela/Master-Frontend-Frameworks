import React, { Component } from "react";

export default class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queso", "Jamón cocido"],
      calorias: 400
    };
    return (
      <div>
        <h1>{receta.nombre}</h1>
        <h1>{receta.calorias}</h1>
        <ul>
          {receta.ingredientes.map((ingrediente, i) => {
            return <li key={i}>{ingrediente}</li>;
          })}
        </ul>
      </div>
    );
  }
}
