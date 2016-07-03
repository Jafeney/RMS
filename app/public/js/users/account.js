(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var footer = require('../util/footer');
var cookie = require('../util/cookie');
var config = require('../util/config');
var modal = require('../util/modal');
var $ = window.$;

var accountModule = (function() {

	var localStorage = window.localStorage;
	var newImg = $('#user-head').attr('src');

	var init = function() {
		render(localStorage);
		eventBind();
	};

	var render = function(data) {
		$('#user-head').attr('src', data.img);
		$('#J_username').val(data.name);
		var sexIdx = data.sex === '男'? 0: 1;

		$('#J_sex').find('option').eq(sexIdx).attr('selected', 'selected');
		$('#J_city').val(data.city);
		$('#J_score').val(data.score);
	};

	var eventBind = function() {
		/*头像选择*/
		$('#user-head').on('tap', function() {
			$('#upload-img').trigger('click');
		});

		// 修改头像 
		$('#upload-img').on('change', function() {
			newImg = '/img/' + $(this).val().split('\\')[2];
			$('#user-head').attr('src', newImg);
		});

		// 保存修改
		$('#J_confirm-change').on('tap', function() {

			var _username = $('#J_username').val(),
				_sex = $('#J_sex').val(),
				_city = $('#J_city').val(),
				_score = $('#J_score').val();

			$.ajax({
				type: 'post',
				url: '/user/changeInfo',
				data: {
					id: localStorage.uid,
					img: newImg,
					name: _username,
					city: _city,
					sex: _sex
				},
				success: function(res) {
					if (res.status) {
						console.log('修改成功！');
						modal.confirm({
							content: '信息修改成功！'
						});
						localStorage.img = newImg,
						localStorage.name = _username,
						localStorage.city = _city,
						localStorage.score = _score;
					}
				},
				fail: function() {
					console.log('修改失败！');
				}
			})

		});
	};

	init();
})();

},{"../util/config":2,"../util/cookie":3,"../util/footer":4,"../util/modal":5}],2:[function(require,module,exports){
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
var $ = window.$;

var footer = (function(){

	$('#J_footerBar li').on('tap', function(){
		if($(this).hasClass('active')){
			return false;
		}
		var link = $(this).data('url');
		location.href = link;
	});

})();

module.exports = footer;

},{}],5:[function(require,module,exports){
/**
 * @desc 全局模态窗口
 **/
 var $ = window.$;

var modal = {
    confirm: function(opts) {
        var title = opts.title || '提示',
            content = opts.content || '提示内容',
            callback = opts.callback;
        var newNode = [
            '<div class="mask" id="J_mask">',
                '<div class="modal-box">',
                    '<h2>',
                        title,
                    '</h2>',
                    '<p>',
                        content,
                    '</p>',
                    '<div class="mask-btns">',
                        '<span id="J_cancel">取消</span>',
                        '<span id="J_confirm">确定</span>',
                    '</div>',
                '</div>',
            '</div>',
        ].join('');
        $('#J_mask').remove();
        $('body').append(newNode);

        $('#J_cancel').on('tap', function() {
            $('#J_mask').remove();
        });

        $('#J_confirm').on('tap', function() {
            if (typeof callback === 'function') {
                callback();
            }
            $('#J_mask').remove();
        });
    },
    bt3Confirm: function(opts) {
        var title = opts.title || '提示',
            content = opts.content || '提示内容',
            callback = opts.callback;

        $('#J_modal-title').html(title);
        $('#J_modal-content').html(content);

        $('#myModal').modal();
        $('#J_confirm-sure').on('click', function() {
            if (typeof callback === 'function') {
                callback();
            }
            $('#myModal').modal('hide');
        });

    }
};

module.exports = modal;

},{}]},{},[1])