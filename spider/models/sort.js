var cheerio = require("cheerio");
var qlivePool = require("../config/mysql");
var spider = require("./spider");

module.exports = function () {
  spider("https://www.douyu.com/directory", function (result) {
    var sorts = [];
    var $ = cheerio.load(result.text);

    var domList = $("#live-list-contentbox").find(".thumb");
    var $p = domList.children("p");
    var $img = domList.children("img");
    for (var i = 0, l = domList.length; i < l; i++) {
      sorts.push({
        name: $p[i].children[0].data,
        picture: $img[i].attribs["data-original"]
      });
    }

    var sql1 = "truncate table sort";
    var sql2 = `INSERT INTO sort (name, picture) VALUES`;
    sorts.forEach(function (item, index) {
      if (index !== 0) {
        sql2 += ",";
      }
      sql2 += `('${item.name}', '${item.picture}')`;
    });
    qlivePool.getConnection(function (err, connection) {
      if (err) {
        console.log(err);
        return;
      }
      connection.query(sql1, function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        connection.query(sql2, function (err, result) {
          if (err) {
            console.log(err);
            return;
          }
          connection.release();
        })
      })
    });
  });
};