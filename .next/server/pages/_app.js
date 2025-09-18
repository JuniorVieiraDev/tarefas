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

/***/ "(pages-dir-node)/./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"(pages-dir-node)/./src/components/header/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Header = ()=>{\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                children: [\n                                    \"Tarefas\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                        lineNumber: 14,\n                                        columnNumber: 60\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, undefined),\n                        session?.user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/dashboard\",\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                            children: \"Meu painel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, undefined),\n                status === \"loading\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().loginButton),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: [\n                        \"Ol\\xe1, \",\n                        session?.user?.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().loginButton),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)('google'),\n                    children: \"Acessar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\components\\\\header\\\\index.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2RDtBQUNqQztBQUNZO0FBRXhDLE1BQU1LLFNBQVM7SUFFWCxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdSLDJEQUFVQTtJQUU1QyxxQkFDSSw4REFBQ1M7UUFBT0MsV0FBV04sa0VBQWE7a0JBQzVCLDRFQUFDTztZQUFRRCxXQUFXTixtRUFBYzs7OEJBQzlCLDhEQUFDUztvQkFBSUgsV0FBV04sK0RBQVU7O3NDQUN0Qiw4REFBQ0Qsa0RBQUlBOzRCQUFDVyxNQUFLO3NDQUNQLDRFQUFDQztnQ0FBR0wsV0FBV04sZ0VBQVc7O29DQUFFO2tEQUFPLDhEQUFDYTtrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBRzVDVixTQUFTVyxzQkFDTiw4REFBQ2Ysa0RBQUlBOzRCQUFDVyxNQUFLOzRCQUFhSixXQUFXTixnRUFBVztzQ0FBRTs7Ozs7Ozs7Ozs7O2dCQU92REksV0FBVywwQkFDUixnSkFDQUQsd0JBQ0EsOERBQUNhO29CQUFPVixXQUFXTix1RUFBa0I7b0JBQUVrQixTQUFTLElBQU1wQix3REFBT0E7O3dCQUFJO3dCQUN2REssU0FBU1csTUFBTUs7Ozs7Ozs4Q0FHekIsOERBQUNIO29CQUFPVixXQUFXTix1RUFBa0I7b0JBQUVrQixTQUFTLElBQU1yQix1REFBTUEsQ0FBQzs4QkFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUY7QUFFQSxpRUFBZUksTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxldmFsZFxcRGVza3RvcFxcZXN0dWRvcy1kZS1wcm9ncmFtYWNhb1xcRnVsbHN0YWNrLUZyb250ZW5kXFwyMC10YXJlZmFzLXBsdXNcXHRhcmVmYXNcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyXFxpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5UYXJlZmFzPHNwYW4+Kzwvc3Bhbj48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24/LnVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV1IHBhaW5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IHNlc3Npb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT2zDoSwge3Nlc3Npb24/LnVzZXI/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259IG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ29vZ2xlJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2Vzc2FyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJMaW5rIiwic3R5bGVzIiwiSGVhZGVyIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiY29udGVudCIsIm5hdiIsImhyZWYiLCJoMSIsImxvZ28iLCJzcGFuIiwidXNlciIsImxpbmsiLCJidXR0b24iLCJsb2dpbkJ1dHRvbiIsIm9uQ2xpY2siLCJuYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/header/index.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/components/header/styles.module.css":
/*!*************************************************!*\
  !*** ./src/components/header/styles.module.css ***!
  \*************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"styles_header__7sfJ0\",\n\t\"content\": \"styles_content__9X7OX\",\n\t\"nav\": \"styles_nav__Ewldv\",\n\t\"logo\": \"styles_logo__t64BP\",\n\t\"loginButton\": \"styles_loginButton__j6lEx\",\n\t\"link\": \"styles_link___WqYd\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXZhbGRcXERlc2t0b3BcXGVzdHVkb3MtZGUtcHJvZ3JhbWFjYW9cXEZ1bGxzdGFjay1Gcm9udGVuZFxcMjAtdGFyZWZhcy1wbHVzXFx0YXJlZmFzXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRlclxcc3R5bGVzLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwic3R5bGVzX2hlYWRlcl9fN3NmSjBcIixcblx0XCJjb250ZW50XCI6IFwic3R5bGVzX2NvbnRlbnRfXzlYN09YXCIsXG5cdFwibmF2XCI6IFwic3R5bGVzX25hdl9fRXdsZHZcIixcblx0XCJsb2dvXCI6IFwic3R5bGVzX2xvZ29fX3Q2NEJQXCIsXG5cdFwibG9naW5CdXR0b25cIjogXCJzdHlsZXNfbG9naW5CdXR0b25fX2o2bEV4XCIsXG5cdFwibGlua1wiOiBcInN0eWxlc19saW5rX19fV3FZZFwiXG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/header/styles.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ \"(pages-dir-node)/./src/components/header/index.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: pageProps.session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\evald\\\\Desktop\\\\estudos-de-programacao\\\\Fullstack-Frontend\\\\20-tarefas-plus\\\\tarefas\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWDtBQUVtQjtBQUdsQyxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCw0REFBZUE7UUFBQ0ksU0FBU0QsVUFBVUMsT0FBTzs7MEJBRXpDLDhEQUFDTCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFJOUIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXZhbGRcXERlc2t0b3BcXGVzdHVkb3MtZGUtcHJvZ3JhbWFjYW9cXEZ1bGxzdGFjay1Gcm9udGVuZFxcMjAtdGFyZWZhcy1wbHVzXFx0YXJlZmFzXFxzcmNcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICBcbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();