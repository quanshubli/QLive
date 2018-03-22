var express = require('express');
var qlivePool = require('../config/mysql');
var router = express.Router();

// GET 获取直播列表
router.get('/', function (req, res) {
  var page = parseInt(req.query.p || 1, 10);
  var pageSize = parseInt(req.query.n || 40, 10);
  var sql1 = "SELECT COUNT(*) as count FROM room";
  // var sql = "SELECT * FROM room ORDER BY person_num DESC LIMIT 40";
  var sql2 = `SELECT * FROM room WHERE id > ${(page - 1) * pageSize} LIMIT ${pageSize}`;
  var lives = {};
  qlivePool.getConnection(function (err, connection) {
    if (err) {
      console.log(err);
      res.json({
        error_code: 1,
        message: "数据库错误"
      });
      return;
    }
    connection.query(sql1, function (err, result) {
      if (err) {
        console.log(err);
        res.json({
          error_code: 1,
          message: "数据库错误"
        });
        return;
      }
      lives.count = result[0].count;
      connection.query(sql2, function (err, result) {
        if (err) {
          console.log(err);
          res.json({
            error_code: 1,
            message: "数据库错误"
          });
          return;
        }
        lives.list = result;
        connection.release();
        res.json({
          error_code: 0,
          message: "获取成功",
          data: {
            lives
          }
        });
      });
    });
  });
});

module.exports = router;