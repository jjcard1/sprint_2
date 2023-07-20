
const buildDebounce = (mainContainer:HTMLElement) => {
    return new Promise ((resolve, reject) => {
        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        const instructions = document.createElement('div')
        instructions.setAttribute('class', 'instructions')

        const p = document.createElement('div')
        p.append('Click on buttons below to test the debounce function')

        const cont_btn = document.createElement('div')
        cont_btn.setAttribute('class', 'cont-btn')

        const results = document.createElement('div')
        results.setAttribute('class', 'results')

        const counter = document.createElement('div')
        counter.setAttribute('class', 'counter')

        const list_clicks = document.createElement('div')
        list_clicks.setAttribute('class', 'list-clicks')

        instructions.appendChild(p)
        results.appendChild(counter)
        results.appendChild(list_clicks)
        container.appendChild(instructions)
        container.appendChild(cont_btn)
        container.appendChild(results)
        mainContainer.appendChild(container)

        resolve(mainContainer)
    })
}

const runDebounceFunctions = (container:HTMLElement) => {
    // containers
    const counter:any = document.querySelector('.counter')
    const list: HTMLElement | null = document.querySelector('.list-clicks')
    list?.append('')
    
    
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
    
    
    // functions
    const addCounter = () => {
        n++
        counter?.append('')
        counter.innerHTML = n
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
    
    
    // actions
    let n:any = 0
    counter?.append(n)
    btn_debounce.addEventListener('click', debounce(printClicks, 1500))
    btn_noDebounce.addEventListener('click', () => {
        addCounter()
        printClicks()
    })
    btn_clear.addEventListener('click', () => {
        const ps = list?.querySelectorAll('p')
        ps?.forEach(p => p.remove())
        n = 0
        counter.innerHTML = n
    })
}

module.exports = { buildDebounce, runDebounceFunctions }