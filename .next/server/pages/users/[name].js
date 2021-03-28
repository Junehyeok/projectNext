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


var _jsxFileName = "C:\\Users\\sang_\\junhyeok\\component\\Profile.jsx";


const style = new String("h2.jsx-2480003204{margin-left:20px;}.user-bio.jsx-2480003204{margin-top :12px;font-style:italic;}.profile-box.jsx-2480003204{width :25%;max-width :272px;margin-right :26px;}.profile-image-wrapper.jsx-2480003204{width :100%;border :1px solid #ele4e8;}.profile-image-wrapper.jsx-2480003204 .profile-image.jsx-2480003204{display :block;width :100%;}.profile-username.jsx-2480003204{margin :0;padding-top :16px;font-size :26px;}.profile-user-login.jsx-2480003204{margin:0;font-size:20px;}.profile-user-bio.jsx-2480003204{margin:0;padding-top:16px;font-size:14px;}.profile-user-info.jsx-2480003204{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;margin:4px 0 0;}.profile-user-info-text.jsx-2480003204{margin-left :6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2FuZ19cXGp1bmh5ZW9rXFxjb21wb25lbnRcXFByb2ZpbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdpQixBQUd5QixBQUdDLEFBS04sQUFNQyxBQUtHLEFBS0wsQUFNRixBQUtBLEFBTU0sQUFNRyxTQWhCSCxBQUtFLENBWEMsQ0FoQkEsQ0FNUyxHQUtkLEVBbkJoQixBQUdzQixBQTRDdEIsT0FoQkEsRUFLa0IsQ0FoQmxCLENBWHNCLEFBZ0JGLE9BckJwQixHQVdBLEdBc0JBLEdBWEEsR0FoQkEsK0JBK0J3QixpR0FDTCxlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNhbmdfXFxqdW5oeWVva1xcY29tcG9uZW50XFxQcm9maWxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvTWFpbCwgR29Mb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIH1cclxuICAgIC51c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDEycHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWJveCB7XHJcbiAgICAgICAgd2lkdGggOiAyNSU7XHJcbiAgICAgICAgbWF4LXdpZHRoIDogMjcycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0IDoyNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgI2VsZTRlODtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1pbWFnZS13cmFwcGVyIC5wcm9maWxlLWltYWdlIHtcclxuICAgICAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXVzZXJuYW1lIHtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wIDoxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1sb2dpbiB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1iaW8ge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlci1pbmZvLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0IDogNnB4O1xyXG4gICAgfVxyXG4gYDtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe3VzZXJ9KSA9PiB7ICBcclxuICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyB1c2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZVwiIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9e2Ake3VzZXIubmFtZX0g7ZSE66Gc7ZWEIOydtOuvuOyngGB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJuYW1lXCI+e3VzZXIubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWxvZ2luXCI+e3VzZXIubG9naW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWJpb1wiPnt1c2VyLmJpb308L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb01haWwgc2l6ZT17MTZ9IGNvbG9yPVwiIzVhNzM3ZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWluZm8tdGV4dFwiPnt1c2VyLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb0xvY2F0aW9uIHNpemU9ezE2fSBjb2xvcj1cIiM1YTczN2RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1pbmZvLXRleHRcIj57dXNlci5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7slYTsnbTsvZgxIDogaHR0cHM6Ly9yZWFjdC1pY29ucy5uZXRsaWZ5LmNvbS8jLzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj7snKDsoIDsoJXrs7TqsIAg7JeG7Iq164uI64ukLjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\sang_\\\\junhyeok\\\\component\\\\Profile.jsx */");
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


var _jsxFileName = "C:\\Users\\sang_\\junhyeok\\pages\\users\\[name].jsx";



