var template = require('../util/template');
var config = require('../util/config');

var cardModule = (function() {

	var init = function() {
		eventBind();
		getData(render);
	};

	var render = function(data) {
		var _tpl = template($('#cardList-tpl').html(),{lists: data});
		$('#J_cardList').html(_tpl);
	};

	var getData = function(callback) {
		var cardList = [
			{
				id: 1,
				code: "2016082342A",
				name: "春节单人特惠",
				person: "单人可享",
				money: "9.5折",
				time: "2016-04-01",
				use: 0,
				state: "已使用"
			},
			{
				id: 2,
				code: "201602342B",
				name: "情人节双人特惠",
				person: "双人可享",
				money: "8.8折",
				time: "2016-04-01",
				use: 0,
				state: "已使用 "
			},
			{
				id: 3,
				code: "2016082342C",
				name: "愚人节屌丝特惠",
				person: "单人可享",
				money: "9.5折",
				time: "2016-04-01",
				use: 1,
				state: "可使用"
			}
		];

		if (typeof callback === 'function') {
			callback(cardList);
		}
	};

	var eventBind = function() {};

	init();

})($);