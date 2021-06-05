/**
 * to get the word from 1,10,100,1000,10000 enter the number and get the output as well USING switch-case.
 */
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number from 1,10,100,1000,10000 to get the alphabatical form :  "));
switch (number) {
    case 1:
        console.log("UNIT");
        break;
    case 10:
        console.log("TEN");
        break;
    case 100:
        console.log("HUNDRED");
        break;
    case 1000:
        console.log("THOUSAND");
        break;
    case 10000:
        console.log("TEN THOUSAND");
        break;
    default:
        console.log("Invalid Input");
        break;
}