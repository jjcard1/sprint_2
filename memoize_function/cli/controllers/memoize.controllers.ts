
const printClicksM = (num:number, origin:String) => {
    let obj:any = {}
    const calc:number = Math.sqrt(num)
    if(origin === 'cache'){obj[calc] = 'This number come from Cache'}
    if(origin === 'funct'){obj[calc] = 'This number has been calculated in the function'}
    return obj
};

let cache:any = {}
const memoizeCli = (fn:Function) => {
    return (...args:any) => {
        let n = args[0]
        if (n in cache) {
            const resultC = fn(n, 'cache');
            return resultC
        }
        else {
            const result = fn(n, 'funct')
            cache[n] = result
            return result
        }
    }
}

const calculateSqrCli = memoizeCli(printClicksM)

const printConsoleM = (n:number) => {
    const resu = calculateSqrCli(n)
    return resu
}


module.exports = {printConsoleM}