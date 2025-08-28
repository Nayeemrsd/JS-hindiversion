const arr = [0,1,2,3,true,"nayeem"]
const heros = ["thor","hulk","ironman"]
// another way to create an array
const arr2 = new Array(1,2,3,4,5)
// console.log(arr[4])

// array methods

heros.push('captain america')
heros.pop()
heros.unshift('spiderman')
heros.shift()
// push will add an element to last 
// pop will remove the last element
// unshift will add an element to the first
// shift will remove the first element of an array
// console.log(heros);

// console.log(heros.includes('strange'));
// to check whether the element is present in the array or not 
// shallow copy of an object is one which share the same reference point 
// same like heap memory if we change anything in a copy object the same will b changed in the orignal
// deep copy of an object is one which dont share the same reference point
// same like stack memory
// console.log(arr.indexOf(3));
// index of will give u the index num of that element 

const newArr = arr.join()
// join will convert the type of an array into a string
// console.log(typeof newArr);

// slice and splice
// slice will not include the last value and the orignal array will b same
// splice will include the last value and the orignal array is changed
// that means splice will remove the elements from the orignal array 

console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);