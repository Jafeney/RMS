var template = require('../util/template');
var lazyload = require('../util/lazyload')();
var footer = require('../util/footer');
var config = require('../util/config');
var Encode = require('../util/encode');
var Time = require('../util/time');
var $ = window.$;

var newsModule = (function() {

	var init = function() {
		getData(render);
		eventBind();
	};

	var render = function(data) {
		data.forEach(function(item) {
			item.img = item.n_img;
			item.title = item.n_title;
			item.content = Encode.html_plain(Encode.html_decode(item.n_detail));
			item.time = Time.getTimeString(new Date(item.n_uptime));
			item.id = item.n_id;
		});

		var _tpl = template($('#news-tpl').html(), {
			lists: data
		});
		$('#J_news').append(_tpl);
		lazyload.getLazyImg();
	};

	var getData = function(callback) {

		$.ajax({
			type: 'get',
			url: '/news/get/category',
			data: {
				category: 'all'
			},
			dataType: 'json',
			success: function(res) {
				if (res.status && typeof callback === "function") {
					callback(res.data);
				}
			},
			error: function(err) {
				console.log('GetData Error:' + err);
			}
		});
	};

	var eventBind = function() {

		// 加载更多
		$('#J_loadMore').on('tap', function() {
			getData(render);
		});

		// 进入详情页
		$(document).on('tap', '.J_news-item', function() {
			location.href = 'news-detail.min.html?nid=' + $(this).data('id');
		});

	};

	init();

})();
