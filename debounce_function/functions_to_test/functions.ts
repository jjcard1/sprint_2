
// functions
const debounceTest = (callback: Function, wait: number) => {
    let timerID: any
    return (...args:any) => {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

module.exports = {debounceTest}