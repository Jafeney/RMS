/**
 * @desc 新闻推送模型
 */

 var mysql = require('mysql'),
 	config = require('./db.config.js'),
    util = require('../../routes/util');

 var con = mysql.createConnection(config);

 var News = function(news) {
    this.props = news.props;
};

 News.prototype.getAllItems = function(callback) {
    var selectSql = "select * from news";
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

News.prototype.getItemsByCategory = function(callback) {
    var selectSql = "";
    if(this.props.category === "all") {
        selectSql = "select * from news where n_del=0";
    } else {
        selectSql = "select * from news where n_del=0 and n_news_type_id="+this.props.category;
    }

    con.query(selectSql, function(err, res) {
 		if(err) {
 			console.log('getItemsByCategory err:' + err);
 		} else {
 			console.log('getItemsByCategory success');
 			if (typeof(callback) === 'function') {
 				callback(err, res);
 			}
 		}
 	});
};

News.prototype.getItemsById = function(callback) {
    var selectSql = "select * from news where n_del=0 and n_id=" + this.props.id;
    con.query(selectSql, function(err, res) {
 		if(err) {
 			console.log('getItemsById err:' + err);
 		} else {
 			console.log('getItemsByCategory success');
 			if (typeof(callback) === 'function') {
 				callback(err, res);
 			}
 		}
 	});
};

News.prototype.addItem = function(callback) {
    var now = util.getTimeString(new Date());

    // 如果存在优惠券id
    var addSql = 'insert into news(n_title,n_uptime,n_img,n_detail,n_Del,n_admin_id,n_news_type_id,coupon_c_id) values("'+this.props.title+'","'+now+'","'+this.props.img+'","'+this.props.content+'",0,1,'+this.props.type+','+this.props.coupon+')';

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

News.prototype.deleteItemById = function(callback) {
    var DeleteSql = "update news set n_del=1 where n_id=" + this.props.id;
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

News.prototype.updateItemById = function(callback) {
    var now = util.getTimeString(new Date());
    var updateSql = 'update news set n_title="'+this.props.title+'",n_uptime="'+now+'",n_img="'+this.props.img+'",n_detail="'+this.props.content+'",n_news_type_id="'+this.props.type+'",coupon_c_id="'+this.props.coupon+'"  where n_id='+this.props.id;
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

module.exports = News;
