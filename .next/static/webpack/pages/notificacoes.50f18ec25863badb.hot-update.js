/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/notificacoes",{

/***/ "./src/components/template/Logo.tsx":
/*!******************************************!*\
  !*** ./src/components/template/Logo.tsx ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/components/template/MenuLateral.tsx":
/*!*************************************************!*\
  !*** ./src/components/template/MenuLateral.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuLateral; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ \"./src/components/icons/index.tsx\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ \"./src/components/template/Logo.tsx\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Logo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ \"./src/components/template/MenuItem.tsx\");\n\n\n\n\nfunction MenuLateral() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" \\n                flex flex-col items-center justify-center\\n                bg-gradient-to-r from-indigo-500 to-purple-800 \\n                h-20 w-20 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Logo__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                    fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuLateral.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuLateral.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        url: \"/\",\n                        texto: \"inicio\",\n                        icone: _icons__WEBPACK_IMPORTED_MODULE_1__.iconeCasautline\n                    }, void 0, false, {\n                        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuLateral.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        url: \"/ajustes\",\n                        texto: \"Ajustes\",\n                        icone: _icons__WEBPACK_IMPORTED_MODULE_1__.iconeAjustesOutline\n                    }, void 0, false, {\n                        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuLateral.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        url: \"/notificacoes\",\n                        texto: \"Notifica\\xe7\\xf5es\",\n                        icone: _icons__WEBPACK_IMPORTED_MODULE_1__.iconeBellOutline\n                    }, void 0, false, {\n                        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuLateral.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuLateral.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuLateral.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = MenuLateral;\nvar _c;\n$RefreshReg$(_c, \"MenuLateral\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZS9NZW51TGF0ZXJhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUY7QUFDekQ7QUFDUTtBQUVuQixTQUFTSztJQUNwQixxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQztnQkFBSUMsV0FBWTswQkFJYiw0RUFBQ0wsOENBQUlBOzs7Ozs7Ozs7OzBCQUVULDhEQUFDTTs7a0NBQ0csOERBQUNMLGlEQUFRQTt3QkFDTE0sS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsT0FBT1YsbURBQWVBOzs7Ozs7a0NBRTFCLDhEQUFDRSxpREFBUUE7d0JBQ0xNLEtBQUk7d0JBQ0pDLE9BQU07d0JBQ05DLE9BQU9aLHVEQUFtQkE7Ozs7OztrQ0FFOUIsOERBQUNJLGlEQUFRQTt3QkFDTE0sS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsT0FBT1gsb0RBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNDO0tBNUJ3QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGUvTWVudUxhdGVyYWwudHN4P2YxNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaWNvbmVBanVzdGVzT3V0bGluZSwgaWNvbmVCZWxsT3V0bGluZSwgaWNvbmVDYXNhdXRsaW5lICB9IGZyb20gXCIuLi9pY29uc1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL01lbnVJdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVMYXRlcmFsKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCBcbiAgICAgICAgICAgICAgICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxuICAgICAgICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1pbmRpZ28tNTAwIHRvLXB1cnBsZS04MDAgXG4gICAgICAgICAgICAgICAgaC0yMCB3LTIwIGB9PlxuICAgICAgICAgICAgICAgIDxMb2dvPjwvTG9nbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBcbiAgICAgICAgICAgICAgICAgICAgdXJsPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgIHRleHRvPVwiaW5pY2lvXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbmU9e2ljb25lQ2FzYXV0bGluZSB9XG4gICAgICAgICAgICAgICAgPjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIFxuICAgICAgICAgICAgICAgICAgICB1cmw9XCIvYWp1c3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgIHRleHRvPVwiQWp1c3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgIGljb25lPXtpY29uZUFqdXN0ZXNPdXRsaW5lIH1cbiAgICAgICAgICAgICAgICA+PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gXG4gICAgICAgICAgICAgICAgICAgIHVybD1cIi9ub3RpZmljYWNvZXNcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0bz1cIk5vdGlmaWNhw6fDtWVzXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbmU9e2ljb25lQmVsbE91dGxpbmUgfVxuICAgICAgICAgICAgICAgID48L01lbnVJdGVtPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApXG59Il0sIm5hbWVzIjpbImljb25lQWp1c3Rlc091dGxpbmUiLCJpY29uZUJlbGxPdXRsaW5lIiwiaWNvbmVDYXNhdXRsaW5lIiwiTG9nbyIsIk1lbnVJdGVtIiwiTWVudUxhdGVyYWwiLCJhc2lkZSIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwidXJsIiwidGV4dG8iLCJpY29uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/template/MenuLateral.tsx\n"));

/***/ })

});