const style = new String(".user-contents-wrapper.jsx-1051939148{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;}.repos-wrapper.jsx-1051939148{width :100%;height :100vh;overflow :scroll;padding:0px 16px;}.repos-header.jsx-1051939148{padding:16px 0;font-size:14px;font-weight:600;border-bottom:1px solid #ele4e8;}.repos-count.jsx-1051939148{display:inline-block;padding:2px 5px;margin-left:6px;font-size:12px;font-weight:600;line-weight:1;color:#586069;background-color:rgba(27,31,35,0.08);border-radius:20px;}.repository-wrapper.jsx-1051939148{width :100%;border-bottom :1px solid #ele4e8;padding:24px 0;}.repository-description.jsx-1051939148{padding :12px 0;}a.jsx-1051939148{-webkit-text-decoration :none;text-decoration :none;}.repository-name.jsx-1051939148{margin :0;color :#0366d6;font-size :20px;display :inline-block;cursor :pointer;}.repository-name.jsx-1051939148:hover{-webkit-text-decoration:underline;text-decoration:underline;}.repository-description.jsx-1051939148{margin :0;font-size:14px;}.repository-language.jsx-1051939148{margin :0;font-size :14px;}.repository-updated-at.jsx-1051939148{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2FuZ19cXGp1bmh5ZW9rXFxwYWdlc1xcdXNlcnNcXFtuYW1lXS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBR3FCLEFBSUEsQUFNRSxBQU1NLEFBWVIsQUFNSSxBQUlNLEFBSVosQUFRZSxBQUlmLEFBS0EsQUFLTSxVQXJCRCxBQVlBLEFBS0MsRUF2REYsQUF3Qm1CLEdBbEJuQixDQXdCbEIsQ0E4QkEsSUFoRG1CLElBMkJDLEFBWXBCLENBbERxQixBQXVEckIsSUFqRG1CLE9BTUEsSUEyQk8sRUF0Q0wsRUF1QkYsQ0FqQmdCLE1BMEJuQyxDQXBCa0IsT0FYbEIsQUF1QkEsQUFvQkEsR0FMb0IsS0ExQkQsTUFuQkgsSUFhaEIsQ0FpQ0EsS0ExQmlCLEdBbkJqQixXQW9CaUIsY0FDdUIscUNBQ2xCLG1CQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXHNhbmdfXFxqdW5oeWVva1xccGFnZXNcXHVzZXJzXFxbbmFtZV0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9Qcm9maWxlXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IGNzcyBgXHJcbiAgICAudXNlci1jb250ZW50cy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlcG9zLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICBoZWlnaHQgOiAxMDB2aDtcclxuICAgICAgICBvdmVyZmxvdyA6IHNjcm9sbDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgIH1cclxuICAgIC5yZXBvcy1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6MTZweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWxlNGU4O1xyXG4gICAgfVxyXG4gICAgLnJlcG9zLWNvdW50IHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOjJweCA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICBsaW5lLXdlaWdodDoxO1xyXG4gICAgICAgIGNvbG9yOiM1ODYwNjk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI3LDMxLDM1LDAuMDgpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCAjZWxlNGU4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZyA6IDEycHggMDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvc2l0b3J5LW5hbWUge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgY29sb3IgOiAjMDM2NmQ2O1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVwb3NpdG9yeS1uYW1lOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvc2l0b3J5LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS1sYW5ndWFnZSB7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBmb250LXNpemUgOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvc2l0b3J5LXVwZGF0ZWQtYXQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBuYW1lID0gKHsgdXNlciwgcmVwb3MgfSkgPT4ge1xyXG4gICAgaWYoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNvbnRlbnRzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlIHVzZXI9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3Mtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3MtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcHNpdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlcG9zLWNvdW50XCI+e3VzZXIucHVibGljX3JlcG9zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgJiYgcmVwb3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3MubWFwKChyZXBvKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyZXBvLmlkfSBjbGFzc05hbWU9XCJyZXBvc2l0b3J5LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQgPVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlci5sb2dpbn0vJHtyZXBvLm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZXBvc2l0b3J5LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlcG9zaXRvcnktZGVzY3JpcHRpb25cIj57cmVwby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVwb3NpdG9yeS1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVwby5sYW5ndWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVwb3NpdG9yeS11cGRhdGVkLWF0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHF1ZXJ5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHVzZXI7XHJcbiAgICAgICAgbGV0IHJlcG9zO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9YCk7XHJcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9SZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9L3JlcG9zP3NvcnQ9dXBkYXRlZCZwYWdlPTEmcGVyX3BhZ2U9MTBgKTtcclxuICAgICAgICBpZihyZXBvUmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJlcG9zID0gYXdhaXQgcmVwb1Jlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7cHJvcHM6eyB1c2VyLCByZXBvcyB9fTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICByZXR1cm4ge3Byb3BzOnt9fTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmFtZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\sang_\\\\junhyeok\\\\pages\\\\users\\\\[name].jsx */");
style.__hash = "1051939148";

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
        lineNumber: 82,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `jsx-${style.__hash}` + " " + "repos-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `jsx-${style.__hash}` + " " + "repos-header",
          children: ["Repsitories", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: `jsx-${style.__hash}` + " " + "repos-count",
            children: user.public_repos
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), user && repos && repos.map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `jsx-${style.__hash}` + " " + "repository-wrapper",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            rel: "noreferrer",
            href: `https://github.com/${user.login}/${repo.name}`,
            className: `jsx-${style.__hash}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: `jsx-${style.__hash}` + " " + "repository-name",
              children: repo.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: `jsx-${style.__hash}` + " " + "repository-description",
            children: repo.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: `jsx-${style.__hash}` + " " + "repository-language",
            children: [repo.language, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: `jsx-${style.__hash}` + " " + "repository-updated-at"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 33
          }, undefined)]
        }, repo.id, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 29
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: style.__hash,
        children: style
      }, void 0, false, void 0, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXJzL1tuYW1lXS5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZ29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsic3R5bGUiLCJQcm9maWxlIiwidXNlciIsImF2YXRhcl91cmwiLCJuYW1lIiwibG9naW4iLCJiaW8iLCJlbWFpbCIsImxvY2F0aW9uIiwicmVwb3MiLCJwdWJsaWNfcmVwb3MiLCJtYXAiLCJyZXBvIiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicXVlcnkiLCJyZXMiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmVwb1JlcyIsInByb3BzIiwiZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Q0FBK0JmLElBQUssRUFBdEMsQ0FBdkI7O0FBQ0EsUUFBR2MsR0FBRyxDQUFDRSxNQUFKLEtBQWUsR0FBbEIsRUFBdUI7QUFDbkJsQixVQUFJLEdBQUcsTUFBTWdCLEdBQUcsQ0FBQ0csSUFBSixFQUFiO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZckIsSUFBWjtBQUNIOztBQUVELFVBQU1zQixPQUFPLEdBQUcsTUFBTUwseURBQUssQ0FBRSxnQ0FBK0JmLElBQUssd0NBQXRDLENBQTNCOztBQUNBLFFBQUdvQixPQUFPLENBQUNKLE1BQVIsS0FBbUIsR0FBdEIsRUFBMkI7QUFDdkJYLFdBQUssR0FBRyxNQUFNZSxPQUFPLENBQUNILElBQVIsRUFBZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWWQsS0FBWjtBQUNIOztBQUVELFdBQU87QUFBQ2dCLFdBQUssRUFBQztBQUFFdkIsWUFBRjtBQUFRTztBQUFSO0FBQVAsS0FBUDtBQUNILEdBakJELENBaUJFLE9BQU9pQixDQUFQLEVBQVU7QUFDUkosV0FBTyxDQUFDQyxHQUFSLENBQVlHLENBQVo7QUFDQSxXQUFPO0FBQUNELFdBQUssRUFBQztBQUFQLEtBQVA7QUFDSDtBQUNKLENBeEJNO0FBMEJRckIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUMzSUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvdXNlcnMvW25hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2Vycy9bbmFtZV0uanN4XCIpO1xuIiwiaW1wb3J0IHsgR29NYWlsLCBHb0xvY2F0aW9uIH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItYmlvIHtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtYm94IHtcclxuICAgICAgICB3aWR0aCA6IDI1JTtcclxuICAgICAgICBtYXgtd2lkdGggOiAyNzJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQgOjI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjZWxlNGU4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWltYWdlLXdyYXBwZXIgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXkgOiBibG9jaztcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdXNlcm5hbWUge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3AgOjE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWxvZ2luIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTZweDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS11c2VyLWluZm8tdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQgOiA2cHg7XHJcbiAgICB9XHJcbiBgO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7dXNlcn0pID0+IHsgIFxyXG4gICAgaWYoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHVzZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlXCIgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD17YCR7dXNlci5uYW1lfSDtlITroZztlYQg7J2066+47KeAYH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcm5hbWVcIj57dXNlci5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItbG9naW5cIj57dXNlci5sb2dpbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItYmlvXCI+e3VzZXIuYmlvfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvTWFpbCBzaXplPXsxNn0gY29sb3I9XCIjNWE3MzdkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXItaW5mby10ZXh0XCI+e3VzZXIuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvTG9jYXRpb24gc2l6ZT17MTZ9IGNvbG9yPVwiIzVhNzM3ZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyLWluZm8tdGV4dFwiPnt1c2VyLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPuyVhOydtOy9mDEgOiBodHRwczovL3JlYWN0LWljb25zLm5ldGxpZnkuY29tLyMvPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PuycoOyggOygleuztOqwgCDsl4bsirXri4jri6QuPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyIsImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnQvUHJvZmlsZVwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3MgYFxyXG4gICAgLnVzZXItY29udGVudHMtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgIH1cclxuICAgIC5yZXBvcy13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0IDogMTAwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3cgOiBzY3JvbGw7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucmVwb3MtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOjE2cHggMDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VsZTRlODtcclxuICAgIH1cclxuICAgIC5yZXBvcy1jb3VudCB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzoycHggNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjZweDtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbGluZS13ZWlnaHQ6MTtcclxuICAgICAgICBjb2xvcjojNTg2MDY5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNywzMSwzNSwwLjA4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgI2VsZTRlODtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmcgOiAxMnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS1uYW1lIHtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIGNvbG9yIDogIzAzNjZkNjtcclxuICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yIDogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlcG9zaXRvcnktbmFtZTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktbGFuZ3VhZ2Uge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS11cGRhdGVkLWF0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgbmFtZSA9ICh7IHVzZXIsIHJlcG9zIH0pID0+IHtcclxuICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jb250ZW50cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZSB1c2VyPXt1c2VyfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9zLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9zLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXBzaXRvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvcy1jb3VudFwiPnt1c2VyLnB1YmxpY19yZXBvc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyICYmIHJlcG9zICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9zLm1hcCgocmVwbykgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVwby5pZH0gY2xhc3NOYW1lPVwicmVwb3NpdG9yeS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0ID1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXIubG9naW59LyR7cmVwby5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVwb3NpdG9yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVwby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXBvc2l0b3J5LWRlc2NyaXB0aW9uXCI+e3JlcG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlcG9zaXRvcnktbGFuZ3VhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlcG8ubGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlcG9zaXRvcnktdXBkYXRlZC1hdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSBxdWVyeTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCB1c2VyO1xyXG4gICAgICAgIGxldCByZXBvcztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtuYW1lfWApO1xyXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXBvUmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtuYW1lfS9yZXBvcz9zb3J0PXVwZGF0ZWQmcGFnZT0xJnBlcl9wYWdlPTEwYCk7XHJcbiAgICAgICAgaWYocmVwb1Jlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXBvcyA9IGF3YWl0IHJlcG9SZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge3Byb3BzOnsgdXNlciwgcmVwb3MgfX07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgcmV0dXJuIHtwcm9wczp7fX07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2dvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=