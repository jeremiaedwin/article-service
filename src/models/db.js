const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/articles", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
module.exports = mongoose;
