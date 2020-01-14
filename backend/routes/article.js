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
ROUTER.get("/articles/:last?", ARTICLE_CONTROLLER.getArticles);
ROUTER.get("/article/:id", ARTICLE_CONTROLLER.getArticle);

/**
 * POST routes.
 */
ROUTER.post("/save", ARTICLE_CONTROLLER.save);
ROUTER.post("/upload-image/:id", ARTICLE_CONTROLLER.upload);

/**
 * PUT routes.
 */
ROUTER.put("/article/:id", ARTICLE_CONTROLLER.update);

/**
 * DELETE routes.
 */
ROUTER.delete("/article/:id", ARTICLE_CONTROLLER.delete);

// Here we export the module.
module.exports = ROUTER;
