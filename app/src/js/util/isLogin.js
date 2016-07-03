var cookie = require('./cookie');   // 引入cookie模块

/*
 * 检查用户是否登录
*/
var isLogin = (function(){

	var token = cookie.getCookie({name: 'token'});  // 从cookie里读取token

	// 如果不存在跳转到登录页面
	if (!token) {
		var returnURL = location.href.split('/');   // 当前页面做为登录完成后的调整页面
		location.href = 'login.min.html'+'?returnURL='+returnURL[returnURL.length-1];
	}

})();

module.exports = isLogin;
