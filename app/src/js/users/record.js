var template = require('../util/template');
var config = require('../util/config');
var modal = require('../util/modal');
var $ = window.$;

var recordModule = (function() {

	var init = function() {
		eventBind();
		getData(render);
		chartLine();
	};

	var render = function(data) {
		var _tpl = template($('#recordList-tpl').html(),{lists: data});
		$('#J_recordList').html(_tpl);
	};

	var getData = function(callback) {
		var recordList = [
			{
				id: 1,
				time: "2016-04-01",
				payMoney: 120*88/100,
				coupon: '情人节双人优惠',
				seat: 'F11',
				states: 0
			},
			{
				id: 2,
				time: "2016-04-01",
				payMoney: 50*95/100	,
				coupon: '春节单人优惠',
				seat: 'F12',
				states: 0
			},
			{
				id: 3,
				time: "2016-04-01",
				coupon: '愚人节屌丝优惠',
				payMoney: 50*95/100,
				seat: 'F13',
				states: 1
			},
			{
				id: 2,
				time: "2016-04-01",
				coupon: '春节单人优惠',
				payMoney: 50*95/100	,
				seat: 'F14',
				states: 1
			},
			{
				id: 3,
				time: "2016-04-01",
				coupon: '愚人节屌丝优惠',
				payMoney: 50*95/100,
				seat: 'F15',
				states: 1
			},
			{
				id: 2,
				time: "2016-04-01",
				coupon: '春节单人优惠',
				payMoney: 50*95/100	,
				seat: 'F16',
				states: 1
			},
			{
				id: 3,
				time: "2016-04-01",
				coupon: '愚人节屌丝优惠',
				payMoney: 50*95/100,
				seat: 'F19',
				states: 1
			},
			{
				id: 1,
				time: "2016-04-01",
				coupon: '情人节双人优惠',
				payMoney: 120*88/100,
				seat: 'F5',
				states: 1
			}
		];

		if (typeof callback === 'function') {
			callback(recordList);
		}
	};

	var eventBind = function() {

		// 打开评价遮罩
		$(document).on('tap', '.J_btn-evalate', function() {
			$('#J_mask-evalate').removeClass('hidden');
		});

		// 关闭评价遮罩
		$('.J_mask-close').on('tap', function() {
			$('#J_mask-evalate').addClass('hidden');
		});

		// 选择满意分
		$('.score-item').on('tap', function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});

		// 确定评价
		$('#J_submit-evalate').on('tap', function() {
			var _score = $('.score-item.active').data('score'),
				_content = $('#evalate-txt').val();
			modal.confirm({
				content: '感谢您的评价！'
			})
		});
	};

	var chartLine = function() {
		var data1 = [120,200,400,500,300,50,120,120];
		var data2 = data1.map(function(word){return word*8.8});
		var lineChartData = {
			labels : ["1月","2月","3月","4月","5月","6月","7月"],
			datasets : [
				{
					label: "2016年",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : data1
				},
				{
					label: "2015年",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : data2
				}
			]
		};

		var ctx = document.getElementById("J-chart").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});

	};

	init();

})();
