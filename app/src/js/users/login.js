var footer = require('../util/footer');
var cookie = require('../util/cookie');
var config = require('../util/config');

var loginModule = (function($) {

	var init = function() {
		eventBind();
	};

	var getReturnUrl = function() {
		return location.search.split('=')[1];
	};

	var eventBind = function() {

		// 实现登录 
		$('#J_login').on('tap', function() {
			var _username = $('#J_username').val();
			var _code = $('#J_code').val();

			if (_username && _code) {
				cookie.addCookie({
					name: 'token',
					value: '123456',
					expiresHours: 3
				});
				location.href = getReturnUrl();
			}
		});

		// 获取验证码 
		$('#J_getCode').on('tap', function() {
			var self = $(this);
			if (!self.hasClass('active')) {
				var _time = 60;
				var timer = setInterval(function() {
					_time --;
					self.text(_time + '秒后重试').addClass('active');
					if (_time < 0) {
						self.removeClass('active').text('获取验证码');
						clearInterval(timer);
					}
				},1000);
			}
		});
	};

	init();
})($);