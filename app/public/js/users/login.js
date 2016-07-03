(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var footer = require('../util/footer');
var cookie = require('../util/cookie');
var config = require('../util/config');
var modal = require('../util/modal');
var $ = window.$;

var loginModule = (function() {

	var code = '';

	var init = function() {
		eventBind();
	};

	var getReturnUrl = function() {
		return location.search.split('returnURL=')[1];
	};

	var eventBind = function() {

		// 实现登录
		$('#J_login').on('tap', function() {
			var _username = $('#J_username').val();
			var _code = $('#J_code').val();

			if (_username && _code && (_code == code)) { 
				$.ajax({
					type: 'get',
					url: '/user/get/phone',
					data: {
						phone: _username
					},
					dataType: 'json',
					success: function(res) {
						if (res.status) {
							modal.confirm({
								content: '登录成功！',
								callback: function() {
									cookie.addCookie({
										name: 'token',
										value: _username + 'rms' + _code + 'rms' + res.data[0].u_id,
										expiresHours: 3
									});
									window.localStorage.uid = res.data[0].u_id;
									window.localStorage.sex = res.data[0].u_sex;
									window.localStorage.img = res.data[0].u_img;
									window.localStorage.city = res.data[0].u_city;
									window.localStorage.score = res.data[0].u_score;
									window.localStorage.name = res.data[0].u_name;
									location.href = getReturnUrl();
								}
							});
						}
					},
					fail: function() {
						console.log('请求失败');
					}
				});
			}
		});

		// 获取验证码
		$('#J_getCode').on('tap', function() {
			var self = $(this);
			var tel = $('#J_username').val();
			if (tel.length !== 11) {
				modal.confirm({
					content: '手机号码格式不对！'
				});
				return false;
			}
			if (!self.hasClass('active')) {
				var _time = 60;
				var timer = setInterval(function() {
					_time--;
					self.text(_time + '秒后重试').addClass('active');
					if (_time < 0) {
						self.removeClass('active').text('获取验证码');
						clearInterval(timer);
					}
				}, 1000);

				code = Math.random() * 10000 | 0;
				window.setTimeout(function() {
					modal.confirm({
						content: '您的验证码为' + code,
						callback: function() {
							$('#J_code').val(code);
						}
					})
				}, 2000);
			}
		});
	};

	init();
})();

},{"../util/config":2,"../util/cookie":3,"../util/footer":4,"../util/modal":5}],2:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
var $ = window.$;

var footer = (function(){

	$('#J_footerBar li').on('tap', function(){
		if($(this).hasClass('active')){
			return false;
		}
		var link = $(this).data('url');
		location.href = link;
	});

})();

module.exports = footer;

},{}],5:[function(require,module,exports){
/**
 * @desc 全局模态窗口
 **/
 var $ = window.$;

var modal = {
    confirm: function(opts) {
        var title = opts.title || '提示',
            content = opts.content || '提示内容',
            callback = opts.callback;
        var newNode = [
            '<div class="mask" id="J_mask">',
                '<div class="modal-box">',
                    '<h2>',
                        title,
                    '</h2>',
                    '<p>',
                        content,
                    '</p>',
                    '<div class="mask-btns">',
                        '<span id="J_cancel">取消</span>',
                        '<span id="J_confirm">确定</span>',
                    '</div>',
                '</div>',
            '</div>',
        ].join('');
        $('#J_mask').remove();
        $('body').append(newNode);

        $('#J_cancel').on('tap', function() {
            $('#J_mask').remove();
        });

        $('#J_confirm').on('tap', function() {
            if (typeof callback === 'function') {
                callback();
            }
            $('#J_mask').remove();
        });
    },
    bt3Confirm: function(opts) {
        var title = opts.title || '提示',
            content = opts.content || '提示内容',
            callback = opts.callback;

        $('#J_modal-title').html(title);
        $('#J_modal-content').html(content);

        $('#myModal').modal();
        $('#J_confirm-sure').on('click', function() {
            if (typeof callback === 'function') {
                callback();
            }
            $('#myModal').modal('hide');
        });

    }
};

module.exports = modal;

},{}]},{},[1])