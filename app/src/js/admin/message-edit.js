var cookie = require('../util/cookie');
var config = require('../util/config');
var template = require('../util/template');
var encode = require('../util/encode');

var $ = window.$;

var myapp = (function() {

    var _id = location.search.split('=')[1];

    var init = function() {
       // 检查登录 
       if (!cookie.getCookie({ name: 'token'})) {
         location.href = "login.min.html";
       }

        getCouponList(renderCounponList)
        eventBind();
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
        
        // 继续渲染页面的正式数据 
        getData(render);
    };  

    var getData = function(callback) {
        $.ajax({
            type: 'get',
            url: '/news/get/id',
            dataType: 'json',
            data: {
                id: _id
            },
            success: function(res) {
                if (res.status) {
                    if (typeof callback === 'function') {
                        callback(res.data[0]);
                    }
                } else {
                    window.alert(res.message);
                }
            },
            error: function() {
                console.log('getData Error!');
            }
        })
    };

    var render = function(data) {
        $('#J_news-title').val(data.n_title);
        var arr_type = $('#J_news-type').find('option');
        var i = 0;
        $.each(arr_type, function(idx, item) {
            if (arr_type.eq(idx).data('id') === data.n_news_type_id) {
                i = idx;
            }
        });
        arr_type.eq(i).attr('selected', 'selected');

        var arr_card = $('#J_news-card').find('option');
        var j = 0;
        $.each(arr_card, function(idx, item) {
            if (arr_card.eq(idx).data('id') === data.coupon_c_id) {
                j = idx;
            }
        });
        arr_card.eq(j).attr('selected', 'selected');

        $('#J_news-demo').attr('src', data.n_img);

        $('#J-news-editor').val(encode.html_decode(data.n_detail));

        // 检查是否显示优惠券选择框
        checkCouponShow(data.n_news_type_id);

        // 加载富文本编辑器
        $("#J-news-editor").wysihtml5();

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

        // 保存新闻
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
                    url: '/news/update',
                    data: {
                        id: _id,
                        title: _title,
                        type: _type,
                        img: _img,
                        coupon: _coupon,
                        content: _content
                    },
                    dataType: 'json',
                    success: function(res) {
                        if (res.status) {
                            window.alert(
                                '修改成功！');
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

    var checkCouponShow = function(id) {
        if (id === 3) {
            $('#J_card-box').show();
        }
    };

    init();
})();
