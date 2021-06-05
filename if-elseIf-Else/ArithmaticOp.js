/**
 * this program will get the values according to the arithmatic operation and the get the min and max.
 */
const prompt = require("prompt-sync")();
let a=parseInt(prompt("Enter your first number: "));
let b=parseInt(prompt("Enter your second number: "));
let c=parseInt(prompt("Enter your third number: "));
let operation1=a+b*c;
let operation2=a%b+c;
let operation3=c+a/b;
let operation4=a*b+c;
console.log("a+b*c: ",operation1);
console.log("a%b+c: ",operation2);
console.log("c+a/b: ",operation3);
console.log("a*b+c: ",operation4);
/**
 * find the max value.
 */
if (operation1>operation2 && operation1>operation3 && operation1>operation4){
    max=operation1;
}
else if(operation2>operation1 && operation2>operation3 && operation2>operation4){
    max=operation2;
}
else if(operation3>operation1 && operation3>operation2 && operation3>operation4){
    max=operation3;
}
else{
    max=operation4;
}
/**
 * Find the min value
 */
if (operation1<operation2 && operation1<operation3 && operation1<operation4){
    min=operation1;
}
else if(operation2<operation1 && operation2<operation3 && operation2<operation4){
    min=operation2;
}
else if(operation3<operation1 && operation3<operation2 && operation3<operation4){
    min=operation3;
}
else{
    min=operation4;
}
console.log("Max: ",max);
console.log("Min: ",min);