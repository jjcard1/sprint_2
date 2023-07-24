# ENTREGAS SPRINT 2
---

## Development
`General Instructions`
1. Clone the repository using git bash
```sh
git clone https://github.com/jjcard1/sprint_2.git
```
2. Install all required dependencies to execute the app, typing them in the terminal
```sh
npm install
```
3. Compile all necesary files to run
```sh
npm run config
```

----


## Entrega 2.1 Debounce Function

### _Goal_
1. Use tests to check the functionality of the debounce function.
2. Create a CLI to test the functionality of the debounce function.
3. Create a front-end to test the functionality of the debounce function.


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
To run the frontend to test the debounce function, please follow these steps:
1. Create a server and run the frontend
```sh
npm run start
```
2. Type the follow localhost in the browser to watch and use the app:
```sh
localhost:8080
```

Note: Sometimes the localhost port changes. When this happens, please check where the project is running in the information that appear in the terminal after completing the step 1.

To stop the server press "ctrl + c", type "s" and press "enter"




## Entrega 2.2 Throttle Function

### _Goal_
1. Implement a throttle function using TypeScript and TDD. Use tests to check the functionality of the throttle function.
2. Create a CLI to test the functionality of the throttle function.
3. Create a frontend to test the functionality of the throttle function.

`Activities`
##### Level 1: Implement a throttle function using TypeScript and TDD. Use tests to check the functionality of the throttle function.
For testing all functions to create CLI type the follow code
```sh
npm run test
```
##### Level 2: Create a CLI to test the functionality of the throttle function.
To execute the CLI type the follow command line:
```sh
npm run clit <command> <number>
```
The options to use to run the CLI are listed below:
|Commands|Alias|Descriptions|
|---|---|---|
|throttle <n>|th <n>|Run the throttle function|
|nothrottle <n>|nth <n>|Run the noThrottle function|
|--version|-V|Show the CLI version|
|--help|-h|Show options and commands|


##### Level 3: Create a frontend to test the functionality of the throttle function.
To run the frontend to test the throttle function, please follow these steps:
1. Create a server and run the frontend
```sh
npm run start
```
2. Type the follow localhost in the browser to watch and use the app:
```sh
localhost:8080
```

Note: Sometimes the localhost port changes. When this happens, please check where the project is running in the information that appear in the terminal after completing the step 1.

To stop the server press "ctrl + c", and then type "s" to finally press "enter"