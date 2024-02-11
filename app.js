// Importing required modules
console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// Reading user data from a JSON file
let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB connection
const db = require("./server").db();

// Middleware setup
app.use(express.static("public")); // Serving static files from the 'public' directory
app.use(express.json()); // Parsing incoming request bodies as JSON
app.use(express.urlencoded({ extended: true })); // Parsing form data in request bodies

// View engine setup
app.set("views", "views"); // Setting the views directory
app.set("view engine", "ejs"); // Setting EJS as the view engine

// Route for creating a new item
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");

  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong"); // Traditional response for error
    } else {
      console.log(data.ops); // Logging the inserted data
      res.json(data.ops[0]); // Sending the inserted data as JSON response
    }
  });
});

// Route for rendering the author view
app.get("/author", function (req, res) {
  res.render("author", { user: user }); // Rendering the 'author' view with user data
});

// Route for rendering the main page
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("Something went wrong");
      } else {
        res.render("reja", { items: data }); // Rendering the 'reja' view with item data
      }
    });
});

module.exports = app; // Exporting the Express application
