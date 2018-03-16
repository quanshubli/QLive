var superagent = require("superagent");

var spider = function (url, callback) {
  return superagent.get(url)
    .end(function (err, res) {
      if (err) {
        console.log(err);
        return;
      }
      return callback(res);
    });
};

module.exports = spider;