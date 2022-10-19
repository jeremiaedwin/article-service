/*
    File Name : server.js
    Created Date : 09-10-2022
    Created By : M. Hafizh A
    Description : Main starter of article api, setting of the server
*/
// Import Module
const path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const router = require("./src/routes");
const cors = require("cors");
const upload = require("express-fileupload");

// Use Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(upload());

// Use Routing
app.use("/api", router);
app.use("/public", express.static("public"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is up on port " + port);
});
