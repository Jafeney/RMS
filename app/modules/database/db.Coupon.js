/**
 * @desc 优惠券模型
 */

var mysql = require('mysql'),
    config = require('./db.config.js'),
    util = require('../../routes/util');

var con = mysql.createConnection(config);

var Coupon = function(news) {
    this.props = news.props;
};

Coupon.prototype.getAllItems = function(callback) {
    var selectSql = "select * from coupon where c_del=0";
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

Coupon.prototype.getItemsById = function(callback) {
    var selectSql = "select * from coupon where c_del=0 and c_id=" + this.props.id;
    con.query(selectSql, function(err, res) {
        if (err) {
            console.log('getItemsById err:' + err);
        } else {
            console.log('getItemsByCategory success');
            if (typeof(callback) === 'function') {
                callback(err, res);
            }
        }
    });
};

Coupon.prototype.addItem = function(callback) {
    var begin = util.getTimeString(new Date(this.props.begin));
    var end = util.getTimeString(new Date(this.props.end));

    // 如果存在优惠券id
    var addSql =
        'insert into coupon(c_discount,c_name,c_detail,c_code,c_begin_time,c_end_time,c_limit,c_del,c_admin_id) values(' +
        this.props.discount + ',"' + this.props.name + '","' + this.props.detail + '","' +
        this.props.code + '"' + begin + '"'+ '"' + end + '",' + this.props.limit + ',0,1,' +
        ')';

    con.query(addSql, function(err, res) {
        if (err) {
            console.log('addItem err:' + err);
        } else {
            console.log("addItem success");
            if (typeof callback === 'function') {
                callback(err, res);
            }
        }
    });
};

Coupon.prototype.deleteItemById = function(callback) {

    var DeleteSql = "update coupon set c_del = 1 where c_id=" + this.props.id;

    con.query(DeleteSql, function(err, res) {
        if (err) {
            console.log('deleteItemById err:' + err);
        } else {
            console.log("deleteItemById success");
            if (typeof callback === 'function') {
                callback(err, res);
            }
        }
    });
};

Coupon.prototype.updateItemById = function(callback) {
    var begin = util.getTimeString(new Date(this.props.begin));
    var end = util.getTimeString(new Date(this.props.end));

    var updateSql = 'update news set c_discount=' + this.props.discount +
        ',c_name="' + this.name + '",c_code="' + this.props.code +
        '",c_detail="' + this.props.detail + '",c_begin_time="' + begin + '",c_end_time="' + end + '",c_limit="' + this.props.limit + '"  where c_id=' +
        this.props.id;

    con.query(updateSql, function(err, res) {
        if (err) {
            console.log('updateItem err:' + err);
        } else {
            console.log("updateItem success");
            if (typeof callback === 'function') {
                callback(err, res);
            }
        }
    });
};

module.exports = Coupon;
