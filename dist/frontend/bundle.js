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

/***/ "./dist/app.js":
/*!*********************!*\
  !*** ./dist/app.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n__webpack_require__(/*! ../frontend/styles.css */ \"./frontend/styles.css\");\nvar debounce = __webpack_require__(/*! ./frontend/scripts/debounce.js */ \"./dist/frontend/scripts/debounce.js\");\nvar throttle = __webpack_require__(/*! ./frontend/scripts/throttle.js */ \"./dist/frontend/scripts/throttle.js\");\nvar memoize = __webpack_require__(/*! ./frontend/scripts/memoize.js */ \"./dist/frontend/scripts/memoize.js\");\n// containers\nvar menuBar = document.querySelector('.menu-bar');\nvar mainFunctions = document.querySelector('.main-functions');\n// menu options\nvar arrayOptions = ['debounce', 'throttle', 'memoize'];\narrayOptions.forEach(function (op) {\n    var button = document.createElement('button');\n    button.setAttribute('id', \"btn_\".concat(op));\n    button.setAttribute('class', 'button-option');\n    button.append(op);\n    menuBar === null || menuBar === void 0 ? void 0 : menuBar.appendChild(button);\n});\n// actions click btns nav\nvar btn_debounce = menuBar === null || menuBar === void 0 ? void 0 : menuBar.querySelector('#btn_debounce');\nbtn_debounce === null || btn_debounce === void 0 ? void 0 : btn_debounce.addEventListener('click', function () {\n    mainFunctions.innerHTML = '';\n    debounce.buildDebounce(mainFunctions)\n        .then(function (res) { return debounce.runDebounceFunctions(res); });\n});\nvar btn_throttle = menuBar === null || menuBar === void 0 ? void 0 : menuBar.querySelector('#btn_throttle');\nbtn_throttle === null || btn_throttle === void 0 ? void 0 : btn_throttle.addEventListener('click', function () {\n    mainFunctions.innerHTML = '';\n    throttle.buildThrottle(mainFunctions)\n        .then(function (res) { return throttle.runThrottleFunction(res); });\n});\nvar btn_memoize = menuBar === null || menuBar === void 0 ? void 0 : menuBar.querySelector('#btn_memoize');\nbtn_memoize === null || btn_memoize === void 0 ? void 0 : btn_memoize.addEventListener('click', function () {\n    mainFunctions.innerHTML = '';\n    memoize.buildMemoize(mainFunctions)\n        .then(function (res) { return memoize.runMemoizeFunction(res); });\n});\n\n\n//# sourceURL=webpack://sprint_2/./dist/app.js?");

/***/ }),

/***/ "./dist/frontend/scripts/debounce.js":
/*!*******************************************!*\
  !*** ./dist/frontend/scripts/debounce.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\nvar buildDebounce = function (mainContainer) {\n    return new Promise(function (resolve, reject) {\n        var container = document.createElement('div');\n        container.setAttribute('class', 'container');\n        var instructions = document.createElement('div');\n        instructions.setAttribute('class', 'instructions');\n        var p = document.createElement('div');\n        p.append('Click on buttons below to test the debounce function');\n        var cont_btn = document.createElement('div');\n        cont_btn.setAttribute('class', 'cont-btn');\n        var results = document.createElement('div');\n        results.setAttribute('class', 'results');\n        var counter = document.createElement('div');\n        counter.setAttribute('class', 'counter');\n        var list_clicks = document.createElement('div');\n        list_clicks.setAttribute('class', 'list-clicks');\n        instructions.appendChild(p);\n        results.appendChild(counter);\n        results.appendChild(list_clicks);\n        container.appendChild(instructions);\n        container.appendChild(cont_btn);\n        container.appendChild(results);\n        mainContainer.appendChild(container);\n        resolve(mainContainer);\n    });\n};\nvar runDebounceFunctions = function (container) {\n    // containers\n    var counter = document.querySelector('.counter');\n    var list = document.querySelector('.list-clicks');\n    list === null || list === void 0 ? void 0 : list.append('');\n    // create buttons\n    var cont_btn = document.querySelector('.cont-btn');\n    var btn_debounce = document.createElement('button');\n    btn_debounce.setAttribute('class', 'button-debounce');\n    btn_debounce.append('Debounce');\n    var btn_noDebounce = document.createElement('button');\n    btn_noDebounce.setAttribute('class', 'button-nodebounce');\n    btn_noDebounce.append('No Debounce');\n    var btn_clear = document.createElement('button');\n    btn_clear.setAttribute('class', 'button-clear');\n    btn_clear.append('Clear');\n    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_debounce);\n    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_noDebounce);\n    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_clear);\n    // functions\n    var addCounter = function () {\n        n++;\n        counter === null || counter === void 0 ? void 0 : counter.append('');\n        counter.innerHTML = n;\n    };\n    var printClicks = function () {\n        var p = document.createElement('p');\n        p.append('click');\n        list === null || list === void 0 ? void 0 : list.appendChild(p);\n    };\n    var debounce = function (callback, wait) {\n        var timerID;\n        return function () {\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            addCounter();\n            clearTimeout(timerID);\n            timerID = setTimeout(function () {\n                callback.apply(void 0, args);\n            }, wait);\n        };\n    };\n    // actions\n    var n = 0;\n    counter === null || counter === void 0 ? void 0 : counter.append(n);\n    btn_debounce.addEventListener('click', debounce(printClicks, 1500));\n    btn_noDebounce.addEventListener('click', function () {\n        addCounter();\n        printClicks();\n    });\n    btn_clear.addEventListener('click', function () {\n        var ps = list === null || list === void 0 ? void 0 : list.querySelectorAll('p');\n        ps === null || ps === void 0 ? void 0 : ps.forEach(function (p) { return p.remove(); });\n        n = 0;\n        counter.innerHTML = n;\n    });\n};\nmodule.exports = { buildDebounce: buildDebounce, runDebounceFunctions: runDebounceFunctions };\n\n\n//# sourceURL=webpack://sprint_2/./dist/frontend/scripts/debounce.js?");

/***/ }),

