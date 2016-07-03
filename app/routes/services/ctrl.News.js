var News = require('../../modules/database/db.News.js');

module.exports = {
    init: function(app) {
        app.get('/news/get/category', this.doGetItemsByCategory);
        app.get('/news/get/id', this.doGetItemsById);
        app.post('/news/add', this.doAddItems);
        app.post('/news/update', this.doUpdateItemById);
        app.get('/news/delete', this.doDeleteItemById);
    },

    // 根据类别获取新闻列表
    doGetItemsByCategory: function(req, res) {
        var props = {
            category: req.param('category')
        };
        var news = new News({props:props});
        news.getItemsByCategory(function(err, data) {
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
        var news = new News({props:props});
        news.getItemsById(function(err, data) {
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
        console.log(props);
        var news = new News({props: props});
        news.addItem(function(err, data) {
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
        var news = new News({props: props});
        news.deleteItemById(function(err, data) {
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
        console.log(props);
        var news = new News({props: props});
        news.updateItemById(function(err, data) {
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
