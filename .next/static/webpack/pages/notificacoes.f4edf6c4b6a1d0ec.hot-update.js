"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/notificacoes",{

/***/ "./src/components/template/Layout.tsx":
/*!********************************************!*\
  !*** ./src/components/template/Layout.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Conteudo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conteudo */ \"./src/components/template/Conteudo.tsx\");\n/* harmony import */ var _MenuLateral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuLateral */ \"./src/components/template/MenuLateral.tsx\");\n/* harmony import */ var _Titulo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Titulo */ \"./src/components/template/Titulo.tsx\");\n\n\n\n\nfunction layout(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"  flex h-screen w-screeen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuLateral__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\\n                flex \\n                flex-col \\n                w-full \\n                p-7 \\n                bg-gray-300 dark:bg-gray-900\\n            \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Titulo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        titulo: props.titulo,\n                        subtitulo: props.subtitulo\n                    }, void 0, false, {\n                        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Conteudo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        children: props.children\n                    }, void 0, false, {\n                        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZS9MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDTTtBQUNWO0FBT2QsU0FBU0csT0FBUUMsS0FBaUI7SUFDN0MscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVk7OzBCQUNiLDhEQUFDTCxvREFBV0E7Ozs7OzBCQUNaLDhEQUFDSTtnQkFBSUMsV0FBWTs7a0NBT2IsOERBQUNKLCtDQUFNQTt3QkFBQ0ssUUFBUUgsTUFBTUcsTUFBTTt3QkFBRUMsV0FBV0osTUFBTUksU0FBUzs7Ozs7O2tDQUN4RCw4REFBQ1IsaURBQVFBO2tDQUNKSSxNQUFNSyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGUvTGF5b3V0LnRzeD8wMzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZXVkbyBmcm9tIFwiLi9Db250ZXVkb1wiXG5pbXBvcnQgTWVudUxhdGVyYWwgZnJvbSBcIi4vTWVudUxhdGVyYWxcIlxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi9UaXR1bG9cIlxuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHN7XG4gICAgdGl0dWxvOnN0cmluZ1xuICAgIHN1YnRpdHVsbzpzdHJpbmdcbiAgICBjaGlsZHJlbj86IGFueVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGF5b3V0KCBwcm9wczpMYXlvdXRQcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCAgZmxleCBoLXNjcmVlbiB3LXNjcmVlZW5gfT5cbiAgICAgICAgICAgIDxNZW51TGF0ZXJhbD48L01lbnVMYXRlcmFsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICBmbGV4IFxuICAgICAgICAgICAgICAgIGZsZXgtY29sIFxuICAgICAgICAgICAgICAgIHctZnVsbCBcbiAgICAgICAgICAgICAgICBwLTcgXG4gICAgICAgICAgICAgICAgYmctZ3JheS0zMDAgZGFyazpiZy1ncmF5LTkwMFxuICAgICAgICAgICAgYH0+XG4gICAgICAgICAgICAgICAgPFRvcEJhciB0aXR1bG89e3Byb3BzLnRpdHVsb30gc3VidGl0dWxvPXtwcm9wcy5zdWJ0aXR1bG99IC8+XG4gICAgICAgICAgICAgICAgPENvbnRldWRvPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9Db250ZXVkbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkNvbnRldWRvIiwiTWVudUxhdGVyYWwiLCJUb3BCYXIiLCJsYXlvdXQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsInRpdHVsbyIsInN1YnRpdHVsbyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/template/Layout.tsx\n"));

/***/ })

});