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
