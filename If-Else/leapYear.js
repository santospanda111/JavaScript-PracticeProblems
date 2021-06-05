/**
 * this program will check the year is leap year or not.
 */
const prompt = require("prompt-sync")();
const input = prompt("Enter a number to check whether it is a leap year or not: ");
let year = parseInt(input);
let condition1  = year%4;
let condition2 = year%100;
let condition3 = year%400;
if ((condition1 == 0) && ((condition2 != 0) || (condition3 == 0))) {
    console.log("Year " + year + " is a Leap Year");
}
else {
    console.log("Year " + year + " is not a Leap Year");
}