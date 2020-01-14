"use strict";

// Import some Node modules.
const EXPRESS = require("express");
const BODY_PARSER = require("body-parser");

// Execute express (http).
const APP = EXPRESS();

// Upload route files.
const ARTICLE_ROUTES = require("./routes/article");

// Middlewares to process certain information before uploading some routes.
APP.use(BODY_PARSER.urlencoded({ extended: false }));
APP.use(BODY_PARSER.json());

// CORS (crossing access between domains -> allow HTTP / AJAX / Asynchronous requests).
APP.use((request, response, next) => {
  // Any client can make requests
  response.header("Access-Control-Allow-Origin", "*");
  // Allow all these headers.
  response.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  // Allow HTTP methods.
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  response.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Add prefixes or upload the routes.
APP.use("/api", ARTICLE_ROUTES);

// Export of this modules to be used in "index.js".
module.exports = APP;
