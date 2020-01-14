"use strict";

/**
 * IMPORTS
 */
// validator module to check certain conditions.
const VALIDATOR = require("validator");
// Article schema.
const Article = require("../models/article");
// fs module to get some functionality applied to any file.
const FS = require("fs");
const PATH = require("path");

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
      QUERY.limit(5);
    }
    // Find all the articles.
    QUERY.sort("-_id").exec((error, articles) => {
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
  },

  // Behaviour to retrieve only one article from the DB.
  getArticle: (request, response) => {
    // Take the ID from the URL.
    const ARTICLE_ID = request.params.id;
    // Check if exists.
    if (!ARTICLE_ID || ARTICLE_ID === null) {
      return response.status(404).send({
        status: "error",
        message: "An ID is required to search for an article!"
      });
    }
    // Look for the article.
    Article.findById(ARTICLE_ID, (error, article) => {
      // If there is any error retrieving the article from the DB...
      if (error || !article) {
        return response.status(404).send({
          status: "error",
          message: "An article with that ID does not exist!"
        });
        // If there is not any article with that ID...
      } else {
        // Return the article in JSON.
        return response.status(200).send({
          status: "success",
          article
        });
      }
    });
  },

  // Behaviour to update the data from an article.
  update: (request, response) => {
    // Retrieve the data from the PUT request.
    const PARAMS = request.body;
    // Take the ID from the URL.
    const ARTICLE_ID = request.params.id;
    // Validate the data.
    try {
      var validate_title = !VALIDATOR.isEmpty(PARAMS.title);
      var validate_content = !VALIDATOR.isEmpty(PARAMS.content);
    } catch (error) {
      return response.status(404).send({
        status: "error",
        message: "Some data is required to be sent!"
      });
    }
    if (validate_title && validate_content) {
      // Find and update the article.
      Article.findOneAndUpdate(
        { _id: ARTICLE_ID },
        PARAMS,
        { new: true },
        (error, articleUpdated) => {
          if (error) {
            return response.status(500).send({
              status: "error",
              message: "Error when update!"
            });
          } else if (!articleUpdated) {
            return response.status(404).send({
              status: "error",
              message: "The article does not exist!"
            });
          } else {
            // Return a response.
            return response.status(200).send({
              status: "success",
              article: articleUpdated
            });
          }
        }
      );
    } else {
      // If the data is not valid...
      return response.status(500).send({
        status: "error",
        message: "Data is not valid!"
      });
    }
  },

  // Behaviour to delete any article.
  delete: (request, response) => {
    // Take the ID from the URL.
    const ARTICLE_ID = request.params.id;
    // Find and delete.
    Article.findOneAndDelete({ _id: ARTICLE_ID }, (error, removedArticle) => {
      // If there is any error...
      if (error) {
        return response.status(500).send({
          status: "error",
          message: "Error when deleting the article!"
        });
        // If there is not any article with that ID in the DB...
      } else if (!removedArticle) {
        return response.status(404).send({
          status: "error",
          message:
            "The article has not been removed; maybe does not exist in the DB!"
        });
        // Return the a response just to see which article has been removed.
      } else {
        return response.status(200).send({
          status: "success",
          article: removedArticle
        });
      }
    });
  },

  // Behaviour to upload files.
  uploadImage: (request, response) => {
    // Take the file from the request.
    let file_name = "Image not uploaded";
    // In case the request does not bring any image...
    if (!request.files) {
      return response.status(404).send({
        status: "error",
        message: file_name
      });
    }
    // Get the name and extension from the file.
    const FILE_PATH = request.files.file0.path;
    const FILE_SPLIT = FILE_PATH.split("\\");
    /**
     * FOR LINUX AND MAC -> let file_split = file_path.split("/")
     */
    // The name:
    file_name = FILE_SPLIT[2];
    // The extension:
    const EXTENSION_SPLIT = file_name.split(".");
    const FILE_EXTENSION = EXTENSION_SPLIT[1];
    // Check the extension (only images). If it is not valid, delete the file.
    if (
      FILE_EXTENSION !== "png" &&
      FILE_EXTENSION !== "jpg" &&
      FILE_EXTENSION !== "jpeg" &&
      FILE_EXTENSION !== "gif"
    ) {
      // Delete the uploaded file.
      FS.unlink(FILE_PATH, error => {
        return response.status(500).send({
          status: "error",
          message: "The image extension is not valid!"
        });
      });
      // If everything is valid...
    } else {
      // Take the article ID from the URL.
      const ARTICLE_ID = request.params.id;
      // Look for the article, assign the image to it and update it.
      Article.findOneAndUpdate(
        { _id: ARTICLE_ID },
        { image: file_name },
        { new: true },
        (error, articleUpdated) => {
          if (error || !articleUpdated) {
            return response.status(500).send({
              status: "error",
              message: "Error when saving the image from the article!"
            });
          } else {
            return response.status(200).send({
              status: "success",
              article: articleUpdated
            });
          }
        }
      );
    }
  },

  // Behaviour to retrieve an image from the backend to the frontend.
  getImage: (request, response) => {
    // Take the file from the URL.
    const FILE = request.params.image;
    // Retrieve the path of the file.
    const PATH_FILE = "./upload/articles/" + FILE;
    // Check if the file exists.
    FS.exists(PATH_FILE, exists => {
      if (exists) {
        return response.sendFile(PATH.resolve(PATH_FILE));
      } else {
        return response.status(404).send({
          status: "error",
          message: "The file does not exist!"
        });
      }
    });
  },

  // Behaviour to search any article in the DB.
  search: (request, response) => {
    // Retrieve the string to find in the DB.
    const SEARCH_STRING = request.params.search;
    // Find it in the DB.
    Article.find({
      // MongoDB $or -> to be true whenever one of these conditions are true:
      $or: [
        // If SEARCH_STRING is contained in the title property ($options: "i" -> case insensitive).
        { title: { $regex: SEARCH_STRING, $options: "i" } },
        // If SEARCH_STRING is contained in the content property ($options: "i" -> case insensitive).
        { content: { $regex: SEARCH_STRING, $options: "i" } }
      ]
    })
      // Here we sort the results by the date and in a descending way.
      .sort([["date", "descending"]])
      // Execute the query.
      .exec((error, articles) => {
        // If there is any error...
        if (error) {
          return response.status(500).send({
            status: "error",
            message: "Error in the request"
          });
          // If there are not any articles containing that search...
        } else if (!articles || articles.length <= 0) {
          return response.status(404).send({
            status: "error",
            message: "There are no articles that match your search!"
          });
        } else {
          // Return the article/s containing the search.
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
