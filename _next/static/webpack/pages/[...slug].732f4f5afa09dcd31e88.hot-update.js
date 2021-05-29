/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...slug]",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/user/lojban/lojban-made-easy/components/header.tsx\";\n\n/* This example requires Tailwind CSS v2.0+ */\n\n\n\nvar navigation = [{\n  name: \"🎓 Learn Lojban\",\n  url: \"/books/learn-lojban\"\n}, {\n  name: \"💬 Live chat\",\n  url: \"/articles/live_chat\"\n}, {\n  name: \"📕 Full grammar\",\n  url: \"/articles/complete-lojban-language\"\n}, {\n  name: \"🗐 All pages\",\n  url: \"/list\"\n}]; // const profile = ['Your Profile', 'Settings', 'Sign out']\n\nvar buttonClass = \"text-black in-toc hover:no-underline px-3 py-2 text-sm font-medium overflow-ellipsis\";\nfunction Header(_ref) {\n  var _this = this;\n\n  var _ref$toc = _ref.toc,\n      toc = _ref$toc === void 0 ? [] : _ref$toc,\n      _ref$path = _ref.path,\n      path = _ref$path === void 0 ? '' : _ref$path;\n  var toc_list = toc.map(function (i) {\n    return {\n      depth: i.depth,\n      name: i.value,\n      url: \"\".concat(path, \"#\").concat(i.id)\n    };\n  });\n  var has_toc = toc_list.length > 0;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover, {\n    as: \"nav\",\n    className: \"sticky top-0 z-50 bg-deep-orange-400 shadow-md\",\n    children: function children(_ref2) {\n      var open = _ref2.open;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between h-12\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"flex items-center\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                  href: \"/welcome\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                      className: \"logo\",\n                      src: \"/vreji/img/lojbo.svg\",\n                      alt: \"Lojban logo\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 35,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 34,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 33,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"ml-10 flex items-baseline space-x-3\",\n                  children: navigation.map(function (item) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                      href: item.url,\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-shrink-0 bg-deep-orange-300 text-gray-100 text-base py-1 px-4 rounded shadow-md hover:bg-deep-orange-200 focus:outline-none\",\n                        children: item.name\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 49,\n                        columnNumber: 25\n                      }, _this)\n                    }, item.url, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 48,\n                      columnNumber: 23\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"-mr-2 flex md:hidden\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {\n                className: \"select-none bg-deep-orange-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-deep-orange-400 focus:outline-none\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"sr-only\",\n                  children: \"Open main menu\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 120,\n                  columnNumber: 19\n                }, _this), open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.XIcon, {\n                  id: \"xicon\",\n                  className: \"block h-6 w-6\",\n                  \"aria-hidden\": \"true\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 122,\n                  columnNumber: 21\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {\n                  className: \"block h-6 w-6\",\n                  \"aria-hidden\": \"true\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 124,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Panel, {\n          className: \"md:hidden bg-gray-100 shadow-lg\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-2 pt-2 space-y-1 sm:px-3\",\n            children: navigation.map(function (item) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: item.url,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                  onClick: function onClick() {\n                    var _document;\n\n                    var popicon = (_document = document) === null || _document === void 0 ? void 0 : _document.getElementById(\"headlessui-popover-button-1\");\n                    popicon && popicon.click();\n                  },\n                  className: \"block border-b last:border-b-0 hover:text-deep-orange-600 \".concat(buttonClass),\n                  children: item.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 136,\n                  columnNumber: 19\n                }, _this)\n              }, item.url, false, {\n                fileName: _jsxFileName,\n                lineNumber: 135,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, _this), has_toc && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n              className: \"bg-gray-200 \".concat(buttonClass),\n              children: \"Table of contents\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 149,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n              className: \"toc w-full md:w-1/5 p-2 bottom-0 md:top-20 h-48 md:h-screen font-medium text-sm overflow-ellipsis\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full px-2 pb-3 space-y-1 sm:px-3 overflow-y-auto\",\n                children: toc_list.map(function (item) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: item.url,\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                      onClick: function onClick() {\n                        var _document2;\n\n                        var popicon = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.getElementById(\"headlessui-popover-button-1\");\n                        popicon && popicon.click();\n                      },\n                      className: \"block border-b hover:text-deep-orange-600 \".concat(buttonClass, \" lme-ml-\").concat((item.depth - 2) * 2),\n                      children: item.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 156,\n                      columnNumber: 25\n                    }, _this)\n                  }, item.url, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 155,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 153,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Pzc1MWEiXSwibmFtZXMiOlsibmF2aWdhdGlvbiIsIm5hbWUiLCJ1cmwiLCJidXR0b25DbGFzcyIsIkhlYWRlciIsInRvYyIsInBhdGgiLCJ0b2NfbGlzdCIsIm1hcCIsImkiLCJkZXB0aCIsInZhbHVlIiwiaWQiLCJoYXNfdG9jIiwibGVuZ3RoIiwib3BlbiIsIml0ZW0iLCJwb3BpY29uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUFFQyxNQUFJLEVBQUUsaUJBQVI7QUFBMkJDLEtBQUcsRUFBRTtBQUFoQyxDQURpQixFQUVqQjtBQUFFRCxNQUFJLEVBQUUsY0FBUjtBQUF3QkMsS0FBRyxFQUFFO0FBQTdCLENBRmlCLEVBR2pCO0FBQUVELE1BQUksRUFBRSxpQkFBUjtBQUEyQkMsS0FBRyxFQUFFO0FBQWhDLENBSGlCLEVBSWpCO0FBQUVELE1BQUksRUFBRSxjQUFSO0FBQXdCQyxLQUFHLEVBQUU7QUFBN0IsQ0FKaUIsQ0FBbkIsQyxDQU1BOztBQVFBLElBQU1DLFdBQVcseUZBQWpCO0FBRWUsU0FBU0MsTUFBVCxPQUF1RTtBQUFBOztBQUFBLHNCQUFyREMsR0FBcUQ7QUFBQSxNQUFyREEsR0FBcUQseUJBQS9DLEVBQStDO0FBQUEsdUJBQTNDQyxJQUEyQztBQUFBLE1BQTNDQSxJQUEyQywwQkFBcEMsRUFBb0M7QUFDcEYsTUFBTUMsUUFBbUIsR0FBSUYsR0FBRyxDQUFDRyxHQUFKLENBQVEsVUFBQ0MsQ0FBRDtBQUFBLFdBQWE7QUFBRUMsV0FBSyxFQUFFRCxDQUFDLENBQUNDLEtBQVg7QUFBa0JULFVBQUksRUFBRVEsQ0FBQyxDQUFDRSxLQUExQjtBQUFpQ1QsU0FBRyxZQUFLSSxJQUFMLGNBQWFHLENBQUMsQ0FBQ0csRUFB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dHMvaGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8qIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgKi9cbmltcG9ydCB7IFBvcG92ZXIsIERpc2Nsb3N1cmUsIE1lbnUsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7IEJlbGxJY29uLCBNZW51SWNvbiwgWEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXG5cbmNvbnN0IG5hdmlnYXRpb24gPSBbXG4gIHsgbmFtZTogXCLwn46TIExlYXJuIExvamJhblwiLCB1cmw6IFwiL2Jvb2tzL2xlYXJuLWxvamJhblwiIH0sXG4gIHsgbmFtZTogXCLwn5KsIExpdmUgY2hhdFwiLCB1cmw6IFwiL2FydGljbGVzL2xpdmVfY2hhdFwiIH0sXG4gIHsgbmFtZTogXCLwn5OVIEZ1bGwgZ3JhbW1hclwiLCB1cmw6IFwiL2FydGljbGVzL2NvbXBsZXRlLWxvamJhbi1sYW5ndWFnZVwiIH0sXG4gIHsgbmFtZTogXCLwn5eQIEFsbCBwYWdlc1wiLCB1cmw6IFwiL2xpc3RcIiB9LFxuXVxuLy8gY29uc3QgcHJvZmlsZSA9IFsnWW91ciBQcm9maWxlJywgJ1NldHRpbmdzJywgJ1NpZ24gb3V0J11cblxudHlwZSBUb2NJdGVtID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgZGVwdGg6IG51bWJlclxufVxuXG5jb25zdCBidXR0b25DbGFzcyA9IGB0ZXh0LWJsYWNrIGluLXRvYyBob3Zlcjpuby11bmRlcmxpbmUgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gb3ZlcmZsb3ctZWxsaXBzaXNgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHRvYyA9IFtdLCBwYXRoID0gJycgfTogeyB0b2M/OiBhbnksIHBhdGg/OiBzdHJpbmcgfSkge1xuICBjb25zdCB0b2NfbGlzdDogVG9jSXRlbVtdID0gKHRvYy5tYXAoKGk6IGFueSkgPT4gKHsgZGVwdGg6IGkuZGVwdGgsIG5hbWU6IGkudmFsdWUsIHVybDogYCR7cGF0aH0jJHtpLmlkfWAgfSkpKVxuICBjb25zdCBoYXNfdG9jID0gdG9jX2xpc3QubGVuZ3RoID4gMFxuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyIGFzPVwibmF2XCIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgYmctZGVlcC1vcmFuZ2UtNDAwIHNoYWRvdy1tZFwiPlxuICAgICAgeyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93ZWxjb21lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3ZyZWppL2ltZy9sb2piby5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9qYmFuIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgZmxleCBpdGVtcy1iYXNlbGluZSBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfSBrZXk9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgZmxleC1zaHJpbmstMCBiZy1kZWVwLW9yYW5nZS0zMDAgdGV4dC1ncmF5LTEwMCB0ZXh0LWJhc2UgcHktMSBweC00IHJvdW5kZWQgc2hhZG93LW1kIGhvdmVyOmJnLWRlZXAtb3JhbmdlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic3Rvcmstd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLXN0b3JrPVwiZmVkZXJhbGlzdFwiIGNsYXNzTmFtZT1cInN0b3JrLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc3Rvcms9XCJmZWRlcmFsaXN0LW91dHB1dFwiIGNsYXNzTmFtZT1cInN0b3JrLW91dHB1dFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBmbGV4IGl0ZW1zLWNlbnRlciBtZDptbC02XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtMSByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5WaWV3IG5vdGlmaWNhdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxCZWxsSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICA8TWVudSBhcz1cImRpdlwiIGNsYXNzTmFtZT1cIm1sLTMgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgeyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPVwibWF4LXcteHMgYmctZ3JheS04MDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiB1c2VyIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctOCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17b3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yaWdpbi10b3AtcmlnaHQgYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggcm91bmRlZC1tZCBzaGFkb3ctbGcgcHktMSBiZy13aGl0ZSByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcyAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tci0yIGZsZXggbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgey8qIE1vYmlsZSBtZW51IGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICA8UG9wb3Zlci5CdXR0b24gY2xhc3NOYW1lPVwic2VsZWN0LW5vbmUgYmctZGVlcC1vcmFuZ2UtNDAwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWRlZXAtb3JhbmdlLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8WEljb24gaWQ9XCJ4aWNvblwiIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFBvcG92ZXIuUGFuZWwgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGJnLWdyYXktMTAwIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgey8qIGZhdnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBzcGFjZS15LTEgc206cHgtM1wiPlxuICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9IGtleT17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3BpY29uID0gZG9jdW1lbnQ/LmdldEVsZW1lbnRCeUlkKFwiaGVhZGxlc3N1aS1wb3BvdmVyLWJ1dHRvbi0xXCIpXG4gICAgICAgICAgICAgICAgICAgIHBvcGljb24gJiYgcG9waWNvbi5jbGljaygpXG4gICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2BibG9jayBib3JkZXItYiBsYXN0OmJvcmRlci1iLTAgaG92ZXI6dGV4dC1kZWVwLW9yYW5nZS02MDAgJHtidXR0b25DbGFzc31gfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIHRpdGxlICovfVxuICAgICAgICAgICAge2hhc190b2MgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2BiZy1ncmF5LTIwMCAke2J1dHRvbkNsYXNzfWB9PlRhYmxlIG9mIGNvbnRlbnRzPC9oMT5cblxuICAgICAgICAgICAgICAgIHsvKiB0b2MgKi99XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0b2Mgdy1mdWxsIG1kOnctMS81IHAtMiBib3R0b20tMCBtZDp0b3AtMjAgaC00OCBtZDpoLXNjcmVlbiBmb250LW1lZGl1bSB0ZXh0LXNtIG92ZXJmbG93LWVsbGlwc2lzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBweC0yIHBiLTMgc3BhY2UteS0xIHNtOnB4LTMgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0b2NfbGlzdC5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9IGtleT17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3BpY29uID0gZG9jdW1lbnQ/LmdldEVsZW1lbnRCeUlkKFwiaGVhZGxlc3N1aS1wb3BvdmVyLWJ1dHRvbi0xXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvcGljb24gJiYgcG9waWNvbi5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2BibG9jayBib3JkZXItYiBob3Zlcjp0ZXh0LWRlZXAtb3JhbmdlLTYwMCAke2J1dHRvbkNsYXNzfSBsbWUtbWwtJHsoaXRlbS5kZXB0aCAtIDIpICogMn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsvKiBhcmNoaXZlICovfVxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwYi0zIHNwYWNlLXktMSBzbTpweC0zIGgtNC81IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICB7dG9jX2xpc3QubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfSBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcGljb24gPSBkb2N1bWVudD8uZ2V0RWxlbWVudEJ5SWQoXCJoZWFkbGVzc3VpLXBvcG92ZXItYnV0dG9uLTFcIilcbiAgICAgICAgICAgICAgICAgICAgcG9waWNvbiAmJiBwb3BpY29uLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17YGJnLWRlZXAtb3JhbmdlLTkwMCB0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSBvdmVyZmxvdy1lbGxpcHNpcyBtbC0keyhpdGVtLmRlcHRoIC0gMikqMn1gfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwdC00IHBiLTMgYm9yZGVyLXQgYm9yZGVyLWRlZXAtb3JhbmdlLTcwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gbGVhZGluZy1ub25lIHRleHQtd2hpdGVcIj5Ub20gQ29vazwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktNDAwXCI+dG9tQGV4YW1wbGUuY29tPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtbC1hdXRvIGJnLWdyYXktODAwIGZsZXgtc2hyaW5rLTAgcC0xIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5WaWV3IG5vdGlmaWNhdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8QmVsbEljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgcHgtMiBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICB7cHJvZmlsZS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDwvUG9wb3Zlci5QYW5lbD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUG9wb3Zlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n");

/***/ })

});