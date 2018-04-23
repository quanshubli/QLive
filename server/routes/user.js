var express = require('express');
var qlivePool = require('../config/mysql');
var router = express.Router();

// POST 用户注册
router.post('/register', function (req, res) {
  var phone = req.body.phone;
  var password = req.body.password;
  var nickname = req.body.nickname;

  if (!phone || !password || !nickname) {
    res.json({
      code: 2,
      msg: '用户信息不正确'
    });
    return;
  }
  var sql1 = `SELECT * FROM user WHERE phone='${phone}'`;
  var sql2 = `INSERT INTO user (phone, password, nickname) VALUES ('${phone}', '${password}', '${nickname}')`;
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
          if (result.length > 0) {
            res.json({
              code: 2,
              msg: '该手机号已被注册'
            });
            return;
          }
          resolve(connection);
        });
      });
    })
    .then(function (connection) {
      connection.query(sql2, function (err, result) {
        if (err) {
          throw err;
        }
        var user = {
          id: result.insertId,
          nickname
        };

        // req.session.user = user;
        var token = {
          user: {
            id: result.insertId,
            nickname,
          },
          date: Date.now()
        };
        res.set('access-token', JSON.stringify(token));

        connection.release();
        res.json({
          code: 0,
          msg: '注册成功',
          data: {}
        });
      });
    })
    .catch(function (err) {
      console.log(err);
      res.json({
        code: 1,
        msg: '数据库错误',
        data: {}
      });
    });
});

// POST 用户登录
router.post('/login', function (req, res) {
  var phone = req.body.phone;
  var password = req.body.password;
  
  var sql = `SELECT * FROM user WHERE phone='${phone}'`;

  new Promise(function (resolve) {
    qlivePool.getConnection(function (err, connection) {
      if (err) throw err;
      resolve(connection);
    });
  })
    .then(function (connection) {
      return new Promise(function (resolve) {
        connection.query(sql, function (err, result) {
          if (err) throw err;
          if (result.length <= 0) {
            connection.release();
            res.json({
              code: 2,
              msg: '该用户不存在',
              data: {}
            });
          } else {
            var user = result[0];
            if (password != user.password) {
              connection.release();
              res.json({
                code: 2,
                msg: '密码错误',
                data: {}
              });
            } else {
              var token = {
                user: {
                  id: user.id,
                  nickname: user.nickname,
                },
                date: Date.now()
              };
              res.set('access-token', JSON.stringify(token));
              res.json({
                code: 0,
                msg: '登录成功',
                data: {}
              });
            }
          }
        })
      });
  })
});

module.exports = router;