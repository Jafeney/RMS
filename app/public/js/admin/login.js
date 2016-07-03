(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../util/config":2,"../util/cookie":3}],2:[function(require,module,exports){
var config = {
	version: '1.0.0',
	author: 'Jafeney',
	createDate: '2016-03-26'
};

module.exports = config;
},{}],3:[function(require,module,exports){
/**
 * cookie 基本操作
 */

var cookie = (function() {

	/**
	 * [读取cookie]
	 * @param  {[type]} options [参数对象]
	 * @return {[type]}         [对应cookie的值]
	 */
 	var getCookie = function(options) {
		var arr,reg=new RegExp("(^| )"+options.name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			return unescape(arr[2]);
		}
		else{
			return null;
		}
	};

	/**
	 * [添加一个cookie]
	 * @param {[type]} options [参数对象]
	 */
	var addCookie = function(options) {
		var _name = options.name,
			_value = options.value,
			_expiresHours = options.expiresHours;
		var _cookieString = _name + "=" + escape(_value);
		//判断是否设置过期时间
		if (_expiresHours > 0) {
			var _date = new Date();
			_date.setTime(_date.getTime() + _expiresHours * 3600 * 1000);
			_cookieString = _cookieString + "; expires=" + _date.toGMTString();
		}
		document.cookie = _cookieString;
	};


	/**
	 * [删除指定名称的cookie]
	 * @param  {[type]} options [参数对象]
	 * @return {[type]}         [void]
	 */
	var deleteCookie = function(options) {
		var _date = new Date(),
			_name = options.name;
		_date.setTime(_date.getTime() - 10000);
		document.cookie = _name + "=v; expires=" + _date.toGMTString();
	};

	return {
		getCookie: getCookie,
		addCookie: addCookie,
		deleteCookie: deleteCookie
	}

})();

module.exports = cookie;
},{}]},{},[1])