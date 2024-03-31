#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const systemGeneratedNumber = Math.floor(Math.random() * 10) + 1; // Adjusted to generate numbers from 1 to 10
let attempts = 3; // Number of attempts allowed
let guessedCorrectly = false;

console.log(chalk.blue("Welcome to the Number Guessing Game!"));

async function guessNumber() {
    while (attempts > 0 && !guessedCorrectly) {
        const answers = await inquirer.prompt([
            {
                type: "number",
                name: "userGUESS",
                message: "Guess a number between 1 and 10: "
            }
        ]);
        const { userGUESS } = answers;
        
        if (userGUESS === systemGeneratedNumber) {
            guessedCorrectly = true;
            console.log(chalk.green("Congratulations! You got it right!"));
        } else {
            console.log(chalk.red("Sorry, that's incorrect."));
            attempts--;
            if (attempts > 0) {
                console.log(chalk.yellow(`You have ${attempts} attempt(s) left.`));
            }
        }
    }

    if (!guessedCorrectly) {
        console.log(chalk.red(`Sorry, you've used all your attempts. The correct answer was ${systemGeneratedNumber}.`));
    }
}

guessNumber();
