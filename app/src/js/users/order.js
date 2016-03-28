var template = require('../util/template');
var lazyload = require('../util/lazyload')();
var footer = require('../util/footer');
var config = require('../util/config');

var orderModule = (function($) {

	var init = function() {
		renderDatepicker();
		eventBind();
	};

	var renderDatepicker = function() {
		var _tpl = template($('#datepicker-tpl').html(),{data:1});
		$('#J_datepicker').html(_tpl);
	};

	var eventBind = function() {

		// 选择日期 
		$(document).on('tap', '.date', function(){
			if(!$(this).hasClass('active')) {
				$('.date').removeClass('active');
				$(this).addClass('active');
			}
		});

		// 打开遮罩 
		$('#J_btn-time').on('tap', function() {
			$('#J_mask').removeClass('hidden');
		});

		// 选择时间 
		$(document).on('tap', '.time-item', function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').siblings().removeClass('active');

				$('#J_timer').html($(this).html());
			}
		});

		// 关闭遮罩
		$('#J_mask-close').on('tap', function() {
			$('#J_mask').addClass('hidden');
		});
		
		// 选择性别 
		$('#J_sex>span').on('tap', function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});

	};

	init();
})($);