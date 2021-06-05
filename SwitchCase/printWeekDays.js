/**
 * this program will print the weekdays according to the number between 1-7 using switch case.
 */
const prompt = require("prompt-sync")();
let number =parseInt(prompt("Enter a corresponding number from 1 to 7  to print the week day: "));
switch (number) {
    case 1:
        console.log("SUNDAY");
        break;
    case 2:
        console.log("MONDAY");
        break;
    case 3:
        console.log("TUESDAY");
        break;
    case 4:
        console.log("WEDNESDAY");
        break;
    case 5:
        console.log("THURSDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATURDAY");
        break;            
    default:
        console.log("Invalid Input");
        break;
}