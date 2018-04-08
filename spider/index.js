var getLives = require("./models/live");
var getSorts = require("./models/sort");

// var timer = setInterval(function () {
//   getSorts(); // 获取分类
//   getLives(); // 获取直播间
// }, 60 * 1000);

getLives(); // 获取直播间
getSorts(); // 获取分类