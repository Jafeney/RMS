/**
 * @desc 管理员模型
 */

 var mysql = require('mysql'),
 	config = require('./db.config.js');

 var con = mysql.createConnection(config);

 var Admin = function(admin) {
    this.props = admin.props;
};

 Admin.prototype.getAllItems = function(callback) {
    var selectSql = "select * from admin";
 	con.query(selectSql, function(err, res) {
 		if(err) {
 			console.log('getAllItems err:' + err);
 		} else {
 			console.log('getAllItems success');
 			if (typeof(callback) === 'function') {
 				callback(err, res);
 			}
 		}
 	});
};

 Admin.prototype.getItemByPhone = function(callback) {
    var selectSql = "select * from admin where a_phone="+this.props.phone;
  	con.query(selectSql, function(err, res) {
  		if(err) {
  			console.log('getItem err:' + err);
  		} else {
  			console.log('getItem success');
  			if (typeof(callback) === 'function') {
  				callback(err, res);
  			}
  		}
  	});
};

 Admin.prototype.UpdatePassword = function(callback) {
    var updateSql = 'update admin set a_password=' + this.props.newPassword +
     ' where a_password=' + this.props.oldPassword;
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

module.exports = Admin;
