(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var footer = require('../util/footer');
var cookie = require('../util/cookie');
var config = require('../util/config');

var accountModule = (function($) {

	var init = function() {
		eventBind();
	};

	var eventBind = function() {

	};

	init();
})();
},{"../util/config":2,"../util/cookie":3,"../util/footer":4}],2:[function(require,module,exports){
var config = {
	version: '1.0.0',
	author: 'Jafeney',
	createDate: '2016-03-26'
};

module.exports = config;
},{}],3:[function(require,module,exports){
/**
 * cookie 基本操作
 */

var cookie = (function() {

	/**
	 * [读取cookie]
	 * @param  {[type]} options [参数对象]
	 * @return {[type]}         [对应cookie的值]
	 */
 	var getCookie = function(options) {
		var arr,reg=new RegExp("(^| )"+options.name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			return unescape(arr[2]);
		}
		else{
			return null;
		}
	};

	/**
	 * [添加一个cookie]
	 * @param {[type]} options [参数对象]
	 */
	var addCookie = function(options) {
		var _name = options.name,
			_value = options.value,
			_expiresHours = options.expiresHours;
		var _cookieString = _name + "=" + escape(_value);
		//判断是否设置过期时间
		if (_expiresHours > 0) {
			var _date = new Date();
			_date.setTime(_date.getTime() + _expiresHours * 3600 * 1000);
			_cookieString = _cookieString + "; expires=" + _date.toGMTString();
		}
		document.cookie = _cookieString;
	};


	/**
	 * [删除指定名称的cookie]
	 * @param  {[type]} options [参数对象]
	 * @return {[type]}         [void]
	 */
	var deleteCookie = function(options) {
		var _date = new Date(),
			_name = options.name;
		_date.setTime(_date.getTime() - 10000);
		document.cookie = _name + "=v; expires=" + _date.toGMTString();
	};

	return {
		getCookie: getCookie,
		addCookie: addCookie,
		deleteCookie: deleteCookie
	}

})();

module.exports = cookie;
},{}],4:[function(require,module,exports){
var footer = (function($){

	$('#J_footerBar li').on('tap', function(){
		if($(this).hasClass('active')){
			return false;
		}
		var link = $(this).data('url');
		location.href = link;
	});

})($);

module.exports = footer;
},{}]},{},[1])