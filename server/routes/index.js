var express = require('express');
var router = express.Router();

var panda = require("../spider/panda");

/* GET home page. */
router.get('/', function (req, res, next) {
  panda(function (data) {
    var lives = JSON.parse(data.text).data.items;
    res.render('index', { lives: JSON.stringify(lives) });
  });
});

module.exports = router;
