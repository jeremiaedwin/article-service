const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/artikel_service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose;
