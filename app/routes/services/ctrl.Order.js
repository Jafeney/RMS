var Order = require('../../modules/database/db.Order.js');

module.exports = {
    init: function(app) {
        app.get('/order/get', this.doGetAllUser);
        app.get('/order/get/id', this.doGetUserById);
        app.post('/order/add', this.doGetUserByPhone);
        app.get('/order/delete', this.doGetUserByPhone);
        app.post('/order/update/phone', this.doGetUserByPhone);
    },

    // 获取所有用户信息
    doGetAllUser: function(req, res) {
        var props = {};
        var user = new User({
            props: props
        });
        user.getAllItems(function(err, data) {
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
    doGetUserById: function(req, res) {
        var props = {
            id: req.param('id'),
        };
        var user = new User({
            props: props
        });
        user.getItemById(function(err, data) {
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

    // 根据手机号码获取
    doGetUserByPhone: function(req, res) {
        var props = {
            phone: req.param('phone'),
        };
        var user = new User({
            props: props
        });
        user.getItemByPhone(function(err, data) {
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

    // 用户登录
    doLoginIn: function(req, res) {
        var props = {
            phone: req.param('phone'),
            password: req.param('password')
        };
        var user = new User({
            props: props
        });
        user.getItemByPhone(function(err, data) {
            if (data.length === 1 && data[0].a_password ===
                props.password) {
                data[0].a_password = null;
                return res.send({
                    status: 1,
                    data: data
                });
            } else {
                return res.send({
                    status: 0,
                    message: '手机号或密码不正确!'
                });
            }
        });
    },

    // 用户修改密码
    doChangePwd: function(req, res) {
        var props = {
            oldPassword: req.param('oldPassword'),
            newPassword: req.param('newPassword')
        };
        var user = new User({
            props: props
        });
        user.UpdatePassword(function(err, data) {
            if (!err) {
                return res.send({
                    status: 1,
                    message: '密码修改成功！'
                });
            } else {
                return res.send({
                    status: 0,
                    message: '旧密码不正确!'
                });
            }
        });
    },

    // 用户信息修改
    doChangeInfo: function(req, res) {
        var props = {
            id: req.param('id'),
            img: req.param('img'),
            name: req.param('name'),
            city: req.param('city'),
            sex: req.param('sex')
        };
        var user = new User({
            props: props
        });
        user.UpdateInfo(function(err, data) {
            if (!err) {
                return res.send({
                    status: 1,
                    message: '密码修改成功！'
                });
            } else {
                return res.send({
                    status: 0,
                    message: '旧密码不正确!'
                });
            }
        });
    }

};
