
// functions
const counter = document.querySelector('.counter')
const list = document.querySelector('.list-clicks')

const addCounter = () => {
    n++
    counter.innerHTML = n
}

const print = () => {
    const p = document.createElement('p')
    p.append('click')
    list.appendChild(p)
}

const debounce = (callback, wait) => {
    let timerID
    return (...args) => {
        addCounter()
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

// create buttons
const cont_btn = document.querySelector('.cont-btn')
const btn_debounce = document.createElement('button')
btn_debounce.setAttribute('class', 'button-debounce')
btn_debounce.append('Debounce')
const btn_noDebounce = document.createElement('button')
btn_noDebounce.setAttribute('class', 'button-nodebounce')
btn_noDebounce.append('No Debounce')
const btn_clear = document.createElement('button')
btn_clear.setAttribute('class', 'button-clear')
btn_clear.append('Clear')
cont_btn.appendChild(btn_debounce)
cont_btn.appendChild(btn_noDebounce)
cont_btn.appendChild(btn_clear)


// actions
let n = 0
counter.innerHTML = n
btn_debounce.addEventListener('click', debounce(print, 1000))
btn_noDebounce.addEventListener('click', () => {
    addCounter()
    print()
})
btn_clear.addEventListener('click', () => {
    list.innerHTML = ''
    n = 0
    counter.innerHTML = n
})