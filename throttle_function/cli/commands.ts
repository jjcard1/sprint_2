import { program } from "commander"
const controllers = require('./controllers/throttle.controllers')

const executeFunction = () => {
    program
        .version('1.0.0')
        .description('This CLI allow to test the throttle function')

    program
        .command('throttle <n>')
        .alias('th')
        .action(async (n:number) => {
            controllers.printConsoleT('throttle', n)
        })

    program
        .command('nothrottle <n>')
        .alias('nth')
        .action(async (n:number) => {
            controllers.printConsoleT('nothrottle', n)
        })
    
    program
        .parse(process.argv)
}

module.exports = { executeFunction }