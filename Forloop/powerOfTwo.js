/**
 * taken n value from console.
 * then used power method of math module to get the nth power of 2.
 */
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter a number to print the table of 2 till the number:  "));
for (i = 1;i <= n;i++){
    console.log("2 ^ " + i + " = " + Math.pow(2,i));
}