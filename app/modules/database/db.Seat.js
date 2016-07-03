/**
 * @desc 餐位模型
 */

var mysql = require('mysql'),
	util = require('../../routes/util'),
	config = require('./db.config.js');

var con = mysql.createConnection(config);

var Seat = function(seat) {
	this.props = seat.props;
};

// 获取全部数据
Seat.prototype.getAllItems = function(callback) {
	var selectSql = "select * from seat where st_del=0";
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


// 根据id获取
Seat.prototype.getItemById = function(callback) {
	var selectSql = "select * from seat where st_del=0 and st_id=" + this.props.id;
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

// 更新
Seat.prototype.updateInfo = function(callback) {
	var now = util.getTimeString(new Date());
	var updateSql = 'update user set u_name="' + this.props.name +
		'",u_city="' + this.props.city + '",u_sex="' + this.props.sex + '",u_img="' + this.props.img + '", u_uptime="' + now +'" where u_id=' + this.props.id;
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

module.exports = Seat;
