const express = require('express');

const router = express.Router();
const ArticleController = require('../controller/ArticleController');
const ArticleMiddleware = require('../middleware/ArticleMiddleware');

router.post('/upload/:id', async (req, res) => {
  ArticleController.UploadMedia(req, res);
});
router.patch('/:id', ArticleMiddleware.GetData, async (req, res) => {
  ArticleController.update(req, res);
});

module.exports = router;
