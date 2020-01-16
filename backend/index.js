"use strict";

// Import some Node modules.
const MONGOOSE = require("mongoose");
const APP = require("./app");
const PORT = process.env.PORT || 3900;

// Deactivating old and deprecated behaviours.
MONGOOSE.set("useFindAndModify", false);

// Promises with MongoDB.
MONGOOSE.Promise = global.Promise;

// The connection to the local DB.
MONGOOSE.connect("mongodb://localhost:27017/api_rest_blog", {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => {
    console.log("The connection to the DB has been succesful!");
    // Creating the server and listen to the port.
    APP.listen(PORT, () => {
      console.log("Server running in http://localhost:" + PORT);
    });
  })
  .catch();
