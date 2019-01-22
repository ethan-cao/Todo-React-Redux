var express = require('express');
// use express.Router class to create modular, mountable route handlers
var router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  console.log("@@@@ server index router");
  res.render('index', { title: 'Ethan' });
});

module.exports = router;
