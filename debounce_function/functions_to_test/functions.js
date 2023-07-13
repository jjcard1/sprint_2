"use strict";
// functions
var debounceTest = function (callback, wait) {
    var timerID;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timerID);
        timerID = setTimeout(function () {
            callback.apply(void 0, args);
        }, wait);
    };
};
module.exports = { debounceTest: debounceTest };
