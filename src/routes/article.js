const express = require('express');

const router = express.Router();
const ArticleController = require('../controller/ArticleController');
const ArticleMiddleware = require('../middleware/ArticleMiddleware');

router.patch('/:id', ArticleMiddleware.GetData, async (req, res) => {
  ArticleController.update(req, res);
});

router.delete('/:id', ArticleMiddleware.GetData, async (req, res) => {
  ArticleController.hapus(req, res);
});

router.post('/draft', async (req, res) => {
  ArticleController.post(req, res);
});

router.get('/draft', async (req, res) => {
  ArticleController.GetArticleDraft(req, res);
});

router.get('/draft/:id', async (req, res) => {
  ArticleController.GetArticleDraftbyId(req, res);
});

router.get('/getNewId', async (req, res) => {
  ArticleController.GetNewId(req, res);
});
module.exports = router;
