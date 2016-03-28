var footer = require('../util/footer');
var isLogin = require('../util/isLogin');
var cookie = require('../util/cookie');
var config = require('../util/config');

var meModule = (function($) {

	var init = function() {
		eventBind();
	};

	var eventBind = function() {
		// 退出登录 
		$('#J_login-out').on('tap', function() {
			cookie.deleteCookie({
				name: 'token'
			});
			$('#J_container').addClass('pt-page-scaleDown');
			location.href = "login.min.html?returnURL=me.min.html";
		});

		// 进入子页 
		$('.J_sub-link').on('tap', function() {
			var _link = $(this).data('link');
			location.href = _link + ".min.html";
		});
	};

	init();
})($);