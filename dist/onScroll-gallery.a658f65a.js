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
},{}],"node_modules/ev-emitter/ev-emitter.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * EvEmitter v2.1.1
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // set events hash
  let events = this._events = this._events || {};
  // set listeners array
  let listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( !listeners.includes( listener ) ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  let onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  let index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice( 0 );
  args = args || [];
  // once stuff
  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( let listener of listeners ) {
    let isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
  return this;
};

return EvEmitter;

} ) );

},{}],"node_modules/imagesloaded/imagesloaded.js":[function(require,module,exports) {
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( window, require('ev-emitter') );
  } else {
    // browser global
    window.imagesLoaded = factory( window, window.EvEmitter );
  }

} )( typeof window !== 'undefined' ? window : this,
    function factory( window, EvEmitter ) {

let $ = window.jQuery;
let console = window.console;

// -------------------------- helpers -------------------------- //

// turn element or nodeList into an array
function makeArray( obj ) {
  // use object if already an array
  if ( Array.isArray( obj ) ) return obj;

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if ( isArrayLike ) return [ ...obj ];

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {[Array, Element, NodeList, String]} elem
 * @param {[Object, Function]} options - if function, use as callback
 * @param {Function} onAlways - callback function
 * @returns {ImagesLoaded}
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  let queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error(`Bad element for imagesLoaded ${queryElem || elem}`);
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = {};
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    Object.assign( this.options, options );
  }

  if ( onAlways ) this.on( 'always', onAlways );

  this.getImages();
  // add jQuery Deferred object
  if ( $ ) this.jqDeferred = new $.Deferred();

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

const elementNodeTypes = [ 1, 9, 11 ];

/**
 * @param {Node} elem
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName === 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  let { nodeType } = elem;
  if ( !nodeType || !elementNodeTypes.includes( nodeType ) ) return;

  let childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( let img of childImgs ) {
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    let children = elem.querySelectorAll( this.options.background );
    for ( let child of children ) {
      this.addElementBackgroundImages( child );
    }
  }
};

const reURL = /url\((['"])?(.*?)\1\)/gi;

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  let style = getComputedStyle( elem );
  // Firefox returns null if in a hidden iframe https://bugzil.la/548397
  if ( !style ) return;

  // get url inside url("...")
  let matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    let url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  let loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  let background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  /* eslint-disable-next-line func-style */
  let onProgress = ( image, elem, message ) => {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( () => {
      this.progress( image, elem, message );
    } );
  };

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  } );
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount === this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( `progress: ${message}`, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  let eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    let jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  let isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  // add crossOrigin attribute. #204
  if ( this.img.crossOrigin ) {
    this.proxyImage.crossOrigin = this.img.crossOrigin;
  }
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.currentSrc || this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  let { parentNode } = this.img;
  // emit progress with parent <picture> or self <img>
  let elem = parentNode.nodeName === 'PICTURE' ? parentNode : this.img;
  this.emitEvent( 'progress', [ this, elem, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  let method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  let isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) return;

  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, onAlways ) {
    let instance = new ImagesLoaded( this, options, onAlways );
    return instance.jqDeferred.promise( $( this ) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

} );

},{"ev-emitter":"node_modules/ev-emitter/ev-emitter.js"}],"js/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preloadImages = exports.lerp = exports.getMousePos = exports.getGrid = void 0;
var _imagesloaded = _interopRequireDefault(require("imagesloaded"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
var preloadImages = exports.preloadImages = function preloadImages() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'img';
  return new Promise(function (resolve) {
    // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
    (0, _imagesloaded.default)(document.querySelectorAll(selector), {
      background: true
    }, resolve);
  });
};

// Helper function that lets you dynamically figure out a grid's rows/columns as well as further refine those with "odd" or "even" ones
// https://greensock.com/forums/topic/34808-how-can-i-animate-the-odd-and-even-columns-rows-of-a-grid-with-gsapto/?do=findComment&comment=174346
var getGrid = exports.getGrid = function getGrid(selector) {
  var elements = gsap.utils.toArray(selector),
    bounds,
    getSubset = function getSubset(axis, dimension, alternating, merge) {
      var a = [],
        subsets = {},
        onlyEven = alternating === "even",
        p;
      bounds.forEach(function (b, i) {
        var position = Math.round(b[axis] + b[dimension] / 2),
          subset = subsets[position];
        subset || (subsets[position] = subset = []);
        subset.push(elements[i]);
      });
      for (p in subsets) {
        a.push(subsets[p]);
      }
      if (onlyEven || alternating === "odd") {
        a = a.filter(function (el, i) {
          return !(i % 2) === onlyEven;
        });
      }
      if (merge) {
        var a2 = [];
        a.forEach(function (subset) {
          return a2.push.apply(a2, _toConsumableArray(subset));
        });
        return a2;
      }
      return a;
    };
  elements.refresh = function () {
    return bounds = elements.map(function (el) {
      return el.getBoundingClientRect();
    });
  };
  elements.columns = function (alternating, merge) {
    return getSubset("left", "width", alternating, merge);
  };
  elements.rows = function (alternating, merge) {
    return getSubset("top", "height", alternating, merge);
  };
  elements.refresh();
  return elements;
};
// Helper function scroll y controll
var container = document.querySelector('html');

// Detectar scroll em desktop
container.addEventListener('scroll', function () {
  container.style.overflowY = 'auto';
});

// Detectar touchmove em dispositivos móveis
container.addEventListener('touchmove', function () {
  container.style.overflowY = 'auto';
});

// Adicionar um delay para garantir que o evento de scroll seja detectado corretamente
container.addEventListener('scroll', function () {
  setTimeout(function () {
    container.style.overflowY = 'auto';
  }, 100);
});

// Linear interpolation
var lerp = exports.lerp = function lerp(a, b, n) {
  return (1 - n) * a + n * b;
};

// Gets the mouse position
var getMousePos = exports.getMousePos = function getMousePos(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
};
},{"imagesloaded":"node_modules/imagesloaded/imagesloaded.js"}],"js/onScroll-gallery/index.js":[function(require,module,exports) {
"use strict";

var _lenis = _interopRequireDefault(require("lenis"));
var _utils = require("../utils.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } // Import the necessary function for preloading images
// Define a variable that will store the Lenis smooth scrolling object
var lenis;

// Element with class .columns
var grid = document.querySelector('.columns');
// All the columns class .column
var columns = _toConsumableArray(grid.querySelectorAll('.column'));
// Map each column to its array of items and keep a reference of the image, its wrapper and the column
var items = columns.map(function (column, pos) {
  return _toConsumableArray(column.querySelectorAll('.column__item')).map(function (item) {
    return {
      element: item,
      column: pos,
      wrapper: item.querySelector('.column__item-imgwrap'),
      image: item.querySelector('.column__item-img')
    };
  });
});
// All itemms
var mergedItems = items.flat();

// Function to initialize Lenis for smooth scrolling
var initSmoothScrolling = function initSmoothScrolling() {
  // Instantiate the Lenis object with specified properties
  lenis = new _lenis.default({
    lerp: 0.15,
    // Lower values create a smoother scroll effect
    smoothWheel: true // Enables smooth scrolling for mouse wheel events
  });

  // Update ScrollTrigger each time the user scrolls
  lenis.on('scroll', function () {
    return ScrollTrigger.update();
  });

  // Define a function to run at each animation frame
  var scrollFn = function scrollFn(time) {
    lenis.raf(time); // Run Lenis' requestAnimationFrame method
    requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
  };
  // Start the animation frame loop
  requestAnimationFrame(scrollFn);
};
var scroll = function scroll() {
  // Columns animations
  columns.forEach(function (column, pos) {
    gsap.to(column, {
      ease: 'none',
      yPercent: -1 * pos * 10,
      scrollTrigger: {
        trigger: grid,
        start: 'clamp(top bottom)',
        end: 'clamp(bottom top)',
        scrub: true
      }
    });
  });

  // Items animations
  mergedItems.forEach(function (item) {
    gsap.fromTo(item.image, {
      y: 30
    }, {
      ease: 'none',
      scrollTrigger: {
        trigger: item.element,
        start: 'clamp(top bottom)',
        end: 'clamp(bottom top)',
        scrub: true
      },
      y: -30
    });
  });
};

// Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
(0, _utils.preloadImages)('.column__item-img').then(function () {
  initSmoothScrolling();
  scroll();
  document.body.classList.remove('loading');
});
},{"lenis":"node_modules/lenis/dist/lenis.mjs","../utils.js":"js/utils.js"}],"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56924" + '/');
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
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/onScroll-gallery/index.js"], null)
//# sourceMappingURL=/onScroll-gallery.a658f65a.js.map