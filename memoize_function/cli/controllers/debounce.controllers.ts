
const prints = () => {
    console.log('data to print')
}

const debounceFunc = (callback: Function, wait: number) => {
    let timerID: NodeJS.Timeout
    return (...args:any) => {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

const printConsole = (type:string, n:number) => {
    for(let i = 0; i < n; i++){
        if(type === 'debounce'){debounceFunc(prints, 1500)}
        if(type === 'nodebounce'){prints()}
    }
    console.table({Callings: n})
}

module.exports = {printConsole}