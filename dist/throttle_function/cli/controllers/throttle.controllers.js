"use strict";
var printsT = function () {
    console.log('testing thrttle function');
};
var throttlePause;
var throttleFuncT = function (callback, time) {
    if (throttlePause)
        return;
    throttlePause = true;
    setTimeout(function () {
        callback();
        throttlePause = false;
    }, time);
};
var printConsoleT = function (type, n) {
    for (var i = 0; i < n; i++) {
        if (type === 'throttle') {
            throttleFuncT(printsT, 1500);
        }
        if (type === 'nothrottle') {
            printsT();
        }
    }
    console.table({ Callings: n });
};
module.exports = { printConsoleT: printConsoleT };
