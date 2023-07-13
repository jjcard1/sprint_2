"use strict";
// functions
var counter = document.querySelector('.counter');
var list = document.querySelector('.list-clicks');
var addCounter = function () {
    n++;
    counter === null || counter === void 0 ? void 0 : counter.append('');
    counter === null || counter === void 0 ? void 0 : counter.append(n);
};
var printClicks = function () {
    var p = document.createElement('p');
    p.append('click');
    list === null || list === void 0 ? void 0 : list.appendChild(p);
};
var debounce = function (callback, wait) {
    var timerID;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        addCounter();
        clearTimeout(timerID);
        timerID = setTimeout(function () {
            callback.apply(void 0, args);
        }, wait);
    };
};
// create buttons
var cont_btn = document.querySelector('.cont-btn');
var btn_debounce = document.createElement('button');
btn_debounce.setAttribute('class', 'button-debounce');
btn_debounce.append('Debounce');
var btn_noDebounce = document.createElement('button');
btn_noDebounce.setAttribute('class', 'button-nodebounce');
btn_noDebounce.append('No Debounce');
var btn_clear = document.createElement('button');
btn_clear.setAttribute('class', 'button-clear');
btn_clear.append('Clear');
cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_debounce);
cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_noDebounce);
cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_clear);
// actions
var n = 0;
counter === null || counter === void 0 ? void 0 : counter.append(n);
btn_debounce.addEventListener('click', debounce(printClicks, 1000));
btn_noDebounce.addEventListener('click', function () {
    addCounter();
    printClicks();
});
btn_clear.addEventListener('click', function () {
    list === null || list === void 0 ? void 0 : list.append('');
    n = 0;
    counter === null || counter === void 0 ? void 0 : counter.append('');
    counter === null || counter === void 0 ? void 0 : counter.append(n);
});
