var express = require('express');
var router = express.Router();
var fs = require('fs');

var clubs = JSON.parse(fs.readFileSync(__dirname+'/clubs.json').toString());
var parseClubData = function(jsonClubs){
  var clubNames = Object.keys(jsonClubs);
  
}

parseClubData(clubs);
/* GET users listing. */
router.get('/clubs', function(req, res, next) {
  res.render('users');
});

module.exports = router;
