var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 一覧取得
router.get("/api/users", function(req, res) {
		res.send([]);
    });

// 個人取得
router.get("/api/users/:_id", function(req, res) {
		res.send([]);
	});

// 追加・更新
router.post("/api/users", function(req, res) {
	var user = req.body;
		res.send("insert or update");
    });

// 削除
router.delete("/api/users/:_id", function(req, res) {
		res.send("delete");
    });


module.exports = router;