/***/ "./dist/frontend/scripts/memoize.js":
/*!******************************************!*\
  !*** ./dist/frontend/scripts/memoize.js ***!
  \******************************************/
/***/ ((module) => {

eval("\nvar buildMemoize = function (mainContainer) {\n    return new Promise(function (resolve, reject) {\n        var container = document.createElement('div');\n        container.setAttribute('class', 'container-m');\n        var btns_instructions = document.createElement('div');\n        btns_instructions.setAttribute('class', 'btns-instructions-m');\n        var contInputButton = document.createElement('div');\n        contInputButton.setAttribute('class', 'cont-input-btn');\n        var inputNumber = document.createElement('input');\n        inputNumber.setAttribute('type', 'number');\n        inputNumber.setAttribute('class', 'input-number');\n        inputNumber.setAttribute('min', '0');\n        inputNumber.setAttribute('max', '10');\n        var btn_memoize = document.createElement('button');\n        btn_memoize.setAttribute('class', 'button-memoize');\n        btn_memoize.append('Memoize');\n        var instructions = document.createElement('div');\n        instructions.setAttribute('class', 'instructions-m');\n        var p = document.createElement('div');\n        p.append('Can save a number using a memoize function. Type a number between 0 and 10 and click on the Memoize button to run memoize function');\n        instructions.appendChild(p);\n        var cont_btn = document.createElement('div');\n        cont_btn.setAttribute('class', 'cont-btn-m');\n        var btn_clear = document.createElement('button');\n        btn_clear.setAttribute('class', 'button-clear-m');\n        btn_clear.append('Clear');\n        cont_btn.appendChild(btn_clear);\n        contInputButton.appendChild(inputNumber);\n        contInputButton.appendChild(btn_memoize);\n        btns_instructions.appendChild(instructions);\n        btns_instructions.appendChild(contInputButton);\n        btns_instructions.appendChild(cont_btn);\n        var results = document.createElement('div');\n        results.setAttribute('class', 'results-m');\n        var list_clicks = document.createElement('div');\n        list_clicks.setAttribute('class', 'list-clicks-m');\n        results.appendChild(list_clicks);\n        container.appendChild(btns_instructions);\n        container.appendChild(results);\n        mainContainer.appendChild(container);\n        resolve(mainContainer);\n    });\n};\nvar runMemoizeFunction = function (container) {\n    // containers\n    var list = document.querySelector('.list-clicks-m');\n    list === null || list === void 0 ? void 0 : list.append('');\n    // create buttons\n    var btnMemoize = document.querySelector('.button-memoize');\n    var btnClear = document.querySelector('.button-clear-m');\n    var inpNumber = document.querySelector('.input-number');\n    var printClicksM = function () {\n        list.innerHTML = '';\n        var p = document.createElement('p');\n        p.append('click');\n        list === null || list === void 0 ? void 0 : list.appendChild(p);\n    };\n    var add = function (n) { return (n + 10); };\n    console.log('Simple call', add(3));\n    var memoize = function (fn) {\n        var cache = {};\n        return function () {\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            var n = args[0];\n            if (n in cache) {\n                console.log('Fetching from cache');\n                return cache[n];\n            }\n            else {\n                console.log('Calculating result');\n                var result = fn(n);\n                cache[n] = result;\n                return result;\n            }\n        };\n    };\n    // creating a memoized function for the 'add' pure function\n    var memoizedAdd = memoize(add);\n    console.log(memoizedAdd(3)); // calculated\n    console.log(memoizedAdd(3)); // cached\n    console.log(memoizedAdd(4)); // calculated\n    console.log(memoizedAdd(4)); // cached\n    // actions\n    btnMemoize.addEventListener('click', function () { });\n    btnClear.addEventListener('click', function () {\n        list.innerHTML = '';\n    });\n};\nmodule.exports = { buildMemoize: buildMemoize, runMemoizeFunction: runMemoizeFunction };\n\n\n//# sourceURL=webpack://sprint_2/./dist/frontend/scripts/memoize.js?");

/***/ }),

