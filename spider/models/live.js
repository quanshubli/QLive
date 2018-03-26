var pool = require("../config/mysql");
var getDouyuLives = require("./douyu");
var getPandaLives = require("./panda");
var getHuomaoLives = require("./huomao");

// 获取三个直播平台所有正在直播的直播间，并存入数据库
module.exports = function getLives() {
  var qlives = [];
  var promise = new Promise(function (resolve) {
    getDouyuLives(function (lives) {
      qlives = qlives.concat(lives);
      resolve();
    });
  })
    .then(function () {
      return new Promise(function (resolve) {
        getPandaLives(function (lives) {
          qlives = qlives.concat(lives);
          resolve();
        });
      });
    })
    .then(function () {
      return new Promise(function (resolve) {
        getHuomaoLives(function (lives) {
          qlives = qlives.concat(lives);
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
        var sql = "TRUNCATE TABLE room";
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
        var sql = "INSERT INTO room (room_id, type, href, name, sort_cname, sort_ename, picture, person_num, nickname, avatar) VALUES";
        qlives.forEach(function (item, index) {
          if (index !== 0) {
            sql += ","
          }
          sql += `('${item.room_id}', ${item.type}, '${item.href}', '${item.name}', '${item.sort_cname}', '${item.sort_ename}', '${item.picture}', ${item.person_num}, '${item.nickname}', '${item.avatar}')`;
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
      console.log("Over");
      connection.release();
    })
    .catch(function (err) {
      throw err;
    });
}
