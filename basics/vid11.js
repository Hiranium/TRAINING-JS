 // Numbers and math operations in JavaScript

const score = 400 
// console.log(score);

const balance = new Number(100) 
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// Math operations
// console.log(Math.PI);
// console.log(Math.E);

const otherNumber = 2

// console.log(otherNumber.toPrecision(3));

const hundreds = 10

// console.log(hundreds.toLocaleString('en-US'));

Number.MIN_VALUE;
// console.log(Number.MIN_VALUE);

//***********************MATHS*****************************/ */


// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.round(-6.89));
// console.log(Math.ceil(4.2)); // rounds up to max value 4.2 becomes 5
// console.log(Math.floor(4.7)); // rounds down to min value 4.7 becomes 4
// console.log(Math.sqrt(64));
// console.log(Math.pow(2, 4)); // 2^4 = 16
// console.log(Math.min(2, 33, 4, 1, 55, -23));
// // console.log(Math.max(2, 33, 4, 1, 55, -23));


console.log(Math.random()); // generates random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // generates random number between 1 and 10

const min = 10
const max = 20

// const random = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(random);

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