/***/ "./dist/frontend/scripts/throttle.js":
/*!*******************************************!*\
  !*** ./dist/frontend/scripts/throttle.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\nvar buildThrottle = function (mainContainer) {\n    return new Promise(function (resolve, reject) {\n        var container = document.createElement('div');\n        container.setAttribute('class', 'container-t');\n        var btns_instructions = document.createElement('div');\n        btns_instructions.setAttribute('class', 'btns-instructions-t');\n        var cont_btn = document.createElement('div');\n        cont_btn.setAttribute('class', 'cont-btn-t');\n        var instructions = document.createElement('div');\n        instructions.setAttribute('class', 'instructions-t');\n        var p = document.createElement('div');\n        p.append('Click on the left-hand buttons to test the throttle function');\n        instructions.appendChild(p);\n        btns_instructions.appendChild(cont_btn);\n        btns_instructions.appendChild(instructions);\n        var results = document.createElement('div');\n        results.setAttribute('class', 'results-t');\n        var counter = document.createElement('div');\n        counter.setAttribute('class', 'counter-t');\n        var list_clicks = document.createElement('div');\n        list_clicks.setAttribute('class', 'list-clicks-t');\n        results.appendChild(counter);\n        results.appendChild(list_clicks);\n        container.appendChild(btns_instructions);\n        container.appendChild(results);\n        mainContainer.appendChild(container);\n        resolve(mainContainer);\n    });\n};\nvar runThrottleFunction = function (container) {\n    // containers\n    var counter = document.querySelector('.counter-t');\n    var list = document.querySelector('.list-clicks-t');\n    list === null || list === void 0 ? void 0 : list.append('');\n    // create buttons\n    var cont_btn = document.querySelector('.cont-btn-t');\n    var btn_throttle = document.createElement('button');\n    btn_throttle.setAttribute('class', 'button-throttle');\n    btn_throttle.append('Throttle');\n    var btn_noThrottle = document.createElement('button');\n    btn_noThrottle.setAttribute('class', 'button-nothrottle');\n    btn_noThrottle.append('No Throttle');\n    var btn_clear = document.createElement('button');\n    btn_clear.setAttribute('class', 'button-clear-t');\n    btn_clear.append('Clear');\n    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_throttle);\n    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_noThrottle);\n    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_clear);\n    var addCounter = function () {\n        n++;\n        counter === null || counter === void 0 ? void 0 : counter.append('');\n        counter.innerHTML = n;\n    };\n    var printClicksT = function () {\n        var p = document.createElement('p');\n        p.append('click');\n        list === null || list === void 0 ? void 0 : list.appendChild(p);\n    };\n    var throttlePause;\n    var throttleFunction = function (callback, time) {\n        addCounter();\n        if (throttlePause)\n            return;\n        throttlePause = true;\n        setTimeout(function () {\n            callback();\n            throttlePause = false;\n        }, time);\n    };\n    // actions\n    var n = 0;\n    counter === null || counter === void 0 ? void 0 : counter.append(n);\n    btn_throttle.addEventListener('click', function () {\n        throttleFunction(printClicksT, 1500);\n    });\n    btn_noThrottle.addEventListener('click', function () {\n        addCounter();\n        printClicksT();\n    });\n    btn_clear.addEventListener('click', function () {\n        var ps = list === null || list === void 0 ? void 0 : list.querySelectorAll('p');\n        ps === null || ps === void 0 ? void 0 : ps.forEach(function (p) { return p.remove(); });\n        n = 0;\n        counter.innerHTML = n;\n    });\n};\nmodule.exports = { buildThrottle: buildThrottle, runThrottleFunction: runThrottleFunction };\n\n\n//# sourceURL=webpack://sprint_2/./dist/frontend/scripts/throttle.js?");

/***/ }),

/***/ "./frontend/styles.css":
/*!*****************************!*\
  !*** ./frontend/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sprint_2/./frontend/styles.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/app.js");
/******/ 	
/******/ })()
;