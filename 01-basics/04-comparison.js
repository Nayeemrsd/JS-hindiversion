// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that an equality check === and comaparison <> >= <= work diffently
// comparison convert null to a num,treating as 0 that's why null >= is true in case 3..

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === is a strict check it will check the data types also

console.log("2" === 2);