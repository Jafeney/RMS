var template = require('../util/template');
var lazyload = require('../util/lazyload')();
var footer = require('../util/footer');
var config = require('../util/config');
var Encode = require('../util/encode');
var Modal = require('../util/modal');
var Time = require('../util/time');
var Cookie = require('../util/cookie');
var $ = window.$;

var newsModule = (function() {

    var _nid = location.search.split('=')[1];
    var cid = 1;
    var uid = window.localStorage.uid || 1;
    var nid = 1;

    var init = function() {
        getDetail(renderDatail);
        eventBind();
    };

    var renderDatail = function(data) {
        data.img = data.n_img;
        data.title = data.n_title;
        data.content = Encode.html_decode(data.n_detail);
        data.time = Time.getTimeString(new Date(data.n_uptime));
        data.id = data.n_id;
        cid = data.coupon_c_id;
        nid = data.n_id;

        var _tpl = template($('#newsDetail-tpl').html(), {
            data: data
        });
        $('#J_news-detail').html(_tpl);
        lazyload.getLazyImg();

        getCoupon(renderCoupon);
        getReviews(renderReviews);
    };

    var getDetail = function(callback) {
        $.ajax({
            type: 'get',
            url: '/news/get/id/',
            data: {
                id: _nid
            },
            dataType: 'json',
            success: function(res) {
                if (res.status && typeof callback ===
                    "function") {
                    callback(res.data[0]);
                }
            },
            error: function(err) {
                console.log('GetData Error:' + err);
            }
        });
    };

    var renderReviews = function(data) {
        data.map(function(item) {
            item.id = item.e_id;
            item.uid = item.e_user_id;
            item.img = item.u_img;
            item.name = item.u_name;
            item.time = Time.getTimeString(new Date(item.e_uptime));
            item.contents = item.e_content;
        });

        var _tpl = template($('#reviewList-tpl').html(), {
            lists: data
        });
        $('#J_review-list').html(_tpl);
        lazyload.getLazyImg();
    };

    var getReviews = function(callback) {
        $.ajax({
            type: 'get',
            url: '/evaluate/get/newsId',
            data: {
                newsId: nid
            },
            dataType: 'json',
            success: function(res) {
                if (res.status && (typeof callback === 'function')) {
                    renderReviews(res.data);
                }
            },
            fail: function() {
                console.log('GetCoupon Error!');
            }
        });
    };

    var renderCoupon = function(data) {
        data.id = data.c_id;
        data.discount = data.c_discount;
        data.title = data.c_name;

        if (data.id !==1) {
           var _tpl = template($('#coupon-tpl').html(), {
               data: data
           });
           $('#J_coupon').html(_tpl); 
        }
    };

    var getCoupon = function(callback) { 
        $.ajax({
            type: 'get',
            url: '/coupon/get/id',
            data: {
                id: cid
            },
            dataType: 'json',
            success: function(res) {
                if (res.status && (typeof callback === 'function')) {
                    renderCoupon(res.data[0]);
                }
            },
            fail: function() {
                console.log('GetCoupon Error!');
            }
        });
    };

    var eventBind = function() {

        // 加载更多
        $('#J_loadMore').on('tap', function() {
            Modal.confirm({
                content: '没有更多啦！'
            });
        });

        // 领取优惠券
        $(document).on('tap', '.J_btn-receive', function() {
            Modal.confirm({
                content: '优惠券领取成功！<br/>请到 <strong>我的优惠券</strong> 查看'
            })
        });

        // 进入详情页
        $(document).on('tap', '.J_news-item', function() {
            location.href = 'news-detail.min.html?nid=' + $(
                this).data('id');
        });

        // 发表评论
        $('#J_review-submit').on('tap', function() {

            if (Cookie.getCookie({
                    name: 'token'
                })) {
                var _content = $('#J_review-value').val();
                if (_content.length > 3) {
                    $.ajax({
                        type: 'post',
                        url: '/evaluate/add',
                        data: {
                            content: _content,
                            newsId: nid,
                            userId: uid
                        },
                        success: function(res) {
                            if (res.status) { 
                                $('#J_review-value').val('');
                                getReviews(renderReviews);
                            }
                        },
                        fail: function() {
                            console.log('添加评论失败');
                        }
                    });
                }
            } else {
                Modal.confirm({
                    content: '您还没有登录哦！',
                    callback: function() {
                        location.href = "login.min.html?returnURL=" +
                            location.href;
                    }
                });
            }
        });

    };

    init();

})();
