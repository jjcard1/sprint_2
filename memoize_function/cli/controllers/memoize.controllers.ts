
const printsM = () => {
    console.log('testing function')
}

const memoizeFuncM = (callback: Function, wait: number) => {
    let timerID: NodeJS.Timeout
    return (...args:any) => {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

const printConsoleM = (type:string, n:number) => {
    for(let i = 0; i < n; i++){
        if(type === 'memoize'){memoizeFuncM(printsM, 1500)}
        if(type === 'nomemoize'){printsM()}
    }
    console.table({Callings: n})
}

module.exports = {printConsoleM}