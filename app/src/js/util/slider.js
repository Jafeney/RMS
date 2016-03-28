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
