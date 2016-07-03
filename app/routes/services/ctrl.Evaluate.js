var Evaluate = require('../../modules/database/db.Evaluate.js');

module.exports = {
    init: function(app) {
        app.get('/evaluate/get', this.doGetAllItems);
        app.get('/evaluate/get/id', this.doGetItemsById);
        app.get('/evaluate/get/newsId', this.doGetAllItemsByNewsId);
        app.get('/evaluate/get/userId', this.doGetAllItemsByUserId);
        app.post('/evaluate/add', this.doAddItems);
        app.post('/evaluate/update', this.doUpdateItemById);
        app.get('/evaluate/delete', this.doDeleteItemById);
    },

    // 获取所有
    doGetAllItems: function(req, res) {
        var props = {};
        var evaluate = new Evaluate({
            props: props
        });
        evaluate.getAllItems(function(err, data) {
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

    // 根据新闻ID获取
    doGetAllItemsByNewsId: function(req, res) {
        var props = {
            newsId: req.param('newsId')
        };
        var evaluate = new Evaluate({
            props: props
        });
        evaluate.getItemsByNewsId(function(err, data) {
            if (data.length) {
                return res.send({
                    status: 1,
                    data: data
                });
            } else {
                return res.send({
                    status: 0,
                    message: '没有数据!'
                });
            }
        });
    },

    // 根据用户ID获取
    doGetAllItemsByUserId: function(req, res) {
        var props = {
            userId: req.param('userId')
        };
        var evaluate = new Evaluate({
            props: props
        });
        evaluate.getItemsByUserId(function(err, data) {
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

    // 根据ID获取
    doGetItemsById: function(req, res) {
        var props = {
            id: req.param('id')
        };
        var evaluate = new Evaluate({
            props: props
        });
        evaluate.getItemsById(function(err, data) {
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

    // 添加一项
    doAddItems: function(req, res) {
        var props = req.body;
        var evaluate = new Evaluate({
            props: props
        });
        evaluate.addItem(function(err, data) {
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
        var evaluate = new Evaluate({
            props: props
        });
        evaluate.deleteItemById(function(err, data) {
            if (!err) {
                return res.send({
                    status: 1,
                    message: '删除成功！'
                });
            }
        });
    },

    // 根据ID更新一项
    doUpdateItemById: function(req, res) {
        var props = req.body;
        var evaluate = new Evaluate({
            props: props
        });
        evaluate.updateItemById(function(err, data) {
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
