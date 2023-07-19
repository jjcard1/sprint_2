"use strict";
var prints = function () {
    console.log('data to print');
};
var debounceFunc = function (callback, wait) {
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
var printConsole = function (type, n) {
    for (var i = 0; i < n; i++) {
        if (type === 'debounce') {
            debounceFunc(prints, 1500);
        }
        if (type === 'nodebounce') {
            prints();
        }
    }
    console.table({ Callings: n });
};
module.exports = { printConsole: printConsole };
