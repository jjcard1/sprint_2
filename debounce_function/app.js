"use strict";
// functions
const counter = document.querySelector('.counter');
const list = document.querySelector('.list-clicks');
const addCounter = () => {
    n++;
    counter === null || counter === void 0 ? void 0 : counter.appendChild(n);
};
const printClicks = () => {
    const p = document.createElement('p');
    p.append('click');
    list === null || list === void 0 ? void 0 : list.appendChild(p);
};
const debounce = (callback, wait) => {
    let timerID;
    return (...args) => {
        addCounter();
        clearTimeout(timerID);
        timerID = setTimeout(() => {
            callback(...args);
        }, wait);
    };
};
// create buttons
const cont_btn = document.querySelector('.cont-btn');
const btn_debounce = document.createElement('button');
btn_debounce.setAttribute('class', 'button-debounce');
btn_debounce.append('Debounce');
const btn_noDebounce = document.createElement('button');
btn_noDebounce.setAttribute('class', 'button-nodebounce');
btn_noDebounce.append('No Debounce');
const btn_clear = document.createElement('button');
btn_clear.setAttribute('class', 'button-clear');
btn_clear.append('Clear');
cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_debounce);
cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_noDebounce);
cont_btn === null || cont_btn === void 0 ? void 0 : cont_btn.appendChild(btn_clear);
// actions
let n = 0;
counter === null || counter === void 0 ? void 0 : counter.append(n);
btn_debounce.addEventListener('click', debounce(printClicks, 1000));
btn_noDebounce.addEventListener('click', () => {
    addCounter();
    printClicks();
});
btn_clear.addEventListener('click', () => {
    list === null || list === void 0 ? void 0 : list.append('');
    n = 0;
    counter === null || counter === void 0 ? void 0 : counter.append(n);
});
module.exports = { addCounter, printClicks, debounce };
