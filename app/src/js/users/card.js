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
				name: "愚人节特惠",
				person: "个人",
				money: "9.5折",
				time: "2016-04-01",
				state: "可用"
			},
			{
				id: 1,
				name: "愚人节特惠",
				person: "个人",
				money: "9.5折",
				time: "2016-04-01",
				state: "可用"
			},
			{
				id: 1,
				name: "愚人节特惠",
				person: "个人",
				money: "9.5折",
				time: "2016-04-01",
				state: "可用"
			},
			{
				id: 1,
				name: "愚人节特惠",
				person: "个人",
				money: "9.5折",
				time: "2016-04-01",
				state: "可用"
			}
		];

		if (typeof callback === 'function') {
			callback(cardList);
		}
	};

	var eventBind = function() {};

	init();

})($);