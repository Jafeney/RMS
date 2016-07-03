(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        var tpl = $('#J_tpl-data-items').html(),
            html = template(tpl, {
                items: data
            });
        $('#J_data-items').html(html);
        $('#J_data-list').DataTable({
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

},{"../util/config":2,"../util/cookie":3,"../util/lazyload":4,"../util/modal":5,"../util/template":6,"../util/time":7}],2:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
/**
 * @desc 时间处理工具函数
 **/

module.exports = {
    // 获取本地时间字符串
    getTimeString: function(date) {
        return date.getFullYear() + '-' + this.dateNumFormat(date.getMonth() +
                1) + '-' + this.dateNumFormat(date.getDate()) + ' ' +
            this.dateNumFormat(date.getHours()) + ':' + this.dateNumFormat(
                date.getMinutes()) +
            ':' + this.dateNumFormat(date.getSeconds());
    },
    // 格式化日期格式
    dateNumFormat: function(num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }
};

},{}]},{},[1])