
const printsT = () => {
    console.log('testing thrttle function')
}

let throttlePause: any;
const throttleFuncT = (callback: Function, time: number) => {
    if (throttlePause) return;
    throttlePause = true;
    setTimeout(() => {
        callback();
        throttlePause = false;
    }, time);
}

const printConsoleT = (type:string, n:number) => {
    for(let i = 0; i < n; i++){
        if(type === 'throttle'){throttleFuncT(printsT, 1500)}
        if(type === 'nothrottle'){printsT()}
    }
    console.table({Callings: n})
}

module.exports = {printConsoleT}