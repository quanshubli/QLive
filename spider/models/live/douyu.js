var axios = require("axios");
var async = require("async");
var config = require("../../config/live");
var douyuConfig = config.douyu;

function getDouyuLives(callback) {
  var pageNum = 5;  // 斗鱼平台全部直播页数
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
            name: item.rn,
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