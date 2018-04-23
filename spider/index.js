var schedule = require("node-schedule");
var getLives = require("./models/live");
var getSorts = require("./models/sort");

// var rule = new schedule.RecurrenceRule();
// rule.minute = [0, 5, 15, 20, 25, 30, 35, 40, 45, 50, 55];
// rule.second = 30;

var j = schedule.scheduleJob('*/5 * * * *', function () {
  console.log(new Date().toLocaleString());
  getSorts(); // 获取分类
  getLives(); // 获取直播间
});
// getSorts(); // 获取分类
// getLives(); // 获取直播间