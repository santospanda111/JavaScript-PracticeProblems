/**
 * This will print factorial of a given number.
 */
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number to compute its factorial:  "));
let factorial = 1;
for (i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("The factorial of number " + num + " is " + factorial);