const score = 400
//console.log(score);

const balance = new Number (100)
//console.log(balance);

// console.log(balance.toString().length);
// this method is used to convert a num into string then we can access all string properties
// console.log(balance.toFixed(2));
// this method is used to convert a num into decimal places if we use 2 means 2 decimal places

const anotherNumber = 123.9855
// console.log(anotherNumber.toPrecision(3));
// this method is used to round of the number based on the value that we passed in method parameter
// and this value is lies in between 1 to 21

const hundred = 100000
// console.log(hundred.toLocaleString("en-IN"));
// this method is used to convert the num into commas in international system
// if we want to convert it into a indian system then use en-IN 

// ***************Math************

// console.log(Math);
// console.log(Math.abs(-4));
// this method will give u the absolute value i,e non negative num 4
// console.log(Math.round(4.6));
// this method will give u the rounding off of a num
// console.log(Math.ceil(4.2));
// this method will give u the upper value anything more will give u next value i,e 5
// console.log(Math.floor(4.9));
// this method will give u the lower value anything more will give u same value i,e 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
// min and max method will give u the min value or max value of an array 

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1)) + min);

// the above random method will give us the random value between 0 and 1 
// to avoid the 0.00 value we multiply it by 10 
// if we add 1 in that method so will always get value more than 1 
// the above example is mostly used in dice game when we want a random value betn 1 and 6 

// ***** practice ******

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min1 = 10
// const max1 = 20
// console.log(Math.floor(Math.random()*(max1 - min1)) + min1);









