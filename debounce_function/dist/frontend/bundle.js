/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./debounce_function/dist/app.js":
/*!***************************************!*\
  !*** ./debounce_function/dist/app.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n__webpack_require__(/*! ../frontend/styles.css */ \"./debounce_function/frontend/styles.css\");\n// containers\nvar counter = document.querySelector('.counter');\nvar list = document.querySelector('.list-clicks');\nlist === null || list === void 0 ? void 0 : list.append('');\n// create buttons\nvar cont_btn = document.querySelector('.cont-btn');\nvar btn_debounce = document.createElement('button');\nbtn_debounce.setAttribute('class', 'button-debounce');\nbtn_debounce.append('Debounce');\nvar btn_noDebounce = document.createElement('button');\nbtn_noDebounce.setAttribute('class', 'button-nodebounce');\nbtn_noDebounce.append('No Debounce');\nvar btn_clear = document.createElement('button');\nbtn_clear.setAttribute('class', 'button-clear');\nbtn_clear.append('Clear');\ncont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_debounce);\ncont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_noDebounce);\ncont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_clear);\n// functions\nvar addCounter = function () {\n    n++;\n    counter === null || counter === void 0 ? void 0 : counter.append('');\n    counter.innerHTML = n;\n};\nvar printClicks = function () {\n    var p = document.createElement('p');\n    p.append('click');\n    list === null || list === void 0 ? void 0 : list.appendChild(p);\n};\nvar debounce = function (callback, wait) {\n    var timerID;\n    return function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        addCounter();\n        clearTimeout(timerID);\n        timerID = setTimeout(function () {\n            callback.apply(void 0, args);\n        }, wait);\n    };\n};\n// actions\nvar n = 0;\ncounter === null || counter === void 0 ? void 0 : counter.append(n);\nbtn_debounce.addEventListener('click', debounce(printClicks, 1500));\nbtn_noDebounce.addEventListener('click', function () {\n    addCounter();\n    printClicks();\n});\nbtn_clear.addEventListener('click', function () {\n    var ps = list === null || list === void 0 ? void 0 : list.querySelectorAll('p');\n    ps === null || ps === void 0 ? void 0 : ps.forEach(function (p) { return p.remove(); });\n    n = 0;\n    counter.innerHTML = n;\n});\n\n\n//# sourceURL=webpack://sprint_2/./debounce_function/dist/app.js?");

/***/ }),

/***/ "./debounce_function/frontend/styles.css":
/*!***********************************************!*\
  !*** ./debounce_function/frontend/styles.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sprint_2/./debounce_function/frontend/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./debounce_function/dist/app.js");
/******/ 	
/******/ })()
;