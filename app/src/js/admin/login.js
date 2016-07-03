var cookie = require('../util/cookie');
var config = require('../util/config');
var $ = window.$;

var myapp = (function() {
    var init = function() {
        checkAutoLogin();
        eventBind();
    };
    var eventBind = function() {
        // 调用icheck组件
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });

        // 登录验证
        $('#J_login-submit').on('click', function() {
            var _tel = $('#J_login-tel').val(),
                _pwd = $('#J_login-pwd').val(),
                _flag = $('.icheckbox_square-blue').attr('aria-checked');

            if (_tel.length === 11 && _pwd.length>5) {

                $.ajax({
                    type: 'get',
                    url: '/admin/login',
                    data: {
                        phone: _tel,
                        password: _pwd
                    },
                    dataType: 'json',
                    success: function(res) {
                        if (res.status) {
                            // 如果勾选了自动登录
                            if (_flag) {
                                cookie.addCookie({
                					name: 'token',
                					value: res.data[0].a_phone + '_' +res.data[0].a_name,
                					expiresHours: 24*30 //自动登录一个月
                				});
                            }
                            else {
                                cookie.addCookie({
                                    name: 'token',
                                    value: res.data[0].a_phone + '_' +res.data[0].a_name,
                                    expiresHours: 24*1 //维持登录1小时
                                });
                            }
                            // 跳转
                            location.href = "/html/admin/index.min.html";
                        } else {
                            alert(res.message);
                        }
                    }
                });
            }
        });
    };

    var checkAutoLogin = function() {
        if (cookie.getCookie({name: 'token'})) {
            location.href = "/html/admin/index.min.html";
        }
    }
    init();
})();
