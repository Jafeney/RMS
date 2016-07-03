/**
 * @desc 用户模型
 */

var mysql = require('mysql'),
	util = require('../../routes/util'),
	config = require('./db.config.js');

var con = mysql.createConnection(config);

var User = function(user) {
	this.props = user.props;
};

// 获取全部数据
User.prototype.getAllItems = function(callback) {
	var selectSql = "select * from user where u_del=0";
	con.query(selectSql, function(err, res) {
		if (err) {
			console.log('getAllItems err:' + err);
		} else {
			console.log('getAllItems success');
			if (typeof(callback) === 'function') {
				callback(err, res);
			}
		}
	});
};

// 根据手机号码获取用户的信息
User.prototype.getItemByPhone = function(callback) {
	var selectSql = 'select * from user where u_del=0 and u_phone="' + this.props.phone + '"';
	console.log(selectSql);
	con.query(selectSql, function(err, res) {
		if (err) {
			console.log('getItem err:' + err);
		} else {
			console.log('getItem success');
			if (typeof(callback) === 'function') {
				callback(err, res);
			}
		}
	});
};

// 根据id获取用户的信息
User.prototype.getItemById = function(callback) {
	var selectSql = "select * from user where u_del=0 and u_id=" + this.props.id;
	con.query(selectSql, function(err, res) {
		if (err) {
			console.log('getItem err:' + err);
		} else {
			console.log('getItem success');
			if (typeof(callback) === 'function') {
				callback(err, res);
			}
		}
	});
};

// 更新密码
User.prototype.UpdatePassword = function(callback) {
	var updateSql = 'update user set u_password="' + this.props.newPassword +
		'" where u_password="' + this.props.oldPassword +'"';
	con.query(updateSql, function(err, res) {
		if (err) {
			console.log('UpdatePassword err:' + err);
		} else {
			console.log("UpdatePassword success");
			if (typeof callback === 'function') {
				callback(err, res);
			}
		}
	});
};

// 更新用户信息
User.prototype.UpdateInfo = function(callback) {
	var now = util.getTimeString(new Date());
	var updateSql = 'update user set u_name="' + this.props.name +
		'",u_city="' + this.props.city + '",u_sex="' + this.props.sex + '",u_img="' + this.props.img + '", u_uptime="' + now +'" where u_id=' + this.props.id;
	console.log(updateSql);
	con.query(updateSql, function(err, res) {
		if (err) {
			console.log('UpdateInfo err:' + err);
		} else {
			console.log("UpdateInfo success");
			if (typeof callback === 'function') {
				callback(err, res);
			}
		}
	});
};

module.exports = User;
