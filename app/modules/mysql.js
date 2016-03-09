/**
 * @desc 连接到mysql数据库
 */

var mysql = require('mysql'),
	config = require('./db.config.js');

var con = mysql.createConnection(config);

var User = function(user) {
	this.username = user.username;
	this.password = user.password;
}

User.prototype.getUserByUsername = function(username, callback) {
	var selectSql = 'select * from user_info where username = ?' ;
	con.query(selectSql,[username],function(err,res) {
		if(err) {
			console.log('getUserByUsername err: ' + err);
			return;
		}
		console.log('Get name success');
		callback(err,res);
	});
};

module.exports = User;