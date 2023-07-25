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
        p.append('Can save a number using a memoize function. Type a number between 0 and 10 and click on the Memoize button to run memoize function')
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

const runMemoizeFunction = (container: HTMLElement) => {
    // containers
    const list: HTMLElement | null = document.querySelector('.list-clicks-m')
    list?.append('')
    
    // create buttons
    const btnMemoize:any = document.querySelector('.button-memoize')
    const btnClear:any = document.querySelector('.button-clear-m')
    const inpNumber:any = document.querySelector('.input-number')

    const printClicksM: () => void = () => {
        (list as HTMLElement).innerHTML = ''
        
        const p = document.createElement('p')
        p.append('click');
        list?.appendChild(p)
    };

    const add = (n:number) => (n + 10);
    console.log('Simple call', add(3));
    const memoize = (fn:Function) => {
        let cache:any = {}
        return (...args:any) => {
            let n = args[0]
            if (n in cache) {
                console.log('Fetching from cache');
                return cache[n]
            }
            else {
                console.log('Calculating result')
                let result = fn(n)
                cache[n] = result
                return result
            }
        }
    }
    
    // creating a memoized function for the 'add' pure function
    const memoizedAdd = memoize(add);
    console.log(memoizedAdd(3));  // calculated
    console.log(memoizedAdd(3));  // cached
    console.log(memoizedAdd(4));  // calculated
    console.log(memoizedAdd(4));  // cached








    
    // actions
    btnMemoize.addEventListener('click', () => { })
    btnClear.addEventListener('click', () => {
        (list as HTMLElement).innerHTML = ''
    })
}

module.exports = { buildMemoize, runMemoizeFunction }
