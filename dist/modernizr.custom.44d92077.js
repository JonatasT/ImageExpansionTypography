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
})({"js/presenca/modernizr.custom.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-css_calc-css_vhunit-load
 */
;
window.Modernizr = function (a, b, c) {
  function z(a) {
    j.cssText = a;
  }
  function A(a, b) {
    return z(m.join(a + ";") + (b || ""));
  }
  function B(a, b) {
    return _typeof(a) === b;
  }
  function C(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function D(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function E(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function F(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + o.join(d + " ") + d).split(" ");
    return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c));
  }
  var d = "2.8.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k,
    l = {}.toString,
    m = " -webkit- -moz- -o- -ms- ".split(" "),
    n = "Webkit Moz O ms",
    o = n.split(" "),
    p = n.toLowerCase().split(" "),
    q = {},
    r = {},
    s = {},
    t = [],
    u = t.slice,
    v,
    w = function w(a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
      return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i;
    },
    x = {}.hasOwnProperty,
    y;
  !B(x, "undefined") && !B(x.call, "undefined") ? y = function y(a, b) {
    return x.call(a, b);
  } : y = function y(a, b) {
    return b in a && B(a.constructor.prototype[b], "undefined");
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
    var c = this;
    if (typeof c != "function") throw new TypeError();
    var d = u.call(arguments, 1),
      e = function e() {
        if (this instanceof e) {
          var a = function a() {};
          a.prototype = c.prototype;
          var f = new a(),
            g = c.apply(f, d.concat(u.call(arguments)));
          return Object(g) === g ? g : f;
        }
        return c.apply(b, d.concat(u.call(arguments)));
      };
    return e;
  }), q.cssanimations = function () {
    return F("animationName");
  };
  for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
  return e.addTest = function (a, b) {
    if (_typeof(a) == "object") for (var d in a) y(a, d) && e.addTest(d, a[d]);else {
      a = a.toLowerCase();
      if (e[a] !== c) return e;
      b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b;
    }
    return e;
  }, z(""), i = k = null, function (a, b) {
    function l(a, b) {
      var c = a.createElement("p"),
        d = a.getElementsByTagName("head")[0] || a.documentElement;
      return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
    }
    function m() {
      var a = s.elements;
      return typeof a == "string" ? a.split(" ") : a;
    }
    function n(a) {
      var b = j[a[h]];
      return b || (b = {}, i++, a[h] = i, j[i] = b), b;
    }
    function o(a, c, d) {
      c || (c = b);
      if (k) return c.createElement(a);
      d || (d = n(c));
      var g;
      return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g;
    }
    function p(a, c) {
      a || (a = b);
      if (k) return a.createDocumentFragment();
      c = c || n(a);
      var d = c.frag.cloneNode(),
        e = 0,
        f = m(),
        g = f.length;
      for (; e < g; e++) d.createElement(f[e]);
      return d;
    }
    function q(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return s.shivMethods ? o(c, a, b) : b.createElem(c);
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
      }) + ");return n}")(s, b.frag);
    }
    function r(a) {
      a || (a = b);
      var c = n(a);
      return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a;
    }
    var c = "3.7.0",
      d = a.html5 || {},
      e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      g,
      h = "_html5shiv",
      i = 0,
      j = {},
      k;
    (function () {
      try {
        var a = b.createElement("a");
        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () {
          b.createElement("a");
          var a = b.createDocumentFragment();
          return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
        }();
      } catch (c) {
        g = !0, k = !0;
      }
    })();
    var s = {
      elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
      version: c,
      shivCSS: d.shivCSS !== !1,
      supportsUnknownElements: k,
      shivMethods: d.shivMethods !== !1,
      type: "default",
      shivDocument: r,
      createElement: o,
      createDocumentFragment: p
    };
    a.html5 = s, r(b);
  }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
    return D([a]);
  }, e.testAllProps = F, e.testStyles = w, e.prefixed = function (a, b, c) {
    return b ? F(a, b, c) : F(a, "pfx");
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e;
}(this, this.document), function (a, b, c) {
  function d(a) {
    return "[object Function]" == o.call(a);
  }
  function e(a) {
    return "string" == typeof a;
  }
  function f() {}
  function g(a) {
    return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
  }
  function h() {
    var a = p.shift();
    q = 1, a ? a.t ? m(function () {
      ("c" == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
    }, 0) : (a(), h()) : q = 0;
  }
  function i(a, c, d, e, f, i, j) {
    function k(b) {
      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
        "img" != a && m(function () {
          t.removeChild(l);
        }, 50);
        for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
      }
    }
    var j = j || _B.errorTimeout,
      l = b.createElement(a),
      o = 0,
      r = 0,
      u = {
        t: d,
        s: c,
        e: f,
        a: i,
        x: j
      };
    1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
      k.call(this, r);
    }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
  }
  function j(a, b, c, d, f) {
    return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
  }
  function k() {
    var a = _B;
    return a.loader = {
      load: j,
      i: 0
    }, a;
  }
  var l = b.documentElement,
    m = a.setTimeout,
    n = b.getElementsByTagName("script")[0],
    o = {}.toString,
    p = [],
    q = 0,
    r = ("MozAppearance" in l.style),
    s = r && !!b.createRange().compareNode,
    t = s ? l : n.parentNode,
    l = a.opera && "[object Opera]" == o.call(a.opera),
    l = !!b.attachEvent && !l,
    u = r ? "object" : l ? "script" : "img",
    v = l ? "script" : u,
    w = Array.isArray || function (a) {
      return "[object Array]" == o.call(a);
    },
    x = [],
    y = {},
    z = {
      timeout: function timeout(a, b) {
        return b.length && (a.timeout = b[0]), a;
      }
    },
    _A,
    _B;
  _B = function B(a) {
    function b(a) {
      var a = a.split("!"),
        b = x.length,
        c = a.pop(),
        d = a.length,
        c = {
          url: c,
          origUrl: c,
          prefixes: a
        },
        e,
        f,
        g;
      for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
      for (f = 0; f < b; f++) c = x[f](c);
      return c;
    }
    function g(a, e, f, g, h) {
      var i = b(a),
        j = i.autoCallback;
      i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
      })));
    }
    function h(a, b) {
      function c(a, c) {
        if (a) {
          if (e(a)) c || (j = function j() {
            var a = [].slice.call(arguments);
            k.apply(this, a), l();
          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
            var b = 0,
              c;
            for (c in a) a.hasOwnProperty(c) && b++;
            return b;
          }(), a) a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
            var a = [].slice.call(arguments);
            k.apply(this, a), l();
          } : j[n] = function (a) {
            return function () {
              var b = [].slice.call(arguments);
              a && a.apply(this, b), l();
            };
          }(k[n])), g(a[n], j, b, n, h));
        } else !c && l();
      }
      var h = !!a.test,
        i = a.load || a.both,
        j = a.callback || f,
        k = j,
        l = a.complete || f,
        m,
        n;
      c(h ? a.yep : a.nope, !!i), i && c(i);
    }
    var i,
      j,
      l = this.yepnope.loader;
    if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);else Object(a) === a && h(a, l);
  }, _B.addPrefix = function (a, b) {
    z[a] = b;
  }, _B.addFilter = function (a) {
    x.push(a);
  }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", _A = function A() {
    b.removeEventListener("DOMContentLoaded", _A, 0), b.readyState = "complete";
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
    var k = b.createElement("script"),
      l,
      o,
      e = e || _B.errorTimeout;
    k.src = a;
    for (o in d) k.setAttribute(o, d[o]);
    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
    }, m(function () {
      l || (l = 1, c(1));
    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
    var e = b.createElement("link"),
      j,
      c = i ? h : c || f;
    e.href = a, e.rel = "stylesheet", e.type = "text/css";
    for (j in d) e.setAttribute(j, d[j]);
    g || (n.parentNode.insertBefore(e, n), m(c, 0));
  };
}(this, document), Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0));
}, Modernizr.addTest("csscalc", function () {
  var a = "width:",
    b = "calc(10px);",
    c = document.createElement("div");
  return c.style.cssText = a + Modernizr._prefixes.join(b + a), !!c.style.length;
}), Modernizr.addTest("cssvhunit", function () {
  var a;
  return Modernizr.testStyles("#modernizr { height: 50vh; }", function (b, c) {
    var d = parseInt(window.innerHeight / 2, 10),
      e = parseInt((window.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).height, 10);
    a = e == d;
  }), a;
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55265" + '/');
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
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/presenca/modernizr.custom.js"], null)
//# sourceMappingURL=/modernizr.custom.44d92077.js.map