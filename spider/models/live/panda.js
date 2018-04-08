var axios = require("axios");
var async = require("async");
var config = require("../../config/live");
var pandaConfig = config.panda;

function getPandaLives(callback) {
  axios.get(pandaConfig.source(1))
    .then(function (res) {
      var total = res.data.data.total;
      var pageNum = Math.ceil(total / pandaConfig.pageSize);
      getLives(pageNum, callback);
  })
}

function getLives(pageNum, callback) {
  var urls = [];
  var lives = [];

  for (var i = 1; i <= pageNum; i++) {
    urls.push(pandaConfig.source(i));
  }

  // 异步控制并发请求数
  async.mapLimit(
    urls,
    5,
    function (url, cb) {
      axios.get(url)
        .then(function (res) {
          cb(null, res.data.data.items);
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
            room_id: pandaConfig.type + "_" + item.id,
            type: pandaConfig.type,
            href: pandaConfig.href(item.id),
            name: item.name.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "*emoji*"),
            sort_cname: item.classification.cname,
            sort_ename: item.classification.ename,
            picture: item.pictures.img,
            person_num: item.person_num,
            nickname: item.userinfo.nickName,
            avatar: item.userinfo.avatar
          });
        });
      });
      callback && callback(lives);
    }
  );
}

module.exports = getPandaLives;