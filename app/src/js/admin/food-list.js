var template = require('../util/template');
var cookie = require('../util/cookie');
var lazyload = require('../util/lazyload')();
var config = require('../util/config');
var data = require('../../../modules/database/admin.tmp.js');
var $ = window.$;

var myapp = (function() {

    var init = function() {
        // 检查登录 
        if (!cookie.getCookie({ name: 'token'})) {
          location.href = "login.min.html";
        }

        render();
        eventBind();
    };

    var eventBind = function() {

    };

    var render = function() {
        var tpl = $('#J_tpl-food-items').html(),
            html = template(tpl, {
                items: data.food[0].items
            });
        $('#J_food-items').html(html);
        $('#J_tpl-food-items').remove();
        $('#J_food-list').DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "info": false,
            "autoWidth": true
        });
    };

    init();
})();
