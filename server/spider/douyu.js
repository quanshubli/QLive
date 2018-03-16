var spider = require("./spider");
var liveConfig = require("../config/live");
var douyuConfig = liveConfig.douyu;

function getUrl(page, pageSize) {
  return "https://www.douyu.com/gapi/rkc/directory/0_0/" + page;
}

function getDouyuLives(callback) {
  return spider(getUrl(1, 120), function (res) {
    var lives = JSON.parse(res.text).data.rl;
    var qlives = [];
    lives.forEach(function (item) {
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
    callback(qlives);
  });
}

module.exports = getDouyuLives;