"use strict";

// Import some validator module.
const VALIDATOR = require("validator");
const Article = require("../models/article");

// Define the controller with its own different behaviours.
const CONTROLLER = {
  save: (request, response) => {
    // Take the parameters by POST.
    const PARAMS = request.body;
    // Validate the data (validator).
    try {
      var validate_title = !VALIDATOR.isEmpty(PARAMS.title);
      var validate_content = !VALIDATOR.isEmpty(PARAMS.content);
    } catch (error) {
      // If there is not all the needed data...
      return response.status(200).send({
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
          return response.status(404).send({
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
      return response.status(200).send({
        status: "error",
        message: "Data is not valid."
      });
    }
  }
};

// Here we export the controller.
module.exports = CONTROLLER;
