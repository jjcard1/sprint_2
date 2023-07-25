import { program } from "commander"
const controllers = require('./controllers/debounce.controllers')

const executeFunction = () => {
    program
        .version('1.0.0')
        .description('This CLI allow to test the debounce function')

    program
        .command('debounce <n>')
        .alias('de')
        .action(async (n:number) => {
            controllers.printConsoleM('debounce', n)
        })

    program
        .command('nodebounce <n>')
        .alias('nde')
        .action(async (n:number) => {
            controllers.printConsoleM('nodebounce', n)
        })
    
    program
        .parse(process.argv)
}

module.exports = { executeFunction }