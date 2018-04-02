var axios = require("axios");
var cheerio = require("cheerio");
var liveConfig = require("../../config/live");

var douyuConfig = liveConfig.douyu;

module.exports = function getDouyuSorts(callback) {
  axios.get(douyuConfig.sortSource)
    .then(function (res) {
      var sorts = [];
      var $ = cheerio.load(res.data);
      var domList = $("#live-list-contentbox").find(".thumb");
      var $p = domList.children("p");
      var $img = domList.children("img");
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