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

// CORS

// Add prefixes or upload the routes.
APP.use("/api", ARTICLE_ROUTES);

// Routes or test behaviour.

// Export of this modules to be used in "index.js".
module.exports = APP;
