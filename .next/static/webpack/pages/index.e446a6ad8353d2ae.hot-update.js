"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/template/Botoes/BotaoAlternarTema.tsx":
/*!**************************************************************!*\
  !*** ./src/components/template/Botoes/BotaoAlternarTema.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BotaoAlterarTema; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icons */ \"./src/components/icons/index.tsx\");\n\n\nfunction BotaoAlterarTema(props) {\n    console.log(props.tema);\n    return props.tema === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: props.alternarTema,\n        className: \"\\n            hidden sm:flex items-center cursor-pointer\\n            bg-gradient-to-r from-yellow-300 to-yellow-600 \\n            w- lg:w-24 h-8 p-1 rounded-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: _components_icons__WEBPACK_IMPORTED_MODULE_1__.iconeSolOutline\n            }, void 0, false, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Botoes/BotaoAlternarTema.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Claro\"\n                }, void 0, false, {\n                    fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Botoes/BotaoAlternarTema.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Botoes/BotaoAlternarTema.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Botoes/BotaoAlternarTema.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Botoes/BotaoAlternarTema.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = BotaoAlterarTema;\nvar _c;\n$RefreshReg$(_c, \"BotaoAlterarTema\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZS9Cb3RvZXMvQm90YW9BbHRlcm5hclRlbWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBT3JDLFNBQVNDLGlCQUFpQkMsS0FBNEI7SUFDakVDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsSUFBSTtJQUN0QixPQUFPSCxNQUFNRyxJQUFJLEtBQUssdUJBQ2xCLDhEQUFDQztRQUFJQyxTQUFTTCxNQUFNTSxZQUFZO1FBQUVDLFdBQVk7OzBCQUkxQyw4REFBQ0g7Z0JBQUlHLFdBQVk7MEJBQ1pULDhEQUFlQTs7Ozs7OzBCQUVwQiw4REFBQ007Z0JBQUlHLFdBQVk7MEJBQ2IsNEVBQUNDOzhCQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUlkLDhEQUFDSjs7Ozs7QUFFVDtLQWpCd0JMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlL0JvdG9lcy9Cb3Rhb0FsdGVybmFyVGVtYS50c3g/MWU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpY29uZVNvbE91dGxpbmUgfSBmcm9tIFwiQC9jb21wb25lbnRzL2ljb25zXCJcblxuaW50ZXJmYWNlIEJvdGFvQWx0ZXJhclRlbWFQcm9wc3tcbiAgICB0ZW1hPzogIHN0cmluZ1xuICAgIGFsdGVybmFyVGVtYT86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm90YW9BbHRlcmFyVGVtYShwcm9wczogQm90YW9BbHRlcmFyVGVtYVByb3BzKXtcbiAgICBjb25zb2xlLmxvZyhwcm9wcy50ZW1hKVxuICAgIHJldHVybiBwcm9wcy50ZW1hID09PSAnZGFyaycgPyAoXG4gICAgICAgIDxkaXYgb25DbGljaz17cHJvcHMuYWx0ZXJuYXJUZW1hfSBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgIGhpZGRlbiBzbTpmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgICAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXllbGxvdy0zMDAgdG8teWVsbG93LTYwMCBcbiAgICAgICAgICAgIHctIGxnOnctMjQgaC04IHAtMSByb3VuZGVkLWZ1bGxgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgICAgICAgICAgICB7aWNvbmVTb2xPdXRsaW5lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGB9PlxuICAgICAgICAgICAgICAgIDxzcGFuPkNsYXJvPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk6KFxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiaWNvbmVTb2xPdXRsaW5lIiwiQm90YW9BbHRlcmFyVGVtYSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRlbWEiLCJkaXYiLCJvbkNsaWNrIiwiYWx0ZXJuYXJUZW1hIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/template/Botoes/BotaoAlternarTema.tsx\n"));

/***/ })

});