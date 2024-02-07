/* /backend/server.js */

//main file for backend

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to Spendzi backend!"); 
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
