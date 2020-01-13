"use strict";

// Import some validator module.
const VALIDATOR = require("validator");
const Article = require("../models/article");

// Define the controller with its own different behaviours.
const CONTROLLER = {
  // Behaviour to save any article.
  save: (request, response) => {
    // Take the parameters by POST.
    const PARAMS = request.body;
    // Validate the data (validator).
    try {
      var validate_title = !VALIDATOR.isEmpty(PARAMS.title);
      var validate_content = !VALIDATOR.isEmpty(PARAMS.content);
    } catch (error) {
      // If there is not all the needed data...
      return response.status(404).send({
        status: "error",
        message: "There is some missing data."
      });
    }
    // If the data si valid...
    if (validate_title && validate_content) {
      // Create the article which will be saved.
      var article = new Article();
      // Assign values.
      article.title = PARAMS.title;
      article.content = PARAMS.content;
      article.image = null;
      // Save the article.
      article.save((error, articleStored) => {
        // If there is any error or the article cannot be saved...
        if (error || !articleStored) {
          return response.status(500).send({
            status: "error",
            message: "The article has not been saved!"
          });
        } else {
          // Return a succesful response.
          return response.status(200).send({
            status: "success",
            article
          });
        }
      });
    } else {
      return response.status(500).send({
        status: "error",
        message: "Data is not valid."
      });
    }
  },

  // Behaviour to retrieve all the articles in the DB.
  getArticles: (request, response) => {
    const QUERY = Article.find({});
    // In case the optional endpoint in the route "last" is required...
    const LAST = request.params.last;
    if (LAST || LAST !== undefined) {
      QUERY.limit(5)
    }
    // Find all the articles.
    QUERY
      .sort("-_id")
      .exec((error, articles) => {
        // If there is any error...
        if (error) {
          return response.status(500).send({
            status: "error",
            message: "Error when retrieving the articles."
          });
          // Or there are not stored articles in the DB...
        } else if (!articles) {
          return response.status(404).send({
            status: "error",
            message: "There aren't articles in the DB."
          });
          // Return all the articles.
        } else {
          return response.status(200).send({
            status: "success",
            articles
          });
        }
      });
  }
};

// Here we export the controller.
module.exports = CONTROLLER;
