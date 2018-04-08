var axios = require("axios");
var async = require("async");
var config = require("../../config/live");
var douyuConfig = config.douyu;

function getDouyuLives(callback) {
  // 获取页数
  axios.get(douyuConfig.source(1))
    .then(function (res) {
      var pageNum = res.data.data.pgcnt || 1;
      getLives(pageNum, callback);
    })
    .catch(function (err) {
      throw err;
    });
}

function getLives(pageNum, callback) {
  var urls = [];
  var lives = [];

  for (var i = 1; i <= pageNum; i++) {
    urls.push(douyuConfig.source(i));
  }

  // 异步控制并发请求数
  async.mapLimit(
    urls,
    5,
    function (url, cb) {
      axios.get(url)
        .then(function (res) {
          cb(null, res.data.data.rl);
        })
        .catch(function (err) {
          cb(err);
        });
    },
    function (err, result) {
      if (err) {
        throw err;
      }
      result.forEach(function (subArr) {
        subArr.forEach(function (item) {
          lives.push({
            room_id: douyuConfig.type + "_" + item.rid,
            type: douyuConfig.type,
            href: douyuConfig.href(item.rid),
            name: item.rn.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "*emoji*"),
            sort_cname: item.c2name,
            sort_ename: item.c2name,
            picture: item.rs1,
            person_num: item.ol,
            nickname: item.nn,
            avatar: ""
          });
        });
      });
      callback && callback(lives);
    }
  );
}

module.exports = getDouyuLives;