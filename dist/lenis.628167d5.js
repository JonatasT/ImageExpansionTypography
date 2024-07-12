// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/lenis.js":[function(require,module,exports) {
var define;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var t, e;
t = this, e = function e() {
  function t(t, e, i) {
    return Math.max(t, Math.min(e, i));
  }
  var Animate = /*#__PURE__*/function () {
    function Animate() {
      _classCallCheck(this, Animate);
    }
    return _createClass(Animate, [{
      key: "advance",
      value: function advance(e) {
        var _this$onUpdate;
        if (!this.isRunning) return;
        var i = !1;
        if (this.lerp) this.value = (s = this.value, o = this.to, n = 60 * this.lerp, l = e, function (t, e, i) {
          return (1 - i) * t + i * e;
        }(s, o, 1 - Math.exp(-n * l))), Math.round(this.value) === this.to && (this.value = this.to, i = !0);else {
          this.currentTime += e;
          var _s = t(0, this.currentTime / this.duration, 1);
          i = _s >= 1;
          var _o = i ? 1 : this.easing(_s);
          this.value = this.from + (this.to - this.from) * _o;
        }
        var s, o, n, l;
        (_this$onUpdate = this.onUpdate) !== null && _this$onUpdate !== void 0 && _this$onUpdate.call(this, this.value, i), i && this.stop();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.isRunning = !1;
      }
    }, {
      key: "fromTo",
      value: function fromTo(t, e, _ref) {
        var _ref$lerp = _ref.lerp,
          i = _ref$lerp === void 0 ? .1 : _ref$lerp,
          _ref$duration = _ref.duration,
          s = _ref$duration === void 0 ? 1 : _ref$duration,
          _ref$easing = _ref.easing,
          o = _ref$easing === void 0 ? function (t) {
            return t;
          } : _ref$easing,
          n = _ref.onStart,
          l = _ref.onUpdate;
        this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, n !== null && n !== void 0 && n(), this.onUpdate = l;
      }
    }]);
  }();
  var Dimensions = /*#__PURE__*/function () {
    function Dimensions() {
      var _this = this;
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        t = _ref2.wrapper,
        e = _ref2.content,
        _ref2$autoResize = _ref2.autoResize,
        i = _ref2$autoResize === void 0 ? !0 : _ref2$autoResize,
        _ref2$debounce = _ref2.debounce,
        s = _ref2$debounce === void 0 ? 250 : _ref2$debounce;
      _classCallCheck(this, Dimensions);
      _defineProperty(this, "resize", function () {
        _this.onWrapperResize(), _this.onContentResize();
      });
      _defineProperty(this, "onWrapperResize", function () {
        _this.wrapper === window ? (_this.width = window.innerWidth, _this.height = window.innerHeight) : (_this.width = _this.wrapper.clientWidth, _this.height = _this.wrapper.clientHeight);
      });
      _defineProperty(this, "onContentResize", function () {
        _this.wrapper === window ? (_this.scrollHeight = _this.content.scrollHeight, _this.scrollWidth = _this.content.scrollWidth) : (_this.scrollHeight = _this.wrapper.scrollHeight, _this.scrollWidth = _this.wrapper.scrollWidth);
      });
      this.wrapper = t, this.content = e, i && (this.debouncedResize = function (t, e) {
        var i;
        return function () {
          var s = arguments,
            o = this;
          clearTimeout(i), i = setTimeout(function () {
            t.apply(o, s);
          }, e);
        };
      }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    return _createClass(Dimensions, [{
      key: "destroy",
      value: function destroy() {
        var _this$wrapperResizeOb, _this$contentResizeOb;
        (_this$wrapperResizeOb = this.wrapperResizeObserver) !== null && _this$wrapperResizeOb !== void 0 && _this$wrapperResizeOb.disconnect(), (_this$contentResizeOb = this.contentResizeObserver) !== null && _this$contentResizeOb !== void 0 && _this$contentResizeOb.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1);
      }
    }, {
      key: "limit",
      get: function get() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height
        };
      }
    }]);
  }();
  var Emitter = /*#__PURE__*/function () {
    function Emitter() {
      _classCallCheck(this, Emitter);
      this.events = {};
    }
    return _createClass(Emitter, [{
      key: "emit",
      value: function emit(t) {
        var i = this.events[t] || [];
        for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          e[_key - 1] = arguments[_key];
        }
        for (var _t = 0, s = i.length; _t < s; _t++) i[_t].apply(i, e);
      }
    }, {
      key: "on",
      value: function on(t, e) {
        var _this$events$t,
          _this2 = this;
        return (_this$events$t = this.events[t]) !== null && _this$events$t !== void 0 && _this$events$t.push(e) || (this.events[t] = [e]), function () {
          var _this2$events$t;
          _this2.events[t] = (_this2$events$t = _this2.events[t]) === null || _this2$events$t === void 0 ? void 0 : _this2$events$t.filter(function (t) {
            return e !== t;
          });
        };
      }
    }, {
      key: "off",
      value: function off(t, e) {
        var _this$events$t2;
        this.events[t] = (_this$events$t2 = this.events[t]) === null || _this$events$t2 === void 0 ? void 0 : _this$events$t2.filter(function (t) {
          return e !== t;
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.events = {};
      }
    }]);
  }();
  var e = 100 / 6;
  var VirtualScroll = /*#__PURE__*/function () {
    function VirtualScroll(_t2, _ref3) {
      var _this3 = this;
      var _ref3$wheelMultiplier = _ref3.wheelMultiplier,
        _e = _ref3$wheelMultiplier === void 0 ? 1 : _ref3$wheelMultiplier,
        _ref3$touchMultiplier = _ref3.touchMultiplier,
        _i = _ref3$touchMultiplier === void 0 ? 1 : _ref3$touchMultiplier;
      _classCallCheck(this, VirtualScroll);
      _defineProperty(this, "onTouchStart", function (t) {
        var _ref4 = t.targetTouches ? t.targetTouches[0] : t,
          e = _ref4.clientX,
          i = _ref4.clientY;
        _this3.touchStart.x = e, _this3.touchStart.y = i, _this3.lastDelta = {
          x: 0,
          y: 0
        }, _this3.emitter.emit("scroll", {
          deltaX: 0,
          deltaY: 0,
          event: t
        });
      });
      _defineProperty(this, "onTouchMove", function (t) {
        var _ref5 = t.targetTouches ? t.targetTouches[0] : t,
          e = _ref5.clientX,
          i = _ref5.clientY,
          s = -(e - _this3.touchStart.x) * _this3.touchMultiplier,
          o = -(i - _this3.touchStart.y) * _this3.touchMultiplier;
        _this3.touchStart.x = e, _this3.touchStart.y = i, _this3.lastDelta = {
          x: s,
          y: o
        }, _this3.emitter.emit("scroll", {
          deltaX: s,
          deltaY: o,
          event: t
        });
      });
      _defineProperty(this, "onTouchEnd", function (t) {
        _this3.emitter.emit("scroll", {
          deltaX: _this3.lastDelta.x,
          deltaY: _this3.lastDelta.y,
          event: t
        });
      });
      _defineProperty(this, "onWheel", function (t) {
        var i = t.deltaX,
          s = t.deltaY,
          o = t.deltaMode;
        i *= 1 === o ? e : 2 === o ? _this3.windowWidth : 1, s *= 1 === o ? e : 2 === o ? _this3.windowHeight : 1, i *= _this3.wheelMultiplier, s *= _this3.wheelMultiplier, _this3.emitter.emit("scroll", {
          deltaX: i,
          deltaY: s,
          event: t
        });
      });
      _defineProperty(this, "onWindowResize", function () {
        _this3.windowWidth = window.innerWidth, _this3.windowHeight = window.innerHeight;
      });
      this.element = _t2, this.wheelMultiplier = _e, this.touchMultiplier = _i, this.touchStart = {
        x: null,
        y: null
      }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1
      }), this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1
      }), this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1
      });
    }
    return _createClass(VirtualScroll, [{
      key: "on",
      value: function on(t, e) {
        return this.emitter.on(t, e);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
          passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
          passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
          passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
          passive: !1
        });
      }
    }]);
  }();
  return /*#__PURE__*/function () {
    function Lenis() {
      var _this4 = this;
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$wrapper = _ref6.wrapper,
        t = _ref6$wrapper === void 0 ? window : _ref6$wrapper,
        _ref6$content = _ref6.content,
        e = _ref6$content === void 0 ? document.documentElement : _ref6$content,
        _ref6$wheelEventsTarg = _ref6.wheelEventsTarget,
        i = _ref6$wheelEventsTarg === void 0 ? t : _ref6$wheelEventsTarg,
        _ref6$eventsTarget = _ref6.eventsTarget,
        s = _ref6$eventsTarget === void 0 ? i : _ref6$eventsTarget,
        _ref6$smoothWheel = _ref6.smoothWheel,
        o = _ref6$smoothWheel === void 0 ? !0 : _ref6$smoothWheel,
        _ref6$syncTouch = _ref6.syncTouch,
        n = _ref6$syncTouch === void 0 ? !1 : _ref6$syncTouch,
        _ref6$syncTouchLerp = _ref6.syncTouchLerp,
        l = _ref6$syncTouchLerp === void 0 ? .075 : _ref6$syncTouchLerp,
        _ref6$touchInertiaMul = _ref6.touchInertiaMultiplier,
        r = _ref6$touchInertiaMul === void 0 ? 35 : _ref6$touchInertiaMul,
        h = _ref6.duration,
        _ref6$easing = _ref6.easing,
        a = _ref6$easing === void 0 ? function (t) {
          return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        } : _ref6$easing,
        _ref6$lerp = _ref6.lerp,
        c = _ref6$lerp === void 0 ? !h && .1 : _ref6$lerp,
        _ref6$infinite = _ref6.infinite,
        d = _ref6$infinite === void 0 ? !1 : _ref6$infinite,
        _ref6$orientation = _ref6.orientation,
        p = _ref6$orientation === void 0 ? "vertical" : _ref6$orientation,
        _ref6$gestureOrientat = _ref6.gestureOrientation,
        u = _ref6$gestureOrientat === void 0 ? "vertical" : _ref6$gestureOrientat,
        _ref6$touchMultiplier = _ref6.touchMultiplier,
        m = _ref6$touchMultiplier === void 0 ? 1 : _ref6$touchMultiplier,
        _ref6$wheelMultiplier = _ref6.wheelMultiplier,
        g = _ref6$wheelMultiplier === void 0 ? 1 : _ref6$wheelMultiplier,
        _ref6$autoResize = _ref6.autoResize,
        v = _ref6$autoResize === void 0 ? !0 : _ref6$autoResize,
        _ref6$__experimental_ = _ref6.__experimental__naiveDimensions,
        S = _ref6$__experimental_ === void 0 ? !1 : _ref6$__experimental_;
      _classCallCheck(this, Lenis);
      this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = function (_ref7) {
        var t = _ref7.deltaX,
          e = _ref7.deltaY,
          i = _ref7.event;
        if (i.ctrlKey) return;
        var s = i.type.includes("touch"),
          o = i.type.includes("wheel");
        if (_this4.options.syncTouch && s && "touchstart" === i.type && !_this4.isStopped && !_this4.isLocked) return void _this4.reset();
        var n = 0 === t && 0 === e,
          l = "vertical" === _this4.options.gestureOrientation && 0 === e || "horizontal" === _this4.options.gestureOrientation && 0 === t;
        if (n || l) return;
        var r = i.composedPath();
        if (r = r.slice(0, r.indexOf(_this4.rootElement)), r.find(function (t) {
          var e, i, n, l, r;
          return (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent")) || s && (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent-touch")) || o && (null === (n = t.hasAttribute) || void 0 === n ? void 0 : n.call(t, "data-lenis-prevent-wheel")) || (null === (l = t.classList) || void 0 === l ? void 0 : l.contains("lenis")) && !(null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis-stopped"));
        })) return;
        if (_this4.isStopped || _this4.isLocked) return void i.preventDefault();
        if (_this4.isSmooth = _this4.options.syncTouch && s || _this4.options.smoothWheel && o, !_this4.isSmooth) return _this4.isScrolling = !1, void _this4.animate.stop();
        i.preventDefault();
        var h = e;
        "both" === _this4.options.gestureOrientation ? h = Math.abs(e) > Math.abs(t) ? e : t : "horizontal" === _this4.options.gestureOrientation && (h = t);
        var a = s && _this4.options.syncTouch,
          c = s && "touchend" === i.type && Math.abs(h) > 5;
        c && (h = _this4.velocity * _this4.options.touchInertiaMultiplier), _this4.scrollTo(_this4.targetScroll + h, Object.assign({
          programmatic: !1
        }, a ? {
          lerp: c ? _this4.options.syncTouchLerp : 1
        } : {
          lerp: _this4.options.lerp,
          duration: _this4.options.duration,
          easing: _this4.options.easing
        }));
      }, this.onNativeScroll = function () {
        if (!_this4.__preventNextScrollEvent && !_this4.isScrolling) {
          var _t3 = _this4.animatedScroll;
          _this4.animatedScroll = _this4.targetScroll = _this4.actualScroll, _this4.velocity = 0, _this4.direction = Math.sign(_this4.animatedScroll - _t3), _this4.emit();
        }
      }, window.lenisVersion = "1.0.42", t !== document.documentElement && t !== document.body || (t = window), this.options = {
        wrapper: t,
        content: e,
        wheelEventsTarget: i,
        eventsTarget: s,
        smoothWheel: o,
        syncTouch: n,
        syncTouchLerp: l,
        touchInertiaMultiplier: r,
        duration: h,
        easing: a,
        lerp: c,
        infinite: d,
        gestureOrientation: u,
        orientation: p,
        touchMultiplier: m,
        wheelMultiplier: g,
        autoResize: v,
        __experimental__naiveDimensions: S
      }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({
        wrapper: t,
        content: e,
        autoResize: v
      }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = n || o, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new VirtualScroll(s, {
        touchMultiplier: m,
        wheelMultiplier: g
      }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    return _createClass(Lenis, [{
      key: "destroy",
      value: function destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1);
      }
    }, {
      key: "on",
      value: function on(t, e) {
        return this.emitter.on(t, e);
      }
    }, {
      key: "off",
      value: function off(t, e) {
        return this.emitter.off(t, e);
      }
    }, {
      key: "setScroll",
      value: function setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
      }
    }, {
      key: "resize",
      value: function resize() {
        this.dimensions.resize();
      }
    }, {
      key: "emit",
      value: function emit() {
        this.emitter.emit("scroll", this);
      }
    }, {
      key: "reset",
      value: function reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
      }
    }, {
      key: "start",
      value: function start() {
        this.isStopped && (this.isStopped = !1, this.reset());
      }
    }, {
      key: "stop",
      value: function stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset());
      }
    }, {
      key: "raf",
      value: function raf(t) {
        var e = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * e);
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(e) {
        var _this5 = this;
        var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref8$offset = _ref8.offset,
          i = _ref8$offset === void 0 ? 0 : _ref8$offset,
          _ref8$immediate = _ref8.immediate,
          s = _ref8$immediate === void 0 ? !1 : _ref8$immediate,
          _ref8$lock = _ref8.lock,
          o = _ref8$lock === void 0 ? !1 : _ref8$lock,
          _ref8$duration = _ref8.duration,
          n = _ref8$duration === void 0 ? this.options.duration : _ref8$duration,
          _ref8$easing = _ref8.easing,
          l = _ref8$easing === void 0 ? this.options.easing : _ref8$easing,
          _ref8$lerp = _ref8.lerp,
          r = _ref8$lerp === void 0 ? !n && this.options.lerp : _ref8$lerp,
          h = _ref8.onComplete,
          _ref8$force = _ref8.force,
          a = _ref8$force === void 0 ? !1 : _ref8$force,
          _ref8$programmatic = _ref8.programmatic,
          c = _ref8$programmatic === void 0 ? !0 : _ref8$programmatic;
        if (!this.isStopped && !this.isLocked || a) {
          if (["top", "left", "start"].includes(e)) e = 0;else if (["bottom", "right", "end"].includes(e)) e = this.limit;else {
            var _t4;
            if ("string" == typeof e ? _t4 = document.querySelector(e) : (null == e ? void 0 : e.nodeType) && (_t4 = e), _t4) {
              if (this.options.wrapper !== window) {
                var _t5 = this.options.wrapper.getBoundingClientRect();
                i -= this.isHorizontal ? _t5.left : _t5.top;
              }
              var _s2 = _t4.getBoundingClientRect();
              e = (this.isHorizontal ? _s2.left : _s2.top) + this.animatedScroll;
            }
          }
          if ("number" == typeof e) {
            if (e += i, e = Math.round(e), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = t(0, e, this.limit), s) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
            if (!c) {
              if (e === this.targetScroll) return;
              this.targetScroll = e;
            }
            this.animate.fromTo(this.animatedScroll, e, {
              duration: n,
              easing: l,
              lerp: r,
              onStart: function onStart() {
                o && (_this5.isLocked = !0), _this5.isScrolling = !0;
              },
              onUpdate: function onUpdate(t, e) {
                _this5.isScrolling = !0, _this5.velocity = t - _this5.animatedScroll, _this5.direction = Math.sign(_this5.velocity), _this5.animatedScroll = t, _this5.setScroll(_this5.scroll), c && (_this5.targetScroll = t), e || _this5.emit(), e && (_this5.reset(), _this5.emit(), null == h || h(_this5), _this5.__preventNextScrollEvent = !0, requestAnimationFrame(function () {
                  delete _this5.__preventNextScrollEvent;
                }));
              }
            });
          }
        }
      }
    }, {
      key: "rootElement",
      get: function get() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
      }
    }, {
      key: "limit",
      get: function get() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
    }, {
      key: "isHorizontal",
      get: function get() {
        return "horizontal" === this.options.orientation;
      }
    }, {
      key: "actualScroll",
      get: function get() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
      }
    }, {
      key: "scroll",
      get: function get() {
        return this.options.infinite ? (t = this.animatedScroll, e = this.limit, (t % e + e) % e) : this.animatedScroll;
        var t, e;
      }
    }, {
      key: "progress",
      get: function get() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
      }
    }, {
      key: "isSmooth",
      get: function get() {
        return this.__isSmooth;
      },
      set: function set(t) {
        this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClassName("lenis-smooth", t));
      }
    }, {
      key: "isScrolling",
      get: function get() {
        return this.__isScrolling;
      },
      set: function set(t) {
        this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClassName("lenis-scrolling", t));
      }
    }, {
      key: "isStopped",
      get: function get() {
        return this.__isStopped;
      },
      set: function set(t) {
        this.__isStopped !== t && (this.__isStopped = t, this.toggleClassName("lenis-stopped", t));
      }
    }, {
      key: "isLocked",
      get: function get() {
        return this.__isLocked;
      },
      set: function set(t) {
        this.__isLocked !== t && (this.__isLocked = t, this.toggleClassName("lenis-locked", t));
      }
    }, {
      key: "className",
      get: function get() {
        var t = "lenis";
        return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t;
      }
    }, {
      key: "toggleClassName",
      value: function toggleClassName(t, e) {
        this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this);
      }
    }]);
  }();
}, "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Lenis = e();
},{}],"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61207" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/lenis.js"], null)
//# sourceMappingURL=/lenis.628167d5.js.map