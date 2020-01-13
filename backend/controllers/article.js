"use strict";

// Define the controller with its own different behaviours.
const CONTROLLER = {
  datosCurso: (request, response) => {
    let hola = request.body.hola;
    return response.status(200).send({
      curso: "Máster en frontend frameworks",
      nombre: "Eduardo Orihuela",
      hola
    });
  },

  test: (request, response) => {
    return response.status(200).send({
      message: "Soy la acción test"
    });
  }
};

// Here we export the controller.
module.exports = CONTROLLER;
