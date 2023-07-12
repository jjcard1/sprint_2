
// functions
const results = document.querySelector('.results')

const print = (cont) => {
    const text = document.createElement('p')
    text.append('click')
    results.appendChild(text)
}

const debounce = (callback, wait) => {
    callback()
}

// create buttons
const cont_btn = document.querySelector('.cont-btn')
const btn_debounce = document.createElement('button')
btn_debounce.setAttribute('class', 'button-debounce')
btn_debounce.append('Debounce')
const btn_noDebounce = document.createElement('button')
btn_noDebounce.setAttribute('class', 'button-nodebounce')
btn_noDebounce.append('No Debounce')
cont_btn.appendChild(btn_debounce)
cont_btn.appendChild(btn_noDebounce)


// actions
btn_debounce.addEventListener('click', debounce(print))

btn_noDebounce.addEventListener('click', debounce(print))