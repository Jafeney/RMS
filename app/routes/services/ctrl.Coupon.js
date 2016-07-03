var Coupon = require('../../modules/database/db.Coupon.js');

module.exports = {
    init: function(app) {
        app.get('/coupon/get', this.doGetAllItems);
        app.get('/coupon/get/id', this.doGetItemsById);
        app.post('/coupon/add', this.doAddItems);
        app.post('/coupon/update', this.doUpdateItemById);
        app.get('/coupon/delete', this.doDeleteItemById);
    },

    // 获取所有的优惠券
    doGetAllItems: function(req, res) {
        var props = {};
        var coupon = new Coupon({
            props: props
        });
        coupon.getAllItems(function(err, data) {
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
        var coupon = new Coupon({
            props: props
        });
        coupon.getItemsById(function(err, data) {
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
        var coupon = new Coupon({
            props: props
        });
        coupon.addItem(function(err, data) {
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
        var coupon = new Coupon({
            props: props
        });
        coupon.deleteItemById(function(err, data) {
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
        var coupon = new Coupon({
            props: props
        });
        coupon.updateItemById(function(err, data) {
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
