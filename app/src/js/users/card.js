var template = require('../util/template');
var config = require('../util/config');
var modal = require('../util/modal');
var $ = window.$;

var cardModule = (function() {

	var init = function() {
		eventBind();
		getData(render);
	};

	var render = function(data) {
		data.map(function(item,i) {
			item.id = item.c_id;
			item.code = item.c_code + '00' + i;
			item.person = item.c_limit + '人可享';
			item.money = item.c_discount + '折';
			item.time = item.c_end_time.split('T')[0] + '到期';
			item.use = 1;
			item.state = util.transState(item.state || 1);
		});
		var _tpl = template($('#cardList-tpl').html(),{lists: data});
		$('#J_cardList').html(_tpl);
	};

	var getData = function(callback) { 
		$.ajax({
			type: 'get',
			url: '/coupon/get',
			dataType: 'json',
			data: {},
			success: function(res) {
				if (res.status) {
					callback && callback(res.data);
				} 
			},
			fail: function() {
				console.log('请求失败!');
			}
		});
	};

	var eventBind = function() {
		$(document).on('tap', '.J_card-use', function() {
			modal.confirm({
				content: '优惠券使用成功！<br/>优惠码为 <span style="color:red">2016082342C</span>'
			});
		});
	};

	var util = {
		transState: function(state) {
			if (state === 0) {
				return '已过期';
			} 
			if (state === 1) {
				return '使用';
			}
			if (state === 2) {
				return '已使用';
			}
		}
	}

	init();

})();
