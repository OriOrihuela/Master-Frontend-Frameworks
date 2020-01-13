"use strict";

// Import express package.
const EXPRESS = require("express");

// Import the "Article" controller.
const ARTICLE_CONTROLLER = require("../controllers/article");

// Create the router.
const ROUTER = EXPRESS.Router();

/**
 * GET routes.
 */
ROUTER.get("/test-de-controlador", ARTICLE_CONTROLLER.test);

/**
 * POST routes.
 */
ROUTER.post("/datos-curso", ARTICLE_CONTROLLER.datosCurso);

// Here we export the module.
module.exports = ROUTER;
