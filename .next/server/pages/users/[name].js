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

/***/ "./component/Profile.jsx":
/*!*******************************!*\
  !*** ./component/Profile.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\dev\\next\\nextProject2\\projectNext\\component\\Profile.jsx";


const style = new String("h2.jsx-2480003204{margin-left:20px;}.user-bio.jsx-2480003204{margin-top :12px;font-style:italic;}.profile-box.jsx-2480003204{width :25%;max-width :272px;margin-right :26px;}.profile-image-wrapper.jsx-2480003204{width :100%;border :1px solid #ele4e8;}.profile-image-wrapper.jsx-2480003204 .profile-image.jsx-2480003204{display :block;width :100%;}.profile-username.jsx-2480003204{margin :0;padding-top :16px;font-size :26px;}.profile-user-login.jsx-2480003204{margin:0;font-size:20px;}.profile-user-bio.jsx-2480003204{margin:0;padding-top:16px;font-size:14px;}.profile-user-info.jsx-2480003204{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;margin:4px 0 0;}.profile-user-info-text.jsx-2480003204{margin-left :6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXG5leHRcXG5leHRQcm9qZWN0MlxccHJvamVjdE5leHRcXGNvbXBvbmVudFxcUHJvZmlsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2lCLEFBR3lCLEFBR0MsQUFLTixBQU1DLEFBS0csQUFLTCxBQU1GLEFBS0EsQUFNTSxBQU1HLFNBaEJILEFBS0UsQ0FYQyxDQWhCQSxDQU1TLEdBS2QsRUFuQmhCLEFBR3NCLEFBNEN0QixPQWhCQSxFQUtrQixDQWhCbEIsQ0FYc0IsQUFnQkYsT0FyQnBCLEdBV0EsR0FzQkEsR0FYQSxHQWhCQSwrQkErQndCLGlHQUNMLGVBQ25CIiwiZmlsZSI6IkM6XFxkZXZcXG5leHRcXG5leHRQcm9qZWN0MlxccHJvamVjdE5leHRcXGNvbXBvbmVudFxcUHJvZmlsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb01haWwsIEdvTG9jYXRpb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZ29cIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1iaW8ge1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1ib3gge1xyXG4gICAgICAgIHdpZHRoIDogMjUlO1xyXG4gICAgICAgIG1heC13aWR0aCA6IDI3MnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodCA6MjZweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyIDogMXB4IHNvbGlkICNlbGU0ZTg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciAucHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VybmFtZSB7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcCA6MTZweDtcclxuICAgICAgICBmb250LXNpemUgOiAyNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItbG9naW4ge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItYmlvIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nLXRvcDoxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXItaW5mby10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdCA6IDZweDtcclxuICAgIH1cclxuIGA7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHt1c2VyfSkgPT4geyAgXHJcbiAgICBpZighdXNlcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgdXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2VcIiBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PXtgJHt1c2VyLm5hbWV9IO2UhOuhnO2VhCDsnbTrr7jsp4BgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VybmFtZVwiPnt1c2VyLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1sb2dpblwiPnt1c2VyLmxvZ2lufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1iaW9cIj57dXNlci5iaW99PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8R29NYWlsIHNpemU9ezE2fSBjb2xvcj1cIiM1YTczN2RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1pbmZvLXRleHRcIj57dXNlci5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8R29Mb2NhdGlvbiBzaXplPXsxNn0gY29sb3I9XCIjNWE3MzdkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItaW5mby10ZXh0XCI+e3VzZXIubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+7JWE7J207L2YMSA6IGh0dHBzOi8vcmVhY3QtaWNvbnMubmV0bGlmeS5jb20vIy88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+7Jyg7KCA7KCV67O06rCAIOyXhuyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il19 */\n/*@ sourceURL=C:\\\\dev\\\\next\\\\nextProject2\\\\projectNext\\\\component\\\\Profile.jsx */");
style.__hash = "2480003204";

