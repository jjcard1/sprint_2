"use strict";
require('../frontend/styles.css');
var debounce = require('./frontend/scripts/debounce.js');
var throttle = require('./frontend/scripts/throttle.js');
// containers
var menuBar = document.querySelector('.menu-bar');
var mainFunctions = document.querySelector('.main-functions');
// menu options
var arrayOptions = ['debounce', 'throttle', 'memoize'];
arrayOptions.forEach(function (op) {
    var button = document.createElement('button');
    button.setAttribute('id', "btn_".concat(op));
    button.setAttribute('class', 'button-option');
    button.append(op);
    menuBar === null || menuBar === void 0 ? void 0 : menuBar.appendChild(button);
});
// actions click btns nav
var btn_debounce = menuBar === null || menuBar === void 0 ? void 0 : menuBar.querySelector('#btn_debounce');
btn_debounce === null || btn_debounce === void 0 ? void 0 : btn_debounce.addEventListener('click', function () {
    mainFunctions.innerHTML = '';
    debounce.buildDebounce(mainFunctions)
        .then(function (res) { return debounce.runDebounceFunctions(res); });
});
var btn_throttle = menuBar === null || menuBar === void 0 ? void 0 : menuBar.querySelector('#btn_throttle');
btn_throttle === null || btn_throttle === void 0 ? void 0 : btn_throttle.addEventListener('click', function () {
    mainFunctions.innerHTML = '';
    throttle.buildThrottle(mainFunctions)
        .then(function (res) { return throttle.runThrottleFunction(res); });
});
var btn_memoize = menuBar === null || menuBar === void 0 ? void 0 : menuBar.querySelector('#btn_memoize');
btn_memoize === null || btn_memoize === void 0 ? void 0 : btn_memoize.addEventListener('click', function () {
    mainFunctions.innerHTML = '';
});
