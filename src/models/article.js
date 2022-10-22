const mongoose = require('./db');

const { Schema } = mongoose;
const DataArticle = new Schema({
  kontributor_id: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: 'kontributor',
  },
  kategori: {
    type: String,
    require: true,
  },
  cover: {
    type: String,
    require: true,
  },
  judul: {
    type: String,
    require: true,
  },
  isi: {
    type: String,
    require: true,
  },
  deskripsi: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    require: true,
  },
  viewer: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model('article', DataArticle);
