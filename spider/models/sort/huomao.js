var axios = require("axios");
var cheerio = require("cheerio");
var liveConfig = require("../../config/live");

var huomaoConfig = liveConfig.huomao;

module.exports = function getPandaSorts(callback) {
  axios.get(huomaoConfig.sortSource)
    .then(function (res) {
      var sorts = [];
      var $ = cheerio.load(res.data);
      var domList = $("#gamelist");
      var $p = domList.find("p");
      var $img = domList.find("img");
      for (var i = 0, l = domList.length; i < l; i++) {
        sorts.push({
          name: $p[i].children[0].data,
          picture: $img[i].attribs["data-original"]
        });
      }
      callback && callback(sorts);
    })
    .catch(function (err) {
      throw err;
    });
}