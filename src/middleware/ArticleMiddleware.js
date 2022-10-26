const DataArticle = require('../models/artikel');

async function GetData(req, res, next) {
  let articleData;
  try {
    articleData = await DataArticle.findOne({ id_artikel: req.params.id });
    if (articleData == null) {
      return res.status(404).send({ message: 'Cannot find article data' });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  res.artikel = articleData;
  next();
}

function LimitSizeFile(req, res) {
  return res.status(413).send({ message: 'File size to large' });
}
module.exports = {
  GetData,
  LimitSizeFile,
};
