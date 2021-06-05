/**
 * to get the word from 1,10,100,1000,10000 enter the number and get the output as well.
 */
const prompt = require("prompt-sync")();
const num = prompt("Enter a number from 1,10,100,1000,10000 to get the alphabatical form :  ");
if (num == 1)
    console.log("UNIT");
else if (num == 10)
    console.log("TEN");
else if (num == 100)
    console.log("HUNDRED");
else if (num == 1000)
    console.log("THOUSAND");
else if (num == 10000)
    console.log("TEN THOUSAND");
else
    console.log("Invalid Input");