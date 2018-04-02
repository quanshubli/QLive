var express = require('express');
var qlivePool = require('../config/mysql');
var router = express.Router();

// GET 获取分类列表
router.get('/', function (req, res) {
  var page = parseInt(req.query.p || 1, 10);
  var pageSize = parseInt(req.query.n || 40, 10);
  var sql1 = "SELECT COUNT(*) as count FROM sort";
  var sql2 = `SELECT * FROM sort WHERE id > ${(page - 1) * pageSize} LIMIT ${pageSize}`;
  var sorts = {};

  new Promise(function (resolve) {
    qlivePool.getConnection(function (err, connection) {
      if (err) {
        throw err;
      }
      resolve(connection);
    });
  })
    .then(function (connection) {
      return new Promise(function (resolve) {
        connection.query(sql1, function (err, result) {
          if (err) {
            throw err;
          }
          sorts.count = result[0].count;
          resolve(connection);
        });
      })
        .then(function (connection) {
          connection.query(sql2, function (err, result) {
            if (err) {
              throw err;
            }
            sorts.list = result;
            connection.release();
            res.json({
              code: 0,
              msg: "获取成功",
              data: {
                sorts
              }
            });
          })
        })
        .catch(function (err) {
          console.log(err);
          res.json({
            code: 1,
            msg: "数据库错误"
          });
        });
    });
});

module.exports = router;