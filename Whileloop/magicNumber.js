/**
 * Magic Number Program.
 * Check the guessed number.
 */
const prompt = require("prompt-sync")();
console.log("Think of a number between 1 to 100");
let guess = 0;
let a = 0;
let n = 100;
while (guess < 1 || guess1 < 1) {
    let guess = parseInt(prompt("Enter 1 if your number is " + n + " else enter 0: "));
    if (guess == 0) {
        let b = n;
        n = (a + n) / 2;
        let guess1 = parseInt(prompt("Enter 1 if your number is greater than " + n +  " else enter 0: "));
        if (guess1 == 1) {
            a=n;
            n=b;
        }
    }
}
console.log("Your number is " + n);