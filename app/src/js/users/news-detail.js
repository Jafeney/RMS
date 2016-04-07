var template = require('../util/template');
var lazyload = require('../util/lazyload')();
var footer = require('../util/footer');
var config = require('../util/config');

var newsDetailModule = (function($) {

    var init = function() {
        getNewsDetail(renderNewsDetail);
        getReviewList(renderReviewList);
        eventBind();
    };

    var getNid = function() {
        return location.search.split('=')[1];
    }

    var renderNewsDetail = function(data) {
        var _tpl = template($('#newsDetail-tpl').html(), {data: data[getNid()]});
        $('#J_news-detail').html(_tpl);
    };

    var renderReviewList = function(data) {
        var _tpl = template($('#reviewList-tpl').html(), {lists: data});
        $('#J_review-list').append(_tpl);
        lazyload.getLazyImg();
    };

    var getNewsDetail = function(callback) {
        var data = [
            {
                img: '../../img/banner1.jpg',
                title: '[外卖探店] 藏在大街里的暖心卤肉饭 美食志 味道好',
                content: '不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。',
                time: "2016-03-26 20:20:30",
                id: 0
            },
            {
                img: '../../img/e4.jpg',
                title: '[外卖探店] 藏在大街里的暖心卤肉饭 美食志 味道好',
                content: '不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。',
                time: "2016-03-26 20:20:30",
                id: 1
            },
            {
                img: '../../img/e5.jpg',
                title: '[外卖探店] 藏在大街里的暖心卤肉饭 美食志 味道好',
                content: '不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。',
                time: "2016-03-26 20:20:30",
                id: 2
            },
            {
                img: '../../img/banner1.jpg',
                title: '[外卖探店] 藏在大街里的暖心卤肉饭 美食志 味道好',
                content: '不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。',
                time: "2016-03-26 20:20:30",
                id: 3
            },
            {
                img: '../../img/e5.jpg',
                title: '[外卖探店] 藏在大街里的暖心卤肉饭 美食志 味道好',
                content: '不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖, 还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。',
                time: "2016-03-26 20:20:30",
                id: 4
            },
            {
                img: '../../img/e2.jpg',
                title: '[外卖探店] 藏在大街里的暖心卤肉饭 美食志 味道好',
                content: '不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。',
                time: "2016-03-26 20:20:30",
                id: 5
            },
            {
                img: '../../img/e1.jpg',
                title: '[外卖探店] 藏在大街里的暖心卤肉饭 美食志 味道好',
                content: '不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志不只是怂外卖，还传递美好生活--美食志。',
                time: "2016-03-26 20:20:30",
                id: 6
            }
        ];
        if (typeof callback === "function") {
            callback(data);
        }

    };

    var getReviewList = function(callback) {
        var reviewList = [
            {
                id: 1,
                img: 'http://avatar.csdn.net/F/8/E/1_u011413061.jpg',
                uid: 1,
                name: '思诚',
                time: '2天前',
                content: '吃了30年了，还是这个老味道。'
            },
            {
                id: 1,
                img: 'http://avatar.csdn.net/F/8/E/1_u011413061.jpg',
                uid: 1,
                name: '思诚',
                time: '2天前',
                content: '吃了30年了，还是这个老味道。吃了30年了，还是这个老味道。'
            },
            {
                id: 1,
                img: 'http://avatar.csdn.net/F/8/E/1_u011413061.jpg',
                uid: 1,
                name: '思诚',
                time: '2天前',
                content: '吃了30年了，还是这个老味道。'
            }
        ];
        if (typeof callback === "function") {
            callback(reviewList);
        }
    };

    var eventBind = function() {
        
    };

    init();

})($);