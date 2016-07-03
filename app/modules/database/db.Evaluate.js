/**
 * @desc 评价模型
 */

var mysql = require('mysql'),
    config = require('./db.config.js'),
    util = require('../../routes/util');

var con = mysql.createConnection(config);

var Evaluate = function(evaluate) {
    this.props = evaluate.props;
};

Evaluate.prototype.getAllItems = function(callback) {
    var selectSql = "select * from evaluate where e_del=0";
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

Evaluate.prototype.getItemsByNewsId = function(callback) {
    var selectSql = "select * from evaluate left join user on evaluate.e_user_id=user.u_id where e_del=0 and evaluate.e_news_id=" + this.props.newsId;
    con.query(selectSql, function(err, res) {
        if (err) {
            console.log('getItemsByNewsId err:' + err);
        } else {
            console.log('getItemsByNewsId success');
            if (typeof(callback) === 'function') {
                callback(err, res);
            }
        }
    });
};

Evaluate.prototype.getItemsByUserId = function(callback) {
    var selectSql = "select * from evaluate left join user on evaluate.e_del=0 and evaluate.e_user_id=user.u_id where u_id=" + this.props.userId;
    con.query(selectSql, function(err, res) {
        if (err) {
            console.log('getItemsByUserId err:' + err);
        } else {
            console.log('getItemsByUserId success');
            if (typeof(callback) === 'function') {
                callback(err, res);
            }
        }
    });
};

Evaluate.prototype.getItemsById = function(callback) {
    var selectSql = "select * from evaluate where e_del=0 and e_id=" + this.props.id;
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

Evaluate.prototype.addItem = function(callback) {
    var now = util.getTimeString(new Date());

    var addSql =
        'insert into evaluate(e_uptime,e_content,e_del,e_news_id,e_user_id) values("' +
        now + '","' + this.props.content + '",0,' + this.props.newsId + ',' + this.props.userId + ')';

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

Evaluate.prototype.deleteItemById = function(callback) {

    var DeleteSql = "update evaluate set e_del = 1 where e_id=" + this.props.id;

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


module.exports = Evaluate;
