const dbConfig = require("./index");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.test = require("../module/user.modules")(mongoose);
module.exports = db;