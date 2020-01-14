"use strict";

// Import express package.
const EXPRESS = require("express");

// Import the "Article" controller.
const ARTICLE_CONTROLLER = require("../controllers/article");

// Create the router.
const ROUTER = EXPRESS.Router();

// Create a multi-party variable. It gives us functionality to create a middleware.
const MULTIPART = require("connect-multiparty");
const MIDDLEWARE_UPLOAD = MULTIPART({ uploadDir: "./upload/articles" });

/**
 * GET routes.
 */
ROUTER.get("/articles/:last?", ARTICLE_CONTROLLER.getArticles);
ROUTER.get("/article/:id", ARTICLE_CONTROLLER.getArticle);
ROUTER.get("/get-image/:image", ARTICLE_CONTROLLER.getImage);

/**
 * POST routes.
 */
ROUTER.post("/save", ARTICLE_CONTROLLER.save);
ROUTER.post(
  "/upload-image/:id",
  MIDDLEWARE_UPLOAD,
  ARTICLE_CONTROLLER.uploadImage
);

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
