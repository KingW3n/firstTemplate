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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_hook_useAppData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/hook/useAppData */ \"./src/data/hook/useAppData.ts\");\n/* harmony import */ var _Conteudo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Conteudo */ \"./src/components/template/Conteudo.tsx\");\n/* harmony import */ var _MenuLateral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuLateral */ \"./src/components/template/MenuLateral.tsx\");\n/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopBar */ \"./src/components/template/TopBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction layout(props) {\n    _s();\n    const { tema } = (0,_data_hook_useAppData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \".concat(tema, \" flex h-screen w-screeen\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuLateral__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\\n                flex \\n                flex-col \\n                w-full \\n                p-7 \\n                bg-gray-300 dark:bg-gray-900\\n            \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        titulo: props.titulo,\n                        subtitulo: props.subtitulo\n                    }, void 0, false, {\n                        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Conteudo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: props.children\n                    }, void 0, false, {\n                        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/components/template/Layout.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(layout, \"SibnZHhmK4bFsYmUaq1HvfBJhaw=\", false, function() {\n    return [\n        _data_hook_useAppData__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZS9MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUNkO0FBQ007QUFDVjtBQU9kLFNBQVNJLE9BQVFDLEtBQWlCOztJQUU3QyxNQUFNLEVBQUNDLElBQUksRUFBQyxHQUFHTixpRUFBVUE7SUFFekIscUJBQ0ksOERBQUNPO1FBQUlDLFdBQVcsSUFBUyxPQUFMRixNQUFLOzswQkFDckIsOERBQUNKLG9EQUFXQTs7Ozs7MEJBQ1osOERBQUNLO2dCQUFJQyxXQUFZOztrQ0FPYiw4REFBQ0wsK0NBQU1BO3dCQUFDTSxRQUFRSixNQUFNSSxNQUFNO3dCQUFFQyxXQUFXTCxNQUFNSyxTQUFTOzs7Ozs7a0NBQ3hELDhEQUFDVCxpREFBUUE7a0NBQ0pJLE1BQU1NLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQztHQXJCd0JQOztRQUVMSiw2REFBVUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGUvTGF5b3V0LnRzeD8wMzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VBcHBEYXRhIGZyb20gXCJAL2RhdGEvaG9vay91c2VBcHBEYXRhXCJcbmltcG9ydCBDb250ZXVkbyBmcm9tIFwiLi9Db250ZXVkb1wiXG5pbXBvcnQgTWVudUxhdGVyYWwgZnJvbSBcIi4vTWVudUxhdGVyYWxcIlxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi9Ub3BCYXJcIlxuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHN7XG4gICAgdGl0dWxvOnN0cmluZ1xuICAgIHN1YnRpdHVsbzpzdHJpbmdcbiAgICBjaGlsZHJlbj86IGFueVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGF5b3V0KCBwcm9wczpMYXlvdXRQcm9wcyl7XG5cbiAgICBjb25zdCB7dGVtYX0gPSB1c2VBcHBEYXRhKClcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHt0ZW1hfSBmbGV4IGgtc2NyZWVuIHctc2NyZWVlbmB9PlxuICAgICAgICAgICAgPE1lbnVMYXRlcmFsPjwvTWVudUxhdGVyYWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgIGZsZXggXG4gICAgICAgICAgICAgICAgZmxleC1jb2wgXG4gICAgICAgICAgICAgICAgdy1mdWxsIFxuICAgICAgICAgICAgICAgIHAtNyBcbiAgICAgICAgICAgICAgICBiZy1ncmF5LTMwMCBkYXJrOmJnLWdyYXktOTAwXG4gICAgICAgICAgICBgfT5cbiAgICAgICAgICAgICAgICA8VG9wQmFyIHRpdHVsbz17cHJvcHMudGl0dWxvfSBzdWJ0aXR1bG89e3Byb3BzLnN1YnRpdHVsb30gLz5cbiAgICAgICAgICAgICAgICA8Q29udGV1ZG8+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0NvbnRldWRvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlQXBwRGF0YSIsIkNvbnRldWRvIiwiTWVudUxhdGVyYWwiLCJUb3BCYXIiLCJsYXlvdXQiLCJwcm9wcyIsInRlbWEiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXR1bG8iLCJzdWJ0aXR1bG8iLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/template/Layout.tsx\n"));

/***/ })

});