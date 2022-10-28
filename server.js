/*
    File Name : server.js
    Created Date : 09-10-2022
    Created By : M. Hafizh A
    Description : Main starter of article api, setting of the server
*/
// Import Module
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const upload = require('express-fileupload');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const { LimitSizeFile } = require('./src/middleware/ArticleMiddleware');

const corsOptions = {
  origin: '*',
};

// Use Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(upload({
  limits: {
    fileSize: 10000000, // Limit 10 mb size
  },
  limitHandler: LimitSizeFile,
  abortOnLimit: true,
  createParentPath: true,
}));
// Public dir
app.use('/public', express.static('public'));
app.use('/artikel-media', express.static(path.join(__dirname, 'public', 'images', 'artikel-media')));

// Use Routing
const router = require('./src/routes');

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
