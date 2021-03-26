webpackHotUpdate_N_E("pages/users/[name]",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

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
/* harmony import */ var C_dev_next_nextProject2_projectNext_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _component_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Profile */ "./component/Profile.jsx");




var _jsxFileName = "C:\\dev\\next\\nextProject2\\projectNext\\pages\\users\\[name].jsx",
    _this = undefined;

function _templateObject() {
  var data = Object(C_dev_next_nextProject2_projectNext_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    .user-contents-wrapper {\n        display:flex;\n        padding:20px;\n    }\n    .repos-wrapper {\n        width : 100%;\n        height : 100vh;\n        overflow : scroll;\n        padding: 0px 16px;\n    }\n    .repos-header {\n        padding:16px 0;\n        font-size:14px;\n        font-weight:600;\n        border-bottom:1px solid #ele4e8;\n    }\n    .repos-count {\n        display:inline-block;\n        padding:2px 5px;\n        margin-left:6px;\n        font-size:12px;\n        font-weight:600;\n        line-weight:1;\n        color:#586069;\n        background-color:rgba(27,31,35,0.08);\n        border-radius:20px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var style = css(_templateObject());

var name = function name(_ref) {
  var user = _ref.user;

  if (!user) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW25hbWVdLmpzeCJdLCJuYW1lcyI6WyJzdHlsZSIsImNzcyIsIm5hbWUiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLEdBQUgsbUJBQVg7O0FBOEJBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3ZCLE1BQUcsQ0FBQ0EsSUFBSixFQUFVO0FBQ04sV0FBTyxJQUFQO0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQywwREFBRDtBQUFTLFVBQUksRUFBRUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFLSCxDQVREOzs7QUFxQ2VELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzL1tuYW1lXS4xYzBmOGY0MWNhZTg3YjAwMzk2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnQvUHJvZmlsZVwiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3MgYFxyXG4gICAgLnVzZXItY29udGVudHMtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgIH1cclxuICAgIC5yZXBvcy13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0IDogMTAwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3cgOiBzY3JvbGw7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucmVwb3MtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOjE2cHggMDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VsZTRlODtcclxuICAgIH1cclxuICAgIC5yZXBvcy1jb3VudCB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzoycHggNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjZweDtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbGluZS13ZWlnaHQ6MTtcclxuICAgICAgICBjb2xvcjojNTg2MDY5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNywzMSwzNSwwLjA4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IG5hbWUgPSAoeyB1c2VyIH0pID0+IHtcclxuICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQcm9maWxlIHVzZXI9e3VzZXJ9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyh7IHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcXVlcnk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgdXNlcjtcclxuICAgICAgICBsZXQgcmVwb3M7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7bmFtZX1gKTtcclxuICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVwb1JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7bmFtZX0vcmVwb3M/c29ydD11cGRhdGVkJnBhZ2U9MSZwZXJfcGFnZT0xMGApO1xyXG4gICAgICAgIGlmKHJlcG9SZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgcmVwb3MgPSBhd2FpdCByZXBvUmVzLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVwb3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtwcm9wczp7IHVzZXIsIHJlcG9zIH19O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHJldHVybiB7cHJvcHM6e319O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=