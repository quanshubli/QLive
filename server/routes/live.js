var express = require('express');
var qlivePool = require('../config/mysql');
var router = express.Router();

// GET (根据分类)获取直播列表
router.get('/', function (req, res) {
  var page = parseInt(req.query.p || 1, 10);
  var pageSize = parseInt(req.query.n || 40, 10);
  var sort = req.query.sort;    
  var sql1 = "";
  var sql2 = "";

  if (sort) {
    sql1 = `SELECT COUNT(*) as count FROM room WHERE sort_cname='${sort}'`;
    sql2 = `SELECT * FROM room WHERE sort_cname='${sort}' ORDER BY person_num DESC LIMIT ${pageSize} OFFSET ${pageSize * (page - 1)}`;
  } else {
    sql1 = `SELECT COUNT(*) as count FROM room`;
    sql2 = `SELECT * FROM room ORDER BY person_num DESC LIMIT ${pageSize} OFFSET ${pageSize * (page - 1)}`;
  }
  var lives = {};

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
          lives.count = result[0].count;
          resolve(connection);
        });
      });
    })
    .then(function (connection) {
      return new Promise(function (resolve) {
        connection.query(sql2, function (err, result) {
          if (err) {
            throw err;
          }
          lives.list = result;
          resolve(connection);
        });
      });
    })
    .then(function (connection) {
      connection.release();
      res.json({
        error_code: 0,
        message: "获取成功",
        data: {
          lives
        }
      });
    })
    .catch(function (err) {
      console.log(err);
      res.json({
        code: 1,
        msg: "数据库错误"
      });
    });
});

// GET 根据关键词搜索直播间
router.get('/search', function (req, res) {
  var keyword = req.query.keyword;
  var sql1 = `SELECT * FROM sort WHERE name LIKE '%${keyword}%'`;
  var sql2 = `SELECT * FROM room WHERE name LIKE '%${keyword}%' OR nickname LIKE '%${keyword}%'`;
  var sorts = [];
  var lives = [];
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
          sorts = result;
          resolve(connection);
        });
      })
    })
    .then(function (connection) {
      connection.query(sql2, function (err, result) {
        if (err) {
          throw err;
        }
        connection.release();
        lives = result;
        res.json({
          code: 0,
          msg: '搜索成功',
          data: {
            sorts,
            lives
          }
        });
      });
    })
    .catch(function (err) {
      console.log(err);
      res.json({
        code: 1,
        msg: '数据库错误'
      });
    });
});

module.exports = router;