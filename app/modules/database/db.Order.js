/**
 * @desc 订单模型
 */

var mysql = require('mysql'),
	util = require('../../routes/util'),
	config = require('./db.config.js');

var con = mysql.createConnection(config);

var Order = function(order) {
	this.props = order.props;
};

// 获取全部数据
Order.prototype.getAllItems = function(callback) {
	var selectSql = "select * from order where o_del=0";
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

// 根据ID获取数据
Order.prototype.getAllItems = function(callback) {
	var selectSql = "select * from order where o_del=0";
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

// 下订单
Order.prototype.addItem = function(callback) {
    var now = util.getTimeString(new Date());

    // 如果存在优惠券id
    var addSql = 'insert into order(o_uptime,o_origin_price,o_discount,o_pay_price,o_paid,o_evaluate,o_notes,o_handler,o_score,o_seat_id,o_admin_id,o_user_id,o_coupon_id) values("'+now+'",'+this.props.price+','+this.props.discount+','+this.props.payPrice+',0,0,null,1,60,'+this.props.seatId+',1,'+this.props.userId+','+this.props.couponId+')';

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

// 更新订单
Order.prototype.UpdateInfo = function(callback) {
	var now = util.getTimeString(new Date());
	var updateSql = 'update order set u_name="' + this.props.name +
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

// 删除订单
Order.prototype.deleteItemById = function(callback) {
    var DeleteSql = "update order set o_del=1 where o_id=" + this.props.id;
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


module.exports = Order;
