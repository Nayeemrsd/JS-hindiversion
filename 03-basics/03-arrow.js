const user = {
    username : "nayeem",
    price : 299,
    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to the website`);
        // console.log(this)
//  here we cannot access username direcetly because it is already in fun
//  to access the object we should use "this" keyword as shown above
//  this will refer to the current context
//  in node environment the current context will be a empty object {} like this
//  window object is the global object in browser (interview qstn)
    }
}
user.welcomeMessage()
user.username = "azeem"
user.welcomeMessage()
// console.log(this)

// function chai (){
//     let username ="nayeem"
//     console.log(this.username)
// }
// chai ()
// in this function this will not work and it will shown undefined 
// because this key word will work in objects only not in function

// const chai = function (){
//     let username ="nayeem"
//     console.log(this.username)
// }
// chai ()
//  in this one also this will not work and it will shown undefined
const chai = () =>{
    let username ="nayeem"
    console.log(this.username)
}
chai ()
// this is arrow function and it will also shows that undefined

// const addTwo = (num1,num2) => {
//     return num1+ num2
// }

// implecit return arrow function
// const addTwo = (num1,num2) => num1+ num2

// const addTwo = (num1,num2) => (num1+ num2)
// both the ways we can write implecit arr function
//  below shown how we can use object in arrow function

const addTwo = (num1,num2) => ({username: "nayeem"})



console.log(addTwo(5,7));
// implecit means with out return keyword and explecit means with return keyword

const array = [2,4,6,7]
array.forEach(() =>{})
// we can use arrow fun like this for looping we will get to kn it abt in loops topics
  
// +++++++++++++++ difference between arrow fun and regular fun  ++++++++++


// Arrow Function → does not have its own this.
// It uses (lexically binds) the this value from the surrounding scope.

// Regular Function → has its own this, which depends on how it is called.

// Example:


const obj = {
  name: "Nayeem",
  regularFn: function () {
    console.log(this.name); // "Nayeem"
  },
  arrowFn: () => {
    console.log(this.name); // undefined (or global object)
  }
};

obj.regularFn();
obj.arrowFn();
// if they ask in interview u can give this example