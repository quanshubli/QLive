var axios = require("axios");
var async = require("async");
var config = require("../../config/live");
var huomaoConfig = config.huomao;

function getPandaLives(callback) {
  var pageNum = 5;  // 火猫平台全部直播页数，暂定为 5
  var urls = [];
  var lives = [];

  for (var i = 1; i <= pageNum; i++) {
    urls.push(huomaoConfig.source(i));
  }

  // 异步控制并发请求数
  async.mapLimit(
    urls,
    5,
    function (url, cb) {
      axios.get(url)
        .then(function (res) {
          cb(null, res.data.data.channelList);
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
          if (item.is_live === 1) {
            lives.push({
              room_id: huomaoConfig.type + "_" + item.id,
              type: huomaoConfig.type,
              href: huomaoConfig.href(item.room_number),
              name: item.channel.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "*emoji*"),
              sort_cname: item.gameCname,
              sort_ename: item.gameEname,
              picture: item.image,
              person_num: item.originviews,
              nickname: item.nickname.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "*emoji*"),   // 过滤 emoji 表情
              avatar: item.headimg.big
            });
          }
        });
      });
      callback && callback(lives);
    }
  );
}

module.exports = getPandaLives;