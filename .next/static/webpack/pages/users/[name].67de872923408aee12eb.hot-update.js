webpackHotUpdate_N_E("pages/users/[name]",{

/***/ "./component/Profile.jsx":
/*!*******************************!*\
  !*** ./component/Profile.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");



var _jsxFileName = "C:\\Users\\sang_\\junhyeok\\component\\Profile.jsx",
    _this = undefined;



var style = new String("h2.jsx-2480003204{margin-left:20px;}.user-bio.jsx-2480003204{margin-top :12px;font-style:italic;}.profile-box.jsx-2480003204{width :25%;max-width :272px;margin-right :26px;}.profile-image-wrapper.jsx-2480003204{width :100%;border :1px solid #ele4e8;}.profile-image-wrapper.jsx-2480003204 .profile-image.jsx-2480003204{display :block;width :100%;}.profile-username.jsx-2480003204{margin :0;padding-top :16px;font-size :26px;}.profile-user-login.jsx-2480003204{margin:0;font-size:20px;}.profile-user-bio.jsx-2480003204{margin:0;padding-top:16px;font-size:14px;}.profile-user-info.jsx-2480003204{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;margin:4px 0 0;}.profile-user-info-text.jsx-2480003204{margin-left :6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2FuZ19cXGp1bmh5ZW9rXFxjb21wb25lbnRcXFByb2ZpbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdpQixBQUd5QixBQUdDLEFBS04sQUFNQyxBQUtHLEFBS0wsQUFNRixBQUtBLEFBTU0sQUFNRyxTQWhCSCxBQUtFLENBWEMsQ0FoQkEsQ0FNUyxHQUtkLEVBbkJoQixBQUdzQixBQTRDdEIsT0FoQkEsRUFLa0IsQ0FoQmxCLENBWHNCLEFBZ0JGLE9BckJwQixHQVdBLEdBc0JBLEdBWEEsR0FoQkEsK0JBK0J3QixpR0FDTCxlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNhbmdfXFxqdW5oeWVva1xcY29tcG9uZW50XFxQcm9maWxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvTWFpbCwgR29Mb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIH1cclxuICAgIC51c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDEycHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWJveCB7XHJcbiAgICAgICAgd2lkdGggOiAyNSU7XHJcbiAgICAgICAgbWF4LXdpZHRoIDogMjcycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0IDoyNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgI2VsZTRlODtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1pbWFnZS13cmFwcGVyIC5wcm9maWxlLWltYWdlIHtcclxuICAgICAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXJuYW1lIHtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wIDoxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1sb2dpbiB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1iaW8ge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1pbmZvLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0IDogNnB4O1xyXG4gICAgfVxyXG4gYDtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe3VzZXJ9KSA9PiB7ICBcclxuICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyB1c2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZVwiIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9e2Ake3VzZXIubmFtZX0g7ZSE66Gc7ZWEIOydtOuvuOyngGB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJuYW1lXCI+e3VzZXIubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWxvZ2luXCI+e3VzZXIubG9naW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWJpb1wiPnt1c2VyLmJpb308L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb01haWwgc2l6ZT17MTZ9IGNvbG9yPVwiIzVhNzM3ZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWluZm8tdGV4dFwiPnt1c2VyLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb0xvY2F0aW9uIHNpemU9ezE2fSBjb2xvcj1cIiM1YTczN2RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1pbmZvLXRleHRcIj57dXNlci5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7slYTsnbTsvZgxIDogaHR0cHM6Ly9yZWFjdC1pY29ucy5uZXRsaWZ5LmNvbS8jLzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj7snKDsoIDsoJXrs7TqsIAg7JeG7Iq164uI64ukLjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\sang_\\\\junhyeok\\\\component\\\\Profile.jsx */");
style.__hash = "2480003204";

var Profile = function Profile(_ref) {
  var user = _ref.user;

  if (!user) {
    return null;
  }

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
          lineNumber: 66,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "jsx-".concat(style.__hash) + " " + "profile-username",
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-".concat(style.__hash) + " " + "profile-user-login",
        children: user.login
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-".concat(style.__hash) + " " + "profile-user-bio",
        children: user.bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-".concat(style.__hash) + " " + "profile-user-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoMail"], {
          size: 16,
          color: "#5a737d"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-".concat(style.__hash) + " " + "profile-user-info-text",
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-".concat(style.__hash),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoLocation"], {
          size: 16,
          color: "#5a737d"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-".concat(style.__hash) + " " + "profile-user-info-text",
          children: user.location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-".concat(style.__hash),
        children: "\uC544\uC774\uCF581 : https://react-icons.netlify.com/#/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-".concat(style.__hash),
      children: "\uC720\uC800\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: style.__hash,
      children: style
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Byb2ZpbGUuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiUHJvZmlsZSIsInVzZXIiLCJhdmF0YXJfdXJsIiwibmFtZSIsImxvZ2luIiwiYmlvIiwiZW1haWwiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLElBQU1BLEtBQUssa3JKQUFYOzs7QUFxREEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDeEIsTUFBRyxDQUFDQSxJQUFKLEVBQVU7QUFDTixXQUFPLElBQVA7QUFDSDs7QUFDRCxzQkFDSTtBQUFBLGVBQ0VBLElBQUksZ0JBQ0Y7QUFBQSxxREFBZSxhQUFmO0FBQUEsOEJBQ0k7QUFBQSx1REFBZSx1QkFBZjtBQUFBLCtCQUNJO0FBQStCLGFBQUcsRUFBRUEsSUFBSSxDQUFDQyxVQUF6QztBQUFxRCxhQUFHLFlBQUtELElBQUksQ0FBQ0UsSUFBViwyQ0FBeEQ7QUFBQSx5REFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFBLHVEQUFjLGtCQUFkO0FBQUEsa0JBQWtDRixJQUFJLENBQUNFO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJO0FBQUEsdURBQWEsb0JBQWI7QUFBQSxrQkFBbUNGLElBQUksQ0FBQ0c7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBTUk7QUFBQSx1REFBYSxrQkFBYjtBQUFBLGtCQUFpQ0gsSUFBSSxDQUFDSTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFPSTtBQUFBLHVEQUFhLG1CQUFiO0FBQUEsZ0NBQ0kscUVBQUMscURBQUQ7QUFBUSxjQUFJLEVBQUUsRUFBZDtBQUFrQixlQUFLLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEseURBQWdCLHdCQUFoQjtBQUFBLG9CQUEwQ0osSUFBSSxDQUFDSztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBV0k7QUFBQTtBQUFBLGdDQUNJLHFFQUFDLHlEQUFEO0FBQVksY0FBSSxFQUFFLEVBQWxCO0FBQXNCLGVBQUssRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSx5REFBZ0Isd0JBQWhCO0FBQUEsb0JBQTBDTCxJQUFJLENBQUNNO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEosZUFlSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREUsZ0JBbUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQTBCSCxDQTlCRDs7S0FBTVAsTztBQWdDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW25hbWVdLjY3ZGU4NzI5MjM0MDhhZWUxMmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb01haWwsIEdvTG9jYXRpb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZ29cIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1iaW8ge1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1ib3gge1xyXG4gICAgICAgIHdpZHRoIDogMjUlO1xyXG4gICAgICAgIG1heC13aWR0aCA6IDI3MnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodCA6MjZweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyIDogMXB4IHNvbGlkICNlbGU0ZTg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciAucHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VybmFtZSB7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcCA6MTZweDtcclxuICAgICAgICBmb250LXNpemUgOiAyNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItbG9naW4ge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItYmlvIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nLXRvcDoxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItaW5mby10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdCA6IDZweDtcclxuICAgIH1cclxuIGA7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHt1c2VyfSkgPT4geyAgXHJcbiAgICBpZighdXNlcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgdXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2VcIiBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PXtgJHt1c2VyLm5hbWV9IO2UhOuhnO2VhCDsnbTrr7jsp4BgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VybmFtZVwiPnt1c2VyLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1sb2dpblwiPnt1c2VyLmxvZ2lufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1iaW9cIj57dXNlci5iaW99PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8R29NYWlsIHNpemU9ezE2fSBjb2xvcj1cIiM1YTczN2RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1pbmZvLXRleHRcIj57dXNlci5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8R29Mb2NhdGlvbiBzaXplPXsxNn0gY29sb3I9XCIjNWE3MzdkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItaW5mby10ZXh0XCI+e3VzZXIubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+7JWE7J207L2YMSA6IGh0dHBzOi8vcmVhY3QtaWNvbnMubmV0bGlmeS5jb20vIy88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+7Jyg7KCA7KCV67O06rCAIOyXhuyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==