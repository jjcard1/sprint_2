require('../frontend/styles.css')
const debounce = require('./frontend/scripts/debounce.js')
const throttle = require('./frontend/scripts/throttle.js')

// containers
const menuBar = document.querySelector('.menu-bar')
const mainFunctions = document.querySelector('.main-functions')

// menu options
const arrayOptions = ['debounce', 'throttle', 'memoize']
arrayOptions.forEach(op => {
    const button:HTMLElement = document.createElement('button')
    button.setAttribute('id', `btn_${op}`)
    button.setAttribute('class', 'button-option')
    button.append(op)
    menuBar?.appendChild(button)
})

// actions click btns nav
const btn_debounce = menuBar?.querySelector('#btn_debounce')
btn_debounce?.addEventListener('click', () => {
    (mainFunctions as HTMLElement).innerHTML = ''
    debounce.buildDebounce(mainFunctions)
        .then((res:any) => debounce.runDebounceFunctions(res))
    
})

const btn_throttle = menuBar?.querySelector('#btn_throttle')
btn_throttle?.addEventListener('click', () => {
    (mainFunctions as HTMLElement).innerHTML = ''
    throttle.buildThrottle(mainFunctions)
        .then((res:any) => throttle.runThrottleFunction(res))
})

const btn_memoize = menuBar?.querySelector('#btn_memoize')
btn_memoize?.addEventListener('click', () => {
    (mainFunctions as HTMLElement).innerHTML = ''
})
