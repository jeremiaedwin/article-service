const mongoose = require('./db');

const { Schema } = mongoose;
const TS = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
const DataArticle = new Schema({
  nama_status_artikel: {
    type: String,
    require: true,
  },
  TS,
});

module.exports = mongoose.model('status_artikel', DataArticle);
