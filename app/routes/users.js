var express = require('express');
var router = express.Router();

var User = require('../modules/db.User.js');

/* GET users page. */
router.get('/', function(req, res, next) {
	User.getAllItems(function(err,result) {
		if(result) {
			res.send(result);
		}
	});
});

router.get('/addItem/:username', function(req,res,next) {
	User.addItem(req.params.username, function(err, result) {
		if(result) {
			res.json(result);
		}
	});
});

module.exports = router;
