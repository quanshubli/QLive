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
    href: function (room) {
      return "https://www.panda.tv/" + room;
    }
  },
  huomao: {
    type: 2,
    href: function (room) {
      return "https://www.huomao.com/" + room;
    }
  }
};