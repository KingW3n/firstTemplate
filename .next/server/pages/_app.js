/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/data/context/AppContext.tsx":
/*!*****************************************!*\
  !*** ./src/data/context/AppContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppConsumer: () => (/* binding */ AppConsumer),\n/* harmony export */   AppProvider: () => (/* binding */ AppProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AppProvider(props) {\n    const [tema, setTema] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function alternarTema() {\n        const novoTema = tema === \"\" ? \"dark\" : \"\";\n        setTema(novoTema);\n        localStorage.setItem(\"tema\", novoTema);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const temaLocalStorege = localStorage.getItem(\"tema\");\n        setTema(temaLocalStorege);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            tema,\n            alternarTema\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/data/context/AppContext.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\nconst AppConsumer = AppContext.Consumer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9jb250ZXh0L0FwcENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJEO0FBVzNELE1BQU1HLDJCQUFhSCxvREFBYUEsQ0FBa0IsQ0FBQztBQUU1QyxTQUFTSSxZQUFZQyxLQUFzQjtJQUU5QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFHakMsU0FBU007UUFDTCxNQUFNQyxXQUFXSCxTQUFRLEtBQUssU0FBUztRQUN2Q0MsUUFBUUU7UUFDUkMsYUFBYUMsT0FBTyxDQUFDLFFBQU9GO0lBQ2hDO0lBR0FSLGdEQUFTQSxDQUFDO1FBQ04sTUFBT1csbUJBQW1CRixhQUFhRyxPQUFPLENBQUM7UUFDL0NOLFFBQVFLO0lBQ1o7SUFFQSxxQkFDSSw4REFBQ1QsV0FBV1csUUFBUTtRQUFDQyxPQUFPO1lBQ3hCVDtZQUNBRTtRQUNKO2tCQUNLSCxNQUFNVyxRQUFROzs7Ozs7QUFHM0I7QUFFQSxpRUFBZWIsVUFBVUEsRUFBQTtBQUNsQixNQUFNYyxjQUFjZCxXQUFXZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3R0ZW1wbGF0ZTMvLi9zcmMvZGF0YS9jb250ZXh0L0FwcENvbnRleHQudHN4PzUxMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vL3R5cGUgVGVtYT0gJ2RhcmsnIHwgJydcblxuaW50ZXJmYWNlIEFwcENvbnRleHRQcm9wcyB7XG4gICAgdGVtYT86IHN0cmluZyBcbiAgICBhbHRlcm5hclRlbWE/OiAoKSA9PiB2b2lkXG4gICAgY2hpbGRyZW4/OiBhbnlcblxufVxuXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBcHBDb250ZXh0UHJvcHM+KHt9KVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwUHJvdmlkZXIocHJvcHM6IEFwcENvbnRleHRQcm9wcyl7XG5cbiAgICBjb25zdCBbdGVtYSwgc2V0VGVtYV0gPSB1c2VTdGF0ZSgnJylcblxuXG4gICAgZnVuY3Rpb24gYWx0ZXJuYXJUZW1hKCl7XG4gICAgICAgIGNvbnN0IG5vdm9UZW1hID0gdGVtYSA9PT0nJyA/ICdkYXJrJyA6ICcnO1xuICAgICAgICBzZXRUZW1hKG5vdm9UZW1hKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVtYScsbm92b1RlbWEpXG4gICAgfVxuXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgIHRlbWFMb2NhbFN0b3JlZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVtYScpXG4gICAgICAgIHNldFRlbWEodGVtYUxvY2FsU3RvcmVnZSk7XG4gICAgfSlcblxuICAgIHJldHVybihcbiAgICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIHRlbWEsXG4gICAgICAgICAgICBhbHRlcm5hclRlbWFcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHRcbmV4cG9ydCBjb25zdCBBcHBDb25zdW1lciA9IEFwcENvbnRleHQuQ29uc3VtZXIiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsIkFwcFByb3ZpZGVyIiwicHJvcHMiLCJ0ZW1hIiwic2V0VGVtYSIsImFsdGVybmFyVGVtYSIsIm5vdm9UZW1hIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRlbWFMb2NhbFN0b3JlZ2UiLCJnZXRJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiQXBwQ29uc3VtZXIiLCJDb25zdW1lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/context/AppContext.tsx\n");

/***/ }),

