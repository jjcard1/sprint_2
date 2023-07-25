
// functions

const memoizeTest = (fn:Function) => {
    let cache:any = {}
    return (...args:any) => {
        let n = args[0]
        if (n in cache) {
            return cache[n]
        }
        else {
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}

module.exports = {memoizeTest}