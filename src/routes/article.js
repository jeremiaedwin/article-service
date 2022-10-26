const express = require('express');

const router = express.Router();
const ArticleController = require('../controller/ArticleController');
const ArticleMiddleware = require('../middleware/ArticleMiddleware');

router.patch('/:id', ArticleMiddleware.GetData, async (req, res) => {
  ArticleController.update(req, res);
});

module.exports = router;
