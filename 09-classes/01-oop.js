const user = {
    username: "nayeem",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
// the above one is only the object literal



console.log(user.username)
console.log(user.getUserDetails());
console.log(this);


function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// yahan pr return likho ya na likho ye return hota he hai 

const userOne = new user("nayeem", 12, true)
const userTwo = new user("learningJS", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

// ********** practice *********

// function objOne (username , isLoggedIn , loginCount){
//     this.username = username
//     this.isLoggedIn = isLoggedIn
//     this.loginCount = loginCount
// }

//  const myObj = new objOne('nayeem', true, 3)
// const myObj1 = new objOne('azeem', false, 5)
// console.log(objOne);
// this "new" keyword is only the constructor function
// and to insert in the object every time for new instance we use "new" keyword 
// without using the new keyword it will overwrite the values of next arguments 
