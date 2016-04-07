module.exports = {
	init: function(app) {
		app.get('/', function(req, res) {
			res.sendFile(__dirname.split('routes')[0] + "/public/html/users/index.min.html");
		});
	},

	doTest: function(req, res) {
		res.json({
			status: 1,
			info: '测试服务doTest'
		});
	}
};