(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * 首页临时数据的接口 
 */

var indexData = {
	new_cheap_banners: [
		{
			begin: 1458748800,
			end: 1459354810,
			img: "/img/banner1.jpg",
			priority: 0,
			target: "http://jafeney.com",
			title: "尖货1元秒"
		},
		{
			begin: 1458748800,
			end: 1459354810,
			img: "/img/p10.jpg",
			priority: 0,
			target: "http://jafeney.com",
			title: "尖货1元秒"
		}
	],
	new_cheap_insert_banners: [
		{
			begin: 1458748800,
			end: 1459354810,
			img: "/img/banner1.jpg",
			priority: 0,
			target: "http://jafeney.com",
			title: "尖货1元秒"
		}
	],
	buyer_choice: {
		today: [
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/c1.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			},
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/c2.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			},
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/c3.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			},
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/d1.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			},
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/d2.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			}
		],
		tomorrow: [
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/d3.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			},
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/d4.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			},
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/e1.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			},
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/e2.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			},
			{
				click_num: 3689,
				desc: "",
				discount: "",
				event_id: 186839,
				iid: 7673220,
				img: "/img/e3.jpg",
				origin_price: 12800,
				price: 100,
				product_id: 242186,
				sold_num: 1092,
				stock: 8,
				title: "小兔米菲908撞色透气网布宝宝单鞋叫叫鞋15-20"
			}
		]
	},
	martshow_lists: [
		{
			brand: "恋采依",
			brand_logo: "/img/logo.png",
			event_id: 185380,
			img_target: "",
			img_url: "/img/e4.jpg",
			item_count: 4,
			martshow_items: [
				{
					iid: 7571257,
					img: "/img/e5.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/e6.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/m1.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/m2.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/m3.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/m5.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
			],
			mj_promotion: ["满189减30元","满269减50元"],
			recommend: "童装",
			tag: "童装"
		},
		{
			brand: "恋采依",
			brand_logo: "/img/logo.png",
			event_id: 185380,
			img_target: "",
			img_url: "/img/g2.jpg",
			item_count: 4,
			martshow_items: [
				{
					iid: 7571257,
					img: "/img/g3.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/g4.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/g5.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/m6.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/m7.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/p6.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
			],
			mj_promotion: ["满189减30元","满269减50元"],
			recommend: "童装",
			tag: "童装"
		},
		{
			brand: "恋采依",
			brand_logo: "/img/logo.png",
			event_id: 185380,
			img_target: "",
			img_url: "/img/g6.jpg",
			item_count: 4,
			martshow_items: [
				{
					iid: 7571257,
					img: "/img/g7.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/g8.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/g9.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/p7.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/p8.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
				{
					iid: 7571257,
					img: "/img/p9.jpg",
					price: 11900,
					price_ori: 42900,
					title: "美食名称－爱心点心 美味 还吃 ",
					use_width_img: false
				},
			],
			mj_promotion: ["满189减30元","满269减50元"],
			recommend: "童装",
			tag: "童装"
		}
	]
}	

module.exports = indexData;
},{}],2:[function(require,module,exports){
var Slider = require('../util/slider');
var template = require('../util/template');
var lazyload = require('../util/lazyload')();
var footer = require('../util/footer');
var config = require('../util/config');
var data = require('../../../modules/database/index.tmp.js');

var indexModule = (function($) {
	// 模块内全局变量
	var num = 1,
    	martshowNum = 1,
    	page = 1,
    	loading = false,
    	tips = {}, //获取tips的对象容器
    	index = 0; //计步器

	var init = function() {
		getAds();
		bindEvent();
	};

	// 渲染首页轮播
	var renderSlider = function(data) {
		if (!data || !data.length) {
		    $('#J_slider').addClass('hidden');
		    return;
		}
		var tpl = $('#J_slider-tpl').html(),
		    html = template(tpl, {
		        ads: data
		    });
		$('#J_slider').html(html);
		$('#J_slider-tpl').remove();
		//渲染轮播事件
		var sliderPic = new Slider({
		    container: '#J_slider',
		    wrap: '#J_slider-outer',
		    panel: '#J_slider-wrap',
		    trigger: '#J_slider-status',
		    fullScreen: 1,
		    play: true,
		    loop: true
		});
	};

	// 渲染专场插入广告
	var renderInsertAds = function(data) {
		if (!data || data.length === 0) {
		    return;
		}
		var martshoItem = $('#J_martShow .martshow-item');
		var martshowItemLen = martshoItem.length;
		var num = 0;
		for (var i = 0; i < martshowItemLen; i++) {
		    if (i !== 0 && (num < data.length) && (i % 2 === 0)) {
		        martshoItem.eq(i).before('<a class="martshow-insert" href="javascript:;" data-title="271-' + data[num].title + '" data-href="' + data[num].target + '"><img src="' + data[num].img + '" alt="' + data[num].title + '"/></a>');
		        num++;
		    }
		}
	};

	// 渲染买手精选区域 
	var renderSelectedList = function(data) {
		if (data && data.buyer_choice && data.buyer_choice.today && data.buyer_choice.today.length !== 0) {
		    var today = data.buyer_choice.today;
		    var todayLen = today.length;
		    var cssTxt = todayLen * (210 + 20) / 46.875 + 20 / 46.875;
		    for (var i = 0; i < todayLen; i++) {
		        var item = today[i];
		        item.url = getBeibeiListURL(item.event_id, item.iid);
		        item.price = toIntPrice(item.price);
		        item.origin_price = toIntPrice(item.origin_price);
		        item.webp = item.img; 
		    }
		    var tpl = $("#J_selected-tpl").html();
		    var html = template(tpl, {
		        selectedList: today
		    });
		    $(".xpg-bd-wrap").eq(0).html(html).css('width', cssTxt + 'rem');
		}

		if (data && data.buyer_choice && data.buyer_choice.tomorrow && data.buyer_choice.tomorrow.length !== 0) {
		    $('.exchange').removeClass('hidden');
		    var tomorrow = data.buyer_choice.tomorrow;
		    var tomorrowLen = tomorrow.length;
		    var cssTxt = tomorrowLen * (210 + 20) / 46.875 + 20 / 46.875;
		    for (var i = 0; i < tomorrowLen; i++) {
		        var item = tomorrow[i];
		        item.url = getBeibeiListURL(item.event_id, item.iid);
		        item.price = toIntPrice(item.price);
		        item.origin_price = toIntPrice(item.origin_price);
		        item.webp = item.img;
		       
		    }
		    var tpl = $("#J_selected-tpl").html();
		    var html = template(tpl, {
		        selectedList: tomorrow
		    });
		    $(".xpg-bd-wrap").eq(1).html(html).css('width', cssTxt + 'rem');
		} else {
		    $('.exchange').addClass('hidden');
		}
	};

	// 渲染专场 
	var renderMartshow = function(data) {
		var martshow = data.martshow_lists;
		var martshowLen = martshow.length;
		for (var i = 0; i < martshowLen; i++) {
		    var _martshow = martshow[i];
		    var martshowItem = _martshow.martshow_items;
		    //此处为专场里面banner图，有运营设置的则用img_target,否则调整去专场
		    if (_martshow.img_target !== '') {
		        martshow[i].target = _martshow.img_target;
		    } else {
		        martshow[i].target = getBeibeiListURL(_martshow.event_id);
		    }
		    martshow[i].listURL = getBeibeiListURL(_martshow.event_id);
		    martshow[i].itemLen = martshowItem.length;
		    for (var j = 0; j < martshow[i].itemLen; j++) {
		        var item = martshowItem[j];
		        if (j > 9) {
		            martshowItem.pop();
		        } else {
		            item.url = getBeibeiDetailURL(item.iid);
		            item.price = toIntPrice(item.price);
		            item.webp = item.img;
		        }
		    }
		    martshow[i].itemLen = martshowItem.length; //pop删除数组后，重新获取length
		}
		var tpl = $("#J_martShow-tpl").html();
		var html = template(tpl, {
		    martshowList: martshow
		});
		$(".xpg-martshow-more").before(html);
		if (data.count > 10) {
		    $(".xpg-martshow-more").removeClass('hidden');
		} else {
		    $(".xpg-martshow-more").addClass('hidden');
		}

		if (!martshowLen) {
		    $('.xpg-martshow-more').addClass('hidden');
		}
	};

	// 获取广告位数据
	var getAds = function() {
        renderSlider(data.new_cheap_banners);  
        renderSelectedList(data);
        renderMartshow(data);
        renderInsertAds(data.new_cheap_insert_banners);
        lazyload.getLazyImg();
		loading = false;
	};

	// 事件监听
	var bindEvent = function() {
		// slider点击切换
		$('#J_slider').on('click', 'a', function(event) {
		    event.preventDefault();
		    var block_name = $(this).attr('data-title');
		    location.href = $(this).attr('data-href');
		});
		// 今日和明日精选切换 
		$('#J_selected').on('click', '.exchange', function(event) {
		    event.preventDefault();
		    var isNo0Hidden = $('.xpg-bd-wrap').eq(0).hasClass('hidden');
		    if (isNo0Hidden) {
		        $('.xpg-bd-wrap').eq(0).removeClass('hidden');
		        $('.xpg-bd-wrap').eq(1).addClass('hidden');
		        $('#J_xpg-selected .date').text('今日');

		        $('.exchange').find('.ch').text('明日');
		        $('.exchange').find('.eng').text('TOMORROW');
		    } else {
		        $('.xpg-bd-wrap').eq(1).removeClass('hidden');
		        $('.xpg-bd-wrap').eq(0).addClass('hidden');
		        $('#J_xpg-selected .date').text('明日');
		        $('.exchange').find('.ch').text('今日');
		        $('.exchange').find('.eng').text('TODAY');
		    }
		    lazyload.getLazyImg();
		});
	};

	// 格式化菜单列表的
	var getBeibeiListURL = function(eventId, iid) {
		var url = '';
		if (iid) {
		    url = '/list/list.html?eventId=' + eventId + '&beibeiapp_info={"target":"martshow","mid":' + eventId + ',"iid":' + iid + '}'
		} else {
		    url = '/list/list.html?eventId=' + eventId + '&beibeiapp_info={"target":"martshow","mid":' + eventId + '}'
		}
		return url;
	};

	// 格式化产品详情的URL
	var getBeibeiDetailURL = function(iid) {
		return '/detail/detail.html?iid=' + iid + '&beibeiapp_info={"target":"detail","iid":' + iid + '}';
	}

	// 格式化价格
	var toIntPrice = function(price) {
		var result = 0;
		var price1 = Number((price / 100).toFixed(1));
		var price2 = Number((price / 100).toFixed(0));
		var toIntFormat = parseInt(price);
		if (price1 === price2) {
		    result = price2;
		} else {
		    result = price1;
		}
		return result;
	}

	init();
})($);
},{"../../../modules/database/index.tmp.js":1,"../util/config":3,"../util/footer":4,"../util/lazyload":5,"../util/slider":6,"../util/template":7}],3:[function(require,module,exports){
var config = {
	version: '1.0.0',
	author: 'Jafeney',
	createDate: '2016-03-26'
};

module.exports = config;
},{}],4:[function(require,module,exports){
var footer = (function($){

	$('#J_footerBar li').on('tap', function(){
		if($(this).hasClass('active')){
			return false;
		}
		var link = $(this).data('url');
		location.href = link;
	});

})($);

module.exports = footer;
},{}],5:[function(require,module,exports){
var defaultConfig = {

    threshold : $(window).height() * 2,

    panel: '', //面板

    container: '', //容器

    inside: false, //是否容器内滚动

    horizontal: false, //滚动方向，是否水平

    originImgAttr: 'data-src',

    markAttr: 'use-lazyload',

    originImgWebpAttr: 'data-webp',

    useWebp: false

};

var lazyload = function(config) {

    var cf = $.extend({}, defaultConfig, config),
        $t, len, img,
        scrollTop = 0,
        $win = $(window),
        cantTrigger = false,
        loadedImg = [],
        watingImg = [],
        hasWebp = false,
        st_id = '',
        $panel = null,
        $container = null,
        $wrap = null, //panel
        containerHeight, //容器高度
        containerWidth, //容器宽度
        panelIsWindow = false; //面板是否为window,window没有offset()


    //如果水平滚动，必定是容器内滚动，且必须填容器与面板
    if (cf.horizontal) {
        if (!cf.panel || !cf.container) {
            try {
                console.log("panel and container required");
            } catch (e) {}
            return;
        }
        $panel = $(cf.panel),
            cf.inside = true;
    } else { //如果是垂直滚动再区分是否在容器内滚动
        $panel = cf.inside ? $(cf.panel || window) : $win;
    }

    //如果是容器内滚动
    $container = cf.inside ? $(cf.container || window) : $win;

    containerHeight = $container.height(),
        containerWidth = $container.width(),
        panelIsWindow = $.isWindow($panel[0]);
    $wrap = panelIsWindow ? $(document) : $panel;



    var scrollLoadImg = function() {
        var len = watingImg.length,
            scrollLeft,
            scrollTop;

        !containerWidth && (containerWidth = $container.width());
        !containerHeight && (containerHeight = $container.height());

        if (cf.horizontal) { //水平滚动
            scrollLeft = $container.scrollLeft();

            for (; len--;) {
                img = watingImg[len];

                var showLeft,
                    showRight,
                    $t = img.$img;
                if ($t.width() == 0) {
                    continue;
                }
                showLeft = $t.offset().left - cf.threshold;
                showRight = $t.offset().left + $t.width() + cf.threshold;

                if (showLeft <= scrollLeft + containerWidth && 0 <= showRight) {
                    img.$img.attr('src', hasWebp && img.oriWebp ? img.oriWebp : img.oriImg);
                    watingImg.splice(len, 1);
                    loadedImg.push(img);
                    img.$img = null;
                }
                $t = null;
            }
        } else { //垂直滚动
            scrollTop = $container.scrollTop();
            for (; len--;) {
                img = watingImg[len];

                var showTop,
                    showBottom,
                    $t = img.$img,
                    wrapTop = panelIsWindow ? 0 : $wrap.offset().top;

                if ($t.width() == 0) {
                    continue;
                }
                showTop = $t.offset().top - wrapTop - cf.threshold;
                showBottom = $t.offset().top - wrapTop + $t.height() + cf.threshold;

                if (showTop <= scrollTop + containerHeight && scrollTop <= showBottom) {
                    img.$img.attr('src', hasWebp && img.oriWebp ? img.oriWebp : img.oriImg);
                    watingImg.splice(len, 1);
                    loadedImg.push(img);
                    img.$img = null;
                }
            }
            $t = null;
        }

    };

    var getLazyImg = function() {
        var $imgs = $('[' + cf.markAttr + ']');
        $imgs.each(function() {
            $t = $(this);
            var info = {
                $img: $t,
                oriImg: $t.attr(cf.originImgAttr),
                oriWebp: $t.attr(cf.originImgWebpAttr)
            };
            watingImg.push(info);
            $t.removeAttr(cf.markAttr).removeAttr(cf.originImgAttr).removeAttr(cf.originImgWebpAttr);
        });

        //加载图片之后,调用一次scrollLoadImg来提前加载图片
        scrollLoadImg();
    };

    var checkwebp = function() {
        var img = new Image();
        img.onload = function() {
            hasWebp = true;
        };
        img.onerror = function() {
            hasWebp = false;
        };
        img.src = 'data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACyAgCdASoBAAEALy2Wy2WlpaWlpYEsSygABc6zbAAA/upgAAA=';
    };

    if (cf.useWebp) {
        checkwebp();
    }

    $container.on('scroll', function() {
        clearTimeout(st_id);
        st_id = setTimeout(scrollLoadImg, 20);
    });

    return {
        getLazyImg: getLazyImg,
        scrollLoadImg: scrollLoadImg,
        loadedImg: loadedImg,
        watingImg: watingImg
    };

};


module.exports = lazyload;

},{}],6:[function(require,module,exports){
var hasTransform = function() { // 判断浏览器是否支持transform（仅webkit）
        var ret = ('WebkitTransform' in document.documentElement.style) ? true : false;
        return ret;
    },
    has3d = function() { // 判断浏览器是否支持3d效果（仅webkit）
        var style,
            ret = false,
            div = document.createElement('div'),
            style = ['&#173;', '<style id="smodernizr">', '@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', '</style>'].join(''),
            mStyle = document.documentElement.style;
        div.id = 'modernizr';
        div.innerHTML += style;
        document.body.appendChild(div);
        if ('WebkitPerspective' in mStyle && 'webkitPerspective' in mStyle) {
            ret = (div.offsetLeft === 9 && div.offsetHeight === 3);
        }
        div.parentNode.removeChild(div);
        return ret;
    },
    
    gv1 = has3d ? 'translate3d(' : 'translate(',
    gv2 = has3d ? ',0)' : ')';

var touchSlider = function(container, options) {
    if (!container) return null;
    if (options) options.container = container; //container会覆盖options内的container
    else options = typeof container == 'string' ? {
        'container': container
    } : container;
    $.extend(this, {
        container: ".slider", //大容器，包含面板元素、触发元素、上下页等
        wrap: null, //滑动显示区域，默认为container的第一个子元素。（该元素固定宽高overflow为hidden，否则无法滑动）
        panel: null, //面板元素，默认为wrap的第一个子元素
        trigger: null, //触发元素，也可理解为状态元素
        triggerIndex: null, //触发索引形式的状态元素
        activeTriggerCls: 'sel', //触发元素内子元素的激活样式
        hasTrigger: false, //是否需要触发事件，例tab页签就需要click触发
        steps: 0, //步长，每次滑动的距离
        left: 0, //panel初始的x坐标
        visible: 1, //每次滑动几个panels，默认1
        margin: 0, //面板元素内子元素间的间距
        curIndex: 0, //初始化在哪个panels上，默认0为第一个
        duration: 300, //动画持续时间
        //easing : 'ease-out', //动画公式
        loop: false, //动画循环
        play: false, //动画自动播放
        interval: 5000, //播放间隔时间，play为true时才有效
        useTransform: has3d ? true : false, //以translate方式动画，安卓现在也支持了
        lazy: '.lazyimg', //图片延时加载属性
        lazyIndex: 1, //默认加载到第几屏
        callback: null, //动画结束后触发
        fullScreen: 0, //全屏支持 如果开启全屏 css中设置的宽度将失效
        sizeRadio: 100 / 320, //只有开启fullScreen 此项配置才生效 图片比例 高／宽
        prev: null, //上一页
        next: null, //下一页
        activePnCls: 'none' //prev和next在头尾时的样
    }, options);

    this.findEl() && this.resetToFullScreen() && this.init() && this.increaseEvent();
};

$.extend(touchSlider.prototype, {
    findEl: function() {
        var container = this.container = $(this.container);
        if (!container.length) {
            return null;
        }

        this.wrap = this.wrap && container.find(this.wrap) || container.children().first();
        if (!this.wrap.length) {
            return null;
        }

        this.panel = this.panel && container.find(this.panel) || this.wrap.children().first();
        if (!this.panel.length) {
            return null;
        }

        this.panels = this.panel.children();
        if (!this.panels.length) { //对于没有图片的元素，直接隐藏
            this.container.hide();
            return null;
        }

        this.trigger = this.trigger && container.find(this.trigger);
        this.prev = this.prev && container.find(this.prev);
        this.next = this.next && container.find(this.next);

        this.triggerIndex = this.triggerIndex && container.find(this.triggerIndex);

        return this;
    },

    resetToFullScreen: function() {

        if (this.fullScreen) {
            $(this.container).css('display', 'none');
            $(this.panel).children('li').css('width', document.body.clientWidth);
            $(this.panel).css('width', document.body.clientWidth * $(this.panel).children('li').length);
            $(this.wrap).css('width', '100%');
            //根据图片比例缩放
            $(this.wrap).css('height', document.body.clientWidth * this.sizeRadio);
            $(this.container).css('height', document.body.clientWidth * this.sizeRadio);
            $(this.container).css('display', 'block');
        }

        return this;

    },

    init: function() {
        var wrap = this.wrap,
            panel = this.panel,
            panels = this.panels,
            trigger = this.trigger,
            triggerIndex = this.triggerIndex,
            triggerContent = '',
            len = this.len = panels.length, //子元素的个数
            margin = this.margin,
            allWidth = 0, //滑动容器的宽度
            status = this.visible, //每次切换多少个panels
            useTransform = this.useTransform = hasTransform ? this.useTransform : false; //不支持直接false

        this.steps = this.steps || wrap.width(); //滑动步长，默认wrap的宽度
        panels.each(function(n, item) {
            allWidth += item.offsetWidth;
        });

        if (margin && typeof margin == 'number') {
            allWidth += (len - 1) * margin; //总宽度增加
            this.steps += margin; //步长增加margin
        }

        if (status > 1) {
            this.loop = false;
        } //如果一页显示的子元素超出1个，或设置了步长，则不支持循环；若自动播放，则只支持一次

        //初始位置为了计算卡片内偏移
        var initLeft = this.left;
        initLeft -= this.curIndex * this.steps;
        this.setCoord(panel, initLeft);
        if (useTransform) {
            if (has3d) {
                wrap.css({
                    '-webkit-transform': 'translateZ(0)'
                }); //防止ios6下滑动会有顿感
            }
            panel.css({
                '-webkit-backface-visibility': 'hidden'
            });
            //panels.css({'-webkit-transform':gv1+'0,0'+gv2});
        }

        var pages = this._pages = Math.ceil(len / status); //总页数
        if (triggerIndex) {
            triggerContent = (this.curIndex + 1) + '/' + pages;
            triggerIndex.html(triggerContent);
        }
        //初始坐标参数
        this._minpage = 0; //最小页
        this._maxpage = this._pages - 1; //最大页

        this.loadImg();
        this.updateArrow();

        if (pages <= 1) { //如果没超出一页，则不需要滑动
            this.getImg(panels[0]); //存在一页的则显示第一页
            return null;
        }
        if (this._oldLoop) { //之前已经复制过的删除
            var oldpanels = panel.children();
            oldpanels.eq(oldpanels.length - 2).remove();
            oldpanels.eq(oldpanels.length - 1).remove();
        }
        if (this.loop) { //复制首尾以便循环
            panel.append(panels[0].cloneNode(true));
            var lastp = panels[len - 1].cloneNode(true);
            panel.append(lastp);
            this.getImg(lastp);
            lastp.style.cssText += 'position:relative;left:' + (-this.steps * (len + 2)) + 'px;';
            allWidth += panels[0].offsetWidth;
            allWidth += panels[len - 1].offsetWidth;
        }
        panel.css('width', allWidth);
        if (trigger && trigger.length) { //如果触发容器存在，触发容器无子元素则添加子元素
            var temp = '',
                childstu = trigger.children();
            if (!childstu.length) {
                for (var i = 0; i < pages; i++) {
                    temp += '<span' + (i == this.curIndex ? " class=" + this.activeTriggerCls + "" : "") + '></span>';
                }
                trigger.html(temp);
            }
            this.triggers = trigger.children();
            this.triggerSel = this.triggers[this.curIndex]; //当前状态元素
        } else {
            this.hasTrigger = false;
        }
        this.slideTo(this.curIndex);

        return this;
    },
    increaseEvent: function() {
        var that = this,
            _panel = that.wrap[0], //外层容器
            prev = that.prev,
            next = that.next,
            triggers = that.triggers;
        //triggers = that.trigg
        if (_panel.addEventListener) {
            _panel.addEventListener('touchstart', that, false);
            _panel.addEventListener('touchmove', that, false);
            _panel.addEventListener('touchend', that, false);
            _panel.addEventListener('webkitTransitionEnd', that, false);
            _panel.addEventListener('msTransitionEnd', that, false);
            _panel.addEventListener('oTransitionEnd', that, false);
            _panel.addEventListener('transitionend', that, false);
        }
        if (that.play) {
            that.begin();
        }
        if (prev && prev.length) {
            prev.on('click', function(e) {
                that.backward.call(that, e)
            });
        }
        if (next && next.length) {
            next.on('click', function(e) {
                that.forward.call(that, e)
            });
        }
        if (that.hasTrigger && triggers) {
            triggers.each(function(n, item) {
                $(item).on('click', function() {
                    that.slideTo(n);
                });
            });
        }
    },
    handleEvent: function(e) {
        switch (e.type) {
            case 'touchstart':
                this.start(e);
                break;
            case 'touchmove':
                this.move(e);
                break;
            case 'touchend':
            case 'touchcancel':
                this.end(e);
                break;
            case 'webkitTransitionEnd':
            case 'msTransitionEnd':
            case 'oTransitionEnd':
            case 'transitionend':
                this.transitionEnd(e);
                break;
        }
    },
    loadImg: function(n) { //判断加载哪屏图片
        n = n || 0;
        //不考虑循环时候复制的元素
        if (n < this._minpage) n = this._maxpage;
        else if (n > this._maxpage) n = this._minpage;

        var status = this.visible,
            lazyIndex = this.lazyIndex - 1,
            maxIndex = lazyIndex + n;
        if (maxIndex > this._maxpage) return;
        maxIndex += 1; //补上,for里判断没有=
        var start = (n && (lazyIndex + n) || n) * status,
            end = maxIndex * status,
            panels = this.panels;
        end = Math.min(panels.length, end);
        for (var i = start; i < end; i++) {
            this.getImg(panels[i]);
        }
    },
    getImg: function(obj) { //加载图片
        if (!obj) return;
        obj = $(obj);
        if (obj.attr('l')) {
            return;
        } //已加载
        var that = this,
            lazy = that.lazy,
            cls = 'img' + lazy;
        lazy = lazy.replace(/^\.|#/g, '');
        obj.find(cls).each(function(n, item) {
            var nobj = $(item);
            src = nobj.attr('dataimg');
            if (src) {
                nobj.attr('src', src).removeAttr('dataimg').removeClass(lazy);
            }
        });
        obj.attr('l', '1');
    },
    start: function(e) { //触摸开始
        var et = e.touches[0];
        //if(this._isScroll){return;}  //滑动未停止，则返回
        this._movestart = undefined;
        this._disX = 0;
        this._coord = {
            x: et.pageX,
            y: et.pageY
        };
    },
    move: function(e) {
        if (e.touches.length > 1 || e.scale && e.scale !== 1) return;
        var et = e.touches[0],
            disX = this._disX = et.pageX - this._coord.x,
            initLeft = this.left,
            tmleft;
        if (typeof this._movestart == 'undefined') { //第一次执行touchmove
            this._movestart = !!(this._movestart || Math.abs(disX) < Math.abs(et.pageY - this._coord.y));
        }
        if (!this._movestart) { //不是上下
            e.preventDefault();
            this.stop();
            if (!this.loop) { //不循环
                disX = disX / ((!this.curIndex && disX > 0 || this.curIndex == this._maxpage && disX < 0) ? (Math.abs(disX) / this.steps + 1) : 1); //增加阻力
            }
            tmleft = initLeft - this.curIndex * this.steps + disX;
            this.setCoord(this.panel, tmleft);
            this._disX = disX;
            //this._left = tmleft;
        }
    },
    end: function(e) {
        if (!this._movestart) { //如果执行了move
            var distance = this._disX;
            if (distance < -10) {
                e.preventDefault();
                this.forward();
            } else if (distance > 10) {
                e.preventDefault();
                this.backward();
            }
            distance = null;
        }
    },
    backward: function(e) {
        if (e && e.preventDefault) {
            e.preventDefault()
        }
        var cur = this.curIndex,
            minp = this._minpage;
        cur -= 1;
        if (cur < minp) {
            if (!this.loop) {
                cur = minp;
            } else {
                cur = minp - 1;
            }
        }
        this.slideTo(cur);
        this.callback && this.callback(Math.max(cur, minp), -1);
    },
    forward: function(e) {
        if (e && e.preventDefault) {
            e.preventDefault()
        }
        var cur = this.curIndex,
            maxp = this._maxpage;
        cur += 1;
        if (cur > maxp) {
            if (!this.loop) {
                cur = maxp;
            } else {
                cur = maxp + 1;
            }
        }
        this.slideTo(cur);
        this.callback && this.callback(Math.min(cur, maxp), 1);
    },
    setCoord: function(obj, x) {
        this.useTransform && obj.css("-webkit-transform", gv1 + x + 'px,0' + gv2) || obj.css("left", x);
    },
    slideTo: function(cur, duration) {
        cur = cur || 0;
        this.curIndex = cur; //保存当前屏数
        var panel = this.panel,
            style = panel[0].style,
            scrollx = this.left - cur * this.steps;
        style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = (duration || this.duration) + 'ms';
        this.setCoord(panel, scrollx);
        this.loadImg(cur);
    },
    transitionEnd: function() {
        var panel = this.panel,
            style = panel[0].style,
            loop = this.loop,
            cur = this.curIndex;
        if (loop) { //把curIndex和坐标重置
            if (cur > this._maxpage) {
                this.curIndex = 0;
            } else if (cur < this._minpage) {
                this.curIndex = this._maxpage;
            }
            this.setCoord(panel, this.left - this.curIndex * this.steps);
        }
        if (!loop && cur == this._maxpage) { //不循环的，只播放一次
            this.stop();
            this.play = false;
        } else {
            this.begin();
        }
        this.update();
        this.updateArrow();
        style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = 0;
        //this._isScroll = false;
    },
    update: function() {
        var triggers = this.triggers,
            cls = this.activeTriggerCls,
            curIndex = this.curIndex,
            triggerIndex = this.triggerIndex,
            pages = this._pages;
        if (triggers && triggers[curIndex]) {
            this.triggerSel && (this.triggerSel.className = '');
            triggers[curIndex].className = cls;
            this.triggerSel = triggers[curIndex];
        }
        //增加个改变数字的
        if (triggerIndex) {
            triggerIndex.html((curIndex + 1) + '/' + pages);
        }
    },
    updateArrow: function() { //左右箭头状态
        var prev = this.prev,
            next = this.next;
        if (!prev || !prev.length || !next || !next.length) return;
        if (this.loop) return; //循环不需要隐藏
        var cur = this.curIndex,
            cls = this.activePnCls;
        cur <= 0 && prev.addClass(cls) || prev.removeClass(cls);
        cur >= this._maxpage && next.addClass(cls) || next.removeClass(cls);
    },
    begin: function() {
        var that = this;
        if (that.play && !that._playTimer) { //自动播放
            that.stop();
            that._playTimer = setInterval(function() {
                that.forward();
            }, that.interval);
        }
    },
    stop: function() {
        var that = this;
        if (that.play && that._playTimer) {
            clearInterval(that._playTimer);
            that._playTimer = null;
        }
    },
    destroy: function() {
        var that = this,
            _panel = that.wrap[0],
            prev = that.prev,
            next = that.next,
            triggers = that.triggers;
        if (_panel.removeEventListener) {
            _panel.removeEventListener('touchstart', that, false);
            _panel.removeEventListener('touchmove', that, false);
            _panel.removeEventListener('touchend', that, false);
            _panel.removeEventListener('webkitTransitionEnd', that, false);
            _panel.removeEventListener('msTransitionEnd', that, false);
            _panel.removeEventListener('oTransitionEnd', that, false);
            _panel.removeEventListener('transitionend', that, false);
        }
        if (prev && prev.length) prev.off('click');
        if (next && next.length) next.off('click');
        if (that.hasTrigger && triggers) {
            triggers.each(function(n, item) {
                $(item).off('click');
            });
        }
    },
    attachTo: function(obj, options) {
        obj = $(obj);
        return obj.each(function(n, item) {
            if (!item.getAttribute('l')) {
                item.setAttribute('l', true);
                touchSlider.cache.push(new touchSlider(item, options));
            }
        });
    }
});

touchSlider.cache = [];

touchSlider.destroy = function() {
    var cache = touchSlider.cache,
        len = cache.length;
    if (len < 1) {
        return;
    }
    for (var i = 0; i < len; i++) {
        cache[i].destroy();
    }
    touchSlider.cache = [];
};

module.exports = touchSlider;

},{}],7:[function(require,module,exports){
(function (global){
// @desc 前段模板引擎 参照 juicer http://juicer.name
// @author 王玉林 <veryued@gmail.com>
// @date 2014-08-11

var juicer = function() {
    var args = [].slice.call(arguments);

    args.push(juicer.options);

    if (args[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)) {
        args[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm, function($, $id) {
            var _document = document;
            var elem = _document && _document.getElementById($id);
            args[0] = elem ? (elem.value || elem.innerHTML) : $;
        });
    }

    if (arguments.length == 1) {
        return juicer.compile.apply(juicer, args);
    }

    if (arguments.length >= 2) {
        return juicer.to_html.apply(juicer, args);
    }
};

var __escapehtml = {
    escapehash: {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2f;'
    },
    escapereplace: function(k) {
        return __escapehtml.escapehash[k];
    },
    escaping: function(str) {
        return typeof(str) !== 'string' ? str : str.replace(/[&<>"]/igm, this.escapereplace);
    },
    detection: function(data) {
        return typeof(data) === 'undefined' ? '' : data;
    }
};

var __throw = function(error) {
    if (typeof(console) !== 'undefined') {
        if (console.warn) {
            console.warn(error);
            return;
        }

        if (console.log) {
            console.log(error);
            return;
        }
    }

    throw (error);
};

var __creator = function(o, proto) {
    o = o !== Object(o) ? {} : o;

    if (o.__proto__) {
        o.__proto__ = proto;
        return o;
    }

    var empty = function() {};
    var n = Object.create ?
        Object.create(proto) :
        new(empty.prototype = proto, empty);

    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            n[i] = o[i];
        }
    }

    return n;
};

juicer.__cache = {};
juicer.version = '0.6.5-stable';
juicer.settings = {};

juicer.tags = {
    operationOpen: '{@',
    operationClose: '}',
    interpolateOpen: '\\${',
    interpolateClose: '}',
    noneencodeOpen: '\\$\\${',
    noneencodeClose: '}',
    commentOpen: '\\{#',
    commentClose: '\\}'
};

juicer.options = {
    cache: true,
    strip: true,
    errorhandling: true,
    detection: true,
    _method: __creator({
        __escapehtml: __escapehtml,
        __throw: __throw,
        __juicer: juicer
    }, {})
};

juicer.tagInit = function() {
    var forstart = juicer.tags.operationOpen + 'each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?' + juicer.tags.operationClose;
    var forend = juicer.tags.operationOpen + '\\/each' + juicer.tags.operationClose;
    var ifstart = juicer.tags.operationOpen + 'if\\s*([^}]*?)' + juicer.tags.operationClose;
    var ifend = juicer.tags.operationOpen + '\\/if' + juicer.tags.operationClose;
    var elsestart = juicer.tags.operationOpen + 'else' + juicer.tags.operationClose;
    var elseifstart = juicer.tags.operationOpen + 'else if\\s*([^}]*?)' + juicer.tags.operationClose;
    var interpolate = juicer.tags.interpolateOpen + '([\\s\\S]+?)' + juicer.tags.interpolateClose;
    var noneencode = juicer.tags.noneencodeOpen + '([\\s\\S]+?)' + juicer.tags.noneencodeClose;
    var inlinecomment = juicer.tags.commentOpen + '[^}]*?' + juicer.tags.commentClose;
    var rangestart = juicer.tags.operationOpen + 'each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)' + juicer.tags.operationClose;
    var include = juicer.tags.operationOpen + 'include\\s*([^}]*?)\\s*,\\s*([^}]*?)' + juicer.tags.operationClose;

    juicer.settings.forstart = new RegExp(forstart, 'igm');
    juicer.settings.forend = new RegExp(forend, 'igm');
    juicer.settings.ifstart = new RegExp(ifstart, 'igm');
    juicer.settings.ifend = new RegExp(ifend, 'igm');
    juicer.settings.elsestart = new RegExp(elsestart, 'igm');
    juicer.settings.elseifstart = new RegExp(elseifstart, 'igm');
    juicer.settings.interpolate = new RegExp(interpolate, 'igm');
    juicer.settings.noneencode = new RegExp(noneencode, 'igm');
    juicer.settings.inlinecomment = new RegExp(inlinecomment, 'igm');
    juicer.settings.rangestart = new RegExp(rangestart, 'igm');
    juicer.settings.include = new RegExp(include, 'igm');
};

juicer.tagInit();

// Using this method to set the options by given conf-name and conf-value,
// you can also provide more than one key-value pair wrapped by an object.
// this interface also used to custom the template tag delimater, for this
// situation, the conf-name must begin with tag::, for example: juicer.set
// ('tag::operationOpen', '{@').

juicer.set = function(conf, value) {
    var that = this;

    var escapePattern = function(v) {
        return v.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm, function($) {
            return '\\' + $;
        });
    };

    var set = function(conf, value) {
        var tag = conf.match(/^tag::(.*)$/i);

        if (tag) {
            that.tags[tag[1]] = escapePattern(value);
            that.tagInit();
            return;
        }

        that.options[conf] = value;
    };

    if (arguments.length === 2) {
        set(conf, value);
        return;
    }

    if (conf === Object(conf)) {
        for (var i in conf) {
            if (conf.hasOwnProperty(i)) {
                set(i, conf[i]);
            }
        }
    }
};

// Before you're using custom functions in your template like ${name | fnName},
// you need to register this fn by juicer.register('fnName', fn).

juicer.register = function(fname, fn) {
    var _method = this.options._method;

    if (_method.hasOwnProperty(fname)) {
        return false;
    }

    return _method[fname] = fn;
};

// remove the registered function in the memory by the provided function name.
// for example: juicer.unregister('fnName').

juicer.unregister = function(fname) {
    var _method = this.options._method;

    if (_method.hasOwnProperty(fname)) {
        return delete _method[fname];
    }
};

juicer.template = function(options) {
    var that = this;

    this.options = options;

    this.__interpolate = function(_name, _escape, options) {
        var _define = _name.split('|'),
            _fn = _define[0] || '',
            _cluster;

        if (_define.length > 1) {
            _name = _define.shift();
            _cluster = _define.shift().split(',');
            _fn = '_method.' + _cluster.shift() + '.call({}, ' + [_name].concat(_cluster) + ')';
        }

        return '<%= ' + (_escape ? '_method.__escapehtml.escaping' : '') + '(' +
            (!options || options.detection !== false ? '_method.__escapehtml.detection' : '') + '(' +
            _fn +
            ')' +
            ')' +
            ' %>';
    };

    this.__removeShell = function(tpl, options) {
        var _counter = 0;

        tpl = tpl
            // for expression
            .replace(juicer.settings.forstart, function($, _name, alias, key) {
                var alias = alias || 'value',
                    key = key && key.substr(1);
                var _iterate = 'i' + _counter++;
                return '<% ~function() {' +
                    'for(var ' + _iterate + ' in ' + _name + ') {' +
                    'if(' + _name + '.hasOwnProperty(' + _iterate + ')) {' +
                    'var ' + alias + '=' + _name + '[' + _iterate + '];' +
                    (key ? ('var ' + key + '=' + _iterate + ';') : '') +
                    ' %>';
            })
            .replace(juicer.settings.forend, '<% }}}(); %>')

        // if expression
        .replace(juicer.settings.ifstart, function($, condition) {
                return '<% if(' + condition + ') { %>';
            })
            .replace(juicer.settings.ifend, '<% } %>')

        // else expression
        .replace(juicer.settings.elsestart, function($) {
            return '<% } else { %>';
        })

        // else if expression
        .replace(juicer.settings.elseifstart, function($, condition) {
            return '<% } else if(' + condition + ') { %>';
        })

        // interpolate without escape
        .replace(juicer.settings.noneencode, function($, _name) {
            return that.__interpolate(_name, false, options);
        })

        // interpolate with escape
        .replace(juicer.settings.interpolate, function($, _name) {
            return that.__interpolate(_name, true, options);
        })

        // clean up comments
        .replace(juicer.settings.inlinecomment, '')

        // range expression
        .replace(juicer.settings.rangestart, function($, _name, start, end) {
            var _iterate = 'j' + _counter++;
            return '<% ~function() {' +
                'for(var ' + _iterate + '=' + start + ';' + _iterate + '<' + end + ';' + _iterate + '++) {{' +
                'var ' + _name + '=' + _iterate + ';' +
                ' %>';
        })

        // include sub-template
        .replace(juicer.settings.include, function($, tpl, data) {
            return '<%= _method.__juicer(' + tpl + ', ' + data + '); %>';
        });

        // exception handling
        if (!options || options.errorhandling !== false) {
            tpl = '<% try { %>' + tpl;
            tpl += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';
        }

        return tpl;
    };

    this.__toNative = function(tpl, options) {
        return this.__convert(tpl, !options || options.strip);
    };

    this.__lexicalAnalyze = function(tpl) {
        var buffer = [];
        var method = [];
        var prefix = '';
        var reserved = [
            'if', 'each', '_', '_method', 'console',
            'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do',
            'finally', 'for', 'function', 'in', 'instanceof', 'new', 'return', 'switch',
            'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'null', 'typeof',
            'class', 'enum', 'export', 'extends', 'import', 'super', 'implements', 'interface',
            'let', 'package', 'private', 'protected', 'public', 'static', 'yield', 'const', 'arguments',
            'true', 'false', 'undefined', 'NaN'
        ];

        var indexOf = function(array, item) {
            if (Array.prototype.indexOf && array.indexOf === Array.prototype.indexOf) {
                return array.indexOf(item);
            }

            for (var i = 0; i < array.length; i++) {
                if (array[i] === item) return i;
            }

            return -1;
        };

        var variableAnalyze = function($, statement) {
            statement = statement.match(/\w+/igm)[0];

            if (indexOf(buffer, statement) === -1 && indexOf(reserved, statement) === -1 && indexOf(method, statement) === -1) {

                // avoid re-declare native function, if not do this, template
                // `{@if encodeURIComponent(name)}` could be throw undefined.

                if (typeof(window) !== 'undefined' && typeof(window[statement]) === 'function' && window[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                    return $;
                }

                // compatible for node.js
                if (typeof(global) !== 'undefined' && typeof(global[statement]) === 'function' && global[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                    return $;
                }

                // avoid re-declare registered function, if not do this, template
                // `{@if registered_func(name)}` could be throw undefined.

                if (typeof(juicer.options._method[statement]) === 'function' || juicer.options._method.hasOwnProperty(statement)) {
                    method.push(statement);
                    return $;
                }

                buffer.push(statement); // fuck ie
            }

            return $;
        };

        tpl.replace(juicer.settings.forstart, variableAnalyze).
        replace(juicer.settings.interpolate, variableAnalyze).
        replace(juicer.settings.ifstart, variableAnalyze).
        replace(juicer.settings.elseifstart, variableAnalyze).
        replace(juicer.settings.include, variableAnalyze).
        replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/igm, variableAnalyze);

        for (var i = 0; i < buffer.length; i++) {
            prefix += 'var ' + buffer[i] + '=_.' + buffer[i] + ';';
        }

        for (var i = 0; i < method.length; i++) {
            prefix += 'var ' + method[i] + '=_method.' + method[i] + ';';
        }

        return '<% ' + prefix + ' %>';
    };

    this.__convert = function(tpl, strip) {
        var buffer = [].join('');

        buffer += "'use strict';"; // use strict mode
        buffer += "var _=_||{};";
        buffer += "var _out='';_out+='";

        if (strip !== false) {
            buffer += tpl
                .replace(/\\/g, "\\\\")
                .replace(/[\r\t\n]/g, " ")
                .replace(/'(?=[^%]*%>)/g, "\t")
                .split("'").join("\\'")
                .split("\t").join("'")
                .replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='")
                .split("<%").join("';")
                .split("%>").join("_out+='") +
                "';return _out;";

            return buffer;
        }

        buffer += tpl
            .replace(/\\/g, "\\\\")
            .replace(/[\r]/g, "\\r")
            .replace(/[\t]/g, "\\t")
            .replace(/[\n]/g, "\\n")
            .replace(/'(?=[^%]*%>)/g, "\t")
            .split("'").join("\\'")
            .split("\t").join("'")
            .replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='")
            .split("<%").join("';")
            .split("%>").join("_out+='") +
            "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";

        return buffer;
    };

    this.parse = function(tpl, options) {
        var _that = this;

        if (!options || options.loose !== false) {
            tpl = this.__lexicalAnalyze(tpl) + tpl;
        }

        tpl = this.__removeShell(tpl, options);
        tpl = this.__toNative(tpl, options);

        this._render = new Function('_, _method', tpl);

        this.render = function(_, _method) {
            if (!_method || _method !== that.options._method) {
                _method = __creator(_method, that.options._method);
            }

            return _that._render.call(this, _, _method);
        };

        return this;
    };
};

juicer.compile = function(tpl, options) {
    if (!options || options !== this.options) {
        options = __creator(options, this.options);
    }

    try {
        var engine = this.__cache[tpl] ?
            this.__cache[tpl] :
            new this.template(this.options).parse(tpl, options);

        if (!options || options.cache !== false) {
            this.__cache[tpl] = engine;
        }

        return engine;

    } catch (e) {
        __throw('Juicer Compile Exception: ' + e.message);

        return {
            render: function() {} // noop
        };
    }
};

juicer.to_html = function(tpl, data, options) {
    if (!options || options !== this.options) {
        options = __creator(options, this.options);
    }

    return this.compile(tpl, options).render(data, options._method);
};

module.exports = juicer;
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[2])