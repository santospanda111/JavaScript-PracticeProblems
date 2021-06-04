/**
 * Convert meter to Acre.
 */
let width=40;
let length=60;
let l_in_meter=length*3.281;
let w_in_meter=width*3.281;
let areaInAcre=(l_in_meter*w_in_meter)/4046.86;
console.log("Area of 25 such plots in acres: ",areaInAcre*25,"Acres");
