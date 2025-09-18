function multiply (num){
    return num*5
}

multiply.power = 2
// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);
// actually mein function ka b reference object se hota means jaisa array aur string objects hote
// waise he function b object hota aur usko b '.' (dot notation se access kar sakte) as shown above
// aur yahan prototype ek object create karta jo k console karne pr dikhta

function createUser (username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.icreament = function(){
    this.score++
     console.log(this.score);
     
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
const nayeem = new createUser('mirza', 625)
const azeem =  new createUser('baig', 633)
// yahan pr new keyword likhna must hai else code run nhi hoga ye interview mein poochte
// aur yahi jo new keyword k saath likhre apun wohi ek constructor function hai isi ko bolte

nayeem.printMe()
azeem.icreament()

// ********** notes **********
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


