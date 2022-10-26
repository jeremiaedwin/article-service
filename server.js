/*
    File Name : server.js
    Created Date : 09-10-2022
    Created By : M. Hafizh A
    Description : Main starter of article api, setting of the server
*/
// Import Module
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const upload = require('express-fileupload');
const dotenv = require('dotenv');

dotenv.config();

const router = require('./src/routes');

// Use Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(upload());

// Use Routing
app.use('/', router);
app.use('/public', express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
