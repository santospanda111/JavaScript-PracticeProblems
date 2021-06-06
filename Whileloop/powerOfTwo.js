/**
 * This will print power of 2 according to the n value but till 256.
 * when power equals to 256 then this while loop will stop.
 */
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number n to compute the nth power of 2:  "));
let power = 0;
let exponent = 0;
while ((power < 256) && (exponent <= num)){
    power = Math.pow(2,exponent);
    exponent++;
}
console.log("Exponent = " + (exponent - 1) + " Power = " + power);