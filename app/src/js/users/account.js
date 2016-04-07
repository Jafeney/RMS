var footer = require('../util/footer');
var cookie = require('../util/cookie');
var config = require('../util/config');

var accountModule = (function($) {

	var init = function() {
		eventBind();
	};

	var eventBind = function() {
		/*头像选择*/
		$('#user-head').on('tap', function() {
			$('#upload-img').trigger('click');
		});
	};

	init();
})($);