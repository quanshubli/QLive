var mysql = require("mysql");
var dbConfig = require("./db");

var qlivePool = mysql.createPool(dbConfig.qlive);

module.exports = qlivePool;