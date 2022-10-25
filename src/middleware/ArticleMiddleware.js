const DataArticle = require('../models/artikel');

async function GetData(req, res, next) {
  let articleData;
  try {
    articleData = await DataArticle.findById(req.params.id);
    if (articleData == null) {
      return res.status(404).send({ message: 'Cannot find article data' });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  res.artikel = articleData;
  next();
}

module.exports = {
  GetData,
};
