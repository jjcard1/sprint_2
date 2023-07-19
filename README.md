# Entrega 2.1 Debounce Function
---

### _Goal_
1. Use tests to check the functionality of the debounce function.
2. Create a CLI to test the functionality of the debounce function.
3. Create a front-end to test the functionality of the debounce function.

## Development
`General Instructions`
1. Clone the repository using git bash
```sh
git clone https://github.com/jjcard1/sprint_1.git
```
2. Install all required dependencies to execute the app, typing them in the terminal
```sh
npm install
```
3. Compile all necesary files to run
```sh
npm tun config
```

`Activities`
##### Level 1: Use tests to check the functionality of the debounce function.
For testing all functions to create CLI type the follow code
```sh
npm run test
```
##### Level 2: Create a CLI to test the functionality of the debounce function.
To execute the CLI type the follow command line:
```sh
npm run cli <command> <number>
```
The options to use to run the CLI are listed below:
|Commands|Alias|Descriptions|
|---|---|---|
|debounce <n>|de <n>|Run the debounce function|
|nodebounce <n>|nde <n>|Run the noDebounce function|
|--version|-V|Show the CLI version|
|--help|-h|Show options and commands|


##### Level 3: Create a front-end to test the functionality of the debounce function.
To run the frontend with ToDoList interface, please follow these steps:
1. Create a server and run the frontend
```sh
npm run start
```
2. Type the follow localhost in the browser to watch and use the app:
```sh
localhost:8080
```

Note: Sometimes the localhost port changes. When this happens, please check where the project is running in the information that appear in the terminal after completing the step 2.

To stop the server press "ctrl + c", type "s" and press "enter"