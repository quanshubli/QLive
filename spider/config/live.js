module.exports = {
  douyu: {
    type: 0,
    source: function (page) {
      return "https://www.douyu.com/gapi/rkc/directory/0_0/" + page;
    },
    href: function (room) {
      return "https://www.douyu.com/" + room;
    }
  },
  panda: {
    type: 1,
    source: function (page) {
      return "https://www.panda.tv/live_lists?order=person_num&pageno=" + page + "&pagenum=120";
    },
    href: function (room) {
      return "https://www.panda.tv/" + room;
    }
  },
  huomao: {
    type: 2,
    source: function (page) {
      return "https://www.huomao.com/channels/channel.json?page=" + page + "&game_url_rule=all";
    },
    href: function (room) {
      return "https://www.huomao.com/" + room;
    }
  }
};