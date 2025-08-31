function addTwoNumber(num1,num2) {
    // let result = num1+num2
    // return result
    return num1+num2 // after the return keyword we cannot execute even a single line of code
}
const result = addTwoNumber(5,7)
// console.log("result:",result);

// function userLoggedIn (username) {
//     return ` ${username} just logged in`
// }
// const userResult = userLoggedIn("nayeem")
// console.log(userResult)
//    ****** INTERVIEW QSTN *******
// in the above case if we didnot pass the arguments it will give u "undefined" asked in interviews 


// function userLoggedInMessage (username) {
//     if(username === undefined){
//         console.log('please enter username');
//         return
//     }
//     return ` ${username} just logged in`
//  }
//  console.log(userLoggedInMessage())
    
function userLoggedInMessage (username) {
    if(username === undefined){     // === if (!username) like this also we can write this line
        console.log('please enter username');
        return
    }
    return ` ${username} just logged in`
 }
//  console.log(userLoggedInMessage())

 function calCartPrice (...number1){   // three dot are called spread operator or rest operator
 return number1
 }
// console.log(calCartPrice(200,300,500)); // this will give u the array of arguments the we pass
// output of above line [ 200, 300, 500 ]

 function calCartPrice2 ( val1, val2,...number1){   
 return number1
 }
// console.log(calCartPrice2(200,300,500,2000))
// here first two values are taken by the val1 and val2 and remaining two values will form array

const user = {
    nameOfUser : "Nayeem",
    price: 199
}

function handleObject (getobject){
console.log(`Username is ${getobject.nameOfUser} and price is ${getobject.price} `)
} 
// handleObject(user)
// way of using an object into a function we can also directly add objects in the parameter shown below
handleObject({
    nameOfUser: "azeem",
    price : 399
}) 

const array =[200,300,400]
function handleArray (getarray){
    console.log(getarray[1])
}
// handleArray(array) // way of using array in function also we can directly pass as arguments like object
handleArray([200,300,500])
