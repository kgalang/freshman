var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('login');
  if(req.body.username && req.body.password) {
        res.redirect("/home");
        return [req.body.username, req.body.password];
    }
});

module.exports = router;
