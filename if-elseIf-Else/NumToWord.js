/**
 * This program will print the single digit numbers in words.
 */
const prompt = require("prompt-sync")();
const num = prompt("Enter a single digit number from 0 to 9 to get is alphbetical form:  ");
if (num == 0)
    console.log("ZERO");
else if (num == 1)
    console.log("ONE");
else if (num == 2)
    console.log("TWO");
else if (num == 3)
    console.log("THREE");
else if (num == 4)
    console.log("FOUR");
else if (num == 5)
    console.log("FIVE");
else if (num == 6)
    console.log("SIX");
else if (num == 7)
    console.log("SEVEN");
else if (num == 8)
    console.log("EIGHT");
else if (num == 9)
    console.log("NINE");
else
    console.log("Invalid Input");