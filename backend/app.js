"use strict";
// Import some Node modules.
const EXPRESS = require("express");
const BODY_PARSER = require("body-parser");
// Execute express (http).
const APP = EXPRESS();
// Upload route files.

// Middlewares to process certain information before uploading some routes.
APP.use(BODY_PARSER.urlencoded({ extended: false }));
APP.use(BODY_PARSER.json());
// CORS

// Add prefixes to the routes.

// Routes or test behaviour.
APP.get("/probando", (request, response) => {
    let hola = request.body.hola;
  return response.status(200).send({
    curso: "Máster en frameworks JS",
    autor: "Eduardo Orihuela Verdugo",
    hola
  });
});
// Export of this modules to be used in "index.js".
module.exports = APP;
