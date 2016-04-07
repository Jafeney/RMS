var template = require('../util/template');
var config = require('../util/config');

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
				money: 120,
				coupon: '情人节双人优惠',
				payMoney: 120*88/100,
				seat: 'F11'
			},
			{
				id: 2,
				time: "2016-04-01",
				money: 50,
				coupon: '春节单人优惠',
				payMoney: 50*95/100	,
				seat: 'F12'
			},
			{
				id: 3,
				time: "2016-04-01",
				money: 50,
				coupon: '愚人节屌丝优惠',
				payMoney: 50*95/100,
				seat: 'F13'
			},
			{
				id: 2,
				time: "2016-04-01",
				money: 50,
				coupon: '春节单人优惠',
				payMoney: 50*95/100	,
				seat: 'F14'
			},
			{
				id: 3,
				time: "2016-04-01",
				money: 50,
				coupon: '愚人节屌丝优惠',
				payMoney: 50*95/100,
				seat: 'F15'
			},
			{
				id: 2,
				time: "2016-04-01",
				money: 50,
				coupon: '春节单人优惠',
				payMoney: 50*95/100	,
				seat: 'F16'
			},
			{
				id: 3,
				time: "2016-04-01",
				money: 50,
				coupon: '愚人节屌丝优惠',
				payMoney: 50*95/100,
				seat: 'F19'
			},
			{
				id: 1,
				time: "2016-04-01",
				money: 120,
				coupon: '情人节双人优惠',
				payMoney: 120*88/100,
				seat: 'F5'
			},
			{
				id: 2,
				time: "2016-04-01",
				money: 50,
				coupon: '春节单人优惠',
				payMoney: 50*95/100	,
				seat: 'F2'
			}
		];

		if (typeof callback === 'function') {
			callback(recordList);
		}
	};

	var eventBind = function() {};

	var chartLine = function() {
		var data1 = [120,50,50,50,50,50,120,120];
		var data2 = [105.6,47.5,47.5,47.5,47.5,47.5,105.6,105.6];
		var lineChartData = {
			labels : ["1月","2月","3月","4月","5月","6月","7月"],
			datasets : [
				{
					label: "原先支付",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : data1
				},
				{
					label: "优惠支付",
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

})($);