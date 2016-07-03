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
