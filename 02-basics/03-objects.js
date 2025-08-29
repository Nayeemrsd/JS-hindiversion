// singleton with constructor => it is the only type of object
// the object which create with object literals is not singleton
// the object which create with constructor is singleton
// Object.create (way of creating singleton)

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Nayeem", // the key(name) here is a string type 
    "full name": "Mirza Nayeem", // so we can write key like this also
    [mySym]:"mykey1",// this is the type symbol so we represent key in [] brackets
    age : 24,
    location: "Nizamabad",
    email: "nayeemmirza@gmail.com",
    isLoggedIn : true,
    loggedInDays: ['monday', 'friday']
}
console.log(jsUser.email) // this is the dot notation to manipulate with objects
console.log(jsUser['email']) // another way to manipulate with objects mostly used
console.log(jsUser['full name']) 
console.log(jsUser[mySym]) // way to represent the symbol 

jsUser.email = "nayeem@chatgpt.com" // like this we can change anything in object
// Object.freeze(JsUser) this method will lock/freeze the object now we cannot change anything
jsUser.id = 1234 //insert a value in object like this
jsUser.greeting = function(){
    console.log('hello js user')
}

jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name} wellcome`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2())
console.log(jsUser);

