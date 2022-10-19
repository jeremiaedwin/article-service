const DataArticle = require("../models/article");
async function getData(req, res, next) {
    let articleData;
    try {
        DataArticle = await DataArticle.findById(req.params.id);
        if (DataArticle == null) {
            return res.status(404).send({ message: "Cannot find article data" });
        }
    } catch {
        return res.status(500).send({ message: err.message });
    }
    res.sim = simData;
    next();
}

module.exports = {
    getData,
};
