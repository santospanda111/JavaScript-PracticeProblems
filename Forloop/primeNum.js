/**
 * this is prime number program.
 * it will check and print to the console that the number is prime or not.
 */
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number to check if it is prime or not:  "));
let check = 0;
for (i = 2; i < num; i++) {
    remain = num % i;
    if (remain == 0) {
        check = 1;
    }
}
if (check == 0) 
    console.log("The number " + num + " is a prime number");
else
console.log("The number " + num + " is not a prime number");