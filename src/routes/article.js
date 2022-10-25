const express = require('express');

const router = express.Router();
const ArticleController = require('../controller/ArticleController');
const ArticleMiddleware = require('../middleware/ArticleMiddleware');

router.patch('/', ArticleMiddleware.GetData, async (req, res) => {
  ArticleController.edit(req, res);
});

module.exports = router;
