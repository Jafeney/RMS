var template = require('../util/template');
var lazyload = require('../util/lazyload')();
var footer = require('../util/footer');
var config = require('../util/config');
var modal = require('../util/modal');
var $ = window.$;

var orderModule = (function() {

	var init = function() {
		renderDatepicker();
		eventBind();
	};

	var renderDatepicker = function() {
		var now = new Date();
		var today = {
			day: now.getDate(),
			time: now.getDay(),
			month: now.getMonth()+ 1
		};
		var range = 7 - today.time; 
		var firstWeek = [],nextWeek = [];
		for(var i = 0; i < range; i++) {
			firstWeek.push(today.day + i);
		}

		for(var j = 7; j< 14; j++) {
			nextWeek.push(today.day + j);
		}

		var _tpl = template($('#datepicker-tpl').html(), {
			data: 1
		});
		$('#J_datepicker').html(_tpl);
	};

	var eventBind = function() {

		// 选择日期
		$(document).on('tap', '.date', function() {
			if (!$(this).hasClass('active')) {
				$('.date').removeClass('active');
				$(this).addClass('active');
			}
		});

		// 打开时间选择遮罩
		$('#J_btn-time').on('tap', function() {
			$('#J_mask-time').removeClass('hidden');
		});

		// 打开餐位选择遮罩
		$('#J_seat').on('tap', function() {
			$('#J_mask-seat').removeClass('hidden');
		});

		// 选择时间
		$(document).on('tap', '.time-item', function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').siblings().removeClass('active');
				$('#J_timer').html($(this).html());
			}
		});

		// 选择餐位
		$(document).on('tap', '.seat-item', function() {
			if (!$(this).hasClass('active') && !$(this).hasClass('disabled')) {
				$(this).addClass('active').siblings().removeClass('active');
				$('#J_seat').html($(this).html());
			}
		});

		// 关闭遮罩
		$('.J_mask-close').on('tap', function() {
			$(this).parent().parent().addClass('hidden');
		});

		// 选择性别
		$('#J_sex>span').on('tap', function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});

		// 提交预定
		$(document).on('tap', '#J_submit', function() {
			var _date = $('.date.active').data('date'),
				_time = $('#J_timer').text(),
				_number = $('#J_number').val(),
				_name = $('#J_name').val(),
				_sex = $('#J_sex').find('span.active').data('sex'),
				_phone = $('#J_phone').val(),
				_seat = $('#J_seat').text();

			if (_date && _time && _number && _phone.length===11 && _name && _sex && _seat) {
				modal.confirm({
					title: '提示',
					content: '预定成功！',
					callback: function() {
						console.log('预定成功！');
					}
				});
			} else {
				if (!_name) {
					modal.confirm({
						title: '提示',
						content: '您输入姓名',
						callback: function() {
							return false;
						}
					});
				} 
				if (_phone.length!==11) {
					modal.confirm({
						title: '提示',
						content: '您输入正确的手机号码',
						callback: function() {
							return false;
						}
					});
				} 
				if (!_seat) {
					modal.confirm({
						title: '提示',
						content: '请先选择餐位',
						callback: function() {
							return false;
						}
					});
				} 
			}
		});
	};

	init();
})();
