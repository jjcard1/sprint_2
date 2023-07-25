const buildMemoize = (mainContainer:HTMLElement) => {
    return new Promise ((resolve, reject) => {
        const container: HTMLElement = document.createElement('div')
        container.setAttribute('class', 'container-m')
        
        const btns_instructions: HTMLElement = document.createElement('div')
        btns_instructions.setAttribute('class', 'btns-instructions-m')

        const contInputButton: HTMLElement = document.createElement('div')
        contInputButton.setAttribute('class', 'cont-input-btn')
        const inputNumber: HTMLElement = document.createElement('input')
        inputNumber.setAttribute('type', 'number')
        inputNumber.setAttribute('class', 'input-number')
        inputNumber.setAttribute('min', '0')
        inputNumber.setAttribute('max', '10')
        const btn_memoize: HTMLElement = document.createElement('button')
        btn_memoize.setAttribute('class', 'button-memoize')
        btn_memoize.append('Memoize')

        const instructions: HTMLElement = document.createElement('div')
        instructions.setAttribute('class', 'instructions-m')
        const p: HTMLElement = document.createElement('div')
        p.append('Calculates the square root of a number between 1 and 10. If you repeat the number this result will come from a data saved in cache. This is made with memoize function')
        instructions.appendChild(p)

        const cont_btn: HTMLElement = document.createElement('div')
        cont_btn.setAttribute('class', 'cont-btn-m')
        const btn_clear: HTMLElement = document.createElement('button')
        btn_clear.setAttribute('class', 'button-clear-m')
        btn_clear.append('Clear')
        cont_btn.appendChild(btn_clear)

        contInputButton.appendChild(inputNumber)
        contInputButton.appendChild(btn_memoize)
        btns_instructions.appendChild(instructions)
        btns_instructions.appendChild(contInputButton)
        btns_instructions.appendChild(cont_btn)

        const results: HTMLElement = document.createElement('div')
        results.setAttribute('class', 'results-m')
        const list_clicks: HTMLElement = document.createElement('div')
        list_clicks.setAttribute('class', 'list-clicks-m')
        results.appendChild(list_clicks)

        container.appendChild(btns_instructions)
        container.appendChild(results)
        mainContainer.appendChild(container)

        resolve(mainContainer)
    })
}

const runMemoizeFunction = () => {
    // containers
    const list: HTMLElement | null = document.querySelector('.list-clicks-m')
    list?.append('')
    
    // create buttons
    const btnMemoize:any = document.querySelector('.button-memoize')
    const btnClear:any = document.querySelector('.button-clear-m')
    const inpNumber:any = document.querySelector('.input-number')

    const printClicksM = (num:number, origin:String) => {
        const contPs = document.createElement('div')
        contPs.setAttribute('class', 'cont-ps')
        const p:HTMLElement = document.createElement('p')
        p.setAttribute('class', 'p-num')
        const calc:number = Math.sqrt(num)
        p.append(calc.toString());
        const cameFrom = document.createElement('p')
        cameFrom.setAttribute('class', 'came-from')
        if(origin === 'cache'){cameFrom.append('This number come from Cache')}
        if(origin === 'funct'){cameFrom.append('This number has been calculated in the function')}
        contPs.appendChild(p)
        contPs.appendChild(cameFrom)
        list?.appendChild(contPs)
        return num
    };

    const memoize = (fn:Function) => {
        let cache:any = {}
        return (...args:any) => {
            let n = args[0]
            if (n in cache) {
                fn(n, 'cache');
                return cache[n]
            }
            else {
                let result = fn(n, 'funct')
                cache[n] = result
                return result
            }
        }
    }
    
    // actions
    const calculateSqr = memoize(printClicksM)
    btnMemoize.addEventListener('click', () => {
        calculateSqr(inpNumber.value)
    })
    btnClear.addEventListener('click', () => {
        (list as HTMLElement).innerHTML = ''
        inpNumber.value = ''
    })
}

module.exports = { buildMemoize, runMemoizeFunction }
