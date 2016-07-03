var Admin = require('../../modules/database/db.Admin.js');

module.exports = {
    init: function(app) {
        app.get('/admin/login', this.doLoginIn);
        app.get('/admin/changePwd', this.doChangePwd);
        app.get('/admin/get', this.doGetAllAdmin);
    },

    // 获取所有管理员信息
    doGetAllAdmin: function(req, res) {
        var props = {};
        var admin = new Admin({props:props});
        admin.getAllItems(function(err, data) {
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

    // 管理员登录
    doLoginIn: function(req, res) {
        var props = {
            phone: req.param('phone'),
            password: req.param('password')
        };
        var admin = new Admin({props: props});
        admin.getItemByPhone(function(err, data) {
            if (data.length === 1 && data[0].a_password === props.password ) {
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

    // 管理员修改密码
    doChangePwd: function(req, res) {
        var props = {
            oldPassword: req.param('oldPassword'),
            newPassword: req.param('newPassword')
        };
        var admin = new Admin({props: props});
        admin.UpdatePassword(function(err, data) {
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
