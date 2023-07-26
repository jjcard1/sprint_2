let cache:any = {}
const printClicksM = (num:number, origin:String) => {
    const calc:number = Math.sqrt(num)
    let des:string;
    if(origin === 'cache'){
        des = 'This number come from Cache'
        return [num, calc, des]
    }
    if(origin === 'funct'){
        des = 'This number has been calculated in the function'
        return [num, calc, des]
    }
};

interface objCache {
    [key:number]: any
}

const memoizeCli = (fn:Function) => {
    return (...args:any) => {
        let n = args[0]
        if (n in cache) {
            const result = fn(n, 'cache');
            const obj:objCache = {[result[1]]: result[2]}
            return obj
        }
        else {
            const result:any[] = fn(n, 'funct')
            cache[result[0]] = [result[1], result[2]]
            console.log(cache)
            const obj:objCache = {[result[0]]: [result[1], result[2]]}
            return obj
        }
    }
}

const calculateSqrCli = memoizeCli(printClicksM)

const printConsoleM = (n:number) => {
    const resu = calculateSqrCli(n)
    return resu
}

module.exports = {printConsoleM}