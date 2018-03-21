var qlivePool = require("../config/mysql");
var getPandaLives = require("./panda");
var getDouyuLives = require("./douyu");
var getHuomaoLives = require("./huomao");

function getLives() {
  var lives = [];
  new Promise(function (resolve, reject) {
    getPandaLives(function (pandaLives) {
      lives = lives.concat(pandaLives);
      getDouyuLives(function (douyuLives) {
        lives = lives.concat(douyuLives);
        getHuomaoLives(function (huomaoLives) {
          lives = lives.concat(huomaoLives);
          resolve(lives);
        });
      });
    });
  })
    .then(function (lives) {
      var sql = "";
      var sql1 = "truncate table room";
      var sql2 = "INSERT INTO room (room_id, type, href, name, sort_id, sort_cname, sort_ename, picture, person_num, nickname, avatar) VALUES";
      lives.forEach(function (item, index) {
        if (index !== 0) {
          sql2 += ","
        }
        sql2 += `('${item.room_id}', ${item.type}, '${item.href}', '${item.name}', ${item.sort_id}, '${item.sort_cname}', '${item.sort_ename}', '${item.picture}', ${item.person_num}, '${item.nickname}', '${item.avatar}')`;
      });
      qlivePool.getConnection(function (err, connection) {
        if (err) {
          console.log(err);
          return;
        }
        connection.query(sql1, function (err, msg) {
          if (err) {
            console.log(err);
            return;
          }
          connection.query(sql2, function (err, msg) {
            if (err) {
              console.log(err);
              return;
            }
            connection.release();
          });
        });
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

module.exports = getLives;