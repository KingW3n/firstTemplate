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

/***/ "./src/components/template/MenuItem.tsx":
/*!**********************************************!*\
  !*** ./src/components/template/MenuItem.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MenuItem(props) {\n    function renderizarLink() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"flex flex-col justify-center items-center h-20 w-full  text-gray-600 \".concat(props.clasName),\n            children: [\n                props.icone,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-xs font-light\",\n                    children: props.texto\n                }, void 0, false, {\n                    fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuItem.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuItem.tsx\",\n            lineNumber: 13,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        onClick: props.onClick,\n        className: \"hover:bg-gray-100 cursor-pointer\",\n        children: props.url ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: props.url,\n            legacyBehavior: true,\n            children: renderizarLink()\n        }, void 0, false, {\n            fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuItem.tsx\",\n            lineNumber: 26,\n            columnNumber: 17\n        }, this) : renderizarLink()\n    }, void 0, false, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/MenuItem.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = MenuItem;\nvar _c;\n$RefreshReg$(_c, \"MenuItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZS9NZW51SXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBVWIsU0FBU0MsU0FBU0MsS0FBbUI7SUFDaEQsU0FBU0M7UUFDTCxxQkFBTyw4REFBQ0M7WUFBRUMsV0FBVyx3RUFBdUYsT0FBZkgsTUFBTUksUUFBUTs7Z0JBQzlGSixNQUFNSyxLQUFLOzhCQUNaLDhEQUFDQztvQkFBS0gsV0FBWTs4QkFDYkgsTUFBTU8sS0FBSzs7Ozs7Ozs7Ozs7O0lBSWhDO0lBRUEscUJBQ0ksOERBQUNDO1FBQUdDLFNBQVNULE1BQU1TLE9BQU87UUFBRU4sV0FBWTtrQkFFbkNILE1BQU1VLEdBQUcsaUJBQ04sOERBQUNaLGtEQUFJQTtZQUFDYSxNQUFNWCxNQUFNVSxHQUFHO1lBQUVFLGNBQWM7c0JBQ2hDWDs7Ozs7bUJBR0xBOzs7Ozs7QUFNaEI7S0F6QndCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZS9NZW51SXRlbS50c3g/M2I4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuaW50ZXJmYWNlIE1lbnVJdGVtUHJvcHN7XG4gICAgdXJsPzpzdHJpbmdcbiAgICBvbkNsaWNrPzogKGV2ZW50bzphbnkpID0+dm9pZFxuICAgIGNsYXNOYW1lPzogc3RyaW5nXG4gICAgdGV4dG86c3RyaW5nIFxuICAgIGljb25lOiBhbnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0ocHJvcHM6TWVudUl0ZW1Qcm9wcyl7XG4gICAgZnVuY3Rpb24gcmVuZGVyaXphckxpbmsgKCl7XG4gICAgICAgIHJldHVybig8YSBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTIwIHctZnVsbCAgdGV4dC1ncmF5LTYwMCAke3Byb3BzLmNsYXNOYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaWNvbmV9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1saWdodGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRleHRvfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IGNsYXNzTmFtZT17YGhvdmVyOmJnLWdyYXktMTAwIGN1cnNvci1wb2ludGVyYH0+XG5cbiAgICAgICAgICAgIHtwcm9wcy51cmwgPyhcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy51cmx9IGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyaXphckxpbmsoKX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICByZW5kZXJpemFyTGluaygpXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9saT5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJNZW51SXRlbSIsInByb3BzIiwicmVuZGVyaXphckxpbmsiLCJhIiwiY2xhc3NOYW1lIiwiY2xhc05hbWUiLCJpY29uZSIsInNwYW4iLCJ0ZXh0byIsImxpIiwib25DbGljayIsInVybCIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/template/MenuItem.tsx\n"));

/***/ })

});