/***/ "./src/data/context/AuthContext.tsx":
/*!******************************************!*\
  !*** ./src/data/context/AuthContext.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/config */ \"./src/firebase/config.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nasync function usuarioNormalizado(usuarioFirebase) {\n    const token = await usuarioFirebase.getIdToken();\n    return {\n        uid: usuarioFirebase.uid,\n        nome: usuarioFirebase.displayName,\n        email: usuarioFirebase.email,\n        token,\n        proverdor: usuarioFirebase.providerData[0]?.providerId,\n        imageUrl: usuarioFirebase.photoURL\n    };\n}\nfunction gerenciarCookie(logado) {\n    if (logado) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(\"admin-template-firs-auth\", logado, {\n            expires: 7\n        });\n    } else {\n        js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove(\"admin-template-firs-auth\");\n    }\n}\nfunction AuthProvider(props) {\n    const [usuario, setUsuario] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [carregando, setCarregando] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    async function configurarSessao(usuarioFirebase) {\n        if (usuarioFirebase?.email) {\n            const usuario = await usuarioNormalizado(usuarioFirebase);\n            setUsuario(usuario);\n            setCarregando(false);\n            gerenciarCookie(true);\n            return usuario.email;\n        } else {\n            setUsuario(null);\n            setCarregando(false);\n            gerenciarCookie(false);\n            return false;\n        }\n    }\n    async function loginGoogle() {\n        try {\n            setCarregando(true);\n            const resp = await _firebase_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signInWithPopup(new _firebase_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth.GoogleAuthProvider());\n            await configurarSessao(resp.user);\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n        } finally{\n            setCarregando(false);\n        }\n    }\n    async function login(email, senha) {\n        try {\n            setCarregando(true);\n            const resp = await _firebase_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signInWithEmailAndPassword(email, senha);\n            await configurarSessao(resp.user);\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n        } finally{\n            setCarregando(false);\n        }\n    }\n    async function cadastrar(email, senha) {\n        try {\n            setCarregando(true);\n            const resp = await _firebase_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().createUserWithEmailAndPassword(email, senha);\n            await configurarSessao(resp.user);\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n        } finally{\n            setCarregando(false);\n        }\n    }\n    async function logout() {\n        try {\n            setCarregando(true);\n            await _firebase_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signOut();\n            await configurarSessao(null);\n        } finally{\n            setCarregando(false);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"admin-template-firs-auth\")) {\n            const cancelar = _firebase_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().onIdTokenChanged(configurarSessao);\n            return ()=>cancelar();\n        } else {\n            setCarregando(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            usuario,\n            carregando,\n            login,\n            cadastrar,\n            loginGoogle,\n            logout\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/data/context/AuthContext.tsx\",\n        lineNumber: 129,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTs7Ozs7O0FBRzNCO0FBRUEsaUVBQWU3QyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3R0ZW1wbGF0ZTMvLi9zcmMvZGF0YS9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD8zZWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uLy4uL2ZpcmViYXNlL2NvbmZpZ1wiO1xuaW1wb3J0IFVzdWFyaW8gZnJvbSBcIkAvbW9kZWwvVXN1YXJpb1wiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuaW50ZXJmYWNlIEF1dGhDT250ZXh0UHJvcHN7XG4gICAgdXN1YXJpbz86VXN1YXJpb1xuICAgIGNhcnJlZ2FuZG8/OmJvb2xlYW5cbiAgICBsb2dpbj86KGVtYWlsOnN0cmluZywgc2VuaGE6c3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+XG4gICAgY2FkYXN0cmFyPzooZW1haWw6c3RyaW5nLCBzZW5oYTpzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cbiAgICBsb2dpbkdvb2dsZT86KCkgPT4gUHJvbWlzZTx2b2lkPlxuICAgIGxvZ291dD86KCkgPT4gUHJvbWlzZTx2b2lkPlxufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENPbnRleHRQcm9wcz4oe30pXG5cbmFzeW5jIGZ1bmN0aW9uIHVzdWFyaW9Ob3JtYWxpemFkbyh1c3VhcmlvRmlyZWJhc2U6IGZpcmViYXNlLlVzZXIpOiBQcm9taXNlPFVzdWFyaW8+e1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c3VhcmlvRmlyZWJhc2UuZ2V0SWRUb2tlbigpXG5cbiAgICByZXR1cm57XG4gICAgICAgIHVpZDp1c3VhcmlvRmlyZWJhc2UudWlkLFxuICAgICAgICBub21lOnVzdWFyaW9GaXJlYmFzZS5kaXNwbGF5TmFtZSxcbiAgICAgICAgZW1haWw6dXN1YXJpb0ZpcmViYXNlLmVtYWlsLFxuICAgICAgICB0b2tlbixcbiAgICAgICAgcHJvdmVyZG9yOiB1c3VhcmlvRmlyZWJhc2UucHJvdmlkZXJEYXRhWzBdPy5wcm92aWRlcklkLFxuICAgICAgICBpbWFnZVVybDp1c3VhcmlvRmlyZWJhc2UucGhvdG9VUkxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdlcmVuY2lhckNvb2tpZShsb2dhZG86IGJvb2xlYW4pe1xuICAgIGlmIChsb2dhZG8pe1xuICAgICAgICBDb29raWVzLnNldCgnYWRtaW4tdGVtcGxhdGUtZmlycy1hdXRoJywgbG9nYWRvLHtcbiAgICAgICAgICAgIGV4cGlyZXM6N1xuICAgICAgICB9KVxuICAgIH1lbHNle1xuICAgICAgICBDb29raWVzLnJlbW92ZSgnYWRtaW4tdGVtcGxhdGUtZmlycy1hdXRoJylcbiAgICB9XG59IFxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHByb3BzOmFueSl7XG5cbiAgICBjb25zdCBbdXN1YXJpbyxzZXRVc3VhcmlvXSA9IHVzZVN0YXRlPFVzdWFyaW8+KG51bGwpXG4gICAgY29uc3QgW2NhcnJlZ2FuZG8sc2V0Q2FycmVnYW5kb10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbmZpZ3VyYXJTZXNzYW8odXN1YXJpb0ZpcmViYXNlOmFueSl7XG4gICAgICAgIGlmKHVzdWFyaW9GaXJlYmFzZT8uZW1haWwpe1xuICAgICAgICAgICAgY29uc3QgdXN1YXJpbyA9IGF3YWl0IHVzdWFyaW9Ob3JtYWxpemFkbyh1c3VhcmlvRmlyZWJhc2UpXG4gICAgICAgICAgICBzZXRVc3VhcmlvICh1c3VhcmlvKVxuICAgICAgICAgICAgc2V0Q2FycmVnYW5kbyhmYWxzZSlcbiAgICAgICAgICAgIGdlcmVuY2lhckNvb2tpZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB1c3VhcmlvLmVtYWlsXG4gICAgICAgIH1lbHNleyAgXG4gICAgICAgICAgICBzZXRVc3VhcmlvIChudWxsKVxuICAgICAgICAgICAgc2V0Q2FycmVnYW5kbyhmYWxzZSlcbiAgICAgICAgICAgIGdlcmVuY2lhckNvb2tpZShmYWxzZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9naW5Hb29nbGUoKSB7XG4gICAgICAgdHJ5e1xuICAgICAgICAgICAgc2V0Q2FycmVnYW5kbyh0cnVlKVxuXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLiBzaWduSW5XaXRoUG9wdXAoXG4gICAgICAgICAgICAgICAgbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKClcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgYXdhaXQgY29uZmlndXJhclNlc3NhbyhyZXNwLnVzZXIpXG4gICAgICAgICAgICByb3V0ZS5wdXNoKCcvJykgICBcbiAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgIHNldENhcnJlZ2FuZG8oZmFsc2UgKVxuICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2dpbihlbWFpbDpzdHJpbmcsc2VuaGE6c3RyaW5nKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgICBzZXRDYXJyZWdhbmRvKHRydWUpXG5cbiAgICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHNlbmhhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgYXdhaXQgY29uZmlndXJhclNlc3NhbyhyZXNwLnVzZXIpXG4gICAgICAgICAgICAgcm91dGUucHVzaCgnLycpICAgXG4gICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgIHNldENhcnJlZ2FuZG8oZmFsc2UgKVxuICAgICAgICB9XG4gICAgIH1cblxuICAgICBhc3luYyBmdW5jdGlvbiBjYWRhc3RyYXIoZW1haWw6c3RyaW5nLHNlbmhhOnN0cmluZykge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICAgc2V0Q2FycmVnYW5kbyh0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgc2VuaGFcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgIGF3YWl0IGNvbmZpZ3VyYXJTZXNzYW8ocmVzcC51c2VyKVxuICAgICAgICAgICAgIHJvdXRlLnB1c2goJy8nKSAgIFxuICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgICBzZXRDYXJyZWdhbmRvKGZhbHNlIClcbiAgICAgICAgfVxuICAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2dvdXQgKCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIHNldENhcnJlZ2FuZG8odHJ1ZSlcbiAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KClcbiAgICAgICAgICAgIGF3YWl0IGNvbmZpZ3VyYXJTZXNzYW8obnVsbClcbiAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgICBzZXRDYXJyZWdhbmRvKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKENvb2tpZXMuZ2V0KCdhZG1pbi10ZW1wbGF0ZS1maXJzLWF1dGgnKSl7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxhciA9IGZpcmViYXNlLmF1dGgoKS5vbklkVG9rZW5DaGFuZ2VkKGNvbmZpZ3VyYXJTZXNzYW8pXG4gICAgICAgICAgICByZXR1cm4oKSA9PiBjYW5jZWxhcigpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0Q2FycmVnYW5kbyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIHVzdWFyaW8sIFxuICAgICAgICAgICAgY2FycmVnYW5kbyxcbiAgICAgICAgICAgIGxvZ2luLFxuICAgICAgICAgICAgY2FkYXN0cmFyLFxuICAgICAgICAgICAgbG9naW5Hb29nbGUsIFxuICAgICAgICAgICAgbG9nb3V0XG4gICAgICAgIH19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicm91dGUiLCJmaXJlYmFzZSIsIkNvb2tpZXMiLCJBdXRoQ29udGV4dCIsInVzdWFyaW9Ob3JtYWxpemFkbyIsInVzdWFyaW9GaXJlYmFzZSIsInRva2VuIiwiZ2V0SWRUb2tlbiIsInVpZCIsIm5vbWUiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwicHJvdmVyZG9yIiwicHJvdmlkZXJEYXRhIiwicHJvdmlkZXJJZCIsImltYWdlVXJsIiwicGhvdG9VUkwiLCJnZXJlbmNpYXJDb29raWUiLCJsb2dhZG8iLCJzZXQiLCJleHBpcmVzIiwicmVtb3ZlIiwiQXV0aFByb3ZpZGVyIiwicHJvcHMiLCJ1c3VhcmlvIiwic2V0VXN1YXJpbyIsImNhcnJlZ2FuZG8iLCJzZXRDYXJyZWdhbmRvIiwiY29uZmlndXJhclNlc3NhbyIsImxvZ2luR29vZ2xlIiwicmVzcCIsImF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJ1c2VyIiwicHVzaCIsImxvZ2luIiwic2VuaGEiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNhZGFzdHJhciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImxvZ291dCIsInNpZ25PdXQiLCJnZXQiLCJjYW5jZWxhciIsIm9uSWRUb2tlbkNoYW5nZWQiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/context/AuthContext.tsx\n");

