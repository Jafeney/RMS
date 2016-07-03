var Rule = require('../../modules/database/db.Rule.js');

module.exports = {
    init: function(app) {
        app.get('/rule/get', this.doGetAllItems);
        app.get('/rule/get/id', this.doGetItemsById);
        app.post('/rule/add', this.doAddItems);
        app.post('/rule/update', this.doUpdateItemById);
        app.get('/rule/delete', this.doDeleteItemById);
    },

    // 获取所有的优惠券
    doGetAllItems: function(req, res) {
        var props = {};
        var rule = new Rule({
            props: props
        });
        rule.getAllItems(function(err, data) {
            if (data.length) {
                return res.send({
                    status: 1,
                    data: data
                });
            } else {
                return res.send({
                    status: 0,
                    message: '出错了!'
                });
            }
        });
    },

    // 根据ID获取新闻列表
    doGetItemsById: function(req, res) {
        var props = {
            id: req.param('id')
        };
        var rule = new Rule({
            props: props
        });
        rule.getItemsById(function(err, data) {
            if (data.length) {
                return res.send({
                    status: 1,
                    data: data
                });
            } else {
                return res.send({
                    status: 0,
                    message: '出错了!'
                });
            }
        });
    },

    // 添加新的推送
    doAddItems: function(req, res) {
        var props = req.body;
        var rule = new Rule({
            props: props
        });
        rule.addItem(function(err, data) {
            if (!err) {
                return res.send({
                    status: 1,
                    message: '添加成功！'
                });
            } else {
                return res.send({
                    status: 0,
                    message: '添加失败!'
                });
            }
        });
    },

    // 根据ID删除一项
    doDeleteItemById: function(req, res) {
        var props = {
            id: req.param('id')
        };
        var rule = new Rule({
            props: props
        });
        rule.deleteItemById(function(err, data) {
            if (!err) {
                return res.send({
                    status: 1,
                    message: '删除成功！'
                });
            }
        });
    },

    // 更新推送
    doUpdateItemById: function(req, res) {
        var props = req.body;
        var rule = new Rule({
            props: props
        });
        rule.updateItemById(function(err, data) {
            if (!err) {
                return res.send({
                    status: 1,
                    message: '更新成功！'
                });
            } else {
                return res.send({
                    status: 0,
                    message: '更新失败!'
                });
            }
        });
    }
};
