const mongoose = require("mongoose");
const ArticleData = require("../models/article");
const path = require("path");

async function add(req, res) {
    const file_name = "req";
    const path = "public/media/";
    console.log(req.files);
}

module.exports = {
    add,
};
