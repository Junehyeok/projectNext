webpackHotUpdate_N_E("pages/users/[name]",{

/***/ "./component/Repositories.jsx":
/*!************************************!*\
  !*** ./component/Repositories.jsx ***!
  \************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var C_Users_sang_junhyeok_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_sang_junhyeok_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sang_junhyeok_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_sang_junhyeok_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/formatDistance */ "../node_modules/date-fns/formatDistance/index.js");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\sang_\\junhyeok\\component\\Repositories.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var style = new String(".user-contents-wrapper.jsx-931221014{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;}.repos-wrapper.jsx-931221014{width :100%;height :100vh;overflow :scroll;padding:0px 16px;}.repos-header.jsx-931221014{padding:16px 0;font-size:14px;font-weight:600;border-bottom:1px solid #ele4e8;}.repos-count.jsx-931221014{display:inline-block;padding:2px 5px;margin-left:6px;font-size:12px;font-weight:600;line-weight:1;color:#586069;background-color:rgba(27,31,35,0.08);border-radius:20px;}.repository-wrapper.jsx-931221014{width :100%;border-bottom :1px solid #ele4e8;padding:24px 0;}.repository-description.jsx-931221014{padding :12px 0;}a.jsx-931221014{-webkit-text-decoration :none;text-decoration :none;}.repository-name.jsx-931221014{margin :0;color :#0366d6;font-size :20px;display :inline-block;cursor :pointer;}.repository-name.jsx-931221014:hover{-webkit-text-decoration:underline;text-decoration:underline;}.repository-description.jsx-931221014{margin :0;font-size:14px;}.repository-language.jsx-931221014{margin :0;font-size :14px;}.repository-updated-at.jsx-931221014{margin-left:20px;}.repository-paginateion.jsx-931221014{border :1px solid rgba(27,31,35,0.15);border-radius :3px;width :-webkit-fit-content;width :-moz-fit-content;width :fit-content;margin :auto;margin-top :20px;}.repository-pagination.jsx-931221014 button.jsx-931221014{padding :6px 12px;font-size :14px;border :0;color :#0366d6;font-weight :bold;cursor:pointer;outline :none;}.repository-pagination.jsx-931221014 button.jsx-931221014:first-child{border-right :1px solid rgba(27,31,35,0.15);}.repository-pagination.jsx-931221014 button.jsx-931221014:hover.jsx-931221014:not([disabled]){background-color :#0366d6;}.repository-pagination.jsx-931221014 button.jsx-931221014:disabled{color :rgba(27,31,35,0.3);}.repository-paginateion.jsx-931221014{border :1px solid rgba(27,31,35,0.15);border-radius :3px;width :-webkit-fit-content;width :-moz-fit-content;width :fit-content;margin :auto;margin-top :20px;}.repository-pagination.jsx-931221014 button.jsx-931221014{padding :6px 12px;font-size :14px;border :0;color :#0366d6;font-weight :bold;cursor:pointer;outline :none;}.repository-pagination.jsx-931221014 button.jsx-931221014:first-child{border-right :1px solid rgba(27,31,35,0.15);}.repository-pagination.jsx-931221014 button.jsx-931221014:hover.jsx-931221014:not([disabled]){background-color :#0366d6;}.repository-pagination.jsx-931221014 button.jsx-931221014:disabled{color :rgba(27,31,35,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2FuZ19cXGp1bmh5ZW9rXFxjb21wb25lbnRcXFJlcG9zaXRvcmllcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBR3FCLEFBSUEsQUFNRSxBQU1NLEFBWVIsQUFNSSxBQUlNLEFBSVosQUFRZSxBQUlmLEFBS0EsQUFLTSxBQUl5QixBQVF2QixBQVU2QixBQUlyQixBQUlHLEFBSVksQUFRdkIsQUFVNkIsQUFJckIsQUFJRyxVQWpGZCxBQVlBLEFBS0MsRUF2REYsQUF3Qm1CLEdBbEJuQixDQXdCbEIsQ0E4QkEsQ0FZb0IsQUE4QkEsR0ExRkQsSUEyQkMsQUFZcEIsQ0FsRHFCLEFBdURyQixBQThCQSxBQUlBLEFBMEJBLEFBSUEsSUFqSG1CLElBa0VMLEFBOEJBLEdBMUZLLENBbURJLEFBOEJBLEdBdERHLEVBdENMLENBd0VGLEFBUW5CLEFBc0JtQixBQVFuQixDQXZGbUIsQ0FqQmdCLE1BMEJuQyxDQXBCa0IsSUFtREssQUE4QkEsRUFwQkQsQUE4QkEsQ0F0R3RCLEFBdUJBLEFBb0JBLEdBTG9CLEtBMUJELE1BbkJILEdBZ0ZFLEFBOEJBLENBakdsQixDQWlDQSxLQTFCaUIsR0FuQmpCLEtBZ0ZrQixBQThCQSxNQTFGRCxRQTZEakIsQUE4QkEsTUExRndDLGVBZ0R2QixBQThCQSxhQTdCSSxBQThCQSxTQTlFQyxRQWlEdEIsQUE4QkEsV0E5RUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxzYW5nX1xcanVuaHllb2tcXGNvbXBvbmVudFxcUmVwb3NpdG9yaWVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdERpc3RhbmNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzIGBcclxuICAgIC51c2VyLWNvbnRlbnRzLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICB9XHJcbiAgICAucmVwb3Mtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodCA6IDEwMHZoO1xyXG4gICAgICAgIG92ZXJmbG93IDogc2Nyb2xsO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnJlcG9zLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzoxNnB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlbGU0ZTg7XHJcbiAgICB9XHJcbiAgICAucmVwb3MtY291bnQge1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6MnB4IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIGxpbmUtd2VpZ2h0OjE7XHJcbiAgICAgICAgY29sb3I6IzU4NjA2OTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjcsMzEsMzUsMC4wOCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvc2l0b3J5LXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkICNlbGU0ZTg7XHJcbiAgICAgICAgcGFkZGluZzogMjRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvc2l0b3J5LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBwYWRkaW5nIDogMTJweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktbmFtZSB7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBjb2xvciA6ICMwMzY2ZDY7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcclxuICAgICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGN1cnNvciA6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZXBvc2l0b3J5LW5hbWU6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvc2l0b3J5LWxhbmd1YWdlIHtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktdXBkYXRlZC1hdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS1wYWdpbmF0ZWlvbiB7XHJcbiAgICAgICAgYm9yZGVyIDogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDNweDtcclxuICAgICAgICB3aWR0aCA6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIG1hcmdpbiA6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZXBvc2l0b3J5LXBhZ2luYXRpb24gYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nIDogNnB4IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTRweDtcclxuICAgICAgICBib3JkZXIgOiAwO1xyXG4gICAgICAgIGNvbG9yIDogIzAzNjZkNjtcclxuICAgICAgICBmb250LXdlaWdodCA6IGJvbGQ7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgb3V0bGluZSA6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZXBvc2l0b3J5LXBhZ2luYXRpb24gYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQgOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlcG9zaXRvcnktcGFnaW5hdGlvbiBidXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogIzAzNjZkNjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlcG9zaXRvcnktcGFnaW5hdGlvbiBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgICAgIGNvbG9yIDogcmdiYSgyNywgMzEsIDM1LCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvc2l0b3J5LXBhZ2luYXRlaW9uIHtcclxuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogM3B4O1xyXG4gICAgICAgIHdpZHRoIDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luIDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wIDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlcG9zaXRvcnktcGFnaW5hdGlvbiBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmcgOiA2cHggMTJweDtcclxuICAgICAgICBmb250LXNpemUgOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlciA6IDA7XHJcbiAgICAgICAgY29sb3IgOiAjMDM2NmQ2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBvdXRsaW5lIDogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlcG9zaXRvcnktcGFnaW5hdGlvbiBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodCA6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVwb3NpdG9yeS1wYWdpbmF0aW9uIGJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjMDM2NmQ2O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVwb3NpdG9yeS1wYWdpbmF0aW9uIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICAgICAgY29sb3IgOiByZ2JhKDI3LCAzMSwgMzUsIDAuMyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBSZXBvc2l0b3JpZXMgPSAoeyB1c2VyLCByZXBvcyB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcGFnZSA9IFwiMVwiIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgaWYoIXVzZXIgfHwgIXJlcG9zICkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY29udGVudHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGUgdXNlcj17dXNlcn0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvcy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvcy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVwc2l0b3JpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVwb3MtY291bnRcIj57dXNlci5wdWJsaWNfcmVwb3N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciAmJiByZXBvcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcy5tYXAoKHJlcG8pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3JlcG8uaWR9IGNsYXNzTmFtZT1cInJlcG9zaXRvcnktd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldCA9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VyLmxvZ2lufS8ke3JlcG8ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlcG9zaXRvcnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlcG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVwb3NpdG9yeS1kZXNjcmlwdGlvblwiPntyZXBvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXBvc2l0b3J5LWxhbmd1YWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvLmxhbmd1YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvc2l0b3J5LXVwZGF0ZWQtYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZShuZXcgRGF0ZShyZXBvLnVwZGF0ZWRfYXQpLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3VmZml4OnRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9zaXRvcnktcGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VyLmxvZ2lufT9wYWdlPSR7TnVtYmVyKHBhZ2UpIC0xfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e3BhZ2UgJiYgcGFnZSA9PT0gXCIxXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VyLmxvZ2lufT9wYWdlPSR7IXBhZ2UgPyBcIjJcIiA6IE51bWJlcihwYWdlKSArMX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17cmVwb3MubGVuZ3RoIDwgMTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHF1ZXJ5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHVzZXI7XHJcbiAgICAgICAgbGV0IHJlcG9zO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9YCk7XHJcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9SZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke25hbWV9L3JlcG9zP3NvcnQ9dXBkYXRlZCZwYWdlPSR7cGFnZX0mcGVyX3BhZ2U9MTBgKTtcclxuICAgICAgICBpZihyZXBvUmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJlcG9zID0gYXdhaXQgcmVwb1Jlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7cHJvcHM6eyB1c2VyLCByZXBvcyB9fTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICByZXR1cm4ge3Byb3BzOnt9fTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwb3NpdG9yaWVzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\sang_\\\\junhyeok\\\\component\\\\Repositories.jsx */");
style.__hash = "931221014";

var Repositories = function Repositories(_ref) {
  _s();

  var user = _ref.user,
      repos = _ref.repos;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var _router$query$page = router.query.page,
      page = _router$query$page === void 0 ? "1" : _router$query$page;

  if (!user || !repos) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-".concat(style.__hash) + " " + "user-contents-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Profile, {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-".concat(style.__hash) + " " + "repos-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "jsx-".concat(style.__hash) + " " + "repos-header",
          children: ["Repsitories", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "jsx-".concat(style.__hash) + " " + "repos-count",
            children: user.public_repos
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, _this), user && repos && repos.map(function (repo) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "jsx-".concat(style.__hash) + " " + "repository-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              target: "_blank",
              rel: "noreferrer",
              href: "https://github.com/".concat(user.login, "/").concat(repo.name),
              className: "jsx-".concat(style.__hash),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
                className: "jsx-".concat(style.__hash) + " " + "repository-name",
                children: repo.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "jsx-".concat(style.__hash) + " " + "repository-description",
              children: repo.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "jsx-".concat(style.__hash) + " " + "repository-language",
              children: [repo.language, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                className: "jsx-".concat(style.__hash) + " " + "repository-updated-at",
                children: date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5___default()(new Date(repo.updated_at), new Date(), {
                  addSuffix: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 33
            }, _this)]
          }, repo.id, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 29
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-".concat(style.__hash) + " " + "repository-pagination",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/users/".concat(user.login, "?page=").concat(Number(page) - 1),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "jsx-".concat(style.__hash),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              type: "button",
              disabled: page && page === "1",
              className: "jsx-".concat(style.__hash),
              children: "Previous"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/users/".concat(user.login, "?page=").concat(!page ? "2" : Number(page) + 1),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "jsx-".concat(style.__hash),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              type: "button",
              disabled: repos.length < 10,
              className: "jsx-".concat(style.__hash),
              children: "Next"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: style.__hash,
        children: style
      }, void 0, false, void 0, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Repositories, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Repositories;
var getServerSideProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_sang_junhyeok_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_sang_junhyeok_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, name, user, repos, res, repoRes;
    return C_Users_sang_junhyeok_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            name = query.name;
            _context.prev = 2;
            _context.next = 5;
            return fetch("https://api.github.com/users/".concat(name));

          case 5:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return res.json();

          case 9:
            user = _context.sent;
            console.log(user);

          case 11:
            _context.next = 13;
            return fetch("https://api.github.com/users/".concat(name, "/repos?sort=updated&page=").concat(page, "&per_page=10"));

          case 13:
            repoRes = _context.sent;

            if (!(repoRes.status === 200)) {
              _context.next = 19;
              break;
            }

            _context.next = 17;
            return repoRes.json();

          case 17:
            repos = _context.sent;
            console.log(repos);

          case 19:
            return _context.abrupt("return", {
              props: {
                user: user,
                repos: repos
              }
            });

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            return _context.abrupt("return", {
              props: {}
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function getServerSideProps(_x) {
    return _ref3.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (Repositories);

var _c;

$RefreshReg$(_c, "Repositories");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./pages/users/[name].jsx":
/*!********************************!*\
  !*** ./pages/users/[name].jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Profile */ "./component/Profile.jsx");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/formatDistance */ "../node_modules/date-fns/formatDistance/index.js");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Repositories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Repositories */ "./component/Repositories.jsx");


var _jsxFileName = "C:\\Users\\sang_\\junhyeok\\pages\\users\\[name].jsx",
    _this = undefined;






var style = new String(".user-contents-wrapper.jsx-861302427{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2FuZ19cXGp1bmh5ZW9rXFxwYWdlc1xcdXNlcnNcXFtuYW1lXS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBR3FCLDBFQUNBLGFBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2FuZ19cXGp1bmh5ZW9rXFxwYWdlc1xcdXNlcnNcXFtuYW1lXS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1Byb2ZpbGVcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCJkYXRlLWZucy9mb3JtYXREaXN0YW5jZVwiO1xyXG5pbXBvcnQgUmVwb3NpdG9yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnQvUmVwb3NpdG9yaWVzXCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IGNzcyBgXHJcbiAgICAudXNlci1jb250ZW50cy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmNvbnN0IG5hbWUgPSAoeyB1c2VyLCByZXBvcyB9KSA9PiB7XHJcbiAgICBpZighdXNlcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY29udGVudHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8UHJvZmlsZSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8UmVwb3NpdG9yaWVzIHVzZXI9e3VzZXJ9IHJlcG9zPXtyZXBvc30vPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmFtZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\sang_\\\\junhyeok\\\\pages\\\\users\\\\[name].jsx */");
style.__hash = "861302427";

var name = function name(_ref) {
  var user = _ref.user,
      repos = _ref.repos;

  if (!user) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-".concat(style.__hash) + " " + "user-contents-wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Repositories__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      repos: repos
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: style.__hash,
      children: style
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1JlcG9zaXRvcmllcy5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9mZXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW25hbWVdLmpzeCJdLCJuYW1lcyI6WyJzdHlsZSIsIlJlcG9zaXRvcmllcyIsInVzZXIiLCJyZXBvcyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwicGFnZSIsInB1YmxpY19yZXBvcyIsIm1hcCIsInJlcG8iLCJsb2dpbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwiZm9ybWF0RGlzdGFuY2UiLCJEYXRlIiwidXBkYXRlZF9hdCIsImFkZFN1ZmZpeCIsImlkIiwiTnVtYmVyIiwibGVuZ3RoIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmV0Y2giLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInJlcG9SZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLG1wWkFBWDs7O0FBa0lBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN0QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHNDLDJCQUVmRCxNQUFNLENBQUNFLEtBRlEsQ0FFOUJDLElBRjhCO0FBQUEsTUFFOUJBLElBRjhCLG1DQUV2QixHQUZ1Qjs7QUFJdEMsTUFBRyxDQUFDTCxJQUFELElBQVMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQ2Esa0RBQWtELHFCQUFxQjtBQUNwRixpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1ELEtBQUssa2lEQUFYOzs7QUFRQSxJQUFNWSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFxQjtBQUFBLE1BQWxCVixJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzlCLE1BQUcsQ0FBQ0QsSUFBSixFQUFVO0FBQ04sV0FBTyxJQUFQO0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFBQSxtREFBZSx1QkFBZjtBQUFBLDRCQUNJLHFFQUFDLDBEQUFEO0FBQVMsVUFBSSxFQUFFQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLHFFQUFDLCtEQUFEO0FBQWMsVUFBSSxFQUFFQSxJQUFwQjtBQUEwQixXQUFLLEVBQUVDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBWEQ7O0FBYWVTLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzL1tuYW1lXS44Nzc4ODJlYTU4OTcyMzJhZjg0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3MgYFxyXG4gICAgLnVzZXItY29udGVudHMtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgIH1cclxuICAgIC5yZXBvcy13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0IDogMTAwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3cgOiBzY3JvbGw7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucmVwb3MtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOjE2cHggMDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VsZTRlODtcclxuICAgIH1cclxuICAgIC5yZXBvcy1jb3VudCB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzoycHggNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjZweDtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbGluZS13ZWlnaHQ6MTtcclxuICAgICAgICBjb2xvcjojNTg2MDY5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNywzMSwzNSwwLjA4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgI2VsZTRlODtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmcgOiAxMnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS1uYW1lIHtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIGNvbG9yIDogIzAzNjZkNjtcclxuICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yIDogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlcG9zaXRvcnktbmFtZTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktbGFuZ3VhZ2Uge1xyXG4gICAgICAgIG1hcmdpbiA6IDA7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVwb3NpdG9yeS11cGRhdGVkLWF0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvc2l0b3J5LXBhZ2luYXRlaW9uIHtcclxuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogM3B4O1xyXG4gICAgICAgIHdpZHRoIDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luIDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wIDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlcG9zaXRvcnktcGFnaW5hdGlvbiBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmcgOiA2cHggMTJweDtcclxuICAgICAgICBmb250LXNpemUgOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlciA6IDA7XHJcbiAgICAgICAgY29sb3IgOiAjMDM2NmQ2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBvdXRsaW5lIDogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlcG9zaXRvcnktcGFnaW5hdGlvbiBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodCA6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVwb3NpdG9yeS1wYWdpbmF0aW9uIGJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjMDM2NmQ2O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVwb3NpdG9yeS1wYWdpbmF0aW9uIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICAgICAgY29sb3IgOiByZ2JhKDI3LCAzMSwgMzUsIDAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcG9zaXRvcnktcGFnaW5hdGVpb24ge1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAzcHg7XHJcbiAgICAgICAgd2lkdGggOiBmaXQtY29udGVudDtcclxuICAgICAgICBtYXJnaW4gOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVwb3NpdG9yeS1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZyA6IDZweCAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyIDogMDtcclxuICAgICAgICBjb2xvciA6ICMwMzY2ZDY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgOiBib2xkO1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIG91dGxpbmUgOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVwb3NpdG9yeS1wYWdpbmF0aW9uIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0IDogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZXBvc2l0b3J5LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICMwMzY2ZDY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZXBvc2l0b3J5LXBhZ2luYXRpb24gYnV0dG9uOmRpc2FibGVkIHtcclxuICAgICAgICBjb2xvciA6IHJnYmEoMjcsIDMxLCAzNSwgMC4zKTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlcG9zaXRvcmllcyA9ICh7IHVzZXIsIHJlcG9zIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwYWdlID0gXCIxXCIgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBpZighdXNlciB8fCAhcmVwb3MgKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jb250ZW50cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZSB1c2VyPXt1c2VyfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9zLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9zLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXBzaXRvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvcy1jb3VudFwiPnt1c2VyLnB1YmxpY19yZXBvc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyICYmIHJlcG9zICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9zLm1hcCgocmVwbykgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVwby5pZH0gY2xhc3NOYW1lPVwicmVwb3NpdG9yeS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0ID1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXIubG9naW59LyR7cmVwby5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmVwb3NpdG9yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVwby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXBvc2l0b3J5LWRlc2NyaXB0aW9uXCI+e3JlcG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlcG9zaXRvcnktbGFuZ3VhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlcG8ubGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlcG9zaXRvcnktdXBkYXRlZC1hdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKG5ldyBEYXRlKHJlcG8udXBkYXRlZF9hdCksIG5ldyBEYXRlKCksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3NpdG9yeS1wYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIubG9naW59P3BhZ2U9JHtOdW1iZXIocGFnZSkgLTF9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17cGFnZSAmJiBwYWdlID09PSBcIjFcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIubG9naW59P3BhZ2U9JHshcGFnZSA/IFwiMlwiIDogTnVtYmVyKHBhZ2UpICsxfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtyZXBvcy5sZW5ndGggPCAxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyh7IHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcXVlcnk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgdXNlcjtcclxuICAgICAgICBsZXQgcmVwb3M7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7bmFtZX1gKTtcclxuICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVwb1JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7bmFtZX0vcmVwb3M/c29ydD11cGRhdGVkJnBhZ2U9JHtwYWdlfSZwZXJfcGFnZT0xMGApO1xyXG4gICAgICAgIGlmKHJlcG9SZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgcmVwb3MgPSBhd2FpdCByZXBvUmVzLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVwb3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtwcm9wczp7IHVzZXIsIHJlcG9zIH19O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHJldHVybiB7cHJvcHM6e319O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvc2l0b3JpZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7LyogZ2xvYmFscyBzZWxmICovdmFyIGZldGNoPXNlbGYuZmV0Y2guYmluZChzZWxmKTttb2R1bGUuZXhwb3J0cz1mZXRjaDttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9Qcm9maWxlXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VcIjtcclxuaW1wb3J0IFJlcG9zaXRvcmllcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1JlcG9zaXRvcmllc1wiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3MgYFxyXG4gICAgLnVzZXItY29udGVudHMtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgIH1cclxuXHJcbmA7XHJcblxyXG5jb25zdCBuYW1lID0gKHsgdXNlciwgcmVwb3MgfSkgPT4ge1xyXG4gICAgaWYoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNvbnRlbnRzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPFByb2ZpbGUgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPFJlcG9zaXRvcmllcyB1c2VyPXt1c2VyfSByZXBvcz17cmVwb3N9Lz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==