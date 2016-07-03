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
