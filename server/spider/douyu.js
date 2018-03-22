var async = require("async");
var spider = require("./spider");
var liveConfig = require("../config/live");
var douyuConfig = liveConfig.douyu;

function getDouyuLives(callback) {
  var pageNum = 5,
    urls = [],
    lives = [],
    qlives = [];

  for (var i = 1; i <= pageNum; i++) {
    urls.push(douyuConfig.source(i));
  }

  // 异步控制并发请求数
  async.mapLimit(
    urls,
    5,  // 并发请求数
    function (url, cb) {
      spider(url, function (result) {
        lives = JSON.parse(result.text).data.rl;
        cb(null, lives);
      });
    },
    function (err, result) {
      if (err) {
        throw err;
      }
      result.forEach(function (itemArr) {
        itemArr.forEach(function (item) {
          qlives.push({
            room_id: douyuConfig.type + "_" + item.rid,
            type: douyuConfig.type,
            href: douyuConfig.href(item.rid),
            name: item.rn,
            sort_id: 0,
            sort_cname: item.c2name,
            sort_ename: item.c2name,
            picture: item.rs1,
            person_num: item.ol,
            nickname: item.nn,
            avatar: ""
          });
        });
      });
      callback && callback(qlives);
    }
  );
}

module.exports = getDouyuLives;