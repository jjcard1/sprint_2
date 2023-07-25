"use strict";
var printsM = function () {
    console.log('testing function');
};
var memoizeFuncM = function (callback, wait) {
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
var printConsoleM = function (type, n) {
    for (var i = 0; i < n; i++) {
        if (type === 'memoize') {
            memoizeFuncM(printsM, 1500);
        }
        if (type === 'nomemoize') {
            printsM();
        }
    }
    console.table({ Callings: n });
};
module.exports = { printConsoleM: printConsoleM };
