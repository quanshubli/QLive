var spider = require("./spider");
var liveConfig = require("../config/live");
var pandaConfig = liveConfig.panda;

function getUrl(page, pageSize) {
  return "https://www.panda.tv/live_lists?order=person_num&pageno=" + page + "&pagenum=" + pageSize;
}

function getPandaLives(callback) {
  return spider(getUrl(1, 120), function (res) {
    var lives = JSON.parse(res.text).data.items;
    var qlives = [];
    lives.forEach(function (item) {
      qlives.push({
        room_id: pandaConfig.type + "_" + item.id,
        type: pandaConfig.type,
        href: pandaConfig.href(item.id),
        name: item.name,
        sort_id: 0,
        sort_cname: item.classification.cname,
        sort_ename: item.classification.ename,
        picture: item.pictures.img,
        person_num: item.person_num,
        nickname: item.userinfo.nickName,
        avatar: item.userinfo.avatar
      });
    });
    callback(qlives);
  });
}

module.exports = getPandaLives;