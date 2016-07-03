(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var config = require('../util/config');
var $ = window.$;

/*关于我们模块*/
var aboutModule = (function() {
	var init = function() {
		eventBind();
		baiduMap();
	};
	var baiduMap = function() {
		// 百度地图API功能
		var map = new BMap.Map("J_map");
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				var mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
				map.panTo(r.point);
				// 规划路线
				var driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
				// 设置“温州医科大学”为目的地
				driving.search(r.point, "温州医科大学");
			}
			else {
				alert('failed'+this.getStatus());
			}
		},{enableHighAccuracy: true});
	};
	var eventBind = function() {};
	init();
})();

},{"../util/config":2}],2:[function(require,module,exports){
var config = {
	version: '1.0.0',
	author: 'Jafeney',
	createDate: '2016-03-26'
};

module.exports = config;
},{}]},{},[1])