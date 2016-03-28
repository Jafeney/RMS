var Slider = require('../util/slider');
var template = require('../util/template');
var lazyload = require('../util/lazyload')();
var footer = require('../util/footer');
var config = require('../util/config');

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
		        item.webp = item.img + '!210x210.webp'; //压缩商品图片webp格式
		        item.img += '!210x210.jpg'; //压缩商品图片
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
		        item.webp = item.img + '!210x210.webp'; //压缩商品图片webp格式
		        item.img += '!210x210.jpg'; //压缩商品图片
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
		            item.webp = item.img + '!210x210.webp'; //压缩商品图片webp格式
		            item.img += '!210x210.jpg'; //压缩商品图片
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

	// 渲染martShowBelow 
	var renderMartshowBelow = function(data) {
		var martshow = data.martshow_lists;
		var martshowLen = martshow.length;

		for (var i = 0; i < martshowLen; i++) {
		    var _martshow = martshow[i];
		    var martshowItem = _martshow.martshow_items;
		    martshow[i].itemLen = martshowItem.length;
		    martshow[i].url = getBeibeiListURL(_martshow.event_id);
		    for (var j = 0; j < martshow[i].itemLen; j++) {
		        var item = martshowItem[j];
		        if (j >= 4) {
		            martshowItem.pop();
		        } else {
		            item.url = getBeibeiDetailURL(item.iid);
		            item.price = toIntPrice(item.price);
		            item.price_ori = toIntPrice(item.price_ori);
		            item.webp = item.img + '!210x210.webp'; //压缩商品图片webp格式
		            item.img += '!210x210.jpg'; //压缩商品图片
		        }
		    }
		}
		var tpl = $("#J_productList-tpl").html();
		var html = template(tpl, {
		    martshowList2: martshow
		});
		$("#J_productList").append(html);
		lazyload.getLazyImg();
		loading = false;
	};

	// 获取广告位数据
	var getAds = function() {
		$.ajax({
		    type: 'GET',
		    url: 'http://sapi.beibei.com/resource/h5-ads-36_37.html',
		    dataType: 'jsonp',
		    jsonpCallback: 'ads',
		    cache: true,
		    success: function(resp) {
		        renderSlider(resp.new_cheap_banners);  
		        getSelectedList({
                    num: num,
                    isInit: 1,
                    ads: resp.new_cheap_insert_banners
                });
                getMartshowList(martshowNum);
		    },
		    error: function() {
		        console.log("getAds error!!!");
		    }
		});
	};

	// 获取精选和专场数据
	var getSelectedList = function(data) {
		$.ajax({
		    url: 'http://sapi.beibei.com/martshow/h5_mart_new_arrival/' + data.num + '-10-1-0.html',
		    type: 'GET',
		    dataType: 'jsonp',
		    jsonpCallback: 'BeibeiH5MartshowNewArrivalGet01',
		    success: function(resp) {
		        data.isInit && renderSelectedList(resp); //渲染精选数据
		        renderMartshow(resp); //渲染专场数据
		        renderInsertAds(data.ads);
		        lazyload.getLazyImg();
		        loading = false;
		    },
		    error: function(resp) {
		        console.log("getSelectedList error!!!");
		    }
		})
	};

	// 获取martShowList的数据 
	var getMartshowList = function(num) {
		$.ajax({
		    url: 'http://sapi.beibei.com/martshow/h5_mart_new_arrival/' + num + '-10-2-0.html',
		    type: 'GET',
		    dataType: 'jsonp',
		    jsonpCallback: 'BeibeiH5MartshowNewArrivalGet02',
		    success: function(resp) {
		        renderMartshowBelow(resp);
		    },
		    error: function(resp) {
		        console.log("getMartshowList error!!!");
		    }
		});
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