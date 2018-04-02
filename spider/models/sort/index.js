var pool = require("../../config/mysql");
var douyuSorts = require("./douyu");
var pandaSorts = require("./panda");
var huomaoSorts = require("./huomao");

module.exports = function getSorts() {
  var sorts = {};

  new Promise(function (resolve) {
    douyuSorts(function (result) {
      result.forEach(function (item) {
        if (!sorts[item.name]) {
          sorts[item.name] = item.picture;
        }
      });
      resolve();
    });
  })
    .then(function () {
      return new Promise(function (resolve) {
        pandaSorts(function (result) {
          result.forEach(function (item) {
            if (!sorts[item.name]) {
              sorts[item.name] = item.picture;
            }
          });
          resolve();
        });
      });
    })
    .then(function () {
      return new Promise(function (resolve) {
        huomaoSorts(function (result) {
          result.forEach(function (item) {
            if (!sorts[item.name]) {
              sorts[item.name] = item.picture;
            }
          });
          resolve();
        });
      });
    })
    .then(function () {
      return new Promise(function (resolve) {
        pool.getConnection(function (err, connection) {
          if (err) {
            throw err;
          }
          resolve(connection);
        });
      });
    })
    .then(function (connection) {
      return new Promise(function (resolve) {
        var sql = "TRUNCATE TABLE sort";
        connection.query(sql, function (err, result) {
          if (err) {
            throw err;
          }
          resolve(connection);
        });
      });
    })
    .then(function (connection) {
      return new Promise(function (resolve) {
        var sql = "INSERT INTO sort (name, picture) VALUES";
        Object.keys(sorts).forEach(function (key, index) {
          if (index !== 0) {
            sql += ","
          }
          sql += `('${key}', '${sorts[key]}')`;
        });
        connection.query(sql, function (err, result) {
          if (err) {
            throw err;
          }
          resolve(connection);
        });
      });
    })
    .then(function (connection) {
      console.log("GET Sorts Over");
      connection.release();
    })
    .catch(function (err) {
      throw err;
    });
}