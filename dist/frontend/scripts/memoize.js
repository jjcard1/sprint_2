"use strict";
var buildMemoize = function (mainContainer) {
    return new Promise(function (resolve, reject) {
        var container = document.createElement('div');
        container.setAttribute('class', 'container-m');
        var btns_instructions = document.createElement('div');
        btns_instructions.setAttribute('class', 'btns-instructions-m');
        var contInputButton = document.createElement('div');
        contInputButton.setAttribute('class', 'cont-input-btn');
        var inputNumber = document.createElement('input');
        inputNumber.setAttribute('type', 'number');
        inputNumber.setAttribute('class', 'input-number');
        inputNumber.setAttribute('min', '0');
        inputNumber.setAttribute('max', '10');
        var btn_memoize = document.createElement('button');
        btn_memoize.setAttribute('class', 'button-memoize');
        btn_memoize.append('Memoize');
        var instructions = document.createElement('div');
        instructions.setAttribute('class', 'instructions-m');
        var p = document.createElement('div');
        p.append('Can save a number using a memoize function. Type a number between 0 and 10 and click on the Memoize button to run memoize function');
        instructions.appendChild(p);
        var cont_btn = document.createElement('div');
        cont_btn.setAttribute('class', 'cont-btn-m');
        var btn_clear = document.createElement('button');
        btn_clear.setAttribute('class', 'button-clear-m');
        btn_clear.append('Clear');
        cont_btn.appendChild(btn_clear);
        contInputButton.appendChild(inputNumber);
        contInputButton.appendChild(btn_memoize);
        btns_instructions.appendChild(instructions);
        btns_instructions.appendChild(contInputButton);
        btns_instructions.appendChild(cont_btn);
        var results = document.createElement('div');
        results.setAttribute('class', 'results-m');
        var list_clicks = document.createElement('div');
        list_clicks.setAttribute('class', 'list-clicks-m');
        results.appendChild(list_clicks);
        container.appendChild(btns_instructions);
        container.appendChild(results);
        mainContainer.appendChild(container);
        resolve(mainContainer);
    });
};
var runMemoizeFunction = function (container) {
    // containers
    var list = document.querySelector('.list-clicks-m');
    list === null || list === void 0 ? void 0 : list.append('');
    // create buttons
    var btnMemoize = document.querySelector('.button-memoize');
    var btnClear = document.querySelector('.button-clear-m');
    var inpNumber = document.querySelector('.input-number');
    var printClicksM = function () {
        list.innerHTML = '';
        var p = document.createElement('p');
        p.append('click');
        list === null || list === void 0 ? void 0 : list.appendChild(p);
    };
    var add = function (n) { return (n + 10); };
    console.log('Simple call', add(3));
    var memoize = function (fn) {
        var cache = {};
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var n = args[0];
            if (n in cache) {
                console.log('Fetching from cache');
                return cache[n];
            }
            else {
                console.log('Calculating result');
                var result = fn(n);
                cache[n] = result;
                return result;
            }
        };
    };
    // creating a memoized function for the 'add' pure function
    var memoizedAdd = memoize(add);
    console.log(memoizedAdd(3)); // calculated
    console.log(memoizedAdd(3)); // cached
    console.log(memoizedAdd(4)); // calculated
    console.log(memoizedAdd(4)); // cached
    // actions
    btnMemoize.addEventListener('click', function () { });
    btnClear.addEventListener('click', function () {
        list.innerHTML = '';
    });
};
module.exports = { buildMemoize: buildMemoize, runMemoizeFunction: runMemoizeFunction };
