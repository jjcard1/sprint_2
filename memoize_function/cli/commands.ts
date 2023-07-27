import { program } from "commander"

const controllers = require('./controllers/memoize.controllers')

const executeFunction = () => {
    program
        .version('1.0.0')
        .description('This CLI calculate the square root of the given number. If the given number is repeated, the answer is going to take the data from cache')

    program
        .command('memoize <n>')
        .alias('me')
        .action(async (n:number) => {
            const res = controllers.printConsoleM(n)
            console.table(res)
        })
    
    program
        .parse(process.argv)
}

module.exports = { executeFunction }