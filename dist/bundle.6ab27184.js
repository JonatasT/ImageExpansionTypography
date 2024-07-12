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
})({"js/flow-map/bundle.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var ogl = function (t) {
  "use strict";

  function e(t) {
    var e = t[0],
      i = t[1],
      r = t[2];
    return Math.sqrt(e * e + i * i + r * r);
  }
  function i(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
  }
  function r(t, e, i) {
    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t;
  }
  function s(t, e, i) {
    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t;
  }
  function n(t, e, i) {
    return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t;
  }
  function a(t, e) {
    var i = e[0],
      r = e[1],
      s = e[2],
      n = i * i + r * r + s * s;
    return n > 0 && (n = 1 / Math.sqrt(n)), t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t;
  }
  function h(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
  }
  var o = function () {
    var t = [0, 0, 0],
      e = [0, 0, 0];
    return function (r, s) {
      i(t, r), i(e, s), a(t, t), a(e, e);
      var n = h(t, e);
      return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
    };
  }();
  var l = /*#__PURE__*/function (_Array) {
    function l() {
      var _this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
      _classCallCheck(this, l);
      return _possibleConstructorReturn(_this, (_this = _callSuper(this, l, [t, e, i]), _assertThisInitialized(_this)));
    }
    _inherits(l, _Array);
    return _createClass(l, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(t) {
        this[0] = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(t) {
        this[1] = t;
      }
    }, {
      key: "z",
      get: function get() {
        return this[2];
      },
      set: function set(t) {
        this[2] = t;
      }
    }, {
      key: "set",
      value: function set(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
        return t.length ? this.copy(t) : (function (t, e, i, r) {
          t[0] = e, t[1] = i, t[2] = r;
        }(this, t, e, i), this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return i(this, t), this;
      }
    }, {
      key: "add",
      value: function add(t, e) {
        return e ? r(this, t, e) : r(this, this, t), this;
      }
    }, {
      key: "sub",
      value: function sub(t, e) {
        return e ? s(this, t, e) : s(this, this, t), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        var e, i, r;
        return t.length ? (i = this, r = t, (e = this)[0] = i[0] * r[0], e[1] = i[1] * r[1], e[2] = i[2] * r[2]) : n(this, this, t), this;
      }
    }, {
      key: "divide",
      value: function divide(t) {
        var e, i, r;
        return t.length ? (i = this, r = t, (e = this)[0] = i[0] / r[0], e[1] = i[1] / r[1], e[2] = i[2] / r[2]) : n(this, this, 1 / t), this;
      }
    }, {
      key: "inverse",
      value: function inverse() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        var e, i;
        return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], e[2] = 1 / i[2], this;
      }
    }, {
      key: "len",
      value: function len() {
        return e(this);
      }
    }, {
      key: "distance",
      value: function distance(t) {
        return t ? function (t, e) {
          var i = e[0] - t[0],
            r = e[1] - t[1],
            s = e[2] - t[2];
          return Math.sqrt(i * i + r * r + s * s);
        }(this, t) : e(this);
      }
    }, {
      key: "squaredLen",
      value: function squaredLen() {
        return this.squaredDistance();
      }
    }, {
      key: "squaredDistance",
      value: function squaredDistance(t) {
        return t ? function (t, e) {
          var i = e[0] - t[0],
            r = e[1] - t[1],
            s = e[2] - t[2];
          return i * i + r * r + s * s;
        }(this, t) : function (t) {
          var e = t[0],
            i = t[1],
            r = t[2];
          return e * e + i * i + r * r;
        }(this);
      }
    }, {
      key: "negate",
      value: function negate() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        var e, i;
        return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], this;
      }
    }, {
      key: "cross",
      value: function cross(t, e) {
        return function (t, e, i) {
          var r = e[0],
            s = e[1],
            n = e[2],
            a = i[0],
            h = i[1],
            o = i[2];
          t[0] = s * o - n * h, t[1] = n * a - r * o, t[2] = r * h - s * a;
        }(this, t, e), this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return n(this, this, t), this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return a(this, this), this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return h(this, t);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return i = t, (e = this)[0] === i[0] && e[1] === i[1] && e[2] === i[2];
        var e, i;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return function (t, e, i) {
          var r = e[0],
            s = e[1],
            n = e[2],
            a = i[3] * r + i[7] * s + i[11] * n + i[15];
          a = a || 1, t[0] = (i[0] * r + i[4] * s + i[8] * n + i[12]) / a, t[1] = (i[1] * r + i[5] * s + i[9] * n + i[13]) / a, t[2] = (i[2] * r + i[6] * s + i[10] * n + i[14]) / a;
        }(this, this, t), this;
      }
    }, {
      key: "applyQuaternion",
      value: function applyQuaternion(t) {
        return function (t, e, i) {
          var r = e[0],
            s = e[1],
            n = e[2],
            a = i[0],
            h = i[1],
            o = i[2],
            l = h * n - o * s,
            u = o * r - a * n,
            c = a * s - h * r,
            d = h * c - o * u,
            g = o * l - a * c,
            p = a * u - h * l,
            m = 2 * i[3];
          l *= m, u *= m, c *= m, d *= 2, g *= 2, p *= 2, t[0] = r + l + d, t[1] = s + u + g, t[2] = n + c + p;
        }(this, this, t), this;
      }
    }, {
      key: "angle",
      value: function angle(t) {
        return o(this, t);
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return function (t, e, i, r) {
          var s = e[0],
            n = e[1],
            a = e[2];
          t[0] = s + r * (i[0] - s), t[1] = n + r * (i[1] - n), t[2] = a + r * (i[2] - a);
        }(this, this, t, e), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new l(this[0], this[1], this[2]);
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t;
      }
    }, {
      key: "transformDirection",
      value: function transformDirection(t) {
        var e = this[0],
          i = this[1],
          r = this[2];
        return this[0] = t[0] * e + t[4] * i + t[8] * r, this[1] = t[1] * e + t[5] * i + t[9] * r, this[2] = t[2] * e + t[6] * i + t[10] * r, this.normalize();
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  var u = new l();
  var c = 0,
    d = 0;
  var g = /*#__PURE__*/function () {
    function g(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, g);
      this.gl = t, this.attributes = e, this.id = c++, this.VAOs = {}, this.drawRange = {
        start: 0,
        count: 0
      }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
      for (var _t in e) this.addAttribute(_t, e[_t]);
    }
    return _createClass(g, [{
      key: "addAttribute",
      value: function addAttribute(t, e) {
        if (this.attributes[t] = e, e.id = d++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalize = e.normalize || !1, e.buffer = this.gl.createBuffer(), e.count = e.data.length / e.size, e.divisor = e.instanced || 0, e.needsUpdate = !1, this.updateAttribute(e), e.divisor) {
          if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
          this.instancedCount = e.count * e.divisor;
        } else "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count));
      }
    }, {
      key: "updateAttribute",
      value: function updateAttribute(t) {
        this.glState.boundBuffer !== t.id && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.id), this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW), t.needsUpdate = !1;
      }
    }, {
      key: "setIndex",
      value: function setIndex(t) {
        this.addAttribute("index", t);
      }
    }, {
      key: "setDrawRange",
      value: function setDrawRange(t, e) {
        this.drawRange.start = t, this.drawRange.count = e;
      }
    }, {
      key: "setInstancedCount",
      value: function setInstancedCount(t) {
        this.instancedCount = t;
      }
    }, {
      key: "createVAO",
      value: function createVAO(t) {
        this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t);
      }
    }, {
      key: "bindAttributes",
      value: function bindAttributes(t) {
        var _this2 = this;
        t.attributeLocations.forEach(function (t, e) {
          if (!_this2.attributes[e]) return void console.warn("active attribute ".concat(e, " not being supplied"));
          var i = _this2.attributes[e];
          _this2.gl.bindBuffer(i.target, i.buffer), _this2.glState.boundBuffer = i.id, _this2.gl.vertexAttribPointer(t, i.size, i.type, i.normalize, 0, 0), _this2.gl.enableVertexAttribArray(t), _this2.gl.renderer.vertexAttribDivisor(t, i.divisor);
        }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
      }
    }, {
      key: "draw",
      value: function draw(_ref) {
        var _this3 = this;
        var t = _ref.program,
          _ref$mode = _ref.mode,
          e = _ref$mode === void 0 ? this.gl.TRIANGLES : _ref$mode;
        this.gl.renderer.currentGeometry !== "".concat(this.id, "_").concat(t.attributeOrder) && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = "".concat(this.id, "_").concat(t.attributeOrder)), t.attributeLocations.forEach(function (t, e) {
          var i = _this3.attributes[e];
          i.needsUpdate && _this3.updateAttribute(i);
        }), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.drawRange.start, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.drawRange.start) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count);
      }
    }, {
      key: "computeBoundingBox",
      value: function computeBoundingBox(t) {
        !t && this.attributes.position && (t = this.attributes.position.data), t || console.warn("No position buffer found to compute bounds"), this.bounds || (this.bounds = {
          min: new l(),
          max: new l(),
          center: new l(),
          scale: new l(),
          radius: 1 / 0
        });
        var e = this.bounds.min,
          i = this.bounds.max,
          r = this.bounds.center,
          s = this.bounds.scale;
        e.set(1 / 0), i.set(-1 / 0);
        for (var _r = 0, _s = t.length; _r < _s; _r += 3) {
          var _s2 = t[_r],
            _n = t[_r + 1],
            _a = t[_r + 2];
          e.x = Math.min(_s2, e.x), e.y = Math.min(_n, e.y), e.z = Math.min(_a, e.z), i.x = Math.max(_s2, i.x), i.y = Math.max(_n, i.y), i.z = Math.max(_a, i.z);
        }
        s.sub(i, e), r.add(e, i).divide(2);
      }
    }, {
      key: "computeBoundingSphere",
      value: function computeBoundingSphere(t) {
        !t && this.attributes.position && (t = this.attributes.position.data), t || console.warn("No position buffer found to compute bounds"), this.bounds || this.computeBoundingBox(t);
        var e = 0;
        for (var _i = 0, _r2 = t.length; _i < _r2; _i += 3) u.fromArray(t, _i), e = Math.max(e, this.bounds.center.squaredDistance(u));
        this.bounds.radius = Math.sqrt(e);
      }
    }, {
      key: "remove",
      value: function remove() {
        this.vao && this.gl.renderer.deleteVertexArray(this.vao);
        for (var _t2 in this.attributes) this.gl.deleteBuffer(this.attributes[_t2].buffer), delete this.attributes[_t2];
      }
    }]);
  }();
  var p = 0;
  var m = {};
  var f = /*#__PURE__*/function () {
    function f(t) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        e = _ref2.vertex,
        i = _ref2.fragment,
        _ref2$uniforms = _ref2.uniforms,
        r = _ref2$uniforms === void 0 ? {} : _ref2$uniforms,
        _ref2$transparent = _ref2.transparent,
        s = _ref2$transparent === void 0 ? !1 : _ref2$transparent,
        _ref2$cullFace = _ref2.cullFace,
        n = _ref2$cullFace === void 0 ? t.BACK : _ref2$cullFace,
        _ref2$frontFace = _ref2.frontFace,
        a = _ref2$frontFace === void 0 ? t.CCW : _ref2$frontFace,
        _ref2$depthTest = _ref2.depthTest,
        h = _ref2$depthTest === void 0 ? !0 : _ref2$depthTest,
        _ref2$depthWrite = _ref2.depthWrite,
        o = _ref2$depthWrite === void 0 ? !0 : _ref2$depthWrite,
        _ref2$depthFunc = _ref2.depthFunc,
        l = _ref2$depthFunc === void 0 ? t.LESS : _ref2$depthFunc;
      _classCallCheck(this, f);
      this.gl = t, this.uniforms = r, this.id = p++, e || console.warn("vertex shader not supplied"), i || console.warn("fragment shader not supplied"), this.transparent = s, this.cullFace = n, this.frontFace = a, this.depthTest = h, this.depthWrite = o, this.depthFunc = l, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
      var u = t.createShader(t.VERTEX_SHADER);
      t.shaderSource(u, e), t.compileShader(u), "" !== t.getShaderInfoLog(u) && console.warn("".concat(t.getShaderInfoLog(u), "\nVertex Shader\n").concat(w(e)));
      var c = t.createShader(t.FRAGMENT_SHADER);
      if (t.shaderSource(c, i), t.compileShader(c), "" !== t.getShaderInfoLog(c) && console.warn("".concat(t.getShaderInfoLog(c), "\nFragment Shader\n").concat(w(i))), this.program = t.createProgram(), t.attachShader(this.program, u), t.attachShader(this.program, c), t.linkProgram(this.program), !t.getProgramParameter(this.program, t.LINK_STATUS)) return console.warn(t.getProgramInfoLog(this.program));
      t.deleteShader(u), t.deleteShader(c), this.uniformLocations = new Map();
      var d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
      for (var _e = 0; _e < d; _e++) {
        var _i2 = t.getActiveUniform(this.program, _e);
        this.uniformLocations.set(_i2, t.getUniformLocation(this.program, _i2.name));
        var _r3 = _i2.name.match(/(\w+)/g);
        _i2.uniformName = _r3[0], 3 === _r3.length ? (_i2.isStructArray = !0, _i2.structIndex = Number(_r3[1]), _i2.structProperty = _r3[2]) : 2 === _r3.length && isNaN(Number(_r3[1])) && (_i2.isStruct = !0, _i2.structProperty = _r3[1]);
      }
      this.attributeLocations = new Map();
      var g = [],
        m = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
      for (var _e2 = 0; _e2 < m; _e2++) {
        var _i3 = t.getActiveAttrib(this.program, _e2),
          _r4 = t.getAttribLocation(this.program, _i3.name);
        g[_r4] = _i3.name, this.attributeLocations.set(_i3.name, _r4);
      }
      this.attributeOrder = g.join("");
    }
    return _createClass(f, [{
      key: "setBlendFunc",
      value: function setBlendFunc(t, e, i, r) {
        this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha = i, this.blendFunc.dstAlpha = r, t && (this.transparent = !0);
      }
    }, {
      key: "setBlendEquation",
      value: function setBlendEquation(t, e) {
        this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e;
      }
    }, {
      key: "applyState",
      value: function applyState() {
        this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.blendEquation.modeRGB && this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
      }
    }, {
      key: "use",
      value: function use() {
        var _this4 = this;
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$flipFaces = _ref3.flipFaces,
          t = _ref3$flipFaces === void 0 ? !1 : _ref3$flipFaces;
        var e = -1;
        this.gl.renderer.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.currentProgram = this.id), this.uniformLocations.forEach(function (t, i) {
          var r = i.uniformName,
            s = _this4.uniforms[r];
          if (i.isStruct && (s = s[i.structProperty], r += ".".concat(i.structProperty)), i.isStructArray && (s = s[i.structIndex][i.structProperty], r += "[".concat(i.structIndex, "].").concat(i.structProperty)), !s) return M("Active uniform ".concat(r, " has not been supplied"));
          if (s && void 0 === s.value) return M("".concat(r, " uniform is missing a value parameter"));
          if (s.value.texture) return e += 1, s.value.update(e), x(_this4.gl, i.type, t, e);
          if (s.value.length && s.value[0].texture) {
            var _r5 = [];
            return s.value.forEach(function (t) {
              e += 1, t.update(e), _r5.push(e);
            }), x(_this4.gl, i.type, t, _r5);
          }
          x(_this4.gl, i.type, t, s.value);
        }), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
      }
    }, {
      key: "remove",
      value: function remove() {
        this.gl.deleteProgram(this.program);
      }
    }]);
  }();
  function x(t, e, i, r) {
    r = r.length ? function (t) {
      var e = t.length,
        i = t[0].length;
      if (void 0 === i) return t;
      var r = e * i;
      var s = m[r];
      s || (m[r] = s = new Float32Array(r));
      for (var _r6 = 0; _r6 < e; _r6++) s.set(t[_r6], _r6 * i);
      return s;
    }(r) : r;
    var s = t.renderer.state.uniformLocations.get(i);
    if (r.length) {
      if (void 0 === s) t.renderer.state.uniformLocations.set(i, r.slice(0));else {
        if (function (t, e) {
          if (t.length !== e.length) return !1;
          for (var _i4 = 0, _r7 = t.length; _i4 < _r7; _i4++) if (t[_i4] !== e[_i4]) return !1;
          return !0;
        }(s, r)) return;
        s.set(r), t.renderer.state.uniformLocations.set(i, s);
      }
    } else {
      if (s === r) return;
      t.renderer.state.uniformLocations.set(i, r);
    }
    switch (e) {
      case 5126:
        return r.length ? t.uniform1fv(i, r) : t.uniform1f(i, r);
      case 35664:
        return t.uniform2fv(i, r);
      case 35665:
        return t.uniform3fv(i, r);
      case 35666:
        return t.uniform4fv(i, r);
      case 35670:
      case 5124:
      case 35678:
      case 35680:
        return r.length ? t.uniform1iv(i, r) : t.uniform1i(i, r);
      case 35671:
      case 35667:
        return t.uniform2iv(i, r);
      case 35672:
      case 35668:
        return t.uniform3iv(i, r);
      case 35673:
      case 35669:
        return t.uniform4iv(i, r);
      case 35674:
        return t.uniformMatrix2fv(i, !1, r);
      case 35675:
        return t.uniformMatrix3fv(i, !1, r);
      case 35676:
        return t.uniformMatrix4fv(i, !1, r);
    }
  }
  function w(t) {
    var e = t.split("\n");
    for (var _t3 = 0; _t3 < e.length; _t3++) e[_t3] = _t3 + 1 + ": " + e[_t3];
    return e.join("\n");
  }
  var b = 0;
  function M(t) {
    b > 100 || (console.warn(t), ++b > 100 && console.warn("More than 100 program warnings - stopping logs."));
  }
  var v = new l();
  function A(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
  }
  function E(t, e, i, r, s) {
    return t[0] = e, t[1] = i, t[2] = r, t[3] = s, t;
  }
  function y(t, e) {
    var i = e[0],
      r = e[1],
      s = e[2],
      n = e[3],
      a = i * i + r * r + s * s + n * n;
    return a > 0 && (a = 1 / Math.sqrt(a)), t[0] = i * a, t[1] = r * a, t[2] = s * a, t[3] = n * a, t;
  }
  function F(t, e, i) {
    var r = e[0],
      s = e[1],
      n = e[2],
      a = e[3],
      h = i[0],
      o = i[1],
      l = i[2],
      u = i[3];
    return t[0] = r * u + a * h + s * l - n * o, t[1] = s * u + a * o + n * h - r * l, t[2] = n * u + a * l + r * o - s * h, t[3] = a * u - r * h - s * o - n * l, t;
  }
  var T = A,
    _ = E,
    R = function R(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
    },
    S = y;
  var N = /*#__PURE__*/function (_Array2) {
    function N() {
      var _this5;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      _classCallCheck(this, N);
      return _possibleConstructorReturn(_this5, (_this5 = _callSuper(this, N, [t, e, i, r]), _this5.onChange = function () {}, _assertThisInitialized(_this5)));
    }
    _inherits(N, _Array2);
    return _createClass(N, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(t) {
        this[0] = t, this.onChange();
      }
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(t) {
        this[1] = t, this.onChange();
      }
    }, {
      key: "z",
      get: function get() {
        return this[2];
      },
      set: function set(t) {
        this[2] = t, this.onChange();
      }
    }, {
      key: "w",
      get: function get() {
        return this[3];
      },
      set: function set(t) {
        this[3] = t, this.onChange();
      }
    }, {
      key: "identity",
      value: function identity() {
        var t;
        return (t = this)[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, this.onChange(), this;
      }
    }, {
      key: "set",
      value: function set(t, e, i, r) {
        return t.length ? this.copy(t) : (_(this, t, e, i, r), this.onChange(), this);
      }
    }, {
      key: "rotateX",
      value: function rotateX(t) {
        return function (t, e, i) {
          i *= .5;
          var r = e[0],
            s = e[1],
            n = e[2],
            a = e[3],
            h = Math.sin(i),
            o = Math.cos(i);
          t[0] = r * o + a * h, t[1] = s * o + n * h, t[2] = n * o - s * h, t[3] = a * o - r * h;
        }(this, this, t), this.onChange(), this;
      }
    }, {
      key: "rotateY",
      value: function rotateY(t) {
        return function (t, e, i) {
          i *= .5;
          var r = e[0],
            s = e[1],
            n = e[2],
            a = e[3],
            h = Math.sin(i),
            o = Math.cos(i);
          t[0] = r * o - n * h, t[1] = s * o + a * h, t[2] = n * o + r * h, t[3] = a * o - s * h;
        }(this, this, t), this.onChange(), this;
      }
    }, {
      key: "rotateZ",
      value: function rotateZ(t) {
        return function (t, e, i) {
          i *= .5;
          var r = e[0],
            s = e[1],
            n = e[2],
            a = e[3],
            h = Math.sin(i),
            o = Math.cos(i);
          t[0] = r * o + s * h, t[1] = s * o - r * h, t[2] = n * o + a * h, t[3] = a * o - n * h;
        }(this, this, t), this.onChange(), this;
      }
    }, {
      key: "inverse",
      value: function inverse() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        return function (t, e) {
          var i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            a = i * i + r * r + s * s + n * n,
            h = a ? 1 / a : 0;
          t[0] = -i * h, t[1] = -r * h, t[2] = -s * h, t[3] = n * h;
        }(this, t), this.onChange(), this;
      }
    }, {
      key: "conjugate",
      value: function conjugate() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        var e, i;
        return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], e[3] = i[3], this.onChange(), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return T(this, t), this.onChange(), this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        return S(this, t), this.onChange(), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return e ? F(this, t, e) : F(this, this, t), this.onChange(), this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return R(this, t);
      }
    }, {
      key: "fromMatrix3",
      value: function fromMatrix3(t) {
        return function (t, e) {
          var i,
            r = e[0] + e[4] + e[8];
          if (r > 0) i = Math.sqrt(r + 1), t[3] = .5 * i, i = .5 / i, t[0] = (e[5] - e[7]) * i, t[1] = (e[6] - e[2]) * i, t[2] = (e[1] - e[3]) * i;else {
            var _r8 = 0;
            e[4] > e[0] && (_r8 = 1), e[8] > e[3 * _r8 + _r8] && (_r8 = 2);
            var _s3 = (_r8 + 1) % 3,
              _n2 = (_r8 + 2) % 3;
            i = Math.sqrt(e[3 * _r8 + _r8] - e[3 * _s3 + _s3] - e[3 * _n2 + _n2] + 1), t[_r8] = .5 * i, i = .5 / i, t[3] = (e[3 * _s3 + _n2] - e[3 * _n2 + _s3]) * i, t[_s3] = (e[3 * _s3 + _r8] + e[3 * _r8 + _s3]) * i, t[_n2] = (e[3 * _n2 + _r8] + e[3 * _r8 + _n2]) * i;
          }
        }(this, t), this.onChange(), this;
      }
    }, {
      key: "fromEuler",
      value: function fromEuler(t) {
        return function (t, e) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "YXZ";
          var r = Math.sin(.5 * e[0]),
            s = Math.cos(.5 * e[0]),
            n = Math.sin(.5 * e[1]),
            a = Math.cos(.5 * e[1]),
            h = Math.sin(.5 * e[2]),
            o = Math.cos(.5 * e[2]);
          "XYZ" === i ? (t[0] = r * a * o + s * n * h, t[1] = s * n * o - r * a * h, t[2] = s * a * h + r * n * o, t[3] = s * a * o - r * n * h) : "YXZ" === i ? (t[0] = r * a * o + s * n * h, t[1] = s * n * o - r * a * h, t[2] = s * a * h - r * n * o, t[3] = s * a * o + r * n * h) : "ZXY" === i ? (t[0] = r * a * o - s * n * h, t[1] = s * n * o + r * a * h, t[2] = s * a * h + r * n * o, t[3] = s * a * o - r * n * h) : "ZYX" === i ? (t[0] = r * a * o - s * n * h, t[1] = s * n * o + r * a * h, t[2] = s * a * h - r * n * o, t[3] = s * a * o + r * n * h) : "YZX" === i ? (t[0] = r * a * o + s * n * h, t[1] = s * n * o + r * a * h, t[2] = s * a * h - r * n * o, t[3] = s * a * o - r * n * h) : "XZY" === i && (t[0] = r * a * o - s * n * h, t[1] = s * n * o - r * a * h, t[2] = s * a * h + r * n * o, t[3] = s * a * o + r * n * h);
        }(this, t, t.order), this;
      }
    }, {
      key: "fromAxisAngle",
      value: function fromAxisAngle(t, e) {
        return function (t, e, i) {
          i *= .5;
          var r = Math.sin(i);
          t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(i);
        }(this, t, e), this;
      }
    }, {
      key: "slerp",
      value: function slerp(t, e) {
        return function (t, e, i, r) {
          var s,
            n,
            a,
            h,
            o,
            l = e[0],
            u = e[1],
            c = e[2],
            d = e[3],
            g = i[0],
            p = i[1],
            m = i[2],
            f = i[3];
          (n = l * g + u * p + c * m + d * f) < 0 && (n = -n, g = -g, p = -p, m = -m, f = -f), 1 - n > 1e-6 ? (s = Math.acos(n), a = Math.sin(s), h = Math.sin((1 - r) * s) / a, o = Math.sin(r * s) / a) : (h = 1 - r, o = r), t[0] = h * l + o * g, t[1] = h * u + o * p, t[2] = h * c + o * m, t[3] = h * d + o * f;
        }(this, this, t, e), this;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t;
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  function L(t, e, i) {
    var r = e[0],
      s = e[1],
      n = e[2],
      a = e[3],
      h = e[4],
      o = e[5],
      l = e[6],
      u = e[7],
      c = e[8],
      d = e[9],
      g = e[10],
      p = e[11],
      m = e[12],
      f = e[13],
      x = e[14],
      w = e[15],
      b = i[0],
      M = i[1],
      v = i[2],
      A = i[3];
    return t[0] = b * r + M * h + v * c + A * m, t[1] = b * s + M * o + v * d + A * f, t[2] = b * n + M * l + v * g + A * x, t[3] = b * a + M * u + v * p + A * w, b = i[4], M = i[5], v = i[6], A = i[7], t[4] = b * r + M * h + v * c + A * m, t[5] = b * s + M * o + v * d + A * f, t[6] = b * n + M * l + v * g + A * x, t[7] = b * a + M * u + v * p + A * w, b = i[8], M = i[9], v = i[10], A = i[11], t[8] = b * r + M * h + v * c + A * m, t[9] = b * s + M * o + v * d + A * f, t[10] = b * n + M * l + v * g + A * x, t[11] = b * a + M * u + v * p + A * w, b = i[12], M = i[13], v = i[14], A = i[15], t[12] = b * r + M * h + v * c + A * m, t[13] = b * s + M * o + v * d + A * f, t[14] = b * n + M * l + v * g + A * x, t[15] = b * a + M * u + v * p + A * w, t;
  }
  var P = /*#__PURE__*/function (_Array3) {
    function P() {
      var _this6;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var l = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var u = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var c = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var d = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var g = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var p = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      _classCallCheck(this, P);
      return _possibleConstructorReturn(_this6, (_this6 = _callSuper(this, P, [t, e, i, r, s, n, a, h, o, l, u, c, d, g, p, m]), _assertThisInitialized(_this6)));
    }
    _inherits(P, _Array3);
    return _createClass(P, [{
      key: "x",
      get: function get() {
        return this[12];
      },
      set: function set(t) {
        this[12] = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this[13];
      },
      set: function set(t) {
        this[13] = t;
      }
    }, {
      key: "z",
      get: function get() {
        return this[14];
      },
      set: function set(t) {
        this[14] = t;
      }
    }, {
      key: "w",
      get: function get() {
        return this[15];
      },
      set: function set(t) {
        this[15] = t;
      }
    }, {
      key: "set",
      value: function set(t, e, i, r, s, n, a, h, o, l, u, c, d, g, p, m) {
        return t.length ? this.copy(t) : (function (t, e, i, r, s, n, a, h, o, l, u, c, d, g, p, m, f) {
          t[0] = e, t[1] = i, t[2] = r, t[3] = s, t[4] = n, t[5] = a, t[6] = h, t[7] = o, t[8] = l, t[9] = u, t[10] = c, t[11] = d, t[12] = g, t[13] = p, t[14] = m, t[15] = f;
        }(this, t, e, i, r, s, n, a, h, o, l, u, c, d, g, p, m), this);
      }
    }, {
      key: "translate",
      value: function translate(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        return function (t, e, i) {
          var r,
            s,
            n,
            a,
            h,
            o,
            l,
            u,
            c,
            d,
            g,
            p,
            m = i[0],
            f = i[1],
            x = i[2];
          e === t ? (t[12] = e[0] * m + e[4] * f + e[8] * x + e[12], t[13] = e[1] * m + e[5] * f + e[9] * x + e[13], t[14] = e[2] * m + e[6] * f + e[10] * x + e[14], t[15] = e[3] * m + e[7] * f + e[11] * x + e[15]) : (r = e[0], s = e[1], n = e[2], a = e[3], h = e[4], o = e[5], l = e[6], u = e[7], c = e[8], d = e[9], g = e[10], p = e[11], t[0] = r, t[1] = s, t[2] = n, t[3] = a, t[4] = h, t[5] = o, t[6] = l, t[7] = u, t[8] = c, t[9] = d, t[10] = g, t[11] = p, t[12] = r * m + h * f + c * x + e[12], t[13] = s * m + o * f + d * x + e[13], t[14] = n * m + l * f + g * x + e[14], t[15] = a * m + u * f + p * x + e[15]);
        }(this, e, t), this;
      }
    }, {
      key: "rotateX",
      value: function rotateX(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        return function (t, e, i) {
          var r = Math.sin(i),
            s = Math.cos(i),
            n = e[4],
            a = e[5],
            h = e[6],
            o = e[7],
            l = e[8],
            u = e[9],
            c = e[10],
            d = e[11];
          e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = n * s + l * r, t[5] = a * s + u * r, t[6] = h * s + c * r, t[7] = o * s + d * r, t[8] = l * s - n * r, t[9] = u * s - a * r, t[10] = c * s - h * r, t[11] = d * s - o * r;
        }(this, e, t), this;
      }
    }, {
      key: "rotateY",
      value: function rotateY(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        return function (t, e, i) {
          var r = Math.sin(i),
            s = Math.cos(i),
            n = e[0],
            a = e[1],
            h = e[2],
            o = e[3],
            l = e[8],
            u = e[9],
            c = e[10],
            d = e[11];
          e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = n * s - l * r, t[1] = a * s - u * r, t[2] = h * s - c * r, t[3] = o * s - d * r, t[8] = n * r + l * s, t[9] = a * r + u * s, t[10] = h * r + c * s, t[11] = o * r + d * s;
        }(this, e, t), this;
      }
    }, {
      key: "rotateZ",
      value: function rotateZ(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        return function (t, e, i) {
          var r = Math.sin(i),
            s = Math.cos(i),
            n = e[0],
            a = e[1],
            h = e[2],
            o = e[3],
            l = e[4],
            u = e[5],
            c = e[6],
            d = e[7];
          e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = n * s + l * r, t[1] = a * s + u * r, t[2] = h * s + c * r, t[3] = o * s + d * r, t[4] = l * s - n * r, t[5] = u * s - a * r, t[6] = c * s - h * r, t[7] = d * s - o * r;
        }(this, e, t), this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        return function (t, e, i) {
          var r = i[0],
            s = i[1],
            n = i[2];
          t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * s, t[5] = e[5] * s, t[6] = e[6] * s, t[7] = e[7] * s, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15];
        }(this, e, "number" == typeof t ? [t, t, t] : t), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return e ? L(this, t, e) : L(this, this, t), this;
      }
    }, {
      key: "identity",
      value: function identity() {
        var t;
        return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e, i;
        return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this;
      }
    }, {
      key: "fromPerspective",
      value: function fromPerspective() {
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          t = _ref4.fov,
          e = _ref4.aspect,
          i = _ref4.near,
          r = _ref4.far;
        return function (t, e, i, r, s) {
          var n = 1 / Math.tan(e / 2),
            a = 1 / (r - s);
          t[0] = n / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (s + r) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * s * r * a, t[15] = 0;
        }(this, t, e, i, r), this;
      }
    }, {
      key: "fromOrthogonal",
      value: function fromOrthogonal(_ref5) {
        var t = _ref5.left,
          e = _ref5.right,
          i = _ref5.bottom,
          r = _ref5.top,
          s = _ref5.near,
          n = _ref5.far;
        return function (t, e, i, r, s, n, a) {
          var h = 1 / (e - i),
            o = 1 / (r - s),
            l = 1 / (n - a);
          t[0] = -2 * h, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + i) * h, t[13] = (s + r) * o, t[14] = (a + n) * l, t[15] = 1;
        }(this, t, e, i, r, s, n), this;
      }
    }, {
      key: "fromQuaternion",
      value: function fromQuaternion(t) {
        return function (t, e) {
          var i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            a = i + i,
            h = r + r,
            o = s + s,
            l = i * a,
            u = r * a,
            c = r * h,
            d = s * a,
            g = s * h,
            p = s * o,
            m = n * a,
            f = n * h,
            x = n * o;
          t[0] = 1 - c - p, t[1] = u + x, t[2] = d - f, t[3] = 0, t[4] = u - x, t[5] = 1 - l - p, t[6] = g + m, t[7] = 0, t[8] = d + f, t[9] = g - m, t[10] = 1 - l - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1;
        }(this, t), this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(t) {
        return this.x = t[0], this.y = t[1], this.z = t[2], this;
      }
    }, {
      key: "inverse",
      value: function inverse() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        return function (t, e) {
          var i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            a = e[4],
            h = e[5],
            o = e[6],
            l = e[7],
            u = e[8],
            c = e[9],
            d = e[10],
            g = e[11],
            p = e[12],
            m = e[13],
            f = e[14],
            x = e[15],
            w = i * h - r * a,
            b = i * o - s * a,
            M = i * l - n * a,
            v = r * o - s * h,
            A = r * l - n * h,
            E = s * l - n * o,
            y = u * m - c * p,
            F = u * f - d * p,
            T = u * x - g * p,
            _ = c * f - d * m,
            R = c * x - g * m,
            S = d * x - g * f,
            N = w * S - b * R + M * _ + v * T - A * F + E * y;
          N && (N = 1 / N, t[0] = (h * S - o * R + l * _) * N, t[1] = (s * R - r * S - n * _) * N, t[2] = (m * E - f * A + x * v) * N, t[3] = (d * A - c * E - g * v) * N, t[4] = (o * T - a * S - l * F) * N, t[5] = (i * S - s * T + n * F) * N, t[6] = (f * M - p * E - x * b) * N, t[7] = (u * E - d * M + g * b) * N, t[8] = (a * R - h * T + l * y) * N, t[9] = (r * T - i * R - n * y) * N, t[10] = (p * A - m * M + x * w) * N, t[11] = (c * M - u * A - g * w) * N, t[12] = (h * F - a * _ - o * y) * N, t[13] = (i * _ - r * F + s * y) * N, t[14] = (m * b - p * v - f * w) * N, t[15] = (u * v - c * b + d * w) * N);
        }(this, t), this;
      }
    }, {
      key: "compose",
      value: function compose(t, e, i) {
        return function (t, e, i, r) {
          var s = e[0],
            n = e[1],
            a = e[2],
            h = e[3],
            o = s + s,
            l = n + n,
            u = a + a,
            c = s * o,
            d = s * l,
            g = s * u,
            p = n * l,
            m = n * u,
            f = a * u,
            x = h * o,
            w = h * l,
            b = h * u,
            M = r[0],
            v = r[1],
            A = r[2];
          t[0] = (1 - (p + f)) * M, t[1] = (d + b) * M, t[2] = (g - w) * M, t[3] = 0, t[4] = (d - b) * v, t[5] = (1 - (c + f)) * v, t[6] = (m + x) * v, t[7] = 0, t[8] = (g + w) * A, t[9] = (m - x) * A, t[10] = (1 - (c + p)) * A, t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1;
        }(this, t, e, i), this;
      }
    }, {
      key: "getRotation",
      value: function getRotation(t) {
        return function (t, e) {
          var i = e[0] + e[5] + e[10],
            r = 0;
          i > 0 ? (r = 2 * Math.sqrt(i + 1), t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] && e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r);
        }(t, this), this;
      }
    }, {
      key: "getTranslation",
      value: function getTranslation(t) {
        var e, i;
        return i = this, (e = t)[0] = i[12], e[1] = i[13], e[2] = i[14], this;
      }
    }, {
      key: "getScaling",
      value: function getScaling(t) {
        return function (t, e) {
          var i = e[0],
            r = e[1],
            s = e[2],
            n = e[4],
            a = e[5],
            h = e[6],
            o = e[8],
            l = e[9],
            u = e[10];
          t[0] = Math.sqrt(i * i + r * r + s * s), t[1] = Math.sqrt(n * n + a * a + h * h), t[2] = Math.sqrt(o * o + l * l + u * u);
        }(t, this), this;
      }
    }, {
      key: "getMaxScaleOnAxis",
      value: function getMaxScaleOnAxis() {
        return function (t) {
          var e = t[0],
            i = t[1],
            r = t[2],
            s = t[4],
            n = t[5],
            a = t[6],
            h = t[8],
            o = t[9],
            l = t[10];
          var u = e * e + i * i + r * r,
            c = s * s + n * n + a * a,
            d = h * h + o * o + l * l;
          return Math.sqrt(Math.max(u, c, d));
        }(this);
      }
    }, {
      key: "lookAt",
      value: function lookAt(t, e, i) {
        return function (t, e, i, r) {
          var s = e[0],
            n = e[1],
            a = e[2],
            h = r[0],
            o = r[1],
            l = r[2],
            u = s - i[0],
            c = n - i[1],
            d = a - i[2],
            g = u * u + c * c + d * d;
          g > 0 && (u *= g = 1 / Math.sqrt(g), c *= g, d *= g);
          var p = o * d - l * c,
            m = l * u - h * d,
            f = h * c - o * u;
          (g = p * p + m * m + f * f) > 0 && (p *= g = 1 / Math.sqrt(g), m *= g, f *= g), t[0] = p, t[1] = m, t[2] = f, t[3] = 0, t[4] = c * f - d * m, t[5] = d * p - u * f, t[6] = u * m - c * p, t[7] = 0, t[8] = u, t[9] = c, t[10] = d, t[11] = 0, t[12] = s, t[13] = n, t[14] = a, t[15] = 1;
        }(this, t, e, i), this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        return function (t) {
          var e = t[0],
            i = t[1],
            r = t[2],
            s = t[3],
            n = t[4],
            a = t[5],
            h = t[6],
            o = t[7],
            l = t[8],
            u = t[9],
            c = t[10],
            d = t[11],
            g = t[12],
            p = t[13],
            m = t[14],
            f = t[15];
          return (e * a - i * n) * (c * f - d * m) - (e * h - r * n) * (u * f - d * p) + (e * o - s * n) * (u * m - c * p) + (i * h - r * a) * (l * f - d * g) - (i * o - s * a) * (l * m - c * g) + (r * o - s * h) * (l * p - u * g);
        }(this);
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  var O = new P();
  var B = /*#__PURE__*/function (_Array4) {
    function B() {
      var _this7;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "YXZ";
      _classCallCheck(this, B);
      return _possibleConstructorReturn(_this7, (_this7 = _callSuper(this, B, [t, e, i]), _this7.order = r, _this7.onChange = function () {}, _assertThisInitialized(_this7)));
    }
    _inherits(B, _Array4);
    return _createClass(B, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(t) {
        this[0] = t, this.onChange();
      }
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(t) {
        this[1] = t, this.onChange();
      }
    }, {
      key: "z",
      get: function get() {
        return this[2];
      },
      set: function set(t) {
        this[2] = t, this.onChange();
      }
    }, {
      key: "set",
      value: function set(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
        return t.length ? this.copy(t) : (this[0] = t, this[1] = e, this[2] = i, this.onChange(), this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this[0] = t[0], this[1] = t[1], this[2] = t[2], this;
      }
    }, {
      key: "reorder",
      value: function reorder(t) {
        return this.order = t, this.onChange(), this;
      }
    }, {
      key: "fromRotationMatrix",
      value: function fromRotationMatrix(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.order;
        return function (t, e) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "YXZ";
          "XYZ" === i ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)), Math.abs(e[8]) < .99999 ? (t[0] = Math.atan2(-e[9], e[10]), t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]), t[2] = 0)) : "YXZ" === i ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]), t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]), t[2] = 0)) : "ZXY" === i ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)), Math.abs(e[6]) < .99999 ? (t[1] = Math.atan2(-e[2], e[10]), t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0, t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === i ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)), Math.abs(e[2]) < .99999 ? (t[0] = Math.atan2(e[6], e[10]), t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0, t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === i ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)), Math.abs(e[1]) < .99999 ? (t[0] = Math.atan2(-e[9], e[5]), t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0, t[1] = Math.atan2(e[8], e[10]))) : "XZY" === i && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)), Math.abs(e[4]) < .99999 ? (t[0] = Math.atan2(e[6], e[5]), t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]), t[1] = 0));
        }(this, t, e), this;
      }
    }, {
      key: "fromQuaternion",
      value: function fromQuaternion(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.order;
        return O.fromQuaternion(t), this.fromRotationMatrix(O, e);
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  var C = /*#__PURE__*/function () {
    function C() {
      var _this8 = this;
      _classCallCheck(this, C);
      this.parent = null, this.children = [], this.visible = !0, this.matrix = new P(), this.worldMatrix = new P(), this.matrixAutoUpdate = !0, this.position = new l(), this.quaternion = new N(), this.scale = new l(1), this.rotation = new B(), this.up = new l(0, 1, 0), this.rotation.onChange = function () {
        return _this8.quaternion.fromEuler(_this8.rotation);
      }, this.quaternion.onChange = function () {
        return _this8.rotation.fromQuaternion(_this8.quaternion);
      };
    }
    return _createClass(C, [{
      key: "setParent",
      value: function setParent(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        e && this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, e && t && t.addChild(this, !1);
      }
    }, {
      key: "addChild",
      value: function addChild(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1);
      }
    }, {
      key: "removeChild",
      value: function removeChild(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1);
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
        for (var _e3 = 0, _i5 = this.children.length; _e3 < _i5; _e3++) this.children[_e3].updateMatrixWorld(t);
      }
    }, {
      key: "updateMatrix",
      value: function updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0;
      }
    }, {
      key: "traverse",
      value: function traverse(t) {
        if (!t(this)) for (var _e4 = 0, _i6 = this.children.length; _e4 < _i6; _e4++) this.children[_e4].traverse(t);
      }
    }, {
      key: "decompose",
      value: function decompose() {
        this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion);
      }
    }, {
      key: "lookAt",
      value: function lookAt(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion);
      }
    }]);
  }();
  var D = new P(),
    U = new l(),
    z = new l();
  function I(t, e, i) {
    var r = e[0],
      s = e[1],
      n = e[2],
      a = e[3],
      h = e[4],
      o = e[5],
      l = e[6],
      u = e[7],
      c = e[8],
      d = i[0],
      g = i[1],
      p = i[2],
      m = i[3],
      f = i[4],
      x = i[5],
      w = i[6],
      b = i[7],
      M = i[8];
    return t[0] = d * r + g * a + p * l, t[1] = d * s + g * h + p * u, t[2] = d * n + g * o + p * c, t[3] = m * r + f * a + x * l, t[4] = m * s + f * h + x * u, t[5] = m * n + f * o + x * c, t[6] = w * r + b * a + M * l, t[7] = w * s + b * h + M * u, t[8] = w * n + b * o + M * c, t;
  }
  var q = /*#__PURE__*/function (_Array5) {
    function q() {
      var _this9;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      _classCallCheck(this, q);
      return _possibleConstructorReturn(_this9, (_this9 = _callSuper(this, q, [t, e, i, r, s, n, a, h, o]), _assertThisInitialized(_this9)));
    }
    _inherits(q, _Array5);
    return _createClass(q, [{
      key: "set",
      value: function set(t, e, i, r, s, n, a, h, o) {
        return t.length ? this.copy(t) : (function (t, e, i, r, s, n, a, h, o, l) {
          t[0] = e, t[1] = i, t[2] = r, t[3] = s, t[4] = n, t[5] = a, t[6] = h, t[7] = o, t[8] = l;
        }(this, t, e, i, r, s, n, a, h, o), this);
      }
    }, {
      key: "translate",
      value: function translate(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        return function (t, e, i) {
          var r = e[0],
            s = e[1],
            n = e[2],
            a = e[3],
            h = e[4],
            o = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            d = i[0],
            g = i[1];
          t[0] = r, t[1] = s, t[2] = n, t[3] = a, t[4] = h, t[5] = o, t[6] = d * r + g * a + l, t[7] = d * s + g * h + u, t[8] = d * n + g * o + c;
        }(this, e, t), this;
      }
    }, {
      key: "rotate",
      value: function rotate(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        return function (t, e, i) {
          var r = e[0],
            s = e[1],
            n = e[2],
            a = e[3],
            h = e[4],
            o = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            d = Math.sin(i),
            g = Math.cos(i);
          t[0] = g * r + d * a, t[1] = g * s + d * h, t[2] = g * n + d * o, t[3] = g * a - d * r, t[4] = g * h - d * s, t[5] = g * o - d * n, t[6] = l, t[7] = u, t[8] = c;
        }(this, e, t), this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        return function (t, e, i) {
          var r = i[0],
            s = i[1];
          t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = s * e[3], t[4] = s * e[4], t[5] = s * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8];
        }(this, e, t), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return e ? I(this, t, e) : I(this, this, t), this;
      }
    }, {
      key: "identity",
      value: function identity() {
        var t;
        return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e, i;
        return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this;
      }
    }, {
      key: "fromMatrix4",
      value: function fromMatrix4(t) {
        var e, i;
        return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[4], e[4] = i[5], e[5] = i[6], e[6] = i[8], e[7] = i[9], e[8] = i[10], this;
      }
    }, {
      key: "fromQuaternion",
      value: function fromQuaternion(t) {
        return function (t, e) {
          var i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            a = i + i,
            h = r + r,
            o = s + s,
            l = i * a,
            u = r * a,
            c = r * h,
            d = s * a,
            g = s * h,
            p = s * o,
            m = n * a,
            f = n * h,
            x = n * o;
          t[0] = 1 - c - p, t[3] = u - x, t[6] = d + f, t[1] = u + x, t[4] = 1 - l - p, t[7] = g - m, t[2] = d - f, t[5] = g + m, t[8] = 1 - l - c;
        }(this, t), this;
      }
    }, {
      key: "fromBasis",
      value: function fromBasis(t, e, i) {
        return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this;
      }
    }, {
      key: "inverse",
      value: function inverse() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        return function (t, e) {
          var i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            a = e[4],
            h = e[5],
            o = e[6],
            l = e[7],
            u = e[8],
            c = u * a - h * l,
            d = -u * n + h * o,
            g = l * n - a * o,
            p = i * c + r * d + s * g;
          p && (p = 1 / p, t[0] = c * p, t[1] = (-u * r + s * l) * p, t[2] = (h * r - s * a) * p, t[3] = d * p, t[4] = (u * i - s * o) * p, t[5] = (-h * i + s * n) * p, t[6] = g * p, t[7] = (-l * i + r * o) * p, t[8] = (a * i - r * n) * p);
        }(this, t), this;
      }
    }, {
      key: "getNormalMatrix",
      value: function getNormalMatrix(t) {
        return function (t, e) {
          var i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            a = e[4],
            h = e[5],
            o = e[6],
            l = e[7],
            u = e[8],
            c = e[9],
            d = e[10],
            g = e[11],
            p = e[12],
            m = e[13],
            f = e[14],
            x = e[15],
            w = i * h - r * a,
            b = i * o - s * a,
            M = i * l - n * a,
            v = r * o - s * h,
            A = r * l - n * h,
            E = s * l - n * o,
            y = u * m - c * p,
            F = u * f - d * p,
            T = u * x - g * p,
            _ = c * f - d * m,
            R = c * x - g * m,
            S = d * x - g * f,
            N = w * S - b * R + M * _ + v * T - A * F + E * y;
          N && (N = 1 / N, t[0] = (h * S - o * R + l * _) * N, t[1] = (o * T - a * S - l * F) * N, t[2] = (a * R - h * T + l * y) * N, t[3] = (s * R - r * S - n * _) * N, t[4] = (i * S - s * T + n * F) * N, t[5] = (r * T - i * R - n * y) * N, t[6] = (m * E - f * A + x * v) * N, t[7] = (f * M - p * E - x * b) * N, t[8] = (p * A - m * M + x * w) * N);
        }(this, t), this;
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  var G = 0;
  var Y = /*#__PURE__*/function (_C) {
    function Y(t) {
      var _this10;
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        e = _ref6.geometry,
        i = _ref6.program,
        _ref6$mode = _ref6.mode,
        r = _ref6$mode === void 0 ? t.TRIANGLES : _ref6$mode,
        _ref6$frustumCulled = _ref6.frustumCulled,
        s = _ref6$frustumCulled === void 0 ? !0 : _ref6$frustumCulled,
        _ref6$renderOrder = _ref6.renderOrder,
        n = _ref6$renderOrder === void 0 ? 0 : _ref6$renderOrder;
      _classCallCheck(this, Y);
      _this10 = _callSuper(this, Y, [t]), _this10.gl = t, _this10.id = G++, _this10.geometry = e, _this10.program = i, _this10.mode = r, _this10.frustumCulled = s, _this10.renderOrder = n, _this10.modelViewMatrix = new P(), _this10.normalMatrix = new q(), _this10.program.uniforms.modelMatrix || Object.assign(_this10.program.uniforms, {
        modelMatrix: {
          value: null
        },
        viewMatrix: {
          value: null
        },
        modelViewMatrix: {
          value: null
        },
        normalMatrix: {
          value: null
        },
        projectionMatrix: {
          value: null
        },
        cameraPosition: {
          value: null
        }
      });
      return _this10;
    }
    _inherits(Y, _C);
    return _createClass(Y, [{
      key: "draw",
      value: function draw() {
        var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          t = _ref7.camera;
        this.onBeforeRender && this.onBeforeRender({
          mesh: this,
          camera: t
        }), t && (this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.position, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix);
        var e = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({
          flipFaces: e
        }), this.geometry.draw({
          mode: this.mode,
          program: this.program
        }), this.onAfterRender && this.onAfterRender({
          mesh: this,
          camera: t
        });
      }
    }]);
  }(C);
  var k = new Uint8Array(4);
  function V(t) {
    return 0 == (t & t - 1);
  }
  var X = 0;
  var W = /*#__PURE__*/function () {
    function W(t) {
      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        e = _ref8.image,
        _ref8$target = _ref8.target,
        i = _ref8$target === void 0 ? t.TEXTURE_2D : _ref8$target,
        _ref8$type = _ref8.type,
        r = _ref8$type === void 0 ? t.UNSIGNED_BYTE : _ref8$type,
        _ref8$format = _ref8.format,
        s = _ref8$format === void 0 ? t.RGBA : _ref8$format,
        _ref8$internalFormat = _ref8.internalFormat,
        n = _ref8$internalFormat === void 0 ? s : _ref8$internalFormat,
        _ref8$wrapS = _ref8.wrapS,
        a = _ref8$wrapS === void 0 ? t.CLAMP_TO_EDGE : _ref8$wrapS,
        _ref8$wrapT = _ref8.wrapT,
        h = _ref8$wrapT === void 0 ? t.CLAMP_TO_EDGE : _ref8$wrapT,
        _ref8$generateMipmaps = _ref8.generateMipmaps,
        o = _ref8$generateMipmaps === void 0 ? !0 : _ref8$generateMipmaps,
        _ref8$minFilter = _ref8.minFilter,
        l = _ref8$minFilter === void 0 ? o ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR : _ref8$minFilter,
        _ref8$magFilter = _ref8.magFilter,
        u = _ref8$magFilter === void 0 ? t.LINEAR : _ref8$magFilter,
        _ref8$premultiplyAlph = _ref8.premultiplyAlpha,
        c = _ref8$premultiplyAlph === void 0 ? !1 : _ref8$premultiplyAlph,
        _ref8$unpackAlignment = _ref8.unpackAlignment,
        d = _ref8$unpackAlignment === void 0 ? 4 : _ref8$unpackAlignment,
        _ref8$flipY = _ref8.flipY,
        g = _ref8$flipY === void 0 ? !0 : _ref8$flipY,
        _ref8$level = _ref8.level,
        p = _ref8$level === void 0 ? 0 : _ref8$level,
        m = _ref8.width,
        _ref8$height = _ref8.height,
        f = _ref8$height === void 0 ? m : _ref8$height;
      _classCallCheck(this, W);
      this.gl = t, this.id = X++, this.image = e, this.target = i, this.type = r, this.format = s, this.internalFormat = n, this.minFilter = l, this.magFilter = u, this.wrapS = a, this.wrapT = h, this.generateMipmaps = o, this.premultiplyAlpha = c, this.unpackAlignment = d, this.flipY = g, this.level = p, this.width = m, this.height = f, this.texture = this.gl.createTexture(), this.store = {
        image: null
      }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT;
    }
    return _createClass(W, [{
      key: "bind",
      value: function bind() {
        this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id);
      }
    }, {
      key: "update",
      value: function update() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e = !(this.image === this.store.image && !this.needsUpdate);
        (e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), e && (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.image ? (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.gl.renderer.isWebgl2 || ArrayBuffer.isView(this.image) ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image), this.generateMipmaps && (this.gl.renderer.isWebgl2 || V(this.image.width) && V(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR))) : this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, k), this.store.image = this.image, this.onUpdate && this.onUpdate());
      }
    }]);
  }();
  var j = /*#__PURE__*/_createClass(function j(t) {
    var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref9$width = _ref9.width,
      e = _ref9$width === void 0 ? t.canvas.width : _ref9$width,
      _ref9$height = _ref9.height,
      i = _ref9$height === void 0 ? t.canvas.height : _ref9$height,
      _ref9$target = _ref9.target,
      r = _ref9$target === void 0 ? t.FRAMEBUFFER : _ref9$target,
      _ref9$color = _ref9.color,
      s = _ref9$color === void 0 ? 1 : _ref9$color,
      _ref9$depth = _ref9.depth,
      n = _ref9$depth === void 0 ? !0 : _ref9$depth,
      _ref9$stencil = _ref9.stencil,
      a = _ref9$stencil === void 0 ? !1 : _ref9$stencil,
      _ref9$depthTexture = _ref9.depthTexture,
      h = _ref9$depthTexture === void 0 ? !1 : _ref9$depthTexture,
      _ref9$wrapS = _ref9.wrapS,
      o = _ref9$wrapS === void 0 ? t.CLAMP_TO_EDGE : _ref9$wrapS,
      _ref9$wrapT = _ref9.wrapT,
      l = _ref9$wrapT === void 0 ? t.CLAMP_TO_EDGE : _ref9$wrapT,
      _ref9$minFilter = _ref9.minFilter,
      u = _ref9$minFilter === void 0 ? t.LINEAR : _ref9$minFilter,
      _ref9$magFilter = _ref9.magFilter,
      c = _ref9$magFilter === void 0 ? u : _ref9$magFilter,
      _ref9$type = _ref9.type,
      d = _ref9$type === void 0 ? t.UNSIGNED_BYTE : _ref9$type,
      _ref9$format = _ref9.format,
      g = _ref9$format === void 0 ? t.RGBA : _ref9$format,
      _ref9$internalFormat = _ref9.internalFormat,
      p = _ref9$internalFormat === void 0 ? g : _ref9$internalFormat,
      m = _ref9.unpackAlignment,
      f = _ref9.premultiplyAlpha;
    _classCallCheck(this, j);
    this.gl = t, this.width = e, this.height = i, this.buffer = this.gl.createFramebuffer(), this.target = r, this.gl.bindFramebuffer(this.target, this.buffer), this.textures = [];
    for (var _r9 = 0; _r9 < s; _r9++) this.textures.push(new W(t, {
      width: e,
      height: i,
      wrapS: o,
      wrapT: l,
      minFilter: u,
      magFilter: c,
      type: d,
      format: g,
      internalFormat: p,
      unpackAlignment: m,
      premultiplyAlpha: f,
      flipY: !1,
      generateMipmaps: !1
    })), this.textures[_r9].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + _r9, this.gl.TEXTURE_2D, this.textures[_r9].texture, 0);
    this.texture = this.textures[0], h && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new W(t, {
      width: e,
      height: i,
      wrapS: o,
      wrapT: l,
      minFilter: this.gl.NEAREST,
      magFilter: this.gl.NEAREST,
      flipY: !1,
      format: this.gl.DEPTH_COMPONENT,
      internalFormat: t.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT24 : this.gl.DEPTH_COMPONENT,
      type: this.gl.UNSIGNED_INT,
      generateMipmaps: !1
    }), this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (n && !a && (this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)), a && !n && (this.stencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)), n && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))), this.gl.bindFramebuffer(this.target, null);
  });
  var H = /*#__PURE__*/function (_Array6) {
    function H() {
      var _H$hexToRGB, _H$hexToRGB2;
      var _this11;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      _classCallCheck(this, H);
      return _possibleConstructorReturn(_this11, ("string" == typeof t && (_H$hexToRGB = H.hexToRGB(t), _H$hexToRGB2 = _slicedToArray(_H$hexToRGB, 3), t = _H$hexToRGB2[0], e = _H$hexToRGB2[1], i = _H$hexToRGB2[2], _H$hexToRGB), _this11 = _callSuper(this, H, [t, e, i]), _assertThisInitialized(_this11)));
    }
    _inherits(H, _Array6);
    return _createClass(H, [{
      key: "r",
      get: function get() {
        return this[0];
      },
      set: function set(t) {
        this[0] = t;
      }
    }, {
      key: "g",
      get: function get() {
        return this[1];
      },
      set: function set(t) {
        this[1] = t;
      }
    }, {
      key: "b",
      get: function get() {
        return this[2];
      },
      set: function set(t) {
        this[2] = t;
      }
    }, {
      key: "set",
      value: function set(t, e, i) {
        var _H$hexToRGB3, _H$hexToRGB4;
        return "string" == typeof t && (_H$hexToRGB3 = H.hexToRGB(t), _H$hexToRGB4 = _slicedToArray(_H$hexToRGB3, 3), t = _H$hexToRGB4[0], e = _H$hexToRGB4[1], i = _H$hexToRGB4[2], _H$hexToRGB3), t.length ? this.copy(t) : (this[0] = t, this[1] = e, this[2] = i, this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this[0] = t[0], this[1] = t[1], this[2] = t[2], this;
      }
    }], [{
      key: "hexToRGB",
      value: function hexToRGB(t) {
        4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e || console.warn("Unable to convert hex string ".concat(t, " to rgb values")), [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255];
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  function Z(t, e, i) {
    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
  }
  function $(t, e, i) {
    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
  }
  function Q(t, e, i) {
    return t[0] = e[0] * i, t[1] = e[1] * i, t;
  }
  function K(t) {
    var e = t[0],
      i = t[1];
    return Math.sqrt(e * e + i * i);
  }
  var J = /*#__PURE__*/function (_Array7) {
    function J() {
      var _this12;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
      _classCallCheck(this, J);
      return _possibleConstructorReturn(_this12, (_this12 = _callSuper(this, J, [t, e]), _assertThisInitialized(_this12)));
    }
    _inherits(J, _Array7);
    return _createClass(J, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(t) {
        this[0] = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(t) {
        this[1] = t;
      }
    }, {
      key: "set",
      value: function set(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
        return t.length ? this.copy(t) : (function (t, e, i) {
          t[0] = e, t[1] = i;
        }(this, t, e), this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e, i;
        return i = t, (e = this)[0] = i[0], e[1] = i[1], this;
      }
    }, {
      key: "add",
      value: function add(t, e) {
        return e ? Z(this, t, e) : Z(this, this, t), this;
      }
    }, {
      key: "sub",
      value: function sub(t, e) {
        return e ? $(this, t, e) : $(this, this, t), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        var e, i, r;
        return t.length ? (i = this, r = t, (e = this)[0] = i[0] * r[0], e[1] = i[1] * r[1]) : Q(this, this, t), this;
      }
    }, {
      key: "divide",
      value: function divide(t) {
        var e, i, r;
        return t.length ? (i = this, r = t, (e = this)[0] = i[0] / r[0], e[1] = i[1] / r[1]) : Q(this, this, 1 / t), this;
      }
    }, {
      key: "inverse",
      value: function inverse() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        var e, i;
        return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], this;
      }
    }, {
      key: "len",
      value: function len() {
        return K(this);
      }
    }, {
      key: "distance",
      value: function distance(t) {
        return t ? (e = this, r = (i = t)[0] - e[0], s = i[1] - e[1], Math.sqrt(r * r + s * s)) : K(this);
        var e, i, r, s;
      }
    }, {
      key: "squaredLen",
      value: function squaredLen() {
        return this.squaredDistance();
      }
    }, {
      key: "squaredDistance",
      value: function squaredDistance(t) {
        return t ? (e = this, r = (i = t)[0] - e[0], s = i[1] - e[1], r * r + s * s) : function (t) {
          var e = t[0],
            i = t[1];
          return e * e + i * i;
        }(this);
        var e, i, r, s;
      }
    }, {
      key: "negate",
      value: function negate() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        var e, i;
        return i = t, (e = this)[0] = -i[0], e[1] = -i[1], this;
      }
    }, {
      key: "cross",
      value: function cross(t, e) {
        return r = e, (i = t)[0] * r[1] - i[1] * r[0];
        var i, r;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return Q(this, this, t), this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var t, e, i, r, s;
        return t = this, i = (e = this)[0], r = e[1], (s = i * i + r * r) > 0 && (s = 1 / Math.sqrt(s)), t[0] = e[0] * s, t[1] = e[1] * s, this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return i = t, (e = this)[0] * i[0] + e[1] * i[1];
        var e, i;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return i = t, (e = this)[0] === i[0] && e[1] === i[1];
        var e, i;
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(t) {
        var e, i, r, s, n;
        return e = this, r = t, s = (i = this)[0], n = i[1], e[0] = r[0] * s + r[3] * n + r[6], e[1] = r[1] * s + r[4] * n + r[7], this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return function (t, e, i) {
          var r = e[0],
            s = e[1];
          t[0] = i[0] * r + i[4] * s + i[12], t[1] = i[1] * r + i[5] * s + i[13];
        }(this, this, t), this;
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        !function (t, e, i, r) {
          var s = e[0],
            n = e[1];
          t[0] = s + r * (i[0] - s), t[1] = n + r * (i[1] - n);
        }(this, this, t, e);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new J(this[0], this[1]);
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this[0] = t[e], this[1] = t[e + 1], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this[0], t[e + 1] = this[1], t;
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  var tt = /*#__PURE__*/function (_g) {
    function tt(t) {
      var _this13;
      var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref10$width = _ref10.width,
        e = _ref10$width === void 0 ? 1 : _ref10$width,
        _ref10$height = _ref10.height,
        i = _ref10$height === void 0 ? 1 : _ref10$height,
        _ref10$widthSegments = _ref10.widthSegments,
        r = _ref10$widthSegments === void 0 ? 1 : _ref10$widthSegments,
        _ref10$heightSegments = _ref10.heightSegments,
        s = _ref10$heightSegments === void 0 ? 1 : _ref10$heightSegments,
        _ref10$attributes = _ref10.attributes,
        n = _ref10$attributes === void 0 ? {} : _ref10$attributes;
      _classCallCheck(this, tt);
      var a = r,
        h = s,
        o = (a + 1) * (h + 1),
        l = a * h * 6,
        u = new Float32Array(3 * o),
        c = new Float32Array(3 * o),
        d = new Float32Array(2 * o),
        g = o > 65536 ? new Uint32Array(l) : new Uint16Array(l);
      tt.buildPlane(u, c, d, g, e, i, 0, a, h), Object.assign(n, {
        position: {
          size: 3,
          data: u
        },
        normal: {
          size: 3,
          data: c
        },
        uv: {
          size: 2,
          data: d
        },
        index: {
          data: g
        }
      }), _this13 = _callSuper(this, tt, [t, n]);
      return _this13;
    }
    _inherits(tt, _g);
    return _createClass(tt, null, [{
      key: "buildPlane",
      value: function buildPlane(t, e, i, r, s, n, a, h, o) {
        var l = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
        var u = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
        var c = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 2;
        var d = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 1;
        var g = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : -1;
        var p = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
        var m = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 0;
        var f = p,
          x = s / h,
          w = n / o;
        for (var _b = 0; _b <= o; _b++) {
          var _M = _b * w - n / 2;
          for (var _n3 = 0; _n3 <= h; _n3++, p++) {
            var _w = _n3 * x - s / 2;
            if (t[3 * p + l] = _w * d, t[3 * p + u] = _M * g, t[3 * p + c] = a / 2, e[3 * p + l] = 0, e[3 * p + u] = 0, e[3 * p + c] = a >= 0 ? 1 : -1, i[2 * p] = _n3 / h, i[2 * p + 1] = 1 - _b / o, _b === o || _n3 === h) continue;
            var _v = f + _n3 + _b * (h + 1),
              _A = f + _n3 + (_b + 1) * (h + 1),
              _E = f + _n3 + (_b + 1) * (h + 1) + 1,
              _y = f + _n3 + _b * (h + 1) + 1;
            r[6 * m] = _v, r[6 * m + 1] = _A, r[6 * m + 2] = _y, r[6 * m + 3] = _A, r[6 * m + 4] = _E, r[6 * m + 5] = _y, m++;
          }
        }
      }
    }]);
  }(g);
  var et = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      DOLLY_PAN: 3
    },
    it = new l(),
    rt = new J(),
    st = new J();
  var nt = new l(),
    at = new l(),
    ht = new l(),
    ot = new P();
  var lt = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
    ut = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n",
    ct = new l(),
    dt = new N(),
    gt = new l(),
    pt = new l(),
    mt = new N(),
    ft = new l();
  var xt = /*#__PURE__*/function () {
    function xt(_ref11) {
      var t = _ref11.objects,
        e = _ref11.data;
      _classCallCheck(this, xt);
      this.objects = t, this.data = e, this.elapsed = 0, this.weight = 1, this.duration = e.frames.length - 1;
    }
    return _createClass(xt, [{
      key: "update",
      value: function update() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var e = arguments.length > 1 ? arguments[1] : undefined;
        var i = e ? 1 : this.weight / t,
          r = this.elapsed % this.duration,
          s = Math.floor(r),
          n = r - s,
          a = this.data.frames[s],
          h = this.data.frames[(s + 1) % this.duration];
        this.objects.forEach(function (t, e) {
          ct.fromArray(a.position, 3 * e), dt.fromArray(a.quaternion, 4 * e), gt.fromArray(a.scale, 3 * e), pt.fromArray(h.position, 3 * e), mt.fromArray(h.quaternion, 4 * e), ft.fromArray(h.scale, 3 * e), ct.lerp(pt, n), dt.slerp(mt, n), gt.lerp(ft, n), t.position.lerp(ct, i), t.quaternion.slerp(dt, i), t.scale.lerp(gt, i);
        });
      }
    }]);
  }();
  var wt = new P();
  var bt = "\nprecision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec3 vNormal;\n\nvoid main() {\n    vNormal = normalize(normalMatrix * normal);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
    Mt = "\nprecision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nvoid main() {\n    gl_FragColor.rgb = normalize(vNormal);\n    gl_FragColor.a = 1.0;\n}\n";
  var vt = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
    At = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n\n    uniform float uFalloff;\n    uniform float uAlpha;\n    uniform float uDissipation;\n\n    uniform float uAspect;\n    uniform vec2 uMouse;\n    uniform vec2 uVelocity;\n\n    varying vec2 vUv;\n\n    void main() {\n\n      vec2 cursor = vUv - uMouse;\n\n        vec4 color = texture2D(tMap, vUv) * uDissipation;\n\n        cursor.x *= uAspect;\n\n        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));\n        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;\n\n        color.rgb = mix(color.rgb, stamp, vec3(falloff));\n\n        gl_FragColor = color;\n    }\n";
  var Et = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
    yt = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n";
  return t.Animation = xt, t.Box = /*#__PURE__*/function (_g2) {
    function _class(t) {
      var _this14;
      var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref12$width = _ref12.width,
        e = _ref12$width === void 0 ? 1 : _ref12$width,
        _ref12$height = _ref12.height,
        i = _ref12$height === void 0 ? 1 : _ref12$height,
        _ref12$depth = _ref12.depth,
        r = _ref12$depth === void 0 ? 1 : _ref12$depth,
        _ref12$widthSegments = _ref12.widthSegments,
        s = _ref12$widthSegments === void 0 ? 1 : _ref12$widthSegments,
        _ref12$heightSegments = _ref12.heightSegments,
        n = _ref12$heightSegments === void 0 ? 1 : _ref12$heightSegments,
        _ref12$depthSegments = _ref12.depthSegments,
        a = _ref12$depthSegments === void 0 ? 1 : _ref12$depthSegments,
        _ref12$attributes = _ref12.attributes,
        h = _ref12$attributes === void 0 ? {} : _ref12$attributes;
      _classCallCheck(this, _class);
      var o = s,
        l = n,
        u = a,
        c = (o + 1) * (l + 1) * 2 + (o + 1) * (u + 1) * 2 + (l + 1) * (u + 1) * 2,
        d = 6 * (o * l * 2 + o * u * 2 + l * u * 2),
        g = new Float32Array(3 * c),
        p = new Float32Array(3 * c),
        m = new Float32Array(2 * c),
        f = c > 65536 ? new Uint32Array(d) : new Uint16Array(d);
      var x = 0,
        w = 0;
      tt.buildPlane(g, p, m, f, r, i, e, u, l, 2, 1, 0, -1, -1, x, w), tt.buildPlane(g, p, m, f, r, i, -e, u, l, 2, 1, 0, 1, -1, x += (u + 1) * (l + 1), w += u * l), tt.buildPlane(g, p, m, f, e, r, i, u, l, 0, 2, 1, 1, 1, x += (u + 1) * (l + 1), w += u * l), tt.buildPlane(g, p, m, f, e, r, -i, u, l, 0, 2, 1, 1, -1, x += (o + 1) * (u + 1), w += o * u), tt.buildPlane(g, p, m, f, e, i, -r, o, l, 0, 1, 2, -1, -1, x += (o + 1) * (u + 1), w += o * u), tt.buildPlane(g, p, m, f, e, i, r, o, l, 0, 1, 2, 1, -1, x += (o + 1) * (l + 1), w += o * l), Object.assign(h, {
        position: {
          size: 3,
          data: g
        },
        normal: {
          size: 3,
          data: p
        },
        uv: {
          size: 2,
          data: m
        },
        index: {
          data: f
        }
      }), _this14 = _callSuper(this, _class, [t, h]);
      return _this14;
    }
    _inherits(_class, _g2);
    return _createClass(_class);
  }(g), t.Camera = /*#__PURE__*/function (_C2) {
    function _class2(t) {
      var _this15;
      var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref13$near = _ref13.near,
        e = _ref13$near === void 0 ? .1 : _ref13$near,
        _ref13$far = _ref13.far,
        i = _ref13$far === void 0 ? 100 : _ref13$far,
        _ref13$fov = _ref13.fov,
        r = _ref13$fov === void 0 ? 45 : _ref13$fov,
        _ref13$aspect = _ref13.aspect,
        s = _ref13$aspect === void 0 ? 1 : _ref13$aspect,
        n = _ref13.left,
        a = _ref13.right,
        h = _ref13.bottom,
        o = _ref13.top;
      _classCallCheck(this, _class2);
      _this15 = _callSuper(this, _class2, [t]), _this15.near = e, _this15.far = i, _this15.fov = r, _this15.aspect = s, _this15.projectionMatrix = new P(), _this15.viewMatrix = new P(), _this15.projectionViewMatrix = new P(), n || a ? _this15.orthographic({
        left: n,
        right: a,
        bottom: h,
        top: o
      }) : _this15.perspective();
      return _this15;
    }
    _inherits(_class2, _C2);
    return _createClass(_class2, [{
      key: "perspective",
      value: function perspective() {
        var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref14$near = _ref14.near,
          t = _ref14$near === void 0 ? this.near : _ref14$near,
          _ref14$far = _ref14.far,
          e = _ref14$far === void 0 ? this.far : _ref14$far,
          _ref14$fov = _ref14.fov,
          i = _ref14$fov === void 0 ? this.fov : _ref14$fov,
          _ref14$aspect = _ref14.aspect,
          r = _ref14$aspect === void 0 ? this.aspect : _ref14$aspect;
        return this.projectionMatrix.fromPerspective({
          fov: i * (Math.PI / 180),
          aspect: r,
          near: t,
          far: e
        }), this.type = "perspective", this;
      }
    }, {
      key: "orthographic",
      value: function orthographic() {
        var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref15$near = _ref15.near,
          t = _ref15$near === void 0 ? this.near : _ref15$near,
          _ref15$far = _ref15.far,
          e = _ref15$far === void 0 ? this.far : _ref15$far,
          _ref15$left = _ref15.left,
          i = _ref15$left === void 0 ? -1 : _ref15$left,
          _ref15$right = _ref15.right,
          r = _ref15$right === void 0 ? 1 : _ref15$right,
          _ref15$bottom = _ref15.bottom,
          s = _ref15$bottom === void 0 ? -1 : _ref15$bottom,
          _ref15$top = _ref15.top,
          n = _ref15$top === void 0 ? 1 : _ref15$top;
        return this.projectionMatrix.fromOrthogonal({
          left: i,
          right: r,
          bottom: s,
          top: n,
          near: t,
          far: e
        }), this.type = "orthographic", this;
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld() {
        return _get(_getPrototypeOf(_class2.prototype), "updateMatrixWorld", this).call(this), this.viewMatrix.inverse(this.worldMatrix), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this;
      }
    }, {
      key: "lookAt",
      value: function lookAt(t) {
        return _get(_getPrototypeOf(_class2.prototype), "lookAt", this).call(this, t, !0), this;
      }
    }, {
      key: "project",
      value: function project(t) {
        return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this;
      }
    }, {
      key: "unproject",
      value: function unproject(t) {
        return t.applyMatrix4(D.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this;
      }
    }, {
      key: "updateFrustum",
      value: function updateFrustum() {
        this.frustum || (this.frustum = [new l(), new l(), new l(), new l(), new l(), new l()]);
        var t = this.projectionViewMatrix;
        this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
        for (var _t4 = 0; _t4 < 6; _t4++) {
          var _e5 = 1 / this.frustum[_t4].distance();
          this.frustum[_t4].multiply(_e5), this.frustum[_t4].constant *= _e5;
        }
      }
    }, {
      key: "frustumIntersectsMesh",
      value: function frustumIntersectsMesh(t) {
        if (!t.geometry.attributes.position) return !0;
        t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere();
        var e = U;
        e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
        var i = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(e, i);
      }
    }, {
      key: "frustumIntersectsSphere",
      value: function frustumIntersectsSphere(t, e) {
        var i = z;
        for (var _r10 = 0; _r10 < 6; _r10++) {
          var _s4 = this.frustum[_r10];
          if (i.copy(_s4).dot(t) + _s4.constant < -e) return !1;
        }
        return !0;
      }
    }]);
  }(C), t.Color = H, t.Cylinder = /*#__PURE__*/function (_g3) {
    function _class3(t) {
      var _this16;
      var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref16$radius = _ref16.radius,
        e = _ref16$radius === void 0 ? .5 : _ref16$radius,
        _ref16$height = _ref16.height,
        i = _ref16$height === void 0 ? 1 : _ref16$height,
        _ref16$radialSegments = _ref16.radialSegments,
        r = _ref16$radialSegments === void 0 ? 16 : _ref16$radialSegments,
        _ref16$heightSegments = _ref16.heightSegments,
        s = _ref16$heightSegments === void 0 ? 1 : _ref16$heightSegments,
        _ref16$attributes = _ref16.attributes,
        n = _ref16$attributes === void 0 ? {} : _ref16$attributes;
      _classCallCheck(this, _class3);
      var a = r,
        h = s,
        o = (r + 1) * (s + 1) + 2,
        u = r * (2 + 2 * s) * 3,
        c = new Float32Array(3 * o),
        d = new Float32Array(3 * o),
        g = new Float32Array(2 * o),
        p = o > 65536 ? new Uint32Array(u) : new Uint16Array(u);
      var m,
        f,
        x,
        w = 0,
        b = new l();
      m = 0, f = -.5 * i, x = 0, c[3 * w + 0] = m, c[3 * w + 1] = f, c[3 * w + 2] = x, b.set(m, f, x).normalize(), d[3 * w] = b.x, d[3 * w + 1] = b.y, d[3 * w + 2] = b.z, g[2 * w] = 0, g[2 * w + 1] = 1;
      var M = w;
      m = 0, f = .5 * i, x = 0, c[3 * ++w + 0] = m, c[3 * w + 1] = f, c[3 * w + 2] = x, b.set(m, f, x).normalize(), d[3 * w] = b.x, d[3 * w + 1] = b.y, d[3 * w + 2] = b.z, g[2 * w] = 0, g[2 * w + 1] = 0;
      var v = w;
      w++;
      for (var A = 0; A < a + 1; A++) {
        var _t5 = A / a;
        for (var E = 0; E < h + 1; E++) {
          var _r11 = E / h;
          m = Math.cos(_t5 * Math.PI * 2) * e, f = (_r11 - .5) * i, x = Math.sin(_t5 * Math.PI * 2) * e, c[3 * w + 0] = m, c[3 * w + 1] = f, c[3 * w + 2] = x, b.set(m, f, x).normalize(), d[3 * w] = b.x, d[3 * w + 1] = b.y, d[3 * w + 2] = b.z, g[2 * w] = _t5, g[2 * w + 1] = 1 - _r11, w++;
        }
      }
      var y = 0,
        F = h + 1;
      for (A = 0; A < a; A++) {
        var _t6 = A + 1;
        for (p[3 * y + 0] = M, p[3 * y + 1] = 2 + A * F, p[3 * y + 2] = 2 + _t6 * F, y++, E = 0; E < h; E++) p[3 * y + 0] = 2 + A * F + (E + 0), p[3 * y + 1] = 2 + A * F + (E + 1), p[3 * y + 2] = 2 + _t6 * F + (E + 0), p[3 * ++y + 0] = 2 + _t6 * F + (E + 0), p[3 * y + 1] = 2 + A * F + (E + 1), p[3 * y + 2] = 2 + _t6 * F + (E + 1), y++;
        p[3 * y + 0] = 2 + _t6 * F + h, p[3 * y + 1] = 2 + A * F + h, p[3 * y + 2] = v, y++;
      }
      Object.assign(n, {
        position: {
          size: 3,
          data: c
        },
        normal: {
          size: 3,
          data: d
        },
        uv: {
          size: 2,
          data: g
        },
        index: {
          data: p
        }
      }), _this16 = _callSuper(this, _class3, [t, n]);
      return _this16;
    }
    _inherits(_class3, _g3);
    return _createClass(_class3);
  }(g), t.Euler = B, t.Flowmap = /*#__PURE__*/function () {
    function _class4(t) {
      var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref17$size = _ref17.size,
        e = _ref17$size === void 0 ? 512 : _ref17$size,
        _ref17$falloff = _ref17.falloff,
        i = _ref17$falloff === void 0 ? .3 : _ref17$falloff,
        _ref17$alpha = _ref17.alpha,
        r = _ref17$alpha === void 0 ? 1 : _ref17$alpha,
        _ref17$dissipation = _ref17.dissipation,
        s = _ref17$dissipation === void 0 ? .96 : _ref17$dissipation;
      _classCallCheck(this, _class4);
      var n = this;
      this.gl = t, this.uniform = {
        value: null
      }, this.mask = {
        read: null,
        write: null,
        swap: function swap() {
          var t = n.mask.read;
          n.mask.read = n.mask.write, n.mask.write = t, n.uniform.value = n.mask.read.texture;
        }
      }, function () {
        var i = t.renderer.extensions["OES_texture_".concat(t.renderer.isWebgl2 ? "" : "half_", "float_linear")];
        var r = {
          width: e,
          height: e,
          type: t.renderer.isWebgl2 ? t.HALF_FLOAT : t.renderer.extensions.OES_texture_half_float ? t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : t.UNSIGNED_BYTE,
          format: t.RGBA,
          internalFormat: t.renderer.isWebgl2 ? t.RGBA16F : t.RGBA,
          minFilter: i ? t.LINEAR : t.NEAREST,
          depth: !1
        };
        n.mask.read = new j(t, r), n.mask.write = new j(t, r), n.mask.swap();
      }(), this.aspect = 1, this.mouse = new J(), this.velocity = new J(), this.mesh = new Y(t, {
        geometry: new g(t, {
          position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3])
          },
          uv: {
            size: 2,
            data: new Float32Array([0, 0, 2, 0, 0, 2])
          }
        }),
        program: new f(t, {
          vertex: vt,
          fragment: At,
          uniforms: {
            tMap: n.uniform,
            uFalloff: {
              value: .5 * i
            },
            uAlpha: {
              value: r
            },
            uDissipation: {
              value: s
            },
            uAspect: {
              value: 1
            },
            uMouse: {
              value: n.mouse
            },
            uVelocity: {
              value: n.velocity
            }
          },
          depthTest: !1
        })
      });
    }
    return _createClass(_class4, [{
      key: "update",
      value: function update() {
        this.mesh.program.uniforms.uAspect.value = this.aspect, this.gl.renderer.render({
          scene: this.mesh,
          target: this.mask.write,
          clear: !1
        }), this.mask.swap();
      }
    }]);
  }(), t.GPGPU = /*#__PURE__*/function () {
    function _class5(t, _ref18) {
      var _this17 = this;
      var _ref18$data = _ref18.data,
        e = _ref18$data === void 0 ? new Float32Array(16) : _ref18$data,
        _ref18$geometry = _ref18.geometry,
        i = _ref18$geometry === void 0 ? new g(t, {
          position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3])
          },
          uv: {
            size: 2,
            data: new Float32Array([0, 0, 2, 0, 0, 2])
          }
        }) : _ref18$geometry;
      _classCallCheck(this, _class5);
      this.gl = t;
      var r = e;
      this.passes = [], this.geometry = i, this.dataLength = r.length / 4, this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)), this.coords = new Float32Array(2 * this.dataLength);
      for (var _t7 = 0; _t7 < this.dataLength; _t7++) {
        var _e6 = _t7 % this.size / this.size,
          _i7 = Math.floor(_t7 / this.size) / this.size;
        this.coords.set([_e6, _i7], 2 * _t7);
      }
      var s = function () {
        if (r.length === _this17.size * _this17.size * 4) return r;
        {
          var _t8 = new Float32Array(_this17.size * _this17.size * 4);
          return _t8.set(r), _t8;
        }
      }();
      this.uniform = {
        value: new W(t, {
          image: s,
          target: t.TEXTURE_2D,
          type: t.FLOAT,
          format: t.RGBA,
          internalFormat: t.renderer.isWebgl2 ? t.RGBA32F : t.RGBA,
          wrapS: t.CLAMP_TO_EDGE,
          wrapT: t.CLAMP_TO_EDGE,
          generateMipmaps: !1,
          minFilter: t.NEAREST,
          magFilter: t.NEAREST,
          width: this.size,
          flipY: !1
        })
      };
      var n = {
        width: this.size,
        height: this.size,
        type: t.renderer.isWebgl2 ? t.HALF_FLOAT : t.renderer.extensions.OES_texture_half_float ? t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : t.UNSIGNED_BYTE,
        format: t.RGBA,
        internalFormat: t.renderer.isWebgl2 ? t.RGBA16F : t.RGBA,
        minFilter: t.NEAREST,
        depth: !1,
        unpackAlignment: 1
      };
      this.fbo = {
        read: new j(t, n),
        write: new j(t, n),
        swap: function swap() {
          var t = _this17.fbo.read;
          _this17.fbo.read = _this17.fbo.write, _this17.fbo.write = t, _this17.uniform.value = _this17.fbo.read.texture;
        }
      };
    }
    return _createClass(_class5, [{
      key: "addPass",
      value: function addPass() {
        var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref19$vertex = _ref19.vertex,
          t = _ref19$vertex === void 0 ? Et : _ref19$vertex,
          _ref19$fragment = _ref19.fragment,
          e = _ref19$fragment === void 0 ? yt : _ref19$fragment,
          _ref19$uniforms = _ref19.uniforms,
          i = _ref19$uniforms === void 0 ? {} : _ref19$uniforms,
          _ref19$textureUniform = _ref19.textureUniform,
          r = _ref19$textureUniform === void 0 ? "tMap" : _ref19$textureUniform,
          _ref19$enabled = _ref19.enabled,
          s = _ref19$enabled === void 0 ? !0 : _ref19$enabled;
        i[r] = this.uniform;
        var n = new f(this.gl, {
            vertex: t,
            fragment: e,
            uniforms: i
          }),
          a = {
            mesh: new Y(this.gl, {
              geometry: this.geometry,
              program: n
            }),
            program: n,
            uniforms: i,
            enabled: s,
            textureUniform: r
          };
        return this.passes.push(a), a;
      }
    }, {
      key: "render",
      value: function render() {
        var _this18 = this;
        this.passes.filter(function (t) {
          return t.enabled;
        }).forEach(function (t, e) {
          _this18.gl.renderer.render({
            scene: t.mesh,
            target: _this18.fbo.write,
            clear: !1
          }), _this18.fbo.swap();
        });
      }
    }]);
  }(), t.Geometry = g, t.Mat3 = q, t.Mat4 = P, t.Mesh = Y, t.NormalProgram = function (t) {
    return new f(t, {
      vertex: bt,
      fragment: Mt
    });
  }, t.Orbit = function (t) {
    var _this19 = this;
    var _ref20 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref20$element = _ref20.element,
      e = _ref20$element === void 0 ? document : _ref20$element,
      _ref20$enabled = _ref20.enabled,
      i = _ref20$enabled === void 0 ? !0 : _ref20$enabled,
      _ref20$target = _ref20.target,
      r = _ref20$target === void 0 ? new l() : _ref20$target,
      _ref20$ease = _ref20.ease,
      s = _ref20$ease === void 0 ? .25 : _ref20$ease,
      _ref20$inertia = _ref20.inertia,
      n = _ref20$inertia === void 0 ? .85 : _ref20$inertia,
      _ref20$enableRotate = _ref20.enableRotate,
      a = _ref20$enableRotate === void 0 ? !0 : _ref20$enableRotate,
      _ref20$rotateSpeed = _ref20.rotateSpeed,
      h = _ref20$rotateSpeed === void 0 ? .1 : _ref20$rotateSpeed,
      _ref20$enableZoom = _ref20.enableZoom,
      o = _ref20$enableZoom === void 0 ? !0 : _ref20$enableZoom,
      _ref20$zoomSpeed = _ref20.zoomSpeed,
      u = _ref20$zoomSpeed === void 0 ? 1 : _ref20$zoomSpeed,
      _ref20$enablePan = _ref20.enablePan,
      c = _ref20$enablePan === void 0 ? !0 : _ref20$enablePan,
      _ref20$panSpeed = _ref20.panSpeed,
      d = _ref20$panSpeed === void 0 ? .1 : _ref20$panSpeed,
      _ref20$minPolarAngle = _ref20.minPolarAngle,
      g = _ref20$minPolarAngle === void 0 ? 0 : _ref20$minPolarAngle,
      _ref20$maxPolarAngle = _ref20.maxPolarAngle,
      p = _ref20$maxPolarAngle === void 0 ? Math.PI : _ref20$maxPolarAngle,
      _ref20$minAzimuthAngl = _ref20.minAzimuthAngle,
      m = _ref20$minAzimuthAngl === void 0 ? -1 / 0 : _ref20$minAzimuthAngl,
      _ref20$maxAzimuthAngl = _ref20.maxAzimuthAngle,
      f = _ref20$maxAzimuthAngl === void 0 ? 1 / 0 : _ref20$maxAzimuthAngl,
      _ref20$minDistance = _ref20.minDistance,
      x = _ref20$minDistance === void 0 ? 0 : _ref20$minDistance,
      _ref20$maxDistance = _ref20.maxDistance,
      w = _ref20$maxDistance === void 0 ? 1 / 0 : _ref20$maxDistance;
    this.enabled = i, this.target = r, s = s || 1, n = n || 1, this.minDistance = x, this.maxDistance = w;
    var b = {
        radius: 1,
        phi: 0,
        theta: 0
      },
      M = {
        radius: 1,
        phi: 0,
        theta: 0
      },
      v = {
        radius: 1,
        phi: 0,
        theta: 0
      },
      A = new l(),
      E = new l();
    E.copy(t.position).sub(this.target), v.radius = M.radius = E.distance(), v.theta = M.theta = Math.atan2(E.x, E.z), v.phi = M.phi = Math.acos(Math.min(Math.max(E.y / M.radius, -1), 1)), this.update = function () {
      M.radius *= b.radius, M.theta += b.theta, M.phi += b.phi, M.theta = Math.max(m, Math.min(f, M.theta)), M.phi = Math.max(g, Math.min(p, M.phi)), M.radius = Math.max(_this19.minDistance, Math.min(_this19.maxDistance, M.radius)), v.phi += (M.phi - v.phi) * s, v.theta += (M.theta - v.theta) * s, v.radius += (M.radius - v.radius) * s, _this19.target.add(A);
      var e = v.radius * Math.sin(Math.max(1e-6, v.phi));
      E.x = e * Math.sin(v.theta), E.y = v.radius * Math.cos(v.phi), E.z = e * Math.cos(v.theta), t.position.copy(_this19.target).add(E), t.lookAt(_this19.target), b.theta *= n, b.phi *= n, A.multiply(n), b.radius = 1;
    };
    var y = new J(),
      F = new J(),
      T = new J();
    var _ = et.NONE;
    function R() {
      return Math.pow(.95, u);
    }
    this.mouseButtons = {
      ORBIT: 0,
      ZOOM: 1,
      PAN: 2
    };
    var S = function S(i, r) {
      var s = e === document ? document.body : e;
      it.copy(t.position).sub(_this19.target);
      var n = it.distance();
      (function (t, e) {
        it.set(e[0], e[1], e[2]), it.multiply(-t), A.add(it);
      })(2 * i * (n *= Math.tan((t.fov || 45) / 2 * Math.PI / 180)) / s.clientHeight, t.matrix), function (t, e) {
        it.set(e[4], e[5], e[6]), it.multiply(t), A.add(it);
      }(2 * r * n / s.clientHeight, t.matrix);
    };
    function N(t) {
      b.radius /= t;
    }
    function L(t, i) {
      rt.set(t, i), st.sub(rt, y).multiply(h);
      var r = e === document ? document.body : e;
      b.theta -= 2 * Math.PI * st.x / r.clientHeight, b.phi -= 2 * Math.PI * st.y / r.clientHeight, y.copy(rt);
    }
    function P(t, e) {
      rt.set(t, e), st.sub(rt, F).multiply(d), S(st.x, st.y), F.copy(rt);
    }
    var O = function O(t) {
        if (_this19.enabled) {
          switch (t.button) {
            case _this19.mouseButtons.ORBIT:
              if (!1 === a) return;
              y.set(t.clientX, t.clientY), _ = et.ROTATE;
              break;
            case _this19.mouseButtons.ZOOM:
              if (!1 === o) return;
              T.set(t.clientX, t.clientY), _ = et.DOLLY;
              break;
            case _this19.mouseButtons.PAN:
              if (!1 === c) return;
              F.set(t.clientX, t.clientY), _ = et.PAN;
          }
          _ !== et.NONE && (window.addEventListener("mousemove", B, !1), window.addEventListener("mouseup", C, !1));
        }
      },
      B = function B(t) {
        if (_this19.enabled) switch (_) {
          case et.ROTATE:
            if (!1 === a) return;
            L(t.clientX, t.clientY);
            break;
          case et.DOLLY:
            if (!1 === o) return;
            !function (t) {
              rt.set(t.clientX, t.clientY), st.sub(rt, T), st.y > 0 ? N(R()) : st.y < 0 && N(1 / R()), T.copy(rt);
            }(t);
            break;
          case et.PAN:
            if (!1 === c) return;
            P(t.clientX, t.clientY);
        }
      },
      C = function C() {
        _this19.enabled && (document.removeEventListener("mousemove", B, !1), document.removeEventListener("mouseup", C, !1), _ = et.NONE);
      },
      D = function D(t) {
        _this19.enabled && o && (_ === et.NONE || _ === et.ROTATE) && (t.stopPropagation(), t.deltaY < 0 ? N(1 / R()) : t.deltaY > 0 && N(R()));
      },
      U = function U(t) {
        if (_this19.enabled) switch (t.preventDefault(), t.touches.length) {
          case 1:
            if (!1 === a) return;
            y.set(t.touches[0].pageX, t.touches[0].pageY), _ = et.ROTATE;
            break;
          case 2:
            if (!1 === o && !1 === c) return;
            !function (t) {
              if (o) {
                var _e7 = t.touches[0].pageX - t.touches[1].pageX,
                  _i8 = t.touches[0].pageY - t.touches[1].pageY,
                  _r12 = Math.sqrt(_e7 * _e7 + _i8 * _i8);
                T.set(0, _r12);
              }
              if (c) {
                var _e8 = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                  _i9 = .5 * (t.touches[0].pageY + t.touches[1].pageY);
                F.set(_e8, _i9);
              }
            }(t), _ = et.DOLLY_PAN;
            break;
          default:
            _ = et.NONE;
        }
      },
      z = function z(t) {
        if (_this19.enabled) switch (t.preventDefault(), t.stopPropagation(), t.touches.length) {
          case 1:
            if (!1 === a) return;
            L(t.touches[0].pageX, t.touches[0].pageY);
            break;
          case 2:
            if (!1 === o && !1 === c) return;
            !function (t) {
              if (o) {
                var _e9 = t.touches[0].pageX - t.touches[1].pageX,
                  _i10 = t.touches[0].pageY - t.touches[1].pageY,
                  _r13 = Math.sqrt(_e9 * _e9 + _i10 * _i10);
                rt.set(0, _r13), st.set(0, Math.pow(rt.y / T.y, u)), N(st.y), T.copy(rt);
              }
              c && P(.5 * (t.touches[0].pageX + t.touches[1].pageX), .5 * (t.touches[0].pageY + t.touches[1].pageY));
            }(t);
            break;
          default:
            _ = et.NONE;
        }
      },
      I = function I() {
        _this19.enabled && (_ = et.NONE);
      },
      q = function q(t) {
        _this19.enabled && t.preventDefault();
      };
    this.remove = function () {
      e.removeEventListener("contextmenu", q, !1), e.removeEventListener("mousedown", O, !1), window.removeEventListener("wheel", D, !1), e.removeEventListener("touchstart", U, !1), e.removeEventListener("touchend", I, !1), e.removeEventListener("touchmove", z, !1), window.removeEventListener("mousemove", B, !1), window.removeEventListener("mouseup", C, !1);
    }, e.addEventListener("contextmenu", q, !1), e.addEventListener("mousedown", O, !1), window.addEventListener("wheel", D, !1), e.addEventListener("touchstart", U, {
      passive: !1
    }), e.addEventListener("touchend", I, !1), e.addEventListener("touchmove", z, {
      passive: !1
    });
  }, t.Plane = tt, t.Post = /*#__PURE__*/function () {
    function _class6(t) {
      var _ref21 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        e = _ref21.width,
        i = _ref21.height,
        r = _ref21.dpr,
        _ref21$wrapS = _ref21.wrapS,
        s = _ref21$wrapS === void 0 ? t.CLAMP_TO_EDGE : _ref21$wrapS,
        _ref21$wrapT = _ref21.wrapT,
        n = _ref21$wrapT === void 0 ? t.CLAMP_TO_EDGE : _ref21$wrapT,
        _ref21$minFilter = _ref21.minFilter,
        a = _ref21$minFilter === void 0 ? t.LINEAR : _ref21$minFilter,
        _ref21$magFilter = _ref21.magFilter,
        h = _ref21$magFilter === void 0 ? t.LINEAR : _ref21$magFilter,
        _ref21$geometry = _ref21.geometry,
        o = _ref21$geometry === void 0 ? new g(t, {
          position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3])
          },
          uv: {
            size: 2,
            data: new Float32Array([0, 0, 2, 0, 0, 2])
          }
        }) : _ref21$geometry;
      _classCallCheck(this, _class6);
      this.gl = t, this.options = {
        wrapS: s,
        wrapT: n,
        minFilter: a,
        magFilter: h
      }, this.passes = [], this.geometry = o;
      var l = this.fbo = {
        read: null,
        write: null,
        swap: function swap() {
          var t = l.read;
          l.read = l.write, l.write = t;
        }
      };
      this.resize({
        width: e,
        height: i,
        dpr: r
      });
    }
    return _createClass(_class6, [{
      key: "addPass",
      value: function addPass() {
        var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref22$vertex = _ref22.vertex,
          t = _ref22$vertex === void 0 ? lt : _ref22$vertex,
          _ref22$fragment = _ref22.fragment,
          e = _ref22$fragment === void 0 ? ut : _ref22$fragment,
          _ref22$uniforms = _ref22.uniforms,
          i = _ref22$uniforms === void 0 ? {} : _ref22$uniforms,
          _ref22$textureUniform = _ref22.textureUniform,
          r = _ref22$textureUniform === void 0 ? "tMap" : _ref22$textureUniform,
          _ref22$enabled = _ref22.enabled,
          s = _ref22$enabled === void 0 ? !0 : _ref22$enabled;
        i[r] = {
          value: this.fbo.read.texture
        };
        var n = new f(this.gl, {
            vertex: t,
            fragment: e,
            uniforms: i
          }),
          a = {
            mesh: new Y(this.gl, {
              geometry: this.geometry,
              program: n
            }),
            program: n,
            uniforms: i,
            enabled: s,
            textureUniform: r
          };
        return this.passes.push(a), a;
      }
    }, {
      key: "resize",
      value: function resize() {
        var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          t = _ref23.width,
          e = _ref23.height,
          i = _ref23.dpr;
        i && (this.dpr = i), t && (this.width = t, this.height = e || t), i = this.dpr || this.gl.renderer.dpr, t = (this.width || this.gl.renderer.width) * i, e = (this.height || this.gl.renderer.height) * i, this.options.width = t, this.options.height = e, this.fbo.read = new j(this.gl, this.options), this.fbo.write = new j(this.gl, this.options);
      }
    }, {
      key: "render",
      value: function render(_ref24) {
        var _this20 = this;
        var t = _ref24.scene,
          e = _ref24.camera,
          _ref24$target = _ref24.target,
          i = _ref24$target === void 0 ? null : _ref24$target,
          _ref24$update = _ref24.update,
          r = _ref24$update === void 0 ? !0 : _ref24$update,
          _ref24$sort = _ref24.sort,
          s = _ref24$sort === void 0 ? !0 : _ref24$sort,
          _ref24$frustumCull = _ref24.frustumCull,
          n = _ref24$frustumCull === void 0 ? !0 : _ref24$frustumCull;
        var a = this.passes.filter(function (t) {
          return t.enabled;
        });
        this.gl.renderer.render({
          scene: t,
          camera: e,
          target: a.length ? this.fbo.write : i,
          update: r,
          sort: s,
          frustumCull: n
        }), this.fbo.swap(), a.forEach(function (t, e) {
          t.mesh.program.uniforms[t.textureUniform].value = _this20.fbo.read.texture, _this20.gl.renderer.render({
            scene: t.mesh,
            target: e === a.length - 1 ? i : _this20.fbo.write,
            clear: !1
          }), _this20.fbo.swap();
        });
      }
    }]);
  }(), t.Program = f, t.Quat = N, t.Raycast = /*#__PURE__*/function () {
    function _class7(t) {
      _classCallCheck(this, _class7);
      this.gl = t, this.origin = new l(), this.direction = new l();
    }
    return _createClass(_class7, [{
      key: "castMouse",
      value: function castMouse(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];
        t.worldMatrix.getTranslation(this.origin), this.direction.set(e[0], e[1], .5), t.unproject(this.direction), this.direction.sub(this.origin).normalize();
      }
    }, {
      key: "intersectBounds",
      value: function intersectBounds(t) {
        var _this21 = this;
        Array.isArray(t) || (t = [t]);
        var e = ot,
          i = nt,
          r = at,
          s = [];
        return t.forEach(function (t) {
          t.geometry.bounds || t.geometry.computeBoundingBox(), "sphere" === t.geometry.raycast && t.geometry.bounds === 1 / 0 && t.geometry.computeBoundingSphere(), e.inverse(t.worldMatrix), i.copy(_this21.origin).applyMatrix4(e), r.copy(_this21.direction).transformDirection(e);
          var n = 0;
          (n = "sphere" === t.geometry.raycast ? _this21.intersectSphere(t.geometry.bounds, i, r) : _this21.intersectBox(t.geometry.bounds, i, r)) && (t.hit || (t.hit = {
            localPoint: new l()
          }), t.hit.distance = n, t.hit.localPoint.copy(r).multiply(n).add(i), s.push(t));
        }), s.sort(function (t, e) {
          return t.hit.distance - e.hit.distance;
        }), s;
      }
    }, {
      key: "intersectSphere",
      value: function intersectSphere(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.origin;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.direction;
        var r = ht;
        r.sub(t.center, e);
        var s = r.dot(i),
          n = r.dot(r) - s * s,
          a = t.radius * t.radius;
        if (n > a) return 0;
        var h = Math.sqrt(a - n),
          o = s - h,
          l = s + h;
        return o < 0 && l < 0 ? 0 : o < 0 ? l : o;
      }
    }, {
      key: "intersectBox",
      value: function intersectBox(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.origin;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.direction;
        var r, s, n, a, h, o;
        var l = 1 / i.x,
          u = 1 / i.y,
          c = 1 / i.z,
          d = t.min,
          g = t.max;
        return r = ((l >= 0 ? d.x : g.x) - e.x) * l, s = ((l >= 0 ? g.x : d.x) - e.x) * l, n = ((u >= 0 ? d.y : g.y) - e.y) * u, r > (a = ((u >= 0 ? g.y : d.y) - e.y) * u) || n > s ? 0 : (n > r && (r = n), a < s && (s = a), h = ((c >= 0 ? d.z : g.z) - e.z) * c, r > (o = ((c >= 0 ? g.z : d.z) - e.z) * c) || h > s ? 0 : (h > r && (r = h), o < s && (s = o), s < 0 ? 0 : r >= 0 ? r : s));
      }
    }]);
  }(), t.RenderTarget = j, t.Renderer = /*#__PURE__*/function () {
    function _class8() {
      var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref25$canvas = _ref25.canvas,
        t = _ref25$canvas === void 0 ? document.createElement("canvas") : _ref25$canvas,
        _ref25$width = _ref25.width,
        e = _ref25$width === void 0 ? 300 : _ref25$width,
        _ref25$height = _ref25.height,
        i = _ref25$height === void 0 ? 150 : _ref25$height,
        _ref25$dpr = _ref25.dpr,
        r = _ref25$dpr === void 0 ? 1 : _ref25$dpr,
        _ref25$alpha = _ref25.alpha,
        s = _ref25$alpha === void 0 ? !1 : _ref25$alpha,
        _ref25$depth = _ref25.depth,
        n = _ref25$depth === void 0 ? !0 : _ref25$depth,
        _ref25$stencil = _ref25.stencil,
        a = _ref25$stencil === void 0 ? !1 : _ref25$stencil,
        _ref25$antialias = _ref25.antialias,
        h = _ref25$antialias === void 0 ? !1 : _ref25$antialias,
        _ref25$premultipliedA = _ref25.premultipliedAlpha,
        o = _ref25$premultipliedA === void 0 ? !1 : _ref25$premultipliedA,
        _ref25$preserveDrawin = _ref25.preserveDrawingBuffer,
        l = _ref25$preserveDrawin === void 0 ? !1 : _ref25$preserveDrawin,
        _ref25$powerPreferenc = _ref25.powerPreference,
        u = _ref25$powerPreferenc === void 0 ? "default" : _ref25$powerPreferenc,
        _ref25$autoClear = _ref25.autoClear,
        c = _ref25$autoClear === void 0 ? !0 : _ref25$autoClear,
        _ref25$webgl = _ref25.webgl,
        d = _ref25$webgl === void 0 ? 2 : _ref25$webgl;
      _classCallCheck(this, _class8);
      var g = {
        alpha: s,
        depth: n,
        stencil: a,
        antialias: h,
        premultipliedAlpha: o,
        preserveDrawingBuffer: l,
        powerPreference: u
      };
      this.dpr = r, this.alpha = s, this.color = !0, this.depth = n, this.stencil = a, this.premultipliedAlpha = o, this.autoClear = c, 2 === d && (this.gl = t.getContext("webgl2", g)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", g) || t.getContext("experimental-webgl", g)), this.gl.renderer = this, this.setSize(e, i), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.state = {}, this.state.blendFunc = {
        src: this.gl.ONE,
        dst: this.gl.ZERO
      }, this.state.blendEquation = {
        modeRGB: this.gl.FUNC_ADD
      }, this.state.cullFace = null, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
        width: null,
        height: null
      }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map(), this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture")), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES");
    }
    return _createClass(_class8, [{
      key: "setSize",
      value: function setSize(t, e) {
        this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, Object.assign(this.gl.canvas.style, {
          width: t + "px",
          height: e + "px"
        });
      }
    }, {
      key: "setViewport",
      value: function setViewport(t, e) {
        this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.gl.viewport(0, 0, t, e));
      }
    }, {
      key: "enable",
      value: function enable(t) {
        !0 !== this.state[t] && (this.gl.enable(t), this.state[t] = !0);
      }
    }, {
      key: "disable",
      value: function disable(t) {
        !1 !== this.state[t] && (this.gl.disable(t), this.state[t] = !1);
      }
    }, {
      key: "setBlendFunc",
      value: function setBlendFunc(t, e, i, r) {
        this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === r || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = i, this.state.blendFunc.dstAlpha = r, void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, r) : this.gl.blendFunc(t, e));
      }
    }, {
      key: "setBlendEquation",
      value: function setBlendEquation(t, e) {
        this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e || (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t));
      }
    }, {
      key: "setCullFace",
      value: function setCullFace(t) {
        this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t));
      }
    }, {
      key: "setFrontFace",
      value: function setFrontFace(t) {
        this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t));
      }
    }, {
      key: "setDepthMask",
      value: function setDepthMask(t) {
        this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t));
      }
    }, {
      key: "setDepthFunc",
      value: function setDepthFunc(t) {
        this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t));
      }
    }, {
      key: "activeTexture",
      value: function activeTexture(t) {
        this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t));
      }
    }, {
      key: "bindFramebuffer",
      value: function bindFramebuffer() {
        var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref26$target = _ref26.target,
          t = _ref26$target === void 0 ? this.gl.FRAMEBUFFER : _ref26$target,
          _ref26$buffer = _ref26.buffer,
          e = _ref26$buffer === void 0 ? null : _ref26$buffer;
        this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e));
      }
    }, {
      key: "getExtension",
      value: function getExtension(t, e, i) {
        return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t][i].bind(this.extensions[t]) : this.extensions[t]);
      }
    }, {
      key: "sortOpaque",
      value: function sortOpaque(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id;
      }
    }, {
      key: "sortTransparent",
      value: function sortTransparent(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id;
      }
    }, {
      key: "sortUI",
      value: function sortUI(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id;
      }
    }, {
      key: "getRenderList",
      value: function getRenderList(_ref27) {
        var t = _ref27.scene,
          e = _ref27.camera,
          i = _ref27.frustumCull,
          r = _ref27.sort;
        var s = [];
        if (e && i && e.updateFrustum(), t.traverse(function (t) {
          if (!t.visible) return !0;
          t.draw && (i && t.frustumCulled && e && !e.frustumIntersectsMesh(t) || s.push(t));
        }), r) {
          var _t9 = [],
            _i11 = [],
            _r14 = [];
          s.forEach(function (s) {
            s.program.transparent ? s.program.depthTest ? _i11.push(s) : _r14.push(s) : _t9.push(s), s.zDepth = 0, 0 === s.renderOrder && s.program.depthTest && e && (s.worldMatrix.getTranslation(v), v.applyMatrix4(e.projectionViewMatrix), s.zDepth = v.z);
          }), _t9.sort(this.sortOpaque), _i11.sort(this.sortTransparent), _r14.sort(this.sortUI), s = _t9.concat(_i11, _r14);
        }
        return s;
      }
    }, {
      key: "render",
      value: function render(_ref28) {
        var t = _ref28.scene,
          e = _ref28.camera,
          _ref28$target = _ref28.target,
          i = _ref28$target === void 0 ? null : _ref28$target,
          _ref28$update = _ref28.update,
          r = _ref28$update === void 0 ? !0 : _ref28$update,
          _ref28$sort = _ref28.sort,
          s = _ref28$sort === void 0 ? !0 : _ref28$sort,
          _ref28$frustumCull = _ref28.frustumCull,
          n = _ref28$frustumCull === void 0 ? !0 : _ref28$frustumCull,
          a = _ref28.clear;
        null === i ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)), (a || this.autoClear && !1 !== a) && (!this.depth || i && i.depth || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), r && t.updateMatrixWorld(), e && null === e.parent && e.updateMatrixWorld(), this.getRenderList({
          scene: t,
          camera: e,
          frustumCull: n,
          sort: s
        }).forEach(function (t) {
          t.draw({
            camera: e
          });
        });
      }
    }]);
  }(), t.Skin = /*#__PURE__*/function (_Y) {
    function _class9(t) {
      var _this22;
      var _ref29 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        e = _ref29.rig,
        i = _ref29.geometry,
        r = _ref29.program,
        _ref29$mode = _ref29.mode,
        s = _ref29$mode === void 0 ? t.TRIANGLES : _ref29$mode;
      _classCallCheck(this, _class9);
      _this22 = _callSuper(this, _class9, [t, {
        geometry: i,
        program: r,
        mode: s
      }]), _this22.createBones(e), _this22.createBoneTexture(), _this22.animations = [], Object.assign(_this22.program.uniforms, {
        boneTexture: {
          value: _this22.boneTexture
        },
        boneTextureSize: {
          value: _this22.boneTextureSize
        }
      });
      return _this22;
    }
    _inherits(_class9, _Y);
    return _createClass(_class9, [{
      key: "createBones",
      value: function createBones(t) {
        var _this23 = this;
        if (this.root = new C(), this.bones = [], t.bones && t.bones.length) {
          for (var _e10 = 0; _e10 < t.bones.length; _e10++) {
            var _i12 = new C();
            _i12.position.fromArray(t.bindPose.position, 3 * _e10), _i12.quaternion.fromArray(t.bindPose.quaternion, 4 * _e10), _i12.scale.fromArray(t.bindPose.scale, 3 * _e10), this.bones.push(_i12);
          }
          t.bones.forEach(function (t, e) {
            if (_this23.bones[e].name = t.name, -1 === t.parent) return _this23.bones[e].setParent(_this23.root);
            _this23.bones[e].setParent(_this23.bones[t.parent]);
          }), this.root.updateMatrixWorld(!0), this.bones.forEach(function (t) {
            t.bindInverse = _construct(P, _toConsumableArray(t.worldMatrix)).inverse();
          });
        }
      }
    }, {
      key: "createBoneTexture",
      value: function createBoneTexture() {
        if (!this.bones.length) return;
        var t = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(4 * this.bones.length)) / Math.LN2)));
        this.boneMatrices = new Float32Array(t * t * 4), this.boneTextureSize = t, this.boneTexture = new W(this.gl, {
          image: this.boneMatrices,
          generateMipmaps: !1,
          type: this.gl.FLOAT,
          internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA16F : this.gl.RGBA,
          flipY: !1,
          width: t
        });
      }
    }, {
      key: "addAnimation",
      value: function addAnimation(t) {
        var e = new xt({
          objects: this.bones,
          data: t
        });
        return this.animations.push(e), e;
      }
    }, {
      key: "update",
      value: function update() {
        var t = 0;
        this.animations.forEach(function (e) {
          return t += e.weight;
        }), this.animations.forEach(function (e, i) {
          e.update(t, 0 === i);
        });
      }
    }, {
      key: "draw",
      value: function draw() {
        var _this24 = this;
        var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          t = _ref30.camera;
        this.root.updateMatrixWorld(!0), this.bones.forEach(function (t, e) {
          wt.multiply(t.worldMatrix, t.bindInverse), _this24.boneMatrices.set(wt, 16 * e);
        }), this.boneTexture && (this.boneTexture.needsUpdate = !0), _get(_getPrototypeOf(_class9.prototype), "draw", this).call(this, {
          camera: t
        });
      }
    }]);
  }(Y), t.Sphere = /*#__PURE__*/function (_g4) {
    function _class10(t) {
      var _this25;
      var _ref31 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref31$radius = _ref31.radius,
        e = _ref31$radius === void 0 ? .5 : _ref31$radius,
        _ref31$widthSegments = _ref31.widthSegments,
        i = _ref31$widthSegments === void 0 ? 16 : _ref31$widthSegments,
        _ref31$heightSegments = _ref31.heightSegments,
        r = _ref31$heightSegments === void 0 ? Math.ceil(.5 * i) : _ref31$heightSegments,
        _ref31$phiStart = _ref31.phiStart,
        s = _ref31$phiStart === void 0 ? 0 : _ref31$phiStart,
        _ref31$phiLength = _ref31.phiLength,
        n = _ref31$phiLength === void 0 ? 2 * Math.PI : _ref31$phiLength,
        _ref31$thetaStart = _ref31.thetaStart,
        a = _ref31$thetaStart === void 0 ? 0 : _ref31$thetaStart,
        _ref31$thetaLength = _ref31.thetaLength,
        h = _ref31$thetaLength === void 0 ? Math.PI : _ref31$thetaLength,
        _ref31$attributes = _ref31.attributes,
        o = _ref31$attributes === void 0 ? {} : _ref31$attributes;
      _classCallCheck(this, _class10);
      var u = i,
        c = r,
        d = s,
        g = n,
        p = a,
        m = h,
        f = (u + 1) * (c + 1),
        x = u * c * 6,
        w = new Float32Array(3 * f),
        b = new Float32Array(3 * f),
        M = new Float32Array(2 * f),
        v = f > 65536 ? new Uint32Array(x) : new Uint16Array(x);
      var A = 0,
        E = 0,
        y = 0,
        F = p + m;
      var T = [];
      var _ = new l();
      for (var _t10 = 0; _t10 <= c; _t10++) {
        var _i13 = [],
          _r15 = _t10 / c;
        for (var _t11 = 0; _t11 <= u; _t11++, A++) {
          var _s5 = _t11 / u,
            _n4 = -e * Math.cos(d + _s5 * g) * Math.sin(p + _r15 * m),
            _a2 = e * Math.cos(p + _r15 * m),
            _h = e * Math.sin(d + _s5 * g) * Math.sin(p + _r15 * m);
          w[3 * A] = _n4, w[3 * A + 1] = _a2, w[3 * A + 2] = _h, _.set(_n4, _a2, _h).normalize(), b[3 * A] = _.x, b[3 * A + 1] = _.y, b[3 * A + 2] = _.z, M[2 * A] = _s5, M[2 * A + 1] = 1 - _r15, _i13.push(E++);
        }
        T.push(_i13);
      }
      for (var _t12 = 0; _t12 < c; _t12++) for (var _e11 = 0; _e11 < u; _e11++) {
        var _i14 = T[_t12][_e11 + 1],
          _r16 = T[_t12][_e11],
          _s6 = T[_t12 + 1][_e11],
          _n5 = T[_t12 + 1][_e11 + 1];
        (0 !== _t12 || p > 0) && (v[3 * y] = _i14, v[3 * y + 1] = _r16, v[3 * y + 2] = _n5, y++), (_t12 !== c - 1 || F < Math.PI) && (v[3 * y] = _r16, v[3 * y + 1] = _s6, v[3 * y + 2] = _n5, y++);
      }
      Object.assign(o, {
        position: {
          size: 3,
          data: w
        },
        normal: {
          size: 3,
          data: b
        },
        uv: {
          size: 2,
          data: M
        },
        index: {
          data: v
        }
      }), _this25 = _callSuper(this, _class10, [t, o]);
      return _this25;
    }
    _inherits(_class10, _g4);
    return _createClass(_class10);
  }(g), t.Text = function (_ref32) {
    var t = _ref32.font,
      e = _ref32.text,
      _ref32$width = _ref32.width,
      i = _ref32$width === void 0 ? 1 / 0 : _ref32$width,
      _ref32$align = _ref32.align,
      r = _ref32$align === void 0 ? "left" : _ref32$align,
      _ref32$size = _ref32.size,
      s = _ref32$size === void 0 ? 1 : _ref32$size,
      _ref32$letterSpacing = _ref32.letterSpacing,
      n = _ref32$letterSpacing === void 0 ? 0 : _ref32$letterSpacing,
      _ref32$lineHeight = _ref32.lineHeight,
      a = _ref32$lineHeight === void 0 ? 1.4 : _ref32$lineHeight,
      _ref32$wordSpacing = _ref32.wordSpacing,
      h = _ref32$wordSpacing === void 0 ? 0 : _ref32$wordSpacing,
      _ref32$wordBreak = _ref32.wordBreak,
      o = _ref32$wordBreak === void 0 ? !1 : _ref32$wordBreak;
    var l = this;
    var u, c, d, g, p;
    var m = /\n/,
      f = /\s/;
    function x() {
      d = t.common.lineHeight, g = t.common.base, p = s / g;
      var i = e.replace(/[ \n]/g, "").length;
      c = {
        position: new Float32Array(4 * i * 3),
        uv: new Float32Array(4 * i * 2),
        id: new Float32Array(4 * i),
        index: new Uint16Array(6 * i)
      };
      for (var _t13 = 0; _t13 < i; _t13++) c.id[_t13] = _t13, c.index.set([4 * _t13, 4 * _t13 + 2, 4 * _t13 + 1, 4 * _t13 + 1, 4 * _t13 + 2, 4 * _t13 + 3], 6 * _t13);
      w();
    }
    function w() {
      var d = [];
      var g = 0,
        x = 0,
        w = 0,
        M = v();
      function v() {
        var t = {
          width: 0,
          glyphs: []
        };
        return d.push(t), x = g, w = 0, t;
      }
      var A = 0;
      for (; g < e.length && A < 100;) {
        A++;
        var _t14 = e[g];
        if (!M.width && f.test(_t14)) {
          x = ++g, w = 0;
          continue;
        }
        if (m.test(_t14)) {
          g++, M = v();
          continue;
        }
        var _r17 = u[_t14];
        if (M.glyphs.length) {
          var _t15 = M.glyphs[M.glyphs.length - 1][0];
          var _e12 = b(_r17.id, _t15.id) * p;
          M.width += _e12, w += _e12;
        }
        M.glyphs.push([_r17, M.width]);
        var _a3 = 0;
        if (f.test(_t14) ? (x = g, w = 0, _a3 += h * s) : _a3 += n * s, _a3 += _r17.xadvance * p, M.width += _a3, w += _a3, M.width > i) {
          if (o && M.glyphs.length > 1) {
            M.width -= _a3, M.glyphs.pop(), M = v();
            continue;
          }
          if (!o && w !== M.width) {
            var _t16 = g - x + 1;
            M.glyphs.splice(-_t16, _t16), g = x, M.width -= w, M = v();
            continue;
          }
        }
        g++;
      }
      M.width || d.pop(), function (e) {
        var i = t.common.scaleW,
          n = t.common.scaleH;
        var h = .07 * s,
          o = 0;
        for (var _t17 = 0; _t17 < e.length; _t17++) {
          var _l = e[_t17];
          for (var _t18 = 0; _t18 < _l.glyphs.length; _t18++) {
            var _e13 = _l.glyphs[_t18][0];
            var _s7 = _l.glyphs[_t18][1];
            if ("center" === r ? _s7 -= .5 * _l.width : "right" === r && (_s7 -= _l.width), f.test(_e13.char)) continue;
            _s7 += _e13.xoffset * p, h -= _e13.yoffset * p;
            var _a4 = _e13.width * p,
              _u = _e13.height * p;
            c.position.set([_s7, h - _u, 0, _s7, h, 0, _s7 + _a4, h - _u, 0, _s7 + _a4, h, 0], 4 * o * 3);
            var _d = _e13.x / i,
              _g5 = _e13.width / i,
              _m = 1 - _e13.y / n,
              _x = _e13.height / n;
            c.uv.set([_d, _m - _x, _d, _m, _d + _g5, _m - _x, _d + _g5, _m], 4 * o * 2), h += _e13.yoffset * p, o++;
          }
          h -= s * a;
        }
        l.buffers = c, l.numLines = e.length, l.height = l.numLines * s * a;
      }(d);
    }
    function b(e, i) {
      for (var _r18 = 0; _r18 < t.kernings.length; _r18++) {
        var _s8 = t.kernings[_r18];
        if (!(_s8.first < e || _s8.second < i)) return _s8.first > e ? 0 : _s8.first === e && _s8.second > i ? 0 : _s8.amount;
      }
      return 0;
    }
    u = {}, t.chars.forEach(function (t) {
      return u[t.char] = t;
    }), x(), this.resize = function (t) {
      i = t.width, w();
    }, this.update = function (t) {
      e = t.text, x();
    };
  }, t.Texture = W, t.Transform = C, t.Vec2 = J, t.Vec3 = l, t.Vec4 = /*#__PURE__*/function (_Array8) {
    function _class11() {
      var _this26;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t;
      _classCallCheck(this, _class11);
      return _possibleConstructorReturn(_this26, (_this26 = _callSuper(this, _class11, [t, e, i, r]), _assertThisInitialized(_this26)));
    }
    _inherits(_class11, _Array8);
    return _createClass(_class11, [{
      key: "x",
      get: function get() {
        return this[0];
      },
      set: function set(t) {
        this[0] = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this[1];
      },
      set: function set(t) {
        this[1] = t;
      }
    }, {
      key: "z",
      get: function get() {
        return this[2];
      },
      set: function set(t) {
        this[2] = t;
      }
    }, {
      key: "w",
      get: function get() {
        return this[3];
      },
      set: function set(t) {
        this[3] = t;
      }
    }, {
      key: "set",
      value: function set(t, e, i, r) {
        return t.length ? this.copy(t) : (E(this, t, e, i, r), this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return A(this, t), this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return y(this, this), this;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t;
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Array)), t;
}({});
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
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/flow-map/bundle.js"], null)
//# sourceMappingURL=/bundle.6ab27184.js.map