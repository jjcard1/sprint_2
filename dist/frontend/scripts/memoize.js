"use strict";
var buildMemoize = function (mainContainer) {
    return new Promise(function (resolve, reject) {
        var container = document.createElement('div');
        container.setAttribute('class', 'container-m');
        var btns_instructions = document.createElement('div');
        btns_instructions.setAttribute('class', 'btns-instructions-m');
        var cont_btn = document.createElement('div');
        cont_btn.setAttribute('class', 'cont-btn-m');
        var instructions = document.createElement('div');
        instructions.setAttribute('class', 'instructions-m');
        var p = document.createElement('div');
        p.append('Click on the left-hand buttons to test the memoize function');
        instructions.appendChild(p);
        btns_instructions.appendChild(cont_btn);
        btns_instructions.appendChild(instructions);
        var results = document.createElement('div');
        results.setAttribute('class', 'results-m');
        var counter = document.createElement('div');
        counter.setAttribute('class', 'counter-m');
        var list_clicks = document.createElement('div');
        list_clicks.setAttribute('class', 'list-clicks-m');
        results.appendChild(counter);
        results.appendChild(list_clicks);
        container.appendChild(btns_instructions);
        container.appendChild(results);
        mainContainer.appendChild(container);
        resolve(mainContainer);
    });
};
var runMemoizeFunction = function (container) {
    // containers
    var counter = document.querySelector('.counter-m');
    var list = document.querySelector('.list-clicks-m');
    list === null || list === void 0 ? void 0 : list.append('');
    // create buttons
    var cont_btn = document.querySelector('.cont-btn-m');
    var btn_memoize = document.createElement('button');
    btn_memoize.setAttribute('class', 'button-memoize');
    btn_memoize.append('Memoize');
    var btn_noMemoize = document.createElement('button');
    btn_noMemoize.setAttribute('class', 'button-nomemoize');
    btn_noMemoize.append('No Memoize');
    var btn_clear = document.createElement('button');
    btn_clear.setAttribute('class', 'button-clear-m');
    btn_clear.append('Clear');
    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_memoize);
    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_noMemoize);
    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_clear);
    var addCounter = function () {
        n++;
        counter === null || counter === void 0 ? void 0 : counter.append('');
        counter.innerHTML = n;
    };
    var printClicksM = function () {
        var p = document.createElement('p');
        p.append('click');
        list === null || list === void 0 ? void 0 : list.appendChild(p);
    };
    var throttlePause;
    var throttleFunction = function (callback, time) {
        addCounter();
        if (throttlePause)
            return;
        throttlePause = true;
        setTimeout(function () {
            callback();
            throttlePause = false;
        }, time);
    };
    // actions
    var n = 0;
    counter === null || counter === void 0 ? void 0 : counter.append(n);
    btn_memoize.addEventListener('click', function () {
        throttleFunction(printClicksM, 1500);
    });
    btn_noMemoize.addEventListener('click', function () {
        addCounter();
        printClicksM();
    });
    btn_clear.addEventListener('click', function () {
        var ps = list === null || list === void 0 ? void 0 : list.querySelectorAll('p');
        ps === null || ps === void 0 ? void 0 : ps.forEach(function (p) { return p.remove(); });
        n = 0;
        counter.innerHTML = n;
    });
};
module.exports = { buildMemoize: buildMemoize, runMemoizeFunction: runMemoizeFunction };