/***/ }),

/***/ "./src/firebase/config.js":
/*!********************************!*\
  !*** ./src/firebase/config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps).length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n        apiKey: \"AIzaSyB0Z0WyUlKsWodonPxHFzvm1HOkUYJsKgk\",\n        authDomain: \"admin-templatew3n.firebaseapp.com\",\n        projectId: \"admin-templatew3n\",\n        storageBucket: \"admin-templatew3n.appspot.com\",\n        messagingSenderId: \"476526169254\",\n        appId: \"1:476526169254:web:569b536e8349a160f7b867\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UvY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ2Q7QUFFdEIsSUFBRyxDQUFDQSwwREFBYSxDQUFDRSxNQUFNLEVBQUM7SUFDckJGLGlFQUFzQixDQUFDO1FBQ25CSSxRQUFRQyx5Q0FBdUM7UUFDL0NHLFlBQVlILG1DQUEyQztRQUN2REssV0FBV0wsbUJBQTBDO1FBQ3JETyxlQUFlUCwrQkFBOEM7UUFDN0RTLG1CQUFtQlQsY0FBa0Q7UUFDckVXLE9BQU9YLDJDQUFzQztJQUNqRDtBQUNKO0FBRUEsaUVBQWVMLHFEQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3R0ZW1wbGF0ZTMvLi9zcmMvZmlyZWJhc2UvY29uZmlnLmpzPzlhODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcblxuaWYoIWZpcmViYXNlLmFwcHMubGVuZ3RoKXtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcbiAgICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElLRVksXG4gICAgICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhET01BSU4sXG4gICAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVElELFxuICAgICAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFQlVDS0VULFxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HU0VOREVSSUQsXG4gICAgICAgIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBJRFxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRUJVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HU0VOREVSSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUElEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/firebase/config.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/context/AuthContext */ \"./src/data/context/AuthContext.tsx\");\n/* harmony import */ var _data_context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/context/AppContext */ \"./src/data/context/AppContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_data_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_data_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_data_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.AppProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/wendel/Documentos/Next/Estudo/Project/firstTemplate/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDRDtBQUMzQjtBQUdkLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0EsOERBQUNKLG1FQUFZQTtrQkFDWCw0RUFBQ0MsaUVBQVdBO3NCQUNWLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3R0ZW1wbGF0ZTMvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdAL2RhdGEvY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSAnLi4vZGF0YS9jb250ZXh0L0FwcENvbnRleHQnXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICA8QXV0aFByb3ZpZGVyPlxuICAgIDxBcHBQcm92aWRlcj4gXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+IFxuICAgIDwvQXBwUHJvdmlkZXI+XG4gIDwvQXV0aFByb3ZpZGVyPilcbn1cbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJBcHBQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();