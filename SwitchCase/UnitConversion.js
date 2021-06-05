/**
 * Unit conversion using switch case.
 */
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter serial numeric value 1)feet to inch,2)Feet to meter,3)Inch to feet,4)meter to feet: "));
let value = parseInt(prompt("Enter the value to be converted: "));
switch (number) {
    case 1:
        console.log(value * 12);
        break;
    case 2:
        console.log(value * 0.3048);
        break;
    case 3:
        console.log(value / 12);
        break;
    case 4:
        console.log(value * 3.28084);
        break;
    default:
        console.log("Invalid Input");
        break;
}