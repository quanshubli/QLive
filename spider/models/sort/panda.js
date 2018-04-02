var axios = require("axios");
var cheerio = require("cheerio");
var liveConfig = require("../../config/live");

var pandaConfig = liveConfig.panda;

module.exports = function getPandaSorts(callback) {
  axios.get(pandaConfig.sortSource)
    .then(function (res) {
      var sorts = [];
      var $ = cheerio.load(res.data);
      var domList = $(".sort-menu");
      var $p = domList.find(".cate-title");
      var $img = domList.find("img");
      for (var i = 0, l = domList.length; i < l; i++) {
        sorts.push({
          name: $p[i].children[0].data,
          picture: $img[i].attribs["src"]
        });
      }
      callback && callback(sorts);
    })
    .catch(function (err) {
      throw err;
    });
}