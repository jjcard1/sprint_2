const throttleTest = (callback:Function, wait:number) => {
    let prev = 0 
    return (...args: any[]) => {
        let now = new Date().getTime()
        if (now - prev > wait) {
            prev = now;
            return callback(...args) 
        }
    }
}

module.exports = { throttleTest }
