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
})({"node_modules/lenis/dist/lenis.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function clamp(t, i, e) {
  return Math.max(t, Math.min(i, e));
}
class Animate {
  constructor() {
    this.isRunning = !1, this.value = 0, this.from = 0, this.to = 0, this.duration = 0, this.currentTime = 0;
  }
  advance(t) {
    var i;
    if (!this.isRunning) return;
    let e = !1;
    if (this.duration && this.easing) {
      this.currentTime += t;
      const i = clamp(0, this.currentTime / this.duration, 1);
      e = i >= 1;
      const s = e ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * s;
    } else this.lerp ? (this.value = function damp(t, i, e, s) {
      return function lerp(t, i, e) {
        return (1 - e) * t + e * i;
      }(t, i, 1 - Math.exp(-e * s));
    }(this.value, this.to, 60 * this.lerp, t), Math.round(this.value) === this.to && (this.value = this.to, e = !0)) : (this.value = this.to, e = !0);
    e && this.stop(), null === (i = this.onUpdate) || void 0 === i || i.call(this, this.value, e);
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(t, i, {
    lerp: e,
    duration: s,
    easing: o,
    onStart: n,
    onUpdate: l
  }) {
    this.from = this.value = t, this.to = i, this.lerp = e, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, null == n || n(), this.onUpdate = l;
  }
}
class Dimensions {
  constructor({
    wrapper: t,
    content: i,
    autoResize: e = !0,
    debounce: s = 250
  } = {}) {
    this.width = 0, this.height = 0, this.scrollWidth = 0, this.scrollHeight = 0, this.resize = () => {
      this.onWrapperResize(), this.onContentResize();
    }, this.onWrapperResize = () => {
      this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    }, this.onContentResize = () => {
      this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    }, this.wrapper = t, this.content = i, e && (this.debouncedResize = function debounce(t, i) {
      let e;
      return function () {
        let s = arguments,
          o = this;
        clearTimeout(e), e = setTimeout(function () {
          t.apply(o, s);
        }, i);
      };
    }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
  }
  destroy() {
    var t, i;
    null === (t = this.wrapperResizeObserver) || void 0 === t || t.disconnect(), null === (i = this.contentResizeObserver) || void 0 === i || i.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
}
class Emitter {
  constructor() {
    this.events = {};
  }
  emit(t, ...i) {
    let e = this.events[t] || [];
    for (let t = 0, s = e.length; t < s; t++) e[t](...i);
  }
  on(t, i) {
    var e;
    return (null === (e = this.events[t]) || void 0 === e ? void 0 : e.push(i)) || (this.events[t] = [i]), () => {
      var e;
      this.events[t] = null === (e = this.events[t]) || void 0 === e ? void 0 : e.filter(t => i !== t);
    };
  }
  off(t, i) {
    var e;
    this.events[t] = null === (e = this.events[t]) || void 0 === e ? void 0 : e.filter(t => i !== t);
  }
  destroy() {
    this.events = {};
  }
}
const t = 100 / 6;
class VirtualScroll {
  constructor(i, {
    wheelMultiplier: e = 1,
    touchMultiplier: s = 1
  }) {
    this.lastDelta = {
      x: 0,
      y: 0
    }, this.windowWidth = 0, this.windowHeight = 0, this.onTouchStart = t => {
      const {
        clientX: i,
        clientY: e
      } = t.targetTouches ? t.targetTouches[0] : t;
      this.touchStart.x = i, this.touchStart.y = e, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: t
      });
    }, this.onTouchMove = t => {
      var i, e, s, o;
      const {
          clientX: n,
          clientY: l
        } = t.targetTouches ? t.targetTouches[0] : t,
        r = -(n - (null !== (e = null === (i = this.touchStart) || void 0 === i ? void 0 : i.x) && void 0 !== e ? e : 0)) * this.touchMultiplier,
        h = -(l - (null !== (o = null === (s = this.touchStart) || void 0 === s ? void 0 : s.y) && void 0 !== o ? o : 0)) * this.touchMultiplier;
      this.touchStart.x = n, this.touchStart.y = l, this.lastDelta = {
        x: r,
        y: h
      }, this.emitter.emit("scroll", {
        deltaX: r,
        deltaY: h,
        event: t
      });
    }, this.onTouchEnd = t => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: t
      });
    }, this.onWheel = i => {
      let {
        deltaX: e,
        deltaY: s,
        deltaMode: o
      } = i;
      e *= 1 === o ? t : 2 === o ? this.windowWidth : 1, s *= 1 === o ? t : 2 === o ? this.windowHeight : 1, e *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: e,
        deltaY: s,
        event: i
      });
    }, this.onWindowResize = () => {
      this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
    }, this.element = i, this.wheelMultiplier = e, this.touchMultiplier = s, this.touchStart = {
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
  on(t, i) {
    return this.emitter.on(t, i);
  }
  destroy() {
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel), this.element.removeEventListener("touchstart", this.onTouchStart), this.element.removeEventListener("touchmove", this.onTouchMove), this.element.removeEventListener("touchend", this.onTouchEnd);
  }
}
class Lenis {
  constructor({
    wrapper: t = window,
    content: i = document.documentElement,
    wheelEventsTarget: e = t,
    eventsTarget: s = e,
    smoothWheel: o = !0,
    syncTouch: n = !1,
    syncTouchLerp: l = .075,
    touchInertiaMultiplier: r = 35,
    duration: h,
    easing: a = t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    lerp: c = .1,
    infinite: d = !1,
    orientation: u = "vertical",
    gestureOrientation: p = "vertical",
    touchMultiplier: m = 1,
    wheelMultiplier: v = 1,
    autoResize: g = !0,
    prevent: w,
    virtualScroll: S,
    __experimental__naiveDimensions: f = !1
  } = {}) {
    this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.userData = {}, this.lastVelocity = 0, this.velocity = 0, this.direction = 0, this.onPointerDown = t => {
      1 === t.button && this.reset();
    }, this.onVirtualScroll = t => {
      if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
      const {
        deltaX: i,
        deltaY: e,
        event: s
      } = t;
      if (this.emitter.emit("virtual-scroll", {
        deltaX: i,
        deltaY: e,
        event: s
      }), s.ctrlKey) return;
      const o = s.type.includes("touch"),
        n = s.type.includes("wheel");
      this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
      if (this.options.syncTouch && o && "touchstart" === s.type && !this.isStopped && !this.isLocked) return void this.reset();
      const l = 0 === i && 0 === e,
        r = "vertical" === this.options.gestureOrientation && 0 === e || "horizontal" === this.options.gestureOrientation && 0 === i;
      if (l || r) return;
      let h = s.composedPath();
      h = h.slice(0, h.indexOf(this.rootElement));
      const a = this.options.prevent;
      if (h.find(t => {
        var i, e, s, l, r;
        return t instanceof Element && ("function" == typeof a && (null == a ? void 0 : a(t)) || (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent")) || o && (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent-touch")) || n && (null === (s = t.hasAttribute) || void 0 === s ? void 0 : s.call(t, "data-lenis-prevent-wheel")) || (null === (l = t.classList) || void 0 === l ? void 0 : l.contains("lenis")) && !(null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis-stopped")));
      })) return;
      if (this.isStopped || this.isLocked) return void s.preventDefault();
      if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) return this.isScrolling = "native", void this.animate.stop();
      s.preventDefault();
      let c = e;
      "both" === this.options.gestureOrientation ? c = Math.abs(e) > Math.abs(i) ? e : i : "horizontal" === this.options.gestureOrientation && (c = i);
      const d = o && this.options.syncTouch,
        u = o && "touchend" === s.type && Math.abs(c) > 5;
      u && (c = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + c, Object.assign({
        programmatic: !1
      }, d ? {
        lerp: u ? this.options.syncTouchLerp : 1
      } : {
        lerp: this.options.lerp,
        duration: this.options.duration,
        easing: this.options.easing
      }));
    }, this.onNativeScroll = () => {
      if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent;else if (!1 === this.isScrolling || "native" === this.isScrolling) {
        const t = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isScrolling = "native", this.emit(), 0 !== this.velocity && (this.__resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
        }, 400));
      }
    }, window.lenisVersion = "1.1.6", t && t !== document.documentElement && t !== document.body || (t = window), this.options = {
      wrapper: t,
      content: i,
      wheelEventsTarget: e,
      eventsTarget: s,
      smoothWheel: o,
      syncTouch: n,
      syncTouchLerp: l,
      touchInertiaMultiplier: r,
      duration: h,
      easing: a,
      lerp: c,
      infinite: d,
      gestureOrientation: p,
      orientation: u,
      touchMultiplier: m,
      wheelMultiplier: v,
      autoResize: g,
      prevent: w,
      virtualScroll: S,
      __experimental__naiveDimensions: f
    }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({
      wrapper: t,
      content: i,
      autoResize: g
    }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = !1, this.isStopped = !1, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new VirtualScroll(s, {
      touchMultiplier: m,
      wheelMultiplier: v
    }), this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName();
  }
  on(t, i) {
    return this.emitter.on(t, i);
  }
  off(t, i) {
    return this.emitter.off(t, i);
  }
  setScroll(t) {
    this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
  }
  start() {
    this.isStopped && (this.isStopped = !1, this.reset());
  }
  stop() {
    this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset());
  }
  raf(t) {
    const i = t - (this.time || t);
    this.time = t, this.animate.advance(.001 * i);
  }
  scrollTo(t, {
    offset: i = 0,
    immediate: e = !1,
    lock: s = !1,
    duration: o = this.options.duration,
    easing: n = this.options.easing,
    lerp: l = this.options.lerp,
    onStart: r,
    onComplete: h,
    force: a = !1,
    programmatic: c = !0,
    userData: d = {}
  } = {}) {
    if (!this.isStopped && !this.isLocked || a) {
      if ("string" == typeof t && ["top", "left", "start"].includes(t)) t = 0;else if ("string" == typeof t && ["bottom", "right", "end"].includes(t)) t = this.limit;else {
        let e;
        if ("string" == typeof t ? e = document.querySelector(t) : t instanceof HTMLElement && (null == t ? void 0 : t.nodeType) && (e = t), e) {
          if (this.options.wrapper !== window) {
            const t = this.rootElement.getBoundingClientRect();
            i -= this.isHorizontal ? t.left : t.top;
          }
          const s = e.getBoundingClientRect();
          t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
        }
      }
      if ("number" == typeof t && (t += i, t = Math.round(t), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = clamp(0, t, this.limit), t !== this.targetScroll)) {
        if (this.userData = d, e) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), null == h || h(this), void (this.userData = {});
        c || (this.targetScroll = t), this.animate.fromTo(this.animatedScroll, t, {
          duration: o,
          easing: n,
          lerp: l,
          onStart: () => {
            s && (this.isLocked = !0), this.isScrolling = "smooth", null == r || r(this);
          },
          onUpdate: (t, i) => {
            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), c && (this.targetScroll = t), i || this.emit(), i && (this.reset(), this.emit(), null == h || h(this), this.userData = {}, this.preventNextNativeScrollEvent());
          }
        });
      }
    }
  }
  preventNextNativeScrollEvent() {
    this.__preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
      delete this.__preventNextNativeScrollEvent;
    });
  }
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return "horizontal" === this.options.orientation;
  }
  get actualScroll() {
    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite ? function modulo(t, i) {
      return (t % i + i) % i;
    }(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  get progress() {
    return 0 === this.limit ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t && (this.__isScrolling = t, this.updateClassName());
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t && (this.__isStopped = t, this.updateClassName());
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(t) {
    this.__isLocked !== t && (this.__isLocked = t, this.updateClassName());
  }
  get isSmooth() {
    return "smooth" === this.isScrolling;
  }
  get className() {
    let t = "lenis";
    return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t;
  }
  updateClassName() {
    this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
  }
}
exports.default = Lenis;
},{}],"js/smoothscroll.js":[function(require,module,exports) {
"use strict";

var _lenis = _interopRequireDefault(require("lenis"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Initializes smooth scrolling with Lenis and integrates it with GSAP's ScrollTrigger.
// Function to set up smooth scrolling.
var initSmoothScrolling = function initSmoothScrolling() {
  // Initialize Lenis for smooth scroll effects. Lerp value controls the smoothness.
  var lenis = new _lenis.default({
    lerp: 0.17
  });

  // Sync ScrollTrigger with Lenis' scroll updates.
  lenis.on('scroll', ScrollTrigger.update);

  // Ensure GSAP animations are in sync with Lenis' scroll frame updates.
  gsap.ticker.add(function (time) {
    lenis.raf(time * 1000); // Convert GSAP's time to milliseconds for Lenis.
  });

  // Turn off GSAP's default lag smoothing to avoid conflicts with Lenis.
  gsap.ticker.lagSmoothing(0);
};

// Activate the smooth scrolling feature.
initSmoothScrolling();
},{"lenis":"node_modules/lenis/dist/lenis.mjs"}],"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/smoothscroll.js"], null)
//# sourceMappingURL=/smoothscroll.1bb14e6c.js.map