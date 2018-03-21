var express = require('express');
var qlivePool = require('../config/mysql');
var router = express.Router();

// GET 获取直播列表
router.get('/', function (req, res) {
  var sql = "SELECT * FROM room ORDER BY person_num DESC LIMIT 40"
  qlivePool.getConnection(function (err, connection) {
    if (err) {
      console.log(err);
      res.json({
        error_code: 1,
        message: "数据库错误"
      });
      return;
    }
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.json({
          error_code: 1,
          message: "数据库错误"
        });
        return;
      }
      connection.release();
      res.json({
        error_code: 0,
        message: "获取成功",
        data: {
          lives: result
        }
      });
    });
  });
});

module.exports = router;