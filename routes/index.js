var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cmd Request' ,data1: '',data2:'',data3:''});
});

module.exports = router;
