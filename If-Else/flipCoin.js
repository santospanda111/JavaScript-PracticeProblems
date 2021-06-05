/**
 * this program will print head or tail according to the random value.
 */
let flip = Math.floor(Math.random() * 10) % 2;
if (flip == 1) {
    console.log("HEADS");
}
else {
    console.log("TAILS");
}