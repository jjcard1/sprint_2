
// functions
const counter: HTMLElement | null = document.querySelector('.counter')
const list: HTMLElement | null = document.querySelector('.list-clicks')

const addCounter = () => {
    n++
    counter?.append('')
    counter?.append(n)
}

const printClicks: () => void = () => {
    const p = document.createElement('p')
    p.append('click');
    list?.appendChild(p)
};

const debounce = (callback: Function, wait: number) => {
    let timerID: any
    return (...args:any) => {
        addCounter()
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

// create buttons
const cont_btn: HTMLElement | null = document.querySelector('.cont-btn')
const btn_debounce: HTMLElement = document.createElement('button')
btn_debounce.setAttribute('class', 'button-debounce')
btn_debounce.append('Debounce')
const btn_noDebounce: HTMLElement = document.createElement('button')
btn_noDebounce.setAttribute('class', 'button-nodebounce')
btn_noDebounce.append('No Debounce')
const btn_clear: HTMLElement = document.createElement('button')
btn_clear.setAttribute('class', 'button-clear')
btn_clear.append('Clear')
cont_btn?.appendChild(btn_debounce)
cont_btn?.appendChild(btn_noDebounce)
cont_btn?.appendChild(btn_clear)


// actions
let n: any = 0
counter?.append(n)
btn_debounce.addEventListener('click', debounce(printClicks, 1000))
btn_noDebounce.addEventListener('click', () => {
    addCounter()
    printClicks()
})
btn_clear.addEventListener('click', () => {
    list?.append('')
    n = 0
    counter?.append('')
    counter?.append(n)
})