const Profile = ({
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
          lineNumber: 66,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: `jsx-${style.__hash}` + " " + "profile-username",
        children: user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${style.__hash}` + " " + "profile-user-login",
        children: user.login
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${style.__hash}` + " " + "profile-user-bio",
        children: user.bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${style.__hash}` + " " + "profile-user-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoMail"], {
          size: 16,
          color: "#5a737d"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: `jsx-${style.__hash}` + " " + "profile-user-info-text",
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${style.__hash}`,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoLocation"], {
          size: 16,
          color: "#5a737d"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: `jsx-${style.__hash}` + " " + "profile-user-info-text",
          children: user.location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `jsx-${style.__hash}`,
        children: "\uC544\uC774\uCF581 : https://react-icons.netlify.com/#/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${style.__hash}`,
      children: "\uC720\uC800\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: style.__hash,
      children: style
    }, void 0, false, void 0, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Profile */ "./component/Profile.jsx");


var _jsxFileName = "C:\\dev\\next\\nextProject2\\projectNext\\pages\\users\\[name].jsx";



const style = new String(".user-contents-wrapper.jsx-1657429634{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;}.repos-wrapper.jsx-1657429634{width :100%;height :100vh;overflow :scroll;padding:0px 16px;}.repos-header.jsx-1657429634{padding:16px 0;font-size:14px;font-weight:600;border-bottom:1px solid #ele4e8;}.repos-count.jsx-1657429634{display:inline-block;padding:2px 5px;margin-left:6px;font-size:12px;font-weight:600;line-weight:1;color:#586069;background-color:rgba(27,31,35,0.08);border-radius:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXG5leHRcXG5leHRQcm9qZWN0MlxccHJvamVjdE5leHRcXHBhZ2VzXFx1c2Vyc1xcW25hbWVdLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHcUIsQUFJQSxBQU1FLEFBTU0sWUFYTixHQU1BLE1BTUMsS0FYRSxJQU1GLE9BTUEsTUFYRSxHQU1jLE9BTWpCLE9BWGxCLFFBWW1CLE1BbkJILElBYWhCLE1BT2lCLEdBbkJqQixXQW9CaUIsY0FDdUIscUNBQ2xCLG1CQUN0QiIsImZpbGUiOiJDOlxcZGV2XFxuZXh0XFxuZXh0UHJvamVjdDJcXHByb2plY3ROZXh0XFxwYWdlc1xcdXNlcnNcXFtuYW1lXS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1Byb2ZpbGVcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzIGBcclxuICAgIC51c2VyLWNvbnRlbnRzLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICB9XHJcbiAgICAucmVwb3Mtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodCA6IDEwMHZoO1xyXG4gICAgICAgIG92ZXJmbG93IDogc2Nyb2xsO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnJlcG9zLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzoxNnB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlbGU0ZTg7XHJcbiAgICB9XHJcbiAgICAucmVwb3MtY291bnQge1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6MnB4IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIGxpbmUtd2VpZ2h0OjE7XHJcbiAgICAgICAgY29sb3I6IzU4NjA2OTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjcsMzEsMzUsMC4wOCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgbmFtZSA9ICh7IHVzZXIsIHJlcG9zIH0pID0+IHtcclxuICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jb250ZW50cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZSB1c2VyPXt1c2VyfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9zLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9zLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXBzaXRvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvcy1jb3VudFwiPnt1c2VyLnB1YmxpY19yZXBvc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSBxdWVyeTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCB1c2VyO1xyXG4gICAgICAgIGxldCByZXBvcztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtuYW1lfWApO1xyXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXBvUmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtuYW1lfS9yZXBvcz9zb3J0PXVwZGF0ZWQmcGFnZT0xJnBlcl9wYWdlPTEwYCk7XHJcbiAgICAgICAgaWYocmVwb1Jlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXBvcyA9IGF3YWl0IHJlcG9SZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge3Byb3BzOnsgdXNlciwgcmVwb3MgfX07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgcmV0dXJuIHtwcm9wczp7fX07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hbWU7Il19 */\n/*@ sourceURL=C:\\\\dev\\\\next\\\\nextProject2\\\\projectNext\\\\pages\\\\users\\\\[name].jsx */");
style.__hash = "1657429634";

const name = ({
  user,
  repos
}) => {
  if (!user) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${style.__hash}` + " " + "user-contents-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `jsx-${style.__hash}` + " " + "repos-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `jsx-${style.__hash}` + " " + "repos-header",
          children: ["Repsitories", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: `jsx-${style.__hash}` + " " + "repos-count",
            children: user.public_repos
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: style.__hash,
        children: style
      }, void 0, false, void 0, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

const getServerSideProps = async ({
  query
}) => {
  const {
    name
  } = query;

  try {
    let user;
    let repos;
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`https://api.github.com/users/${name}`);

    if (res.status === 200) {
      user = await res.json();
      console.log(user);
    }

    const repoRes = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`);

    if (repoRes.status === 200) {
      repos = await repoRes.json();
      console.log(repos);
    }

    return {
      props: {
        user,
        repos
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXJzL1tuYW1lXS5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZ29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsic3R5bGUiLCJQcm9maWxlIiwidXNlciIsImF2YXRhcl91cmwiLCJuYW1lIiwibG9naW4iLCJiaW8iLCJlbWFpbCIsImxvY2F0aW9uIiwicmVwb3MiLCJwdWJsaWNfcmVwb3MiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsInJlcyIsImZldGNoIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXBvUmVzIiwicHJvcHMiLCJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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dXNlcnMvW25hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2Vycy9bbmFtZV0uanN4XCIpO1xuIiwiaW1wb3J0IHsgR29NYWlsLCBHb0xvY2F0aW9uIH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItYmlvIHtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtYm94IHtcclxuICAgICAgICB3aWR0aCA6IDI1JTtcclxuICAgICAgICBtYXgtd2lkdGggOiAyNzJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQgOjI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjZWxlNGU4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlLXdyYXBwZXIgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlcm5hbWUge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3AgOjE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWxvZ2luIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTZweDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWluZm8tdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQgOiA2cHg7XHJcbiAgICB9XHJcbiBgO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7dXNlcn0pID0+IHsgIFxyXG4gICAgaWYoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHVzZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlXCIgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD17YCR7dXNlci5uYW1lfSDtlITroZztlYQg7J2066+47KeAYH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcm5hbWVcIj57dXNlci5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItbG9naW5cIj57dXNlci5sb2dpbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItYmlvXCI+e3VzZXIuYmlvfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvTWFpbCBzaXplPXsxNn0gY29sb3I9XCIjNWE3MzdkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItaW5mby10ZXh0XCI+e3VzZXIuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvTG9jYXRpb24gc2l6ZT17MTZ9IGNvbG9yPVwiIzVhNzM3ZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWluZm8tdGV4dFwiPnt1c2VyLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPuyVhOydtOy9mDEgOiBodHRwczovL3JlYWN0LWljb25zLm5ldGxpZnkuY29tLyMvPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PuycoOyggOygleuztOqwgCDsl4bsirXri4jri6QuPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyIsImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnQvUHJvZmlsZVwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3MgYFxyXG4gICAgLnVzZXItY29udGVudHMtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgIH1cclxuICAgIC5yZXBvcy13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0IDogMTAwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3cgOiBzY3JvbGw7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucmVwb3MtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOjE2cHggMDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VsZTRlODtcclxuICAgIH1cclxuICAgIC5yZXBvcy1jb3VudCB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzoycHggNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjZweDtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbGluZS13ZWlnaHQ6MTtcclxuICAgICAgICBjb2xvcjojNTg2MDY5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNywzMSwzNSwwLjA4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBuYW1lID0gKHsgdXNlciwgcmVwb3MgfSkgPT4ge1xyXG4gICAgaWYoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNvbnRlbnRzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlIHVzZXI9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3Mtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3MtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcHNpdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlcG9zLWNvdW50XCI+e3VzZXIucHVibGljX3JlcG9zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHF1ZXJ5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHVzZXI7XHJcbiAgICAgICAgbGV0IHJlcG9zO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9YCk7XHJcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9SZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9L3JlcG9zP3NvcnQ9dXBkYXRlZCZwYWdlPTEmcGVyX3BhZ2U9MTBgKTtcclxuICAgICAgICBpZihyZXBvUmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJlcG9zID0gYXdhaXQgcmVwb1Jlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7cHJvcHM6eyB1c2VyLCByZXBvcyB9fTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICByZXR1cm4ge3Byb3BzOnt9fTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmFtZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZ29cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==