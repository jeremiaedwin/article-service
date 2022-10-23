const mongoose = require('./db');

const { Schema } = mongoose;
const TS = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
const DataArticle = new Schema({
  id_user: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  id_kategori: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  id_status_artikel: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: 'status_artikel',
  },
  id_akses_baca: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  id_akses_komentar: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  cover_artikel: {
    type: String,
    require: true,
  },
  juduL_artikel: {
    type: String,
    require: true,
  },
  isi_artikel: {
    type: String,
    require: true,
  },
  deskripsi_artikel: {
    type: String,
    require: true,
  },
  tag_artikel: {
    type: String,
    require: true,
  },
  waktu_draft: {
    type: Date,
    require: true,
  },
  waktu_publish: {
    type: Date,
    require: true,
  },
  waktu_arsip: {
    type: Date,
    require: true,
  },
  waktu_terbit: {
    type: Date,
    require: true,
  },
  waktu_selesai: {
    type: Date,
    require: true,
  },
  TS,
});

module.exports = mongoose.model('artikel', DataArticle);
