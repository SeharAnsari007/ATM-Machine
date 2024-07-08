#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let myBalance = 50000;
let myPin = 1234;

console.log(chalk.bold.cyanBright("\n\tWelcome to code with Sehar - ATM Machine\n\t"));
let pinAnswer = await inquirer.prompt([
    {
        name : "pin",
        type : "number",
        message : "Enter your Pin",
    }
])
if (pinAnswer.pin === myPin){
    console.log(chalk.bold.yellow("\n\tLogged in successfully\n"))
let operationAnswer = await inquirer.prompt([
    {
        name: "Operation",
        type: "list",
        choices:["Check Balance" , "Withdraw Amount"],
        message: "\n\tSelect an operation\n",
    }
])
if (operationAnswer.Operation === "Withdraw Amount"){
    let amountAnswer = await inquirer.prompt([
        {
            name : "Amount",
            type : "number",
            message : "\n\tEnter the amount to withdraw\n"
        }
    ])
if (amountAnswer.Amount > myBalance){
        console.log(chalk.bold.magentaBright("\n\tInsufficient balance!\n"))
    }
    else{
        myBalance -= amountAnswer.Amount;
        console.log(chalk.bold.magentaBright(`\n\t${amountAnswer.Amount} withdraw successfully!`));
        console.log(chalk.bold.yellow(`\tYour remaining account balance is ${myBalance}\n`));
    }
}
    else if (operationAnswer.Operation === "Check Balance") {
    console.log(chalk.bold.green(`\n\tYour account balance is ${myBalance}\n`));
}
}
else {
    console.log(chalk.bold.blueBright("\n\tPin is incorrect, Try again!\n"));
}