const buildMemoize = (mainContainer:HTMLElement) => {
    return new Promise ((resolve, reject) => {
        const container = document.createElement('div')
        container.setAttribute('class', 'container-m')
        
        const btns_instructions = document.createElement('div')
        btns_instructions.setAttribute('class', 'btns-instructions-m')
        const cont_btn = document.createElement('div')
        cont_btn.setAttribute('class', 'cont-btn-m')
        const instructions = document.createElement('div')
        instructions.setAttribute('class', 'instructions-m')
        const p = document.createElement('div')
        p.append('Click on the left-hand buttons to test the memoize function')
        instructions.appendChild(p)
        btns_instructions.appendChild(cont_btn)
        btns_instructions.appendChild(instructions)

        const results = document.createElement('div')
        results.setAttribute('class', 'results-m')
        const counter = document.createElement('div')
        counter.setAttribute('class', 'counter-m')
        const list_clicks = document.createElement('div')
        list_clicks.setAttribute('class', 'list-clicks-m')
        results.appendChild(counter)
        results.appendChild(list_clicks)

        container.appendChild(btns_instructions)
        container.appendChild(results)
        mainContainer.appendChild(container)

        resolve(mainContainer)
    })
}

const runMemoizeFunction = (container:HTMLElement) => {
    // containers
    const counter:any = document.querySelector('.counter-m')
    const list: HTMLElement | null = document.querySelector('.list-clicks-m')
    list?.append('')
    
    // create buttons
    const cont_btn: HTMLElement | null = document.querySelector('.cont-btn-m')
    const btn_memoize: HTMLElement = document.createElement('button')
    btn_memoize.setAttribute('class', 'button-memoize')
    btn_memoize.append('Memoize')
    const btn_noMemoize: HTMLElement = document.createElement('button')
    btn_noMemoize.setAttribute('class', 'button-nomemoize')
    btn_noMemoize.append('No Memoize')
    const btn_clear: HTMLElement = document.createElement('button')
    btn_clear.setAttribute('class', 'button-clear-m')
    btn_clear.append('Clear')
    cont_btn?.appendChild(btn_memoize)
    cont_btn?.appendChild(btn_noMemoize)
    cont_btn?.appendChild(btn_clear)


    const addCounter = () => {
        n++
        counter?.append('')
        counter.innerHTML = n
    }

    const printClicksM: () => void = () => {
        const p = document.createElement('p')
        p.append('click');
        list?.appendChild(p)
    };

    let throttlePause: any;
    const throttleFunction = (callback:Function, time:number) => {
        addCounter()
        if (throttlePause) return;
        throttlePause = true;
        setTimeout(() => {
            callback();
            throttlePause = false;
        }, time);
    }

    
    // actions
    let n:any = 0
    counter?.append(n)
    btn_memoize.addEventListener('click', () => { 
        throttleFunction(printClicksM, 1500)
    })
    btn_noMemoize.addEventListener('click', () => {
        addCounter()
        printClicksM() 
    })
    btn_clear.addEventListener('click', () => {
        const ps = list?.querySelectorAll('p')
        ps?.forEach(p => p.remove())
        n = 0
        counter.innerHTML = n
    })
}

module.exports = { buildMemoize, runMemoizeFunction }
