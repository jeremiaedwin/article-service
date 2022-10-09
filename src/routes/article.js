const express = require("express");
const router = express.Router();
const ArticleController = require("../controller/ArticleController");

router.post("/", async (req, res) => {
    ArticleController.add(req, res);
});

module.exports = router;
