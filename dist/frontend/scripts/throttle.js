"use strict";
var buildThrottle = function (mainContainer) {
    return new Promise(function (resolve, reject) {
        var container = document.createElement('div');
        container.setAttribute('class', 'container-t');
        var btns_instructions = document.createElement('div');
        btns_instructions.setAttribute('class', 'btns-instructions-t');
        var cont_btn = document.createElement('div');
        cont_btn.setAttribute('class', 'cont-btn-t');
        var instructions = document.createElement('div');
        instructions.setAttribute('class', 'instructions-t');
        var p = document.createElement('div');
        p.append('Click on the left-hand buttons to test the throttle function');
        instructions.appendChild(p);
        btns_instructions.appendChild(cont_btn);
        btns_instructions.appendChild(instructions);
        var results = document.createElement('div');
        results.setAttribute('class', 'results-t');
        var counter = document.createElement('div');
        counter.setAttribute('class', 'counter-t');
        var list_clicks = document.createElement('div');
        list_clicks.setAttribute('class', 'list-clicks-t');
        results.appendChild(counter);
        results.appendChild(list_clicks);
        container.appendChild(btns_instructions);
        container.appendChild(results);
        mainContainer.appendChild(container);
        resolve(mainContainer);
    });
};
var runThrottleFunction = function () {
    // containers
    var counter = document.querySelector('.counter-t');
    var list = document.querySelector('.list-clicks-t');
    list === null || list === void 0 ? void 0 : list.append('');
    // create buttons
    var cont_btn = document.querySelector('.cont-btn-t');
    var btn_throttle = document.createElement('button');
    btn_throttle.setAttribute('class', 'button-throttle');
    btn_throttle.append('Throttle');
    var btn_noThrottle = document.createElement('button');
    btn_noThrottle.setAttribute('class', 'button-nothrottle');
    btn_noThrottle.append('No Throttle');
    var btn_clear = document.createElement('button');
    btn_clear.setAttribute('class', 'button-clear-t');
    btn_clear.append('Clear');
    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_throttle);
    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_noThrottle);
    cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_clear);
    var throttleFunction = function (callback, wait) {
        var prev = 0;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var now = new Date().getTime();
            console.log(now - prev, wait);
            if (now - prev > wait) {
                prev = now;
                return callback.apply(void 0, args);
            }
        };
    };
    // actions
    var n = 0;
    counter === null || counter === void 0 ? void 0 : counter.append(n);
    btn_throttle.addEventListener('click', function () { });
    btn_noThrottle.addEventListener('click', function () { });
    btn_clear.addEventListener('click', function () {
        var ps = list === null || list === void 0 ? void 0 : list.querySelectorAll('p');
        ps === null || ps === void 0 ? void 0 : ps.forEach(function (p) { return p.remove(); });
        n = 0;
        counter.innerHTML = n;
    });
};
module.exports = { buildThrottle: buildThrottle, runThrottleFunction: runThrottleFunction };
