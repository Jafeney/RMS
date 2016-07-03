var cookie = require('../util/cookie');
var config = require('../util/config');
var template = require('../util/template');
var encode = require('../util/encode');
var $ = window.$;

var myapp = (function() {

    var init = function() {

        // 检查登录 
        if (!cookie.getCookie({ name: 'token'})) {
          location.href = "login.min.html";
        }

        getCouponList(renderCounponList);
        eventBind();
    };

    var eventBind = function() {

        // 选择优惠活动后 显示优惠券添加
        $(document).on('change', '#J_news-type', function() {
            if ($(this).find('option:selected').text() ==
                "优惠活动") {
                $('#J_card-box').fadeIn();
            } else {
                $('#J_card-box').hide();
            }
        });

        // 上传图片
        $(document).on('change', '#J_news-img', function() {
            console.log($(this).val());
            var temp = $(this).val().split('\\');
            var url = '/img/' + temp[2];

            $('#J_news-demo').attr('src', url);
        });

        // 添加新的新闻
        $(document).on('click', '#J_news-submit', function() {
            var _title = $('#J_news-title').val(),
                _type = $('#J_news-type').find(
                    'option:selected').data('id'),
                _img = $('#J_news-demo').attr('src'),
                _coupon = $('#J_news-card').find(
                    'option:selected').data('id'),
                _content = encode.html_encode($(
                    '#J-news-editor').val());

            if (_title && _type && _img && _content) {
                $.ajax({
                    type: 'post',
                    url: '/news/add',
                    data: {
                        title: _title,
                        type: _type,
                        img: _img,
                        coupon: _coupon,
                        content: _content
                    },
                    dataType: 'json',
                    success: function(res) {
                        if (res.status) {
                            window.alert('添加成功');
                            location.href =
                                location.href;
                        } else {
                            window.alert(res.message);
                        }
                    }
                });
            }
        });

        // 重置
        $(document).on('click', '#J_news-reset', function() {
            location.href = location.href;
        });
    };

    var getCouponList = function(callback) {
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: '/coupon/get',
            success: function(res) {
                if (res.status && (typeof callback === 'function')) {
                    callback(res.data);
                }
            },
            fail: function() {
                console.log('GetDate error!');
            }
        })
    };

    var renderCounponList = function(data) {
        data.map(function(item) {
            item.id = item.c_id;
            item.name = item.c_name; 
        });
        console.log(data);
        var $tpl = $('#J_couponList-tpl');
        var _html = template($tpl.html(),{items: data});
        $('#J_news-card').html(_html);
        $tpl.remove();
    };  

    init();
})();
