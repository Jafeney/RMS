var config = require('../util/config');

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
				

				var driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
				driving.search(r.point, "温州医科大学");
			}
			else {
				alert('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true});

	};

	var eventBind = function() {};	

	init();

})($);