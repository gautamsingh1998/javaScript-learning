const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// ---------------------------------MATHS----------------------------------
console.log(Math);// this is Object
console.log(Math.abs(-4)); // return the abs absolute value 4

console.log(Math.round(4.56)); // return the round value 5

console.log(Math.ceil(4.2)); // return the vlaue 5

console.log(Math.floor(4.9)); // return the value 4

console.log(Math.min(4,3,5,9,8,5)); // return the min value 3

console.log(Math.max(4,3,5,9,8,5)); // return the max value  9

console.log(Math.random()); // return the random number

console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);