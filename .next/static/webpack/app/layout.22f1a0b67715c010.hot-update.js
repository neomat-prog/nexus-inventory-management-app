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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1706bd53f06b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzZmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjE3MDZiZDUzZjA2YlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/(components)/Sidebar/index.tsx":
/*!************************************************!*\
  !*** ./src/app/(components)/Sidebar/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/redux */ \"(app-pages-browser)/./src/app/redux.tsx\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state */ \"(app-pages-browser)/./src/state/index.ts\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,SlidersHorizontal,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,SlidersHorizontal,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/panels-top-left.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,SlidersHorizontal,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/archive.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,SlidersHorizontal,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clipboard.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,SlidersHorizontal,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Archive,Clipboard,Layout,Menu,SlidersHorizontal,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst SidebarLink = (param)=>{\n    let { href, icon: Icon, label, isCollapsed } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const isActive = pathname === href || pathname === \"/\" && href === \"/dashboard\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cursor-pointer flex items-center \".concat(isCollapsed ? \"justify-center py-4\" : \"justify-start px-8 py-4\", \"\\n          hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors \").concat(isActive ? \"bg-blue-200 text-white\" : \"\", \"\\n      }\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                    className: \"w-6 h-6 !text-gray-700\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat(isCollapsed ? \"hidden\" : \"block\", \" font-medium text-gray-700\"),\n                    children: label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SidebarLink, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = SidebarLink;\nconst Sidebar = ()=>{\n    _s1();\n    const dispatch = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const isSidebarCollapsed = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const toggleSidebar = ()=>{\n        dispatch((0,_state__WEBPACK_IMPORTED_MODULE_2__.setIsSidebarCollapsed)(!isSidebarCollapsed));\n    };\n    const sidebarClassNames = \"fixed flex flex-col \".concat(isSidebarCollapsed ? \"w-0 md:w-16\" : \"w-72 md:w-64\", \" bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: sidebarClassNames,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 justify-between md:justify-normal items-center pt-8 \".concat(isSidebarCollapsed ? \"px-5\" : \"px-8\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(isSidebarCollapsed ? \"hidden\" : \"block\", \" font-extrabold text-2xl\"),\n                        children: \"NEXUS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100\",\n                        onClick: toggleSidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"w-4 h-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/dashboard\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                        label: \"Dashboard\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/inventory\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                        label: \"Inventory\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/products\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                        label: \"Products\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/users\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                        label: \"Users\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/settings\",\n                        icon: _barrel_optimize_names_Archive_Clipboard_Layout_Menu_SlidersHorizontal_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                        label: \"Settings\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarLink, {\n                        href: \"/expenses\",\n                        icon: Circle,\n                        label: \"Expenses\",\n                        isCollapsed: isSidebarCollapsed\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-xs text-gray-500\",\n                    children: \"\\xa9 2024 NEXUS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neomat\\\\Desktop\\\\inventory\\\\client\\\\src\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Sidebar, \"PqQZzUnCvmXyMQtUoWWwPjOlbu4=\", false, function() {\n    return [\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c1 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"SidebarLink\");\n$RefreshReg$(_c1, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGNvbXBvbmVudHMpL1NpZGViYXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkQ7QUFDYjtBQUNxRDtBQUN4RTtBQUNpQjtBQUNwQjtBQVMxQixNQUFNWSxjQUFjO1FBQUMsRUFDbkJDLElBQUksRUFDSkMsTUFBTUMsSUFBSSxFQUNWQyxLQUFLLEVBQ0xDLFdBQVcsRUFDTTs7SUFDakIsTUFBTUMsV0FBV1IsNERBQVdBO0lBQzVCLE1BQU1TLFdBQ0pELGFBQWFMLFFBQVNLLGFBQWEsT0FBT0wsU0FBUztJQUVyRCxxQkFDRSw4REFBQ0osaURBQUlBO1FBQUNJLE1BQU1BO2tCQUNWLDRFQUFDTztZQUNDQyxXQUFXLG9DQUlQRixPQUhGRixjQUFjLHdCQUF3QiwyQkFDdkMsOEVBR0UsT0FEQ0UsV0FBVywyQkFBMkIsSUFDdkM7OzhCQUdILDhEQUFDSjtvQkFBS00sV0FBVTs7Ozs7OzhCQUVoQiw4REFBQ0M7b0JBQ0NELFdBQVcsR0FFVixPQURDSixjQUFjLFdBQVcsU0FDMUI7OEJBRUFEOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBakNNSjs7UUFNYUYsd0RBQVdBOzs7S0FOeEJFO0FBbUNOLE1BQU1XLFVBQVU7O0lBQ2QsTUFBTUMsV0FBV3hCLDBEQUFjQTtJQUMvQixNQUFNeUIscUJBQXFCeEIsMERBQWNBLENBQ3ZDLENBQUN5QixRQUFVQSxNQUFNQyxNQUFNLENBQUNGLGtCQUFrQjtJQUc1QyxNQUFNRyxnQkFBZ0I7UUFDcEJKLFNBQVN0Qiw2REFBcUJBLENBQUMsQ0FBQ3VCO0lBQ2xDO0lBRUEsTUFBTUksb0JBQW9CLHVCQUV6QixPQURDSixxQkFBcUIsZ0JBQWdCLGdCQUN0QztJQUVELHFCQUNFLDhEQUFDTDtRQUFJQyxXQUFXUTs7MEJBRWQsOERBQUNUO2dCQUNDQyxXQUFXLGtFQUVWLE9BRENJLHFCQUFxQixTQUFTOztrQ0FHaEMsOERBQUNMO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNVO3dCQUNDVCxXQUFXLEdBRVYsT0FEQ0kscUJBQXFCLFdBQVcsU0FDakM7a0NBQ0Y7Ozs7OztrQ0FJRCw4REFBQ007d0JBQ0NWLFdBQVU7d0JBQ1ZXLFNBQVNKO2tDQUVULDRFQUFDdkIsZ0lBQUlBOzRCQUFDZ0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXBCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNUO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFNVixnSUFBTUE7d0JBQ1pZLE9BQU07d0JBQ05DLGFBQWFROzs7Ozs7a0NBRWYsOERBQUNiO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFNWCxnSUFBT0E7d0JBQ2JhLE9BQU07d0JBQ05DLGFBQWFROzs7Ozs7a0NBRWYsOERBQUNiO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFNUixnSUFBU0E7d0JBQ2ZVLE9BQU07d0JBQ05DLGFBQWFROzs7Ozs7a0NBRWYsOERBQUNiO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFNUCxpSUFBSUE7d0JBQ1ZTLE9BQU07d0JBQ05DLGFBQWFROzs7Ozs7a0NBRWYsOERBQUNiO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFNTixpSUFBaUJBO3dCQUN2QlEsT0FBTTt3QkFDTkMsYUFBYVE7Ozs7OztrQ0FFZiw4REFBQ2I7d0JBQ0NDLE1BQUs7d0JBQ0xDLE1BQU1tQjt3QkFDTmpCLE9BQU07d0JBQ05DLGFBQWFROzs7Ozs7Ozs7Ozs7MEJBS2pCLDhEQUFDTDswQkFDQyw0RUFBQ2M7b0JBQUViLFdBQVU7OEJBQW9DOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RDtJQXBGTUU7O1FBQ2F2QixzREFBY0E7UUFDSkMsc0RBQWNBOzs7TUFGckNzQjtBQXNGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhjb21wb25lbnRzKS9TaWRlYmFyL2luZGV4LnRzeD8yZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvYXBwL3JlZHV4XCI7XHJcbmltcG9ydCB7IHNldElzU2lkZWJhckNvbGxhcHNlZCB9IGZyb20gXCJAL3N0YXRlXCI7XHJcbmltcG9ydCB7IEFyY2hpdmUsIExheW91dCwgTHVjaWRlSWNvbiwgTWVudSwgQ2xpcGJvYXJkLCBVc2VyLCBTbGlkZXJzSG9yaXpvbnRhbCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFNpZGViYXJMaW5rUHJvcHMge1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBpY29uOiBMdWNpZGVJY29uO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgaXNDb2xsYXBzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFNpZGViYXJMaW5rID0gKHtcclxuICBocmVmLFxyXG4gIGljb246IEljb24sXHJcbiAgbGFiZWwsXHJcbiAgaXNDb2xsYXBzZWQsXHJcbn06IFNpZGViYXJMaW5rUHJvcHMpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPVxyXG4gICAgcGF0aG5hbWUgPT09IGhyZWYgfHwgKHBhdGhuYW1lID09PSBcIi9cIiAmJiBocmVmID09PSBcIi9kYXNoYm9hcmRcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyICR7XHJcbiAgICAgICAgICBpc0NvbGxhcHNlZCA/IFwianVzdGlmeS1jZW50ZXIgcHktNFwiIDogXCJqdXN0aWZ5LXN0YXJ0IHB4LTggcHktNFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgaG92ZXI6dGV4dC1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTEwMCBnYXAtMyB0cmFuc2l0aW9uLWNvbG9ycyAke1xyXG4gICAgICAgICAgICBpc0FjdGl2ZSA/IFwiYmctYmx1ZS0yMDAgdGV4dC13aGl0ZVwiIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInctNiBoLTYgIXRleHQtZ3JheS03MDBcIiAvPlxyXG5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgaXNDb2xsYXBzZWQgPyBcImhpZGRlblwiIDogXCJibG9ja1wiXHJcbiAgICAgICAgICB9IGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCBpc1NpZGViYXJDb2xsYXBzZWQgPSB1c2VBcHBTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsLmlzU2lkZWJhckNvbGxhcHNlZFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRJc1NpZGViYXJDb2xsYXBzZWQoIWlzU2lkZWJhckNvbGxhcHNlZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZGViYXJDbGFzc05hbWVzID0gYGZpeGVkIGZsZXggZmxleC1jb2wgJHtcclxuICAgIGlzU2lkZWJhckNvbGxhcHNlZCA/IFwidy0wIG1kOnctMTZcIiA6IFwidy03MiBtZDp3LTY0XCJcclxuICB9IGJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvdmVyZmxvdy1oaWRkZW4gaC1mdWxsIHNoYWRvdy1tZCB6LTQwYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzaWRlYmFyQ2xhc3NOYW1lc30+XHJcbiAgICAgIHsvKiBUT1AgTE9HTyAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggZ2FwLTMganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktbm9ybWFsIGl0ZW1zLWNlbnRlciBwdC04ICR7XHJcbiAgICAgICAgICBpc1NpZGViYXJDb2xsYXBzZWQgPyBcInB4LTVcIiA6IFwicHgtOFwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PmxvZ288L2Rpdj5cclxuICAgICAgICA8aDFcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgIGlzU2lkZWJhckNvbGxhcHNlZCA/IFwiaGlkZGVuXCIgOiBcImJsb2NrXCJcclxuICAgICAgICAgIH0gZm9udC1leHRyYWJvbGQgdGV4dC0yeGxgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5FWFVTXHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHB4LTMgcHktMyBiZy1ncmF5LTEwMCByb3VuZGVkLWZ1bGwgaG92ZXI6YmctYmx1ZS0xMDBcIlxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZWJhcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBMSU5LUyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgbXQtOFwiPlxyXG4gICAgICAgIDxTaWRlYmFyTGlua1xyXG4gICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgaWNvbj17TGF5b3V0fVxyXG4gICAgICAgICAgbGFiZWw9XCJEYXNoYm9hcmRcIlxyXG4gICAgICAgICAgaXNDb2xsYXBzZWQ9e2lzU2lkZWJhckNvbGxhcHNlZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTaWRlYmFyTGlua1xyXG4gICAgICAgICAgaHJlZj1cIi9pbnZlbnRvcnlcIlxyXG4gICAgICAgICAgaWNvbj17QXJjaGl2ZX1cclxuICAgICAgICAgIGxhYmVsPVwiSW52ZW50b3J5XCJcclxuICAgICAgICAgIGlzQ29sbGFwc2VkPXtpc1NpZGViYXJDb2xsYXBzZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2lkZWJhckxpbmtcclxuICAgICAgICAgIGhyZWY9XCIvcHJvZHVjdHNcIlxyXG4gICAgICAgICAgaWNvbj17Q2xpcGJvYXJkfVxyXG4gICAgICAgICAgbGFiZWw9XCJQcm9kdWN0c1wiXHJcbiAgICAgICAgICBpc0NvbGxhcHNlZD17aXNTaWRlYmFyQ29sbGFwc2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNpZGViYXJMaW5rXHJcbiAgICAgICAgICBocmVmPVwiL3VzZXJzXCJcclxuICAgICAgICAgIGljb249e1VzZXJ9XHJcbiAgICAgICAgICBsYWJlbD1cIlVzZXJzXCJcclxuICAgICAgICAgIGlzQ29sbGFwc2VkPXtpc1NpZGViYXJDb2xsYXBzZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2lkZWJhckxpbmtcclxuICAgICAgICAgIGhyZWY9XCIvc2V0dGluZ3NcIlxyXG4gICAgICAgICAgaWNvbj17U2xpZGVyc0hvcml6b250YWx9XHJcbiAgICAgICAgICBsYWJlbD1cIlNldHRpbmdzXCJcclxuICAgICAgICAgIGlzQ29sbGFwc2VkPXtpc1NpZGViYXJDb2xsYXBzZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2lkZWJhckxpbmtcclxuICAgICAgICAgIGhyZWY9XCIvZXhwZW5zZXNcIlxyXG4gICAgICAgICAgaWNvbj17Q2lyY2xlfVxyXG4gICAgICAgICAgbGFiZWw9XCJFeHBlbnNlc1wiXHJcbiAgICAgICAgICBpc0NvbGxhcHNlZD17aXNTaWRlYmFyQ29sbGFwc2VkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIEZPT1RFUiAqL31cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj4mY29weTsgMjAyNCBORVhVUzwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sIm5hbWVzIjpbInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRJc1NpZGViYXJDb2xsYXBzZWQiLCJBcmNoaXZlIiwiTGF5b3V0IiwiTWVudSIsIkNsaXBib2FyZCIsIlVzZXIiLCJTbGlkZXJzSG9yaXpvbnRhbCIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwiU2lkZWJhckxpbmsiLCJocmVmIiwiaWNvbiIsIkljb24iLCJsYWJlbCIsImlzQ29sbGFwc2VkIiwicGF0aG5hbWUiLCJpc0FjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJTaWRlYmFyIiwiZGlzcGF0Y2giLCJpc1NpZGViYXJDb2xsYXBzZWQiLCJzdGF0ZSIsImdsb2JhbCIsInRvZ2dsZVNpZGViYXIiLCJzaWRlYmFyQ2xhc3NOYW1lcyIsImgxIiwiYnV0dG9uIiwib25DbGljayIsIkNpcmNsZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(components)/Sidebar/index.tsx\n"));

/***/ })

});