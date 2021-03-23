module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/users/[name].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/users/[name].jsx":
/*!********************************!*\
  !*** ./pages/users/[name].jsx ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\dev\\next\\nextProject2\\projectNext\\pages\\users\\[name].jsx";



const style = new String("h2.jsx-2480003204{margin-left:20px;}.user-bio.jsx-2480003204{margin-top :12px;font-style:italic;}.profile-box.jsx-2480003204{width :25%;max-width :272px;margin-right :26px;}.profile-image-wrapper.jsx-2480003204{width :100%;border :1px solid #ele4e8;}.profile-image-wrapper.jsx-2480003204 .profile-image.jsx-2480003204{display :block;width :100%;}.profile-username.jsx-2480003204{margin :0;padding-top :16px;font-size :26px;}.profile-user-login.jsx-2480003204{margin:0;font-size:20px;}.profile-user-bio.jsx-2480003204{margin:0;padding-top:16px;font-size:14px;}.profile-user-info.jsx-2480003204{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;margin:4px 0 0;}.profile-user-info-text.jsx-2480003204{margin-left :6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXG5leHRcXG5leHRQcm9qZWN0MlxccHJvamVjdE5leHRcXHBhZ2VzXFx1c2Vyc1xcW25hbWVdLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJaUIsQUFHeUIsQUFHQyxBQUtOLEFBTUMsQUFLRyxBQUtMLEFBTUYsQUFLQSxBQU1NLEFBTUcsU0FoQkgsQUFLRSxDQVhDLENBaEJBLENBTVMsR0FLZCxFQW5CaEIsQUFHc0IsQUE0Q3RCLE9BaEJBLEVBS2tCLENBaEJsQixDQVhzQixBQWdCRixPQXJCcEIsR0FXQSxHQXNCQSxHQVhBLEdBaEJBLCtCQStCd0IsaUdBQ0wsZUFDbkIiLCJmaWxlIjoiQzpcXGRldlxcbmV4dFxcbmV4dFByb2plY3QyXFxwcm9qZWN0TmV4dFxccGFnZXNcXHVzZXJzXFxbbmFtZV0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29NYWlsIH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItYmlvIHtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtYm94IHtcclxuICAgICAgICB3aWR0aCA6IDI1JTtcclxuICAgICAgICBtYXgtd2lkdGggOiAyNzJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQgOjI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjZWxlNGU4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlLXdyYXBwZXIgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlcm5hbWUge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3AgOjE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWxvZ2luIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTZweDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWluZm8tdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQgOiA2cHg7XHJcbiAgICB9XHJcbiBgO1xyXG5cclxuY29uc3QgbmFtZSA9ICh7dXNlcn0pID0+IHsgIFxyXG4gICAgaWYoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHVzZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlXCIgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD17YCR7dXNlci5uYW1lfSDtlITroZztlYQg7J2066+47KeAYH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcm5hbWVcIj57dXNlci5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItbG9naW5cIj57dXNlci5sb2dpbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItYmlvXCI+e3VzZXIuYmlvfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvTWFpbCBzaXplPXsxNn0gY29sb3I9XCIjNWE3MzdkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItaW5mby10ZXh0XCI+e3VzZXIuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PuycoOyggOygleuztOqwgCDsl4bsirXri4jri6QuPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLypjb25zdCBuYW1lID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFzZGZqa2xhZHNqZmFrbHNmXCIpXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZXImJnVzZXIubmFtZTtcclxuICAgIHJldHVybiA8ZGl2Pnt1c2VybmFtZX08L2Rpdj47XHJcbn07Ki9cclxuLy8gdGVybWluYWwgeWFybiBhZGQgcmVhY3QtaWNvbnMg7ISk7LmYXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyh7IHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcXVlcnk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7bmFtZX1gKTtcclxuICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLmF2YXRhcl91cmwpXHJcbiAgICAgICAgICAgIHJldHVybiB7cHJvcHM6e3VzZXJ9fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtwcm9wczp7fX07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgcmV0dXJuIHtwcm9wczp7fX07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hbWU7Il19 */\n/*@ sourceURL=C:\\\\dev\\\\next\\\\nextProject2\\\\projectNext\\\\pages\\\\users\\\\[name].jsx */");
style.__hash = "2480003204";

const name = ({
  user
}) => {
  if (!user) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${style.__hash}` + " " + "profile-box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `jsx-${style.__hash}` + " " + "profile-image-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: user.avatar_url,
          alt: `${user.name} 프로필 이미지`,
          className: `jsx-${style.__hash}` + " " + "profile-image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: `jsx-${style.__hash}` + " " + "profile-username",
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${style.__hash}` + " " + "profile-user-login",
        children: user.login
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${style.__hash}` + " " + "profile-user-bio",
        children: user.bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${style.__hash}` + " " + "profile-user-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoMail"], {
          size: 16,
          color: "#5a737d"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: `jsx-${style.__hash}` + " " + "profile-user-info-text",
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${style.__hash}`,
      children: "\uC720\uC800\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: style.__hash,
      children: style
    }, void 0, false, void 0, undefined)]
  }, void 0, true);
};
/*const name = ({ user }) => {
    console.log("asdfjkladsjfaklsf")
    const username = user&&user.name;
    return <div>{username}</div>;
};*/
// terminal yarn add react-icons 설치


const getServerSideProps = async ({
  query
}) => {
  const {
    name
  } = query;

  try {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`https://api.github.com/users/${name}`);

    if (res.status === 200) {
      const user = await res.json();
      console.log(user);
      console.log(user.avatar_url);
      return {
        props: {
          user
        }
      };
    }

    return {
      props: {}
    };
  } catch (e) {
    console.log(e);
    return {
      props: {}
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (name);

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react-icons/go":
/*!*********************************!*\
  !*** external "react-icons/go" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlcnMvW25hbWVdLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9nb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJzdHlsZSIsIm5hbWUiLCJ1c2VyIiwiYXZhdGFyX3VybCIsImxvZ2luIiwiYmlvIiwiZW1haWwiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsInJlcyIsImZldGNoIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBR0EsTUFBTUEsS0FBSywwMktBQVg7OztBQXFEQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBWTtBQUNyQixNQUFHLENBQUNBLElBQUosRUFBVTtBQUNOLFdBQU8sSUFBUDtBQUNIOztBQUNELHNCQUNJO0FBQUEsZUFDRUEsSUFBSSxnQkFDRjtBQUFBLCtDQUFlLGFBQWY7QUFBQSw4QkFDSTtBQUFBLGlEQUFlLHVCQUFmO0FBQUEsK0JBQ0k7QUFBK0IsYUFBRyxFQUFFQSxJQUFJLENBQUNDLFVBQXpDO0FBQXFELGFBQUcsRUFBRyxHQUFFRCxJQUFJLENBQUNELElBQUssVUFBdkU7QUFBQSxtREFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBQSxpREFBYyxrQkFBZDtBQUFBLGtCQUFrQ0MsSUFBSSxDQUFDRDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBQSxpREFBYSxvQkFBYjtBQUFBLGtCQUFtQ0MsSUFBSSxDQUFDRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBQSxpREFBYSxrQkFBYjtBQUFBLGtCQUFpQ0YsSUFBSSxDQUFDRztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0k7QUFBQSxpREFBYSxtQkFBYjtBQUFBLGdDQUNJLHFFQUFDLHFEQUFEO0FBQVEsY0FBSSxFQUFFLEVBQWQ7QUFBa0IsZUFBSyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLG1EQUFnQix3QkFBaEI7QUFBQSxvQkFBMENILElBQUksQ0FBQ0k7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURFLGdCQWNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQXFCSCxDQXpCRDtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1DLGtCQUFrQixHQUFHLE9BQU07QUFBRUM7QUFBRixDQUFOLEtBQW9CO0FBQ2xELFFBQU07QUFBRVA7QUFBRixNQUFXTyxLQUFqQjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLHlEQUFLLENBQUUsZ0NBQStCVCxJQUFLLEVBQXRDLENBQXZCOztBQUNBLFFBQUdRLEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEdBQWxCLEVBQXVCO0FBQ25CLFlBQU1ULElBQUksR0FBRyxNQUFNTyxHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlaLElBQVo7QUFDQVcsYUFBTyxDQUFDQyxHQUFSLENBQVlaLElBQUksQ0FBQ0MsVUFBakI7QUFDQSxhQUFPO0FBQUNZLGFBQUssRUFBQztBQUFDYjtBQUFEO0FBQVAsT0FBUDtBQUNIOztBQUNELFdBQU87QUFBQ2EsV0FBSyxFQUFDO0FBQVAsS0FBUDtBQUNILEdBVEQsQ0FTRSxPQUFPQyxDQUFQLEVBQVU7QUFDUkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLENBQVo7QUFDQSxXQUFPO0FBQUNELFdBQUssRUFBQztBQUFQLEtBQVA7QUFDSDtBQUNKLENBZk07QUFpQlFkLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDNUdBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3VzZXJzL1tuYW1lXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlcnMvW25hbWVdLmpzeFwiKTtcbiIsImltcG9ydCB7IEdvTWFpbCB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIH1cclxuICAgIC51c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDEycHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWJveCB7XHJcbiAgICAgICAgd2lkdGggOiAyNSU7XHJcbiAgICAgICAgbWF4LXdpZHRoIDogMjcycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0IDoyNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgI2VsZTRlODtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1pbWFnZS13cmFwcGVyIC5wcm9maWxlLWltYWdlIHtcclxuICAgICAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXJuYW1lIHtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wIDoxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1sb2dpbiB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1iaW8ge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1pbmZvLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0IDogNnB4O1xyXG4gICAgfVxyXG4gYDtcclxuXHJcbmNvbnN0IG5hbWUgPSAoe3VzZXJ9KSA9PiB7ICBcclxuICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyB1c2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZVwiIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9e2Ake3VzZXIubmFtZX0g7ZSE66Gc7ZWEIOydtOuvuOyngGB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJuYW1lXCI+e3VzZXIubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWxvZ2luXCI+e3VzZXIubG9naW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWJpb1wiPnt1c2VyLmJpb308L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb01haWwgc2l6ZT17MTZ9IGNvbG9yPVwiIzVhNzM3ZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWluZm8tdGV4dFwiPnt1c2VyLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj7snKDsoIDsoJXrs7TqsIAg7JeG7Iq164uI64ukLjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8qY29uc3QgbmFtZSA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJhc2RmamtsYWRzamZha2xzZlwiKVxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VyJiZ1c2VyLm5hbWU7XHJcbiAgICByZXR1cm4gPGRpdj57dXNlcm5hbWV9PC9kaXY+O1xyXG59OyovXHJcbi8vIHRlcm1pbmFsIHlhcm4gYWRkIHJlYWN0LWljb25zIOyEpOy5mFxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHF1ZXJ5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9YCk7XHJcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlci5hdmF0YXJfdXJsKVxyXG4gICAgICAgICAgICByZXR1cm4ge3Byb3BzOnt1c2VyfX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7cHJvcHM6e319O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHJldHVybiB7cHJvcHM6e319O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYW1lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9nb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9