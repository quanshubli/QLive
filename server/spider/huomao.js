var spider = require("./spider");
var liveConfig = require("../config/live");
var huomaoConfig = liveConfig.huomao;

function getUrl(page) { // 一页 60 条数据
  return "https://www.huomao.com/channels/channel.json?page=" + page + "&game_url_rule=all&labelid=0";
}

function getHuomaoLives(callback) {
  return spider(getUrl(1), function (res) {
    var lives = JSON.parse(res.text).data.channelList;
    var qlives = [];
    lives.forEach(function (item) {
      qlives.push({
        room_id: huomaoConfig.type + "_" + item.id,
        type: huomaoConfig.type,
        href: huomaoConfig.href(item.room_number),
        name: item.channel,
        sort_id: 0,
        sort_cname: item.gameCname,
        sort_ename: item.gameEname,
        picture: item.image,
        person_num: item.originviews,
        nickname: item.nickname.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "*emoji*"),   // 过滤 emoji 表情
        avatar: item.headimg.big
      });
    });
    callback(qlives);
  });
}

module.exports = getHuomaoLives;