module.exports = {
  douyu: {
    type: 0,
    sortSource: "https://www.douyu.com/directory",
    source: function (page) {
      return "https://www.douyu.com/gapi/rkc/directory/0_0/" + page;
    },
    href: function (room) {
      return "https://www.douyu.com/" + room;
    }
  },
  panda: {
    type: 1,
    sortSource: "https://www.panda.tv/cate",
    pageSize: 120,  // 熊猫平台一页的直播间数量
    source: function (page) {
      return "https://www.panda.tv/live_lists?order=person_num&pageno=" + page + "&pagenum=120";
    },
    href: function (room) {
      return "https://www.panda.tv/" + room;
    }
  },
  huomao: {
    type: 2,
    sortSource: "https://www.huomao.com/game",
    source: function (page) {
      return "https://www.huomao.com/channels/channel.json?page=" + page + "&game_url_rule=all";
    },
    href: function (room) {
      return "https://www.huomao.com/" + room;
    }
  }
};