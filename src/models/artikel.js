const mongoose = require('./db');

const { Schema } = mongoose;
const TS = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
const DataArticle = new Schema({
  id_artikel: {
    type: String,
    unique: true,
    require: true,
  },
  id_user: {
    type: String,
  },
  id_kategori: {
    type: Number,
    ref: 'kategori',
  },
  id_status_artikel: {
    type: Number,
    ref: 'status_artikel',
  },
  id_akses_baca: {
    type: Number,
    ref: 'akses_baca',
  },
  id_akses_komentar: {
    type: Number,
    ref: 'akses_komentar',
  },
  id_tag: {
    type: Array,
  },
  cover_artikel: {
    type: String,
  },
  juduL_artikel: {
    type: String,
  },
  deskripsi_artikel: {
    type: String,
  },
  isi_artikel: {
    type: String,
  },
  waktu_draft: {
    type: Date,
  },
  waktu_publish: {
    type: Date,
  },
  waktu_arsip: {
    type: Date,
  },
  waktu_terbit: {
    type: Date,
  },
  waktu_selesai: {
    type: Date,
  },
}, TS);

module.exports = mongoose.model('artikel', DataArticle, 'artikel');
