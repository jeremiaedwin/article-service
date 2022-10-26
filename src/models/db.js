const mongoose = require('mongoose');

let URL;
if (process.env.DB_URL) {
  URL = process.env.DB_URL;
} else {
  URL = `${process.env.DB_CONNECTION}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`;
}
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose;
