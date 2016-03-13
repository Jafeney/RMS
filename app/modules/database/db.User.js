/**
 * @desc 连接到mysql数据库
 */

var mysql = require('mysql'),
	config = require('./db.config.js');

var con = mysql.createConnection(config);

var User = function(user) {
	this.username = user.username || 'Jafeny';
	this.password = user.password;
}

User.getAllItems = function(callback) {
	var selectSql = "select * from user_info";
	con.query(selectSql, function(err, res) {
		if(err) {
			console.log('getAllItems err:' +err);
		} else {
			console.log('getAllItems success');
			if (typeof(callback) === 'function') {
				callback(err, res);
			}
		}
	});
};

User.getUserByUsername = function(username, callback) {
	var selectSql = 'select * from user_info where username = ?' ;
	con.query(selectSql,[username],function(err,res) {
		if(err) {
			console.log('getUserByUsername err: ' + err);
			return;
		}
		console.log('Get getUserByUsername success');
		callback(err,res);
	});
};

User.getUserByUserId = function(id, callback) {
	var selectSql = 'select * from user_info where id = ?';
	con.query(selectSql, [id], function(err,res){
		if(err) {
			console.log('getUserByUserId err:' + err);
			return;
		} else {
			console.log('getUserByUserId success');
			if(typeof(callback) === 'function') {
				callback(err,res);
			}
		}
	});
}

User.addItem = function(name, callback) {

	var selectSql = 'insert into user_info (username,password) values (?,"123456");';
	con.query(selectSql, [name], function(err, res) {
		console.log(selectSql);
		if(err) {
			console.log('addtItem err:' + err);
			return;
		} else {
			console.log('addtItem success');
			if(typeof(callback) === 'function') {
				callback(err,res);
			}
		}
	});
}

module.exports = User;