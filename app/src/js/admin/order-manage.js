var template = require('../util/template');
var lazyload = require('../util/lazyload')();
var config = require('../util/config');
var modal = require('../util/modal');
var Time = require('../util/time');
var cookie = require('../util/cookie');
var $ = window.$;

var myapp = (function() {

    var init = function() {
        // 检查登录 
        if (!cookie.getCookie({ name: 'token'})) {
          location.href = "login.min.html";
        }
        getData('all', render);
        eventBind();
    };

    var eventBind = function() {
        // 分类筛选
        $(document).on('change', '#J_category', function() {
            var category = $(this).find('option:selected').data(
                'id');
            getData(category, render);
        });

        // 删除一项
        $(document).on('click', '.J_btn-delete', function() {
            var self = $(this);
            var id = $(this).data('id');
            modal.bt3Confirm({
                title: '删除提示',
                content: '您确定要删除这一项吗？',
                callback: function() {
                    $.ajax({
                        type: 'get',
                        url: '/news/delete',
                        dataType: 'json',
                        data: {
                            id: id
                        },
                        success: function(
                            res) {
                            if (res
                                .status
                            ) {
                                window
                                    .alert(
                                        res
                                        .message
                                    );
                                self
                                    .parent()
                                    .parent()
                                    .parent()
                                    .remove();
                            } else {
                                window
                                    .alert(
                                        res
                                        .message
                                    );
                            }
                        },
                        error: function() {
                            console
                                .log(
                                    'Delete Error!'
                                );
                        }
                    })

                }
            });
        });

        // 编辑一项
        $(document).on('click', '.J_btn-edit', function() {
            var _id = $(this).data('id');
            location.href = 'message-edit.min.html?nid=' +
                _id;
        });
    };

    var getData = function(category, callback) {
        $.ajax({
            type: 'get',
            url: '/news/get/category',
            dataType: 'json',
            data: {
                category: category
            },
            success: function(res) {
                if (res.status && typeof callback ===
                    'function') {
                    callback(res.data);
                }
            },
            error: function() {
                console.log('Get NewsItems Error!');
            }
        })
    };

    var render = function(data) {
        data.map(function(item) {
            item.id = item.n_id;
            item.img = item.n_img;
            item.title = item.n_title;
            item.uptime = Time.getTimeString(new Date(item.n_uptime));
            item.category = transCategory(item.n_news_type_id);
        });
        var tpl = $('#J_tpl-food-items').html(),
            html = template(tpl, {
                items: data
            });
        $('#J_food-items').html(html);
        $('#J_food-list').DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "info": false,
            "autoWidth": true
        });
    };

    var transCategory = function(id) {
        var returnStr = "";
        switch (id) {
            case 1:
                returnStr = "餐厅动态"
                break;
            case 2:
                returnStr = "趣闻轶事"
                break;
            case 3:
                returnStr = "优惠活动"
                break;
            case 4:
                returnStr = "企业文化"
                break;
            default:
                break;
        }
        return returnStr;
    };

    init();
})();
