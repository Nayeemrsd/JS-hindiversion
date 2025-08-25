//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["hulk", "thor", "ironman"];
let myObj = {
    name: "nayeem",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3 

// ************************************

// stack memory for primitive datatypes and heap memory for non primitive (reference datatypes)
let firstClass = "nayeemmirzagoogledotcom"

let secondClass = firstClass
secondClass = "mirzanayeemgmaildotcom"

console.log(firstClass);
console.log(secondClass)

// the above example is for stack memory which is for primitive datatypes
// in this any changes in variable will give us a copy of that code so it is called as call by value
// and we can clearly see the two diffent output in above example
let userOne = {
    email: "user@google.com",
    id:"nayeem@ybl"
}

let userTwo = userOne
userTwo.email = "user1@gmail.com"


console.log(userOne.email)
console.log(userTwo.email)

// the above example is for heap memory which is for non-primitive datatypes
// in this any changes in object will give us a reference of that code
// so it is called as call by reference 
// and we can clearly see the same output in  both example above

