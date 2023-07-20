"use strict";
var buildDebounce = function (mainContainer) {
    return new Promise(function (resolve, reject) {
        var container = document.createElement('div');
        container.setAttribute('class', 'container');
        var instructions = document.createElement('div');
        instructions.setAttribute('class', 'instructions');
        var p = document.createElement('div');
        p.append('Click on buttons below to test the debounce function');
        var cont_btn = document.createElement('div');
        cont_btn.setAttribute('class', 'cont-btn');
        var results = document.createElement('div');
        results.setAttribute('class', 'results');
        var counter = document.createElement('div');
        counter.setAttribute('class', 'counter');
        var list_clicks = document.createElement('div');
        list_clicks.setAttribute('class', 'list-clicks');
        instructions.appendChild(p);
        results.appendChild(counter);
        results.appendChild(list_clicks);
        container.appendChild(instructions);
        container.appendChild(cont_btn);
        container.appendChild(results);
        mainContainer.appendChild(container);
        resolve(mainContainer);
    });
};
var runDebounceFunctions = function (container) {
    // containers
    var counter = document.querySelector('.counter');
    var list = document.querySelector('.list-clicks');
    list === null || list === void 0 ? void 0 : list.append('');
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
    // functions
    var addCounter = function () {
        n++;
        counter === null || counter === void 0 ? void 0 : counter.append('');
        counter.innerHTML = n;
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
    // actions
    var n = 0;
    counter === null || counter === void 0 ? void 0 : counter.append(n);
    btn_debounce.addEventListener('click', debounce(printClicks, 1500));
    btn_noDebounce.addEventListener('click', function () {
        addCounter();
        printClicks();
    });
    btn_clear.addEventListener('click', function () {
        var ps = list === null || list === void 0 ? void 0 : list.querySelectorAll('p');
        ps === null || ps === void 0 ? void 0 : ps.forEach(function (p) { return p.remove(); });
        n = 0;
        counter.innerHTML = n;
    });
};
module.exports = { buildDebounce: buildDebounce, runDebounceFunctions: runDebounceFunctions };
