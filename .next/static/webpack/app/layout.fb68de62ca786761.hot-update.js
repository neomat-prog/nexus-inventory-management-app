"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"54f9e7f76105\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzZmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjU0ZjllN2Y3NjEwNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/(components)/Sidebar/index.tsx":
/*!************************************************!*\
  !*** ./src/app/(components)/Sidebar/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/redux */ \"(app-pages-browser)/./src/app/redux.tsx\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state */ \"(app-pages-browser)/./src/state/index.ts\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/panels-top-left.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/archive.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clipboard.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst SidebarLink = (param)=>{\n    let { href, icon: Icon, label, isCollapsed } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const isActive = pathname === href || pathname === \"/\" && href === \"/dashboard\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cursor-pointer flex items-center \".concat(isCollapsed ? \"justify-center py-4\" : \"justify-start px-8 py-4\", \"\\n          hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors \").concat(isActive ? \"bg-blue-200 text-white\" : \"\", \"\\n      }\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                    className: \"w-6 h-6 !text-gray-700\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat(isCollapsed ? \"hidden\" : \"block\", \" font-medium text-gray-700\"),\n                    children: label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SidebarLink, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = SidebarLink;\nconst Sidebar = ()=>{\n    _s1();\n    const dispatch = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const isSidebarCollapsed = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const toggleSidebar = ()=>{\n        dispatch((0,_state__WEBPACK_IMPORTED_MODULE_2__.setIsSidebarCollapsed)(!isSidebarCollapsed));\n    };\n    const sidebarClassNames = \"fixed flex flex-col \".concat(isSidebarCollapsed ? \"w-0 md:w-16\" : \"w-72 md:w-64\", \" bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: sidebarClassNames,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 justify-between md:justify-normal items-center pt-8 \".concat(isSidebarCollapsed ? \"px-5\" : \"px-8\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(isSidebarCollapsed ? \"hidden\" : \"block\", \" font-extrabold text-2xl\"),\n                        children: \"NEXUS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100\",\n                        onClick: toggleSidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"w-4 h-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/dashboard\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                        label: \"Dashboard\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/inventory\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                        label: \"Inventory\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/products\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                        label: \"Products\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/users\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                        label: \"Users\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/settings\",\n                        icon: Sliders,\n                        label: \"Settings\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-xs text-gray-500\",\n                    children: \"\\xa9 2024 NEXUS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Sidebar, \"PqQZzUnCvmXyMQtUoWWwPjOlbu4=\", false, function() {\n    return [\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c1 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"SidebarLink\");\n$RefreshReg$(_c1, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGNvbXBvbmVudHMpL1NpZGViYXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUU2RDtBQUNiO0FBQ2tDO0FBQ3JEO0FBQ2lCO0FBQ3BCO0FBUzFCLE1BQU1XLGNBQWM7UUFBQyxFQUNuQkMsSUFBSSxFQUNKQyxNQUFNQyxJQUFJLEVBQ1ZDLEtBQUssRUFDTEMsV0FBVyxFQUNNOztJQUNqQixNQUFNQyxXQUFXUiw0REFBV0E7SUFDNUIsTUFBTVMsV0FDSkQsYUFBYUwsUUFBU0ssYUFBYSxPQUFPTCxTQUFTO0lBRXJELHFCQUNFLDhEQUFDSixpREFBSUE7UUFBQ0ksTUFBTUE7a0JBQ1YsNEVBQUNPO1lBQ0NDLFdBQVcsb0NBSVBGLE9BSEZGLGNBQWMsd0JBQXdCLDJCQUN2Qyw4RUFHRSxPQURDRSxXQUFXLDJCQUEyQixJQUN2Qzs7OEJBR0gsOERBQUNKO29CQUFLTSxXQUFVOzs7Ozs7OEJBRWhCLDhEQUFDQztvQkFDQ0QsV0FBVyxHQUVWLE9BRENKLGNBQWMsV0FBVyxTQUMxQjs4QkFFQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FqQ01KOztRQU1hRix3REFBV0E7OztLQU54QkU7QUFtQ04sTUFBTVcsVUFBVTs7SUFDZCxNQUFNQyxXQUFXdkIsMERBQWNBO0lBQy9CLE1BQU13QixxQkFBcUJ2QiwwREFBY0EsQ0FDdkMsQ0FBQ3dCLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0Ysa0JBQWtCO0lBRzVDLE1BQU1HLGdCQUFnQjtRQUNwQkosU0FBU3JCLDZEQUFxQkEsQ0FBQyxDQUFDc0I7SUFDbEM7SUFFQSxNQUFNSSxvQkFBb0IsdUJBRXpCLE9BRENKLHFCQUFxQixnQkFBZ0IsZ0JBQ3RDO0lBRUQscUJBQ0UsOERBQUNMO1FBQUlDLFdBQVdROzswQkFFZCw4REFBQ1Q7Z0JBQ0NDLFdBQVcsa0VBRVYsT0FEQ0kscUJBQXFCLFNBQVM7O2tDQUdoQyw4REFBQ0w7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ1U7d0JBQ0NULFdBQVcsR0FFVixPQURDSSxxQkFBcUIsV0FBVyxTQUNqQztrQ0FDRjs7Ozs7O2tDQUlELDhEQUFDTTt3QkFDQ1YsV0FBVTt3QkFDVlcsU0FBU0o7a0NBRVQsNEVBQUN0Qiw4R0FBSUE7NEJBQUNlLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlwQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVDt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBTVQsOEdBQU1BO3dCQUNaVyxPQUFNO3dCQUNOQyxhQUFhUTs7Ozs7O2tDQUVmLDhEQUFDYjt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBTVYsOEdBQU9BO3dCQUNiWSxPQUFNO3dCQUNOQyxhQUFhUTs7Ozs7O2tDQUVmLDhEQUFDYjt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBTVAsOEdBQVNBO3dCQUNmUyxPQUFNO3dCQUNOQyxhQUFhUTs7Ozs7O2tDQUVmLDhEQUFDYjt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBTU4sK0dBQUlBO3dCQUNWUSxPQUFNO3dCQUNOQyxhQUFhUTs7Ozs7O2tDQUVmLDhEQUFDYjt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBTW1CO3dCQUNOakIsT0FBTTt3QkFDTkMsYUFBYVE7Ozs7Ozs7Ozs7OzswQkFLakIsOERBQUNMOzBCQUNDLDRFQUFDYztvQkFBRWIsV0FBVTs4QkFBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpEO0lBOUVNRTs7UUFDYXRCLHNEQUFjQTtRQUNKQyxzREFBY0E7OztNQUZyQ3FCO0FBZ0ZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGNvbXBvbmVudHMpL1NpZGViYXIvaW5kZXgudHN4PzJkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9hcHAvcmVkdXhcIjtcclxuaW1wb3J0IHsgc2V0SXNTaWRlYmFyQ29sbGFwc2VkIH0gZnJvbSBcIkAvc3RhdGVcIjtcclxuaW1wb3J0IHsgQXJjaGl2ZSwgTGF5b3V0LCBMdWNpZGVJY29uLCBNZW51LCBDbGlwYm9hcmQsIFVzZXIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBTaWRlYmFyTGlua1Byb3BzIHtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgaWNvbjogTHVjaWRlSWNvbjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTaWRlYmFyTGluayA9ICh7XHJcbiAgaHJlZixcclxuICBpY29uOiBJY29uLFxyXG4gIGxhYmVsLFxyXG4gIGlzQ29sbGFwc2VkLFxyXG59OiBTaWRlYmFyTGlua1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gIGNvbnN0IGlzQWN0aXZlID1cclxuICAgIHBhdGhuYW1lID09PSBocmVmIHx8IChwYXRobmFtZSA9PT0gXCIvXCIgJiYgaHJlZiA9PT0gXCIvZGFzaGJvYXJkXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciAke1xyXG4gICAgICAgICAgaXNDb2xsYXBzZWQgPyBcImp1c3RpZnktY2VudGVyIHB5LTRcIiA6IFwianVzdGlmeS1zdGFydCBweC04IHB5LTRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAgIGhvdmVyOnRleHQtYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS0xMDAgZ2FwLTMgdHJhbnNpdGlvbi1jb2xvcnMgJHtcclxuICAgICAgICAgICAgaXNBY3RpdmUgPyBcImJnLWJsdWUtMjAwIHRleHQtd2hpdGVcIiA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02ICF0ZXh0LWdyYXktNzAwXCIgLz5cclxuXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgIGlzQ29sbGFwc2VkID8gXCJoaWRkZW5cIiA6IFwiYmxvY2tcIlxyXG4gICAgICAgICAgfSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgaXNTaWRlYmFyQ29sbGFwc2VkID0gdXNlQXBwU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLmdsb2JhbC5pc1NpZGViYXJDb2xsYXBzZWRcclxuICApO1xyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0SXNTaWRlYmFyQ29sbGFwc2VkKCFpc1NpZGViYXJDb2xsYXBzZWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWRlYmFyQ2xhc3NOYW1lcyA9IGBmaXhlZCBmbGV4IGZsZXgtY29sICR7XHJcbiAgICBpc1NpZGViYXJDb2xsYXBzZWQgPyBcInctMCBtZDp3LTE2XCIgOiBcInctNzIgbWQ6dy02NFwiXHJcbiAgfSBiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgb3ZlcmZsb3ctaGlkZGVuIGgtZnVsbCBzaGFkb3ctbWQgei00MGA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2lkZWJhckNsYXNzTmFtZXN9PlxyXG4gICAgICB7LyogVE9QIExPR08gKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGdhcC0zIGp1c3RpZnktYmV0d2VlbiBtZDpqdXN0aWZ5LW5vcm1hbCBpdGVtcy1jZW50ZXIgcHQtOCAke1xyXG4gICAgICAgICAgaXNTaWRlYmFyQ29sbGFwc2VkID8gXCJweC01XCIgOiBcInB4LThcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj5sb2dvPC9kaXY+XHJcbiAgICAgICAgPGgxXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICBpc1NpZGViYXJDb2xsYXBzZWQgPyBcImhpZGRlblwiIDogXCJibG9ja1wiXHJcbiAgICAgICAgICB9IGZvbnQtZXh0cmFib2xkIHRleHQtMnhsYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBORVhVU1xyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBweC0zIHB5LTMgYmctZ3JheS0xMDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWJsdWUtMTAwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1lbnUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogTElOS1MgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG10LThcIj5cclxuICAgICAgICA8U2lkZWJhckxpbmtcclxuICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkXCJcclxuICAgICAgICAgIGljb249e0xheW91dH1cclxuICAgICAgICAgIGxhYmVsPVwiRGFzaGJvYXJkXCJcclxuICAgICAgICAgIGlzQ29sbGFwc2VkPXtpc1NpZGViYXJDb2xsYXBzZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2lkZWJhckxpbmtcclxuICAgICAgICAgIGhyZWY9XCIvaW52ZW50b3J5XCJcclxuICAgICAgICAgIGljb249e0FyY2hpdmV9XHJcbiAgICAgICAgICBsYWJlbD1cIkludmVudG9yeVwiXHJcbiAgICAgICAgICBpc0NvbGxhcHNlZD17aXNTaWRlYmFyQ29sbGFwc2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNpZGViYXJMaW5rXHJcbiAgICAgICAgICBocmVmPVwiL3Byb2R1Y3RzXCJcclxuICAgICAgICAgIGljb249e0NsaXBib2FyZH1cclxuICAgICAgICAgIGxhYmVsPVwiUHJvZHVjdHNcIlxyXG4gICAgICAgICAgaXNDb2xsYXBzZWQ9e2lzU2lkZWJhckNvbGxhcHNlZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTaWRlYmFyTGlua1xyXG4gICAgICAgICAgaHJlZj1cIi91c2Vyc1wiXHJcbiAgICAgICAgICBpY29uPXtVc2VyfVxyXG4gICAgICAgICAgbGFiZWw9XCJVc2Vyc1wiXHJcbiAgICAgICAgICBpc0NvbGxhcHNlZD17aXNTaWRlYmFyQ29sbGFwc2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNpZGViYXJMaW5rXHJcbiAgICAgICAgICBocmVmPVwiL3NldHRpbmdzXCJcclxuICAgICAgICAgIGljb249e1NsaWRlcnN9XHJcbiAgICAgICAgICBsYWJlbD1cIlNldHRpbmdzXCJcclxuICAgICAgICAgIGlzQ29sbGFwc2VkPXtpc1NpZGViYXJDb2xsYXBzZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogRk9PVEVSICovfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPiZjb3B5OyAyMDI0IE5FWFVTPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwibmFtZXMiOlsidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInNldElzU2lkZWJhckNvbGxhcHNlZCIsIkFyY2hpdmUiLCJMYXlvdXQiLCJNZW51IiwiQ2xpcGJvYXJkIiwiVXNlciIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwiU2lkZWJhckxpbmsiLCJocmVmIiwiaWNvbiIsIkljb24iLCJsYWJlbCIsImlzQ29sbGFwc2VkIiwicGF0aG5hbWUiLCJpc0FjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJTaWRlYmFyIiwiZGlzcGF0Y2giLCJpc1NpZGViYXJDb2xsYXBzZWQiLCJzdGF0ZSIsImdsb2JhbCIsInRvZ2dsZVNpZGViYXIiLCJzaWRlYmFyQ2xhc3NOYW1lcyIsImgxIiwiYnV0dG9uIiwib25DbGljayIsIlNsaWRlcnMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(components)/Sidebar/index.tsx\n"));

/***/ })

});