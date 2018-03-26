var mysql = require("mysql");
var dbConfig = require("./db");

var pool = mysql.createPool(dbConfig.qlive);

module.exports = pool;