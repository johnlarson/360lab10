var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express', pid: process.pid });
});

router.get('/pid', function(req, res, next) {
	res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.header('Pragma', 'no-cache');
	res.header('Expires', 0);
	res.json({title: 'Cluster', pid: process.pid });
});

module.exports = router;
