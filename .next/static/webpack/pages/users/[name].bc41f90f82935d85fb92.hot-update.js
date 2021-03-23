webpackHotUpdate_N_E("pages/users/[name]",{

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = /*#__PURE__*/function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/users/[name].jsx":
/*!********************************!*\
  !*** ./pages/users/[name].jsx ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "C:\\dev\\next\\nextProject2\\projectNext\\pages\\users\\[name].jsx",
    _this = undefined;


var style = new String("h2.jsx-960127918{margin-left:20px;}.user-bio.jsx-960127918{margin-top :12px;font-style:italic;}.profile-box.jsx-960127918{width :25%;max-width :272px;margin-right :26px;}.profile-image-wrapper.jsx-960127918{width :100%;border :1px solid #ele4e8;}.profile-image-wrapper.jsx-960127918 .profile-image.jsx-960127918{display :block;width :100%;}.profile-username.jsx-960127918{margin :0;padding-top :16px;font-size :26px;}.profile-user-login.jsx-960127918{margin:0;font-size:20px;}.profile-user-bio.jsx-960127918{margin:0;padding-top:16px;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXG5leHRcXG5leHRQcm9qZWN0MlxccHJvamVjdE5leHRcXHBhZ2VzXFx1c2Vyc1xcW25hbWVdLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFaUIsQUFHeUIsQUFHQyxBQUtOLEFBTUMsQUFLRyxBQUtMLEFBTUYsQUFLQSxTQUpNLEFBS0UsQ0FYQyxDQWhCQSxDQU1TLEdBS2QsRUFuQmhCLEFBR3NCLE9BNEJ0QixFQUtrQixDQWhCbEIsQ0FYc0IsQUFnQkYsT0FyQnBCLEdBV0EsR0FzQkEsR0FYQSxHQWhCQSIsImZpbGUiOiJDOlxcZGV2XFxuZXh0XFxuZXh0UHJvamVjdDJcXHByb2plY3ROZXh0XFxwYWdlc1xcdXNlcnNcXFtuYW1lXS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItYmlvIHtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtYm94IHtcclxuICAgICAgICB3aWR0aCA6IDI1JTtcclxuICAgICAgICBtYXgtd2lkdGggOiAyNzJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQgOjI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjZWxlNGU4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlLXdyYXBwZXIgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlcm5hbWUge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3AgOjE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWxvZ2luIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTZweDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IHVzZXJuYW1lID0gKHt1c2VyfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codXNlci5hdmF0YXJfdXJsKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgdXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2VcIiBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PXtgJHt1c2VyLm5hbWV9IO2UhOuhnO2VhCDsnbTrr7jsp4BgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VybmFtZVwiPnt1c2VyLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1sb2dpblwiPnt1c2VyLmxvZ2lufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1iaW9cIj57dXNlci5pZH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+7Jyg7KCA7KCV67O06rCAIOyXhuyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBuYW1lID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZXImJnVzZXIubmFtZTtcclxuICAgIHJldHVybiA8ZGl2Pnt1c2VybmFtZX08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHF1ZXJ5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9YCk7XHJcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlci5hdmF0YXJfdXJsKVxyXG4gICAgICAgICAgICByZXR1cm4ge3Byb3BzOntuYW1lfX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7cHJvcHM6e319O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHJldHVybiB7cHJvcHM6e319O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYW1lOyJdfQ== */\n/*@ sourceURL=C:\\\\dev\\\\next\\\\nextProject2\\\\projectNext\\\\pages\\\\users\\\\[name].jsx */");
style.__hash = "960127918";

var username = function username(_ref) {
  var user = _ref.user;
  console.log(user.avatar_url);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-".concat(style.__hash) + " " + "profile-box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-".concat(style.__hash) + " " + "profile-image-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: user.avatar_url,
          alt: "".concat(user.name, " \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0"),
          className: "jsx-".concat(style.__hash) + " " + "profile-image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "jsx-".concat(style.__hash) + " " + "profile-username",
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-".concat(style.__hash) + " " + "profile-user-login",
        children: user.login
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-".concat(style.__hash) + " " + "profile-user-bio",
        children: user.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-".concat(style.__hash),
      children: "\uC720\uC800\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: style.__hash,
      children: style
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

var name = function name(_ref2) {
  var user = _ref2.user;
  var username = user && user.name;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: username
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 12
  }, _this);
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (name);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0cmluZy1oYXNoL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L2xpYi9zdHlsZXNoZWV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3N0eWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3N0eWxlc2hlZXQtcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L3N0eWxlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9bbmFtZV0uanN4Il0sIm5hbWVzIjpbInN0eWxlIiwidXNlcm5hbWUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImF2YXRhcl91cmwiLCJuYW1lIiwibG9naW4iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMekI7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDaEJBLCtDQUFhOztBQUViO0FBQ0E7O0FBRUEsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck47QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsYUFBb0I7O0FBRWxGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxtQkFBbUIsaUNBQWlDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDN1JhOztBQUViO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCLGlEQUFpRCxtQkFBTyxDQUFDLG9GQUF1Qjs7QUFFaEYsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLCtDQUErQywwREFBMEQsMkNBQTJDLGlDQUFpQzs7QUFFckw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekVhOztBQUViO0FBQ0E7O0FBRUEseUNBQXlDLG1CQUFPLENBQUMsd0RBQWE7O0FBRTlELHlDQUF5QyxtQkFBTyxDQUFDLDBFQUFrQjs7QUFFbkUsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQzs7O0FBRzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGtCQUFrQixjQUFjLE9BQU8sR0FBRyxjQUFjLEdBQUc7O0FBRWxHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUMzUEEsaUJBQWlCLG1CQUFPLENBQUMsNkRBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRXZDLElBQU1BLEtBQUssK3dJQUFYOzs7QUEyQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUN6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csVUFBakI7QUFDQSxzQkFDSTtBQUFBLGVBQ0VILElBQUksZ0JBQ0Y7QUFBQSxxREFBZSxhQUFmO0FBQUEsOEJBQ0k7QUFBQSx1REFBZSx1QkFBZjtBQUFBLCtCQUNJO0FBQStCLGFBQUcsRUFBRUEsSUFBSSxDQUFDRyxVQUF6QztBQUFxRCxhQUFHLFlBQUtILElBQUksQ0FBQ0ksSUFBViwyQ0FBeEQ7QUFBQSx5REFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFBLHVEQUFjLGtCQUFkO0FBQUEsa0JBQWtDSixJQUFJLENBQUNJO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJO0FBQUEsdURBQWEsb0JBQWI7QUFBQSxrQkFBbUNKLElBQUksQ0FBQ0s7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBTUk7QUFBQSx1REFBYSxrQkFBYjtBQUFBLGtCQUFpQ0wsSUFBSSxDQUFDTTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREUsZ0JBVUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFpQkgsQ0FuQkQ7O0FBc0JBLElBQU1GLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQWM7QUFBQSxNQUFYSixJQUFXLFNBQVhBLElBQVc7QUFDdkIsTUFBTUQsUUFBUSxHQUFHQyxJQUFJLElBQUVBLElBQUksQ0FBQ0ksSUFBNUI7QUFDQSxzQkFBTztBQUFBLGNBQU1MO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FIRDs7O0FBc0JlSyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy9bbmFtZV0uYmM0MWY5MGY4MjkzNWQ4NWZiOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XHJcblxyXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcclxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXHJcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcclxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cclxuXHJcbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xyXG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xyXG5cclxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcclxufVxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcclxuICAgIH1cclxufSAoKSlcclxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcclxuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XHJcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXHJcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcclxuICAgIH1cclxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXHJcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcclxuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcclxuICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcclxuICAgICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xyXG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XHJcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXHJcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxyXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XHJcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xyXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xyXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcclxuICAgIH0gY2F0Y2ggKGUpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSl7XHJcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxyXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG52YXIgcXVldWUgPSBbXTtcclxudmFyIGRyYWluaW5nID0gZmFsc2U7XHJcbnZhciBjdXJyZW50UXVldWU7XHJcbnZhciBxdWV1ZUluZGV4ID0gLTE7XHJcblxyXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XHJcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xyXG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XHJcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xyXG4gICAgaWYgKGRyYWluaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XHJcbiAgICBkcmFpbmluZyA9IHRydWU7XHJcblxyXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcclxuICAgIHdoaWxlKGxlbikge1xyXG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xyXG4gICAgICAgIHF1ZXVlID0gW107XHJcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xyXG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XHJcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xyXG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG59XHJcblxyXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xyXG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcclxuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XHJcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcclxuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XHJcbiAgICB0aGlzLmZ1biA9IGZ1bjtcclxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcclxufVxyXG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcclxufTtcclxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcclxucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcclxucHJvY2Vzcy5lbnYgPSB7fTtcclxucHJvY2Vzcy5hcmd2ID0gW107XHJcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xyXG5wcm9jZXNzLnZlcnNpb25zID0ge307XHJcblxyXG5mdW5jdGlvbiBub29wKCkge31cclxuXHJcbnByb2Nlc3Mub24gPSBub29wO1xyXG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcclxucHJvY2Vzcy5vbmNlID0gbm9vcDtcclxucHJvY2Vzcy5vZmYgPSBub29wO1xyXG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcclxucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xyXG5wcm9jZXNzLmVtaXQgPSBub29wO1xyXG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XHJcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XHJcblxyXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XHJcblxyXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xyXG59O1xyXG5cclxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcclxucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XHJcbn07XHJcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gaGFzaChzdHIpIHtcclxuICB2YXIgaGFzaCA9IDUzODEsXHJcbiAgICAgIGkgICAgPSBzdHIubGVuZ3RoO1xyXG5cclxuICB3aGlsZShpKSB7XHJcbiAgICBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdCgtLWkpO1xyXG4gIH1cclxuXHJcbiAgLyogSmF2YVNjcmlwdCBkb2VzIGJpdHdpc2Ugb3BlcmF0aW9ucyAobGlrZSBYT1IsIGFib3ZlKSBvbiAzMi1iaXQgc2lnbmVkXHJcbiAgICogaW50ZWdlcnMuIFNpbmNlIHdlIHdhbnQgdGhlIHJlc3VsdHMgdG8gYmUgYWx3YXlzIHBvc2l0aXZlLCBjb252ZXJ0IHRoZVxyXG4gICAqIHNpZ25lZCBpbnQgdG8gYW4gdW5zaWduZWQgYnkgZG9pbmcgYW4gdW5zaWduZWQgYml0c2hpZnQuICovXHJcbiAgcmV0dXJuIGhhc2ggPj4+IDA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaGFzaDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcclxuXHJcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XHJcblxyXG4vKlxyXG5CYXNlZCBvbiBHbGFtb3IncyBzaGVldFxyXG5odHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvYmxvYi82NjdiNDgwZDMxYjM3MjFhOTA1MDIxYjI2ZTEyOTBjZTkyY2EyODc5L3NyYy9zaGVldC5qc1xyXG4qL1xyXG52YXIgaXNQcm9kID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XHJcblxyXG52YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhvKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XHJcbn07XHJcblxyXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChfdGVtcCkge1xyXG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcclxuICAgICAgICBfcmVmJG5hbWUgPSBfcmVmLm5hbWUsXHJcbiAgICAgICAgbmFtZSA9IF9yZWYkbmFtZSA9PT0gdm9pZCAwID8gJ3N0eWxlc2hlZXQnIDogX3JlZiRuYW1lLFxyXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcclxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB2b2lkIDAgPyBpc1Byb2QgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXHJcbiAgICAgICAgX3JlZiRpc0Jyb3dzZXIgPSBfcmVmLmlzQnJvd3NlcixcclxuICAgICAgICBpc0Jyb3dzZXIgPSBfcmVmJGlzQnJvd3NlciA9PT0gdm9pZCAwID8gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgOiBfcmVmJGlzQnJvd3NlcjtcclxuXHJcbiAgICBpbnZhcmlhbnQoaXNTdHJpbmcobmFtZSksICdgbmFtZWAgbXVzdCBiZSBhIHN0cmluZycpO1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID0gXCIjXCIgKyBuYW1lICsgXCItZGVsZXRlZC1ydWxlX19fX3t9XCI7XHJcbiAgICBpbnZhcmlhbnQodHlwZW9mIG9wdGltaXplRm9yU3BlZWQgPT09ICdib29sZWFuJywgJ2BvcHRpbWl6ZUZvclNwZWVkYCBtdXN0IGJlIGEgYm9vbGVhbicpO1xyXG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IG9wdGltaXplRm9yU3BlZWQ7XHJcbiAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XHJcbiAgICB0aGlzLl9zZXJ2ZXJTaGVldCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX3RhZ3MgPSBbXTtcclxuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9ydWxlc0NvdW50ID0gMDtcclxuICAgIHZhciBub2RlID0gdGhpcy5faXNCcm93c2VyICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJjc3Atbm9uY2VcIl0nKTtcclxuICAgIHRoaXMuX25vbmNlID0gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xyXG5cclxuICBfcHJvdG8uc2V0T3B0aW1pemVGb3JTcGVlZCA9IGZ1bmN0aW9uIHNldE9wdGltaXplRm9yU3BlZWQoYm9vbCkge1xyXG4gICAgaW52YXJpYW50KHR5cGVvZiBib29sID09PSAnYm9vbGVhbicsICdgc2V0T3B0aW1pemVGb3JTcGVlZGAgYWNjZXB0cyBhIGJvb2xlYW4nKTtcclxuICAgIGludmFyaWFudCh0aGlzLl9ydWxlc0NvdW50ID09PSAwLCAnb3B0aW1pemVGb3JTcGVlZCBjYW5ub3QgYmUgd2hlbiBydWxlcyBoYXZlIGFscmVhZHkgYmVlbiBpbnNlcnRlZCcpO1xyXG4gICAgdGhpcy5mbHVzaCgpO1xyXG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IGJvb2w7XHJcbiAgICB0aGlzLmluamVjdCgpO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5pc09wdGltaXplRm9yU3BlZWQgPSBmdW5jdGlvbiBpc09wdGltaXplRm9yU3BlZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW1pemVGb3JTcGVlZDtcclxuICB9O1xyXG5cclxuICBfcHJvdG8uaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0KCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICBpbnZhcmlhbnQoIXRoaXMuX2luamVjdGVkLCAnc2hlZXQgYWxyZWFkeSBpbmplY3RlZCcpO1xyXG4gICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xyXG4gICAgICB0aGlzLl90YWdzWzBdID0gdGhpcy5tYWtlU3R5bGVUYWcodGhpcy5fbmFtZSk7XHJcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSAnaW5zZXJ0UnVsZScgaW4gdGhpcy5nZXRTaGVldCgpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XHJcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignU3R5bGVTaGVldDogb3B0aW1pemVGb3JTcGVlZCBtb2RlIG5vdCBzdXBwb3J0ZWQgZmFsbGluZyBiYWNrIHRvIHN0YW5kYXJkIG1vZGUuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZsdXNoKCk7XHJcbiAgICAgICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB7XHJcbiAgICAgIGNzc1J1bGVzOiBbXSxcclxuICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICBjc3NUZXh0OiBydWxlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVSdWxlOiBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XHJcbiAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLmdldFNoZWV0Rm9yVGFnID0gZnVuY3Rpb24gZ2V0U2hlZXRGb3JUYWcodGFnKSB7XHJcbiAgICBpZiAodGFnLnNoZWV0KSB7XHJcbiAgICAgIHJldHVybiB0YWcuc2hlZXQ7XHJcbiAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcclxuXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfcHJvdG8uZ2V0U2hlZXQgPSBmdW5jdGlvbiBnZXRTaGVldCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNoZWV0Rm9yVGFnKHRoaXMuX3RhZ3NbdGhpcy5fdGFncy5sZW5ndGggLSAxXSk7XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XHJcbiAgICBpbnZhcmlhbnQoaXNTdHJpbmcocnVsZSksICdgaW5zZXJ0UnVsZWAgYWNjZXB0cyBvbmx5IHN0cmluZ3MnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xyXG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGluZGV4ID0gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcclxuICAgICAgdmFyIHNoZWV0ID0gdGhpcy5nZXRTaGVldCgpO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICBpbmRleCA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgfSAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1Z1xyXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxyXG5cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlU2hlZXQ6IGlsbGVnYWwgcnVsZTogXFxuXFxuXCIgKyBydWxlICsgXCJcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBpbnNlcnRpb25Qb2ludCA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xyXG5cclxuICAgICAgdGhpcy5fdGFncy5wdXNoKHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUsIHJ1bGUsIGluc2VydGlvblBvaW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQrKztcclxuICB9O1xyXG5cclxuICBfcHJvdG8ucmVwbGFjZVJ1bGUgPSBmdW5jdGlvbiByZXBsYWNlUnVsZShpbmRleCwgcnVsZSkge1xyXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQgfHwgIXRoaXMuX2lzQnJvd3Nlcikge1xyXG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLl9pc0Jyb3dzZXIgPyB0aGlzLmdldFNoZWV0KCkgOiB0aGlzLl9zZXJ2ZXJTaGVldDtcclxuXHJcbiAgICAgIGlmICghcnVsZS50cmltKCkpIHtcclxuICAgICAgICBydWxlID0gdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFzaGVldC5jc3NSdWxlc1tpbmRleF0pIHtcclxuICAgICAgICAvLyBAVEJEIFNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoIWlzUHJvZCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVTaGVldDogaWxsZWdhbCBydWxlOiBcXG5cXG5cIiArIHJ1bGUgKyBcIlxcblxcblNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjAwMDc5OTIgZm9yIG1vcmUgaW5mb1wiKTtcclxuICAgICAgICB9IC8vIEluIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBpbmRpY2VzIHdlIGluc2VydCBhIGRlbGV0ZVJ1bGVQbGFjZWhvbGRlclxyXG5cclxuXHJcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZSh0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyLCBpbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB0YWcgPSB0aGlzLl90YWdzW2luZGV4XTtcclxuICAgICAgaW52YXJpYW50KHRhZywgXCJvbGQgcnVsZSBhdCBpbmRleCBgXCIgKyBpbmRleCArIFwiYCBub3QgZm91bmRcIik7XHJcbiAgICAgIHRhZy50ZXh0Q29udGVudCA9IHJ1bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZGV4O1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5kZWxldGVSdWxlID0gZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xyXG4gICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcclxuICAgICAgdGhpcy5yZXBsYWNlUnVsZShpbmRleCwgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xyXG4gICAgICBpbnZhcmlhbnQodGFnLCBcInJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xyXG4gICAgICB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xyXG4gICAgICB0aGlzLl90YWdzW2luZGV4XSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XHJcbiAgICB0aGlzLl9pbmplY3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XHJcblxyXG4gICAgaWYgKHRoaXMuX2lzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLl90YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xyXG4gICAgICAgIHJldHVybiB0YWcgJiYgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl90YWdzID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzaW1wbGVyIG9uIHNlcnZlclxyXG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcyA9IFtdO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9wcm90by5jc3NSdWxlcyA9IGZ1bmN0aW9uIGNzc1J1bGVzKCkge1xyXG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl90YWdzLnJlZHVjZShmdW5jdGlvbiAocnVsZXMsIHRhZykge1xyXG4gICAgICBpZiAodGFnKSB7XHJcbiAgICAgICAgcnVsZXMgPSBydWxlcy5jb25jYXQoQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKF90aGlzMi5nZXRTaGVldEZvclRhZyh0YWcpLmNzc1J1bGVzLCBmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJ1bGUuY3NzVGV4dCA9PT0gX3RoaXMyLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID8gbnVsbCA6IHJ1bGU7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJ1bGVzLnB1c2gobnVsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBydWxlcztcclxuICAgIH0sIFtdKTtcclxuICB9O1xyXG5cclxuICBfcHJvdG8ubWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKG5hbWUsIGNzc1N0cmluZywgcmVsYXRpdmVUb1RhZykge1xyXG4gICAgaWYgKGNzc1N0cmluZykge1xyXG4gICAgICBpbnZhcmlhbnQoaXNTdHJpbmcoY3NzU3RyaW5nKSwgJ21ha2VTdHlsZVRhZyBhY2NlcHMgb25seSBzdHJpbmdzIGFzIHNlY29uZCBwYXJhbWV0ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIGlmICh0aGlzLl9ub25jZSkgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCB0aGlzLl9ub25jZSk7XHJcbiAgICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICB0YWcuc2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIG5hbWUsICcnKTtcclxuXHJcbiAgICBpZiAoY3NzU3RyaW5nKSB7XHJcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NTdHJpbmcpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuXHJcbiAgICBpZiAocmVsYXRpdmVUb1RhZykge1xyXG4gICAgICBoZWFkLmluc2VydEJlZm9yZSh0YWcsIHJlbGF0aXZlVG9UYWcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YWc7XHJcbiAgfTtcclxuXHJcbiAgX2NyZWF0ZUNsYXNzKFN0eWxlU2hlZXQsIFt7XHJcbiAgICBrZXk6IFwibGVuZ3RoXCIsXHJcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQ7XHJcbiAgICB9XHJcbiAgfV0pO1xyXG5cclxuICByZXR1cm4gU3R5bGVTaGVldDtcclxufSgpO1xyXG5cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHlsZVNoZWV0O1xyXG5cclxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xyXG4gIGlmICghY29uZGl0aW9uKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZVNoZWV0OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xyXG5cclxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuXHJcbnZhciBfc3R5bGVzaGVldFJlZ2lzdHJ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHlsZXNoZWV0LXJlZ2lzdHJ5XCIpKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XHJcblxyXG52YXIgc3R5bGVTaGVldFJlZ2lzdHJ5ID0gbmV3IF9zdHlsZXNoZWV0UmVnaXN0cnlbXCJkZWZhdWx0XCJdKCk7XHJcblxyXG52YXIgSlNYU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcclxuICBfaW5oZXJpdHNMb29zZShKU1hTdHlsZSwgX0NvbXBvbmVudCk7XHJcblxyXG4gIGZ1bmN0aW9uIEpTWFN0eWxlKHByb3BzKSB7XHJcbiAgICB2YXIgX3RoaXM7XHJcblxyXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XHJcbiAgICBfdGhpcy5wcmV2UHJvcHMgPSB7fTtcclxuICAgIHJldHVybiBfdGhpcztcclxuICB9XHJcblxyXG4gIEpTWFN0eWxlLmR5bmFtaWMgPSBmdW5jdGlvbiBkeW5hbWljKGluZm8pIHtcclxuICAgIHJldHVybiBpbmZvLm1hcChmdW5jdGlvbiAodGFnSW5mbykge1xyXG4gICAgICB2YXIgYmFzZUlkID0gdGFnSW5mb1swXTtcclxuICAgICAgdmFyIHByb3BzID0gdGFnSW5mb1sxXTtcclxuICAgICAgcmV0dXJuIHN0eWxlU2hlZXRSZWdpc3RyeS5jb21wdXRlSWQoYmFzZUlkLCBwcm9wcyk7XHJcbiAgICB9KS5qb2luKCcgJyk7XHJcbiAgfSAvLyBwcm9iYWJseSBmYXN0ZXIgdGhhbiBQdXJlQ29tcG9uZW50IChzaGFsbG93RXF1YWwpXHJcbiAgO1xyXG5cclxuICB2YXIgX3Byb3RvID0gSlNYU3R5bGUucHJvdG90eXBlO1xyXG5cclxuICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG90aGVyUHJvcHMpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmlkICE9PSBvdGhlclByb3BzLmlkIHx8IC8vIFdlIGRvIHRoaXMgY2hlY2sgYmVjYXVzZSBgZHluYW1pY2AgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciB1bmRlZmluZWQuXHJcbiAgICAvLyBUaGVzZSBhcmUgdGhlIGNvbXB1dGVkIHZhbHVlcyBmb3IgZHluYW1pYyBzdHlsZXMuXHJcbiAgICBTdHJpbmcodGhpcy5wcm9wcy5keW5hbWljKSAhPT0gU3RyaW5nKG90aGVyUHJvcHMuZHluYW1pYyk7XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBzdHlsZVNoZWV0UmVnaXN0cnkucmVtb3ZlKHRoaXMucHJvcHMpO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBtYWtlIHRoZSBzaWRlIGVmZmVjdCBhc3luYyBzYWZlIGluIHRoZSBcInJlbmRlclwiIHBoYXNlLlxyXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L3N0eWxlZC1qc3gvcHVsbC80ODRcclxuICAgIGlmICh0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSh0aGlzLnByZXZQcm9wcykpIHtcclxuICAgICAgLy8gVXBkYXRlc1xyXG4gICAgICBpZiAodGhpcy5wcmV2UHJvcHMuaWQpIHtcclxuICAgICAgICBzdHlsZVNoZWV0UmVnaXN0cnkucmVtb3ZlKHRoaXMucHJldlByb3BzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3R5bGVTaGVldFJlZ2lzdHJ5LmFkZCh0aGlzLnByb3BzKTtcclxuICAgICAgdGhpcy5wcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBKU1hTdHlsZTtcclxufShfcmVhY3QuQ29tcG9uZW50KTtcclxuXHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSlNYU3R5bGU7XHJcblxyXG5mdW5jdGlvbiBmbHVzaCgpIHtcclxuICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0UmVnaXN0cnkuY3NzUnVsZXMoKTtcclxuICBzdHlsZVNoZWV0UmVnaXN0cnkuZmx1c2goKTtcclxuICByZXR1cm4gY3NzUnVsZXM7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xyXG5cclxudmFyIF9zdHJpbmdIYXNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3RyaW5nLWhhc2hcIikpO1xyXG5cclxudmFyIF9zdHlsZXNoZWV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvc3R5bGVzaGVldFwiKSk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cclxuXHJcbnZhciBzYW5pdGl6ZSA9IGZ1bmN0aW9uIHNhbml0aXplKHJ1bGUpIHtcclxuICByZXR1cm4gcnVsZS5yZXBsYWNlKC9cXC9zdHlsZS9naSwgJ1xcXFwvc3R5bGUnKTtcclxufTtcclxuXHJcbnZhciBTdHlsZVNoZWV0UmVnaXN0cnkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXRSZWdpc3RyeShfdGVtcCkge1xyXG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcclxuICAgICAgICBfcmVmJHN0eWxlU2hlZXQgPSBfcmVmLnN0eWxlU2hlZXQsXHJcbiAgICAgICAgc3R5bGVTaGVldCA9IF9yZWYkc3R5bGVTaGVldCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkc3R5bGVTaGVldCxcclxuICAgICAgICBfcmVmJG9wdGltaXplRm9yU3BlZWQgPSBfcmVmLm9wdGltaXplRm9yU3BlZWQsXHJcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXHJcbiAgICAgICAgX3JlZiRpc0Jyb3dzZXIgPSBfcmVmLmlzQnJvd3NlcixcclxuICAgICAgICBpc0Jyb3dzZXIgPSBfcmVmJGlzQnJvd3NlciA9PT0gdm9pZCAwID8gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgOiBfcmVmJGlzQnJvd3NlcjtcclxuXHJcbiAgICB0aGlzLl9zaGVldCA9IHN0eWxlU2hlZXQgfHwgbmV3IF9zdHlsZXNoZWV0W1wiZGVmYXVsdFwiXSh7XHJcbiAgICAgIG5hbWU6ICdzdHlsZWQtanN4JyxcclxuICAgICAgb3B0aW1pemVGb3JTcGVlZDogb3B0aW1pemVGb3JTcGVlZFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XHJcblxyXG4gICAgaWYgKHN0eWxlU2hlZXQgJiYgdHlwZW9mIG9wdGltaXplRm9yU3BlZWQgPT09ICdib29sZWFuJykge1xyXG4gICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKG9wdGltaXplRm9yU3BlZWQpO1xyXG5cclxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2lzQnJvd3NlciA9IGlzQnJvd3NlcjtcclxuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XHJcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSB7fTtcclxuICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcclxuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcclxuICB9XHJcblxyXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0UmVnaXN0cnkucHJvdG90eXBlO1xyXG5cclxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHByb3BzKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcclxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IEFycmF5LmlzQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xyXG5cclxuICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZCh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKTtcclxuXHJcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSB0aGlzLl9zaGVldC5pc09wdGltaXplRm9yU3BlZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5faXNCcm93c2VyICYmICF0aGlzLl9mcm9tU2VydmVyKSB7XHJcbiAgICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB0aGlzLnNlbGVjdEZyb21TZXJ2ZXIoKTtcclxuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0gT2JqZWN0LmtleXModGhpcy5fZnJvbVNlcnZlcikucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHRhZ05hbWUpIHtcclxuICAgICAgICBhY2NbdGFnTmFtZV0gPSAwO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3RoaXMkZ2V0SWRBbmRSdWxlcyA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXHJcbiAgICAgICAgc3R5bGVJZCA9IF90aGlzJGdldElkQW5kUnVsZXMuc3R5bGVJZCxcclxuICAgICAgICBydWxlcyA9IF90aGlzJGdldElkQW5kUnVsZXMucnVsZXM7IC8vIERlZHVwaW5nOiBqdXN0IGluY3JlYXNlIHRoZSBpbnN0YW5jZXMgY291bnQuXHJcblxyXG5cclxuICAgIGlmIChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cykge1xyXG4gICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gKz0gMTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRpY2VzID0gcnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgIHJldHVybiBfdGhpcy5fc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcclxuICAgIH0pIC8vIEZpbHRlciBvdXQgaW52YWxpZCBydWxlc1xyXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5faW5kaWNlc1tzdHlsZUlkXSA9IGluZGljZXM7XHJcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPSAxO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocHJvcHMpIHtcclxuICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICAgIHZhciBfdGhpcyRnZXRJZEFuZFJ1bGVzMiA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXHJcbiAgICAgICAgc3R5bGVJZCA9IF90aGlzJGdldElkQW5kUnVsZXMyLnN0eWxlSWQ7XHJcblxyXG4gICAgaW52YXJpYW50KHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzLCBcInN0eWxlSWQ6IGBcIiArIHN0eWxlSWQgKyBcImAgbm90IGZvdW5kXCIpO1xyXG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdIC09IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA8IDEpIHtcclxuICAgICAgdmFyIHRhZ0Zyb21TZXJ2ZXIgPSB0aGlzLl9mcm9tU2VydmVyICYmIHRoaXMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF07XHJcblxyXG4gICAgICBpZiAodGFnRnJvbVNlcnZlcikge1xyXG4gICAgICAgIHRhZ0Zyb21TZXJ2ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWdGcm9tU2VydmVyKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fZnJvbVNlcnZlcltzdHlsZUlkXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl9zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2luZGljZXNbc3R5bGVJZF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcywgbmV4dFByb3BzKSB7XHJcbiAgICB0aGlzLmFkZChuZXh0UHJvcHMpO1xyXG4gICAgdGhpcy5yZW1vdmUocHJvcHMpO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xyXG4gICAgdGhpcy5fc2hlZXQuZmx1c2goKTtcclxuXHJcbiAgICB0aGlzLl9zaGVldC5pbmplY3QoKTtcclxuXHJcbiAgICB0aGlzLl9mcm9tU2VydmVyID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XHJcbiAgICB0aGlzLmNvbXB1dGVJZCA9IHRoaXMuY3JlYXRlQ29tcHV0ZUlkKCk7XHJcbiAgICB0aGlzLmNvbXB1dGVTZWxlY3RvciA9IHRoaXMuY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKCk7XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLmNzc1J1bGVzID0gZnVuY3Rpb24gY3NzUnVsZXMoKSB7XHJcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcclxuXHJcbiAgICB2YXIgZnJvbVNlcnZlciA9IHRoaXMuX2Zyb21TZXJ2ZXIgPyBPYmplY3Qua2V5cyh0aGlzLl9mcm9tU2VydmVyKS5tYXAoZnVuY3Rpb24gKHN0eWxlSWQpIHtcclxuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF1dO1xyXG4gICAgfSkgOiBbXTtcclxuXHJcbiAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLl9zaGVldC5jc3NSdWxlcygpO1xyXG5cclxuICAgIHJldHVybiBmcm9tU2VydmVyLmNvbmNhdChPYmplY3Qua2V5cyh0aGlzLl9pbmRpY2VzKS5tYXAoZnVuY3Rpb24gKHN0eWxlSWQpIHtcclxuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2luZGljZXNbc3R5bGVJZF0ubWFwKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBjc3NSdWxlc1tpbmRleF0uY3NzVGV4dDtcclxuICAgICAgfSkuam9pbihfdGhpczMuX29wdGltaXplRm9yU3BlZWQgPyAnJyA6ICdcXG4nKV07XHJcbiAgICB9KSAvLyBmaWx0ZXIgb3V0IGVtcHR5IHJ1bGVzXHJcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgIHJldHVybiBCb29sZWFuKHJ1bGVbMV0pO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBjcmVhdGVDb21wdXRlSWRcclxuICAgKlxyXG4gICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0byBjb21wdXRlIGFuZCBtZW1vaXplIGEganN4IGlkIGZyb20gYSBiYXNlZElkIGFuZCBvcHRpb25hbGx5IHByb3BzLlxyXG4gICAqL1xyXG4gIDtcclxuXHJcbiAgX3Byb3RvLmNyZWF0ZUNvbXB1dGVJZCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVJZCgpIHtcclxuICAgIHZhciBjYWNoZSA9IHt9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChiYXNlSWQsIHByb3BzKSB7XHJcbiAgICAgIGlmICghcHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gXCJqc3gtXCIgKyBiYXNlSWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBwcm9wc1RvU3RyaW5nID0gU3RyaW5nKHByb3BzKTtcclxuICAgICAgdmFyIGtleSA9IGJhc2VJZCArIHByb3BzVG9TdHJpbmc7IC8vIHJldHVybiBganN4LSR7aGFzaFN0cmluZyhgJHtiYXNlSWR9LSR7cHJvcHNUb1N0cmluZ31gKX1gXHJcblxyXG4gICAgICBpZiAoIWNhY2hlW2tleV0pIHtcclxuICAgICAgICBjYWNoZVtrZXldID0gXCJqc3gtXCIgKyAoMCwgX3N0cmluZ0hhc2hbXCJkZWZhdWx0XCJdKShiYXNlSWQgKyBcIi1cIiArIHByb3BzVG9TdHJpbmcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2FjaGVba2V5XTtcclxuICAgIH07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGNyZWF0ZUNvbXB1dGVTZWxlY3RvclxyXG4gICAqXHJcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgZHluYW1pYyBzZWxlY3RvcnMuXHJcbiAgICovXHJcbiAgO1xyXG5cclxuICBfcHJvdG8uY3JlYXRlQ29tcHV0ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCkge1xyXG4gICAgaWYgKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgIHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCA9IC9fX2pzeC1zdHlsZS1keW5hbWljLXNlbGVjdG9yL2c7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhY2hlID0ge307XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCBjc3MpIHtcclxuICAgICAgLy8gU2FuaXRpemUgU1NSLWVkIENTUy5cclxuICAgICAgLy8gQ2xpZW50IHNpZGUgY29kZSBkb2Vzbid0IG5lZWQgdG8gYmUgc2FuaXRpemVkIHNpbmNlIHdlIHVzZVxyXG4gICAgICAvLyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSAoZGV2KSBhbmQgdGhlIENTU09NIGFwaSBzaGVldC5pbnNlcnRSdWxlIChwcm9kKS5cclxuICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcclxuICAgICAgICBjc3MgPSBzYW5pdGl6ZShjc3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgaWRjc3MgPSBpZCArIGNzcztcclxuXHJcbiAgICAgIGlmICghY2FjaGVbaWRjc3NdKSB7XHJcbiAgICAgICAgY2FjaGVbaWRjc3NdID0gY3NzLnJlcGxhY2Uoc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwLCBpZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjYWNoZVtpZGNzc107XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5nZXRJZEFuZFJ1bGVzID0gZnVuY3Rpb24gZ2V0SWRBbmRSdWxlcyhwcm9wcykge1xyXG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGNzcyA9IHByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgIGR5bmFtaWMgPSBwcm9wcy5keW5hbWljLFxyXG4gICAgICAgIGlkID0gcHJvcHMuaWQ7XHJcblxyXG4gICAgaWYgKGR5bmFtaWMpIHtcclxuICAgICAgdmFyIHN0eWxlSWQgPSB0aGlzLmNvbXB1dGVJZChpZCwgZHluYW1pYyk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3R5bGVJZDogc3R5bGVJZCxcclxuICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShjc3MpID8gY3NzLm1hcChmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgcnVsZSk7XHJcbiAgICAgICAgfSkgOiBbdGhpcy5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgY3NzKV1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdHlsZUlkOiB0aGlzLmNvbXB1dGVJZChpZCksXHJcbiAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGNzcykgPyBjc3MgOiBbY3NzXVxyXG4gICAgfTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogc2VsZWN0RnJvbVNlcnZlclxyXG4gICAqXHJcbiAgICogQ29sbGVjdHMgc3R5bGUgdGFncyBmcm9tIHRoZSBkb2N1bWVudCB3aXRoIGlkIF9fanN4LVhYWFxyXG4gICAqL1xyXG4gIDtcclxuXHJcbiAgX3Byb3RvLnNlbGVjdEZyb21TZXJ2ZXIgPSBmdW5jdGlvbiBzZWxlY3RGcm9tU2VydmVyKCkge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIl9fanN4LVwiXScpKTtcclxuICAgIHJldHVybiBlbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZWxlbWVudCkge1xyXG4gICAgICB2YXIgaWQgPSBlbGVtZW50LmlkLnNsaWNlKDIpO1xyXG4gICAgICBhY2NbaWRdID0gZWxlbWVudDtcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gU3R5bGVTaGVldFJlZ2lzdHJ5O1xyXG59KCk7XHJcblxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlU2hlZXRSZWdpc3RyeTtcclxuXHJcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcclxuICBpZiAoIWNvbmRpdGlvbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldFJlZ2lzdHJ5OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc3R5bGUnKVxyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItYmlvIHtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtYm94IHtcclxuICAgICAgICB3aWR0aCA6IDI1JTtcclxuICAgICAgICBtYXgtd2lkdGggOiAyNzJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQgOjI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjZWxlNGU4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlLXdyYXBwZXIgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlcm5hbWUge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3AgOjE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWxvZ2luIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTZweDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IHVzZXJuYW1lID0gKHt1c2VyfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codXNlci5hdmF0YXJfdXJsKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgdXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2VcIiBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PXtgJHt1c2VyLm5hbWV9IO2UhOuhnO2VhCDsnbTrr7jsp4BgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VybmFtZVwiPnt1c2VyLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1sb2dpblwiPnt1c2VyLmxvZ2lufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1iaW9cIj57dXNlci5pZH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+7Jyg7KCA7KCV67O06rCAIOyXhuyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBuYW1lID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZXImJnVzZXIubmFtZTtcclxuICAgIHJldHVybiA8ZGl2Pnt1c2VybmFtZX08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHF1ZXJ5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9YCk7XHJcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlci5hdmF0YXJfdXJsKVxyXG4gICAgICAgICAgICByZXR1cm4ge3Byb3BzOntuYW1lfX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7cHJvcHM6e319O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHJldHVybiB7cHJvcHM6e319O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=