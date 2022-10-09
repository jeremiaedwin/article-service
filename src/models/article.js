const mongoose = require("./db");

const Schema = mongoose.Schema;
const DataArticle = new Schema({});

module.exports = mongoose.model("article", DataArticle, "article");
