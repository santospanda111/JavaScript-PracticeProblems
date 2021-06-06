/**
 * It will print the harmonic numbers till n.
 */
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n to print the nth harmonic number: "));
let harSum = 0;
for (i = 1; i <= n; i++) {
    harSum += (1 / i);
}
console.log("The harmonic sum of nth number is " + harSum);