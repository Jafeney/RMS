var cookie = require('./cookie');

var isLogin = (function(){
	var token = cookie.getCookie({name: 'token'});

	if (!token) {
		var returnURL = location.href.split('/');
		location.href = 'login.min.html'+'?returnURL='+returnURL[returnURL.length-1];
	}

})();

module.exports = isLogin;