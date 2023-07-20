const buildThrottle = (mainContainer:HTMLElement) => {
    return new Promise ((resolve, reject) => {
        const container = document.createElement('div')
        container.setAttribute('class', 'container-t')
        
        const btns_instructions = document.createElement('div')
        btns_instructions.setAttribute('class', 'btns-instructions-t')
        const cont_btn = document.createElement('div')
        cont_btn.setAttribute('class', 'cont-btn-t')
        const instructions = document.createElement('div')
        instructions.setAttribute('class', 'instructions-t')
        const p = document.createElement('div')
        p.append('Click on the left-hand buttons to test the throttle function')
        instructions.appendChild(p)
        btns_instructions.appendChild(cont_btn)
        btns_instructions.appendChild(instructions)

        const results = document.createElement('div')
        results.setAttribute('class', 'results-t')
        const counter = document.createElement('div')
        counter.setAttribute('class', 'counter-t')
        const list_clicks = document.createElement('div')
        list_clicks.setAttribute('class', 'list-clicks-t')
        results.appendChild(counter)
        results.appendChild(list_clicks)

        container.appendChild(btns_instructions)
        container.appendChild(results)
        mainContainer.appendChild(container)

        resolve(mainContainer)
    })
}

const runThrottleFunction = () => {
    // containers
    const counter:any = document.querySelector('.counter-t')
    const list: HTMLElement | null = document.querySelector('.list-clicks-t')
    list?.append('')
    
    // create buttons
    const cont_btn: HTMLElement | null = document.querySelector('.cont-btn-t')
    const btn_throttle: HTMLElement = document.createElement('button')
    btn_throttle.setAttribute('class', 'button-throttle')
    btn_throttle.append('Throttle')
    const btn_noThrottle: HTMLElement = document.createElement('button')
    btn_noThrottle.setAttribute('class', 'button-nothrottle')
    btn_noThrottle.append('No Throttle')
    const btn_clear: HTMLElement = document.createElement('button')
    btn_clear.setAttribute('class', 'button-clear-t')
    btn_clear.append('Clear')
    cont_btn?.appendChild(btn_throttle)
    cont_btn?.appendChild(btn_noThrottle)
    cont_btn?.appendChild(btn_clear)

    const throttleFunction = (callback:Function, wait:number) => {
        let prev = 0 
        return (...args: any[]) => {
            let now = new Date().getTime()
            console.log(now - prev, wait) 
            
            if (now - prev > wait) {
                prev = now;
                return callback(...args) 
            }
        }
    }

    
    // actions
    let n:any = 0
    counter?.append(n)
    btn_throttle.addEventListener('click', () => {})
    btn_noThrottle.addEventListener('click', () => {})
    btn_clear.addEventListener('click', () => {
        const ps = list?.querySelectorAll('p')
        ps?.forEach(p => p.remove())
        n = 0
        counter.innerHTML = n
    })
}


module.exports = { buildThrottle, runThrottleFunction }
