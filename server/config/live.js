module.exports = {
  douyu: {
    type: 0,
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