"use strict";

// Import of the Mongoose library.
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

// The Article schema.
let ArticleSchema = SCHEMA(
  {
    title: String,
    content: String,
    date: {
      type: Date,
      default: Date.now
    },
    image: String
  },
  // With this option, we avoid the property "__v" that MongoDB sets to every document by default.
  {
    versionKey: false
  }
);

/**
 * Exporting the model.
 * - In the Node.js environment, we will use "Article" as singular.
 * - In the DB, the collection will be named "articles".
 */
module.exports = MONGOOSE.model("Article", ArticleSchema);
