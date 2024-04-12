#! /usr/bin/env node

import inquirer from "inquirer";

let guessmore=true;
while (guessmore) {
    
const num= Math.floor(Math.random() *10+4);
const guess=await inquirer.prompt([
    {
        name:"usernum",
        type:"number",
        message:"hi! guess your any desire number between 0 to 10  : ",
    },
]);

if (guess.usernum==num) {
    console.log("congratulatins! you guessed right ");
}

else{
    console.log("you guessed wrong number");
}

const more_g= await inquirer.prompt([
    {
        name:"more",
        type:"confirm",
        message:"do you want to guess more numbers? ",
        default:false
    },
]);

if (!more_g.more) {
    guessmore=false;
    console.log("thank you! for your interest");
}
}