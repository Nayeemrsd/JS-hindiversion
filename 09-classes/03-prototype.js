// let myName = 'Nayeem'
// let name = 'Mirza    '
// console.log(name.trueLength());
// goal yahi hai k iske ander jo spaces hai ye spaces ye method k through chale jana 
// yahi nhi balke jahan pr b jitne b string k ander spaces hoonge wo b chale jana
// goal ka answer sab se last mein likha hua hai


 let myHeros = ['thor','spiderman']

 let powerHeros = {
    thor: 'hammer',
    spider: 'web',

    getAllPower : function(){
        console.log(`spiderman power is ${this.spider}`);
        
    }
 }

 Object.prototype.nayeem = function(){
console.log('nayeem is present in every object');

 }
 Array.prototype.azeem = function(){
    console.log('hello mirza azeem is here');
    
 }
myHeros.nayeem()
myHeros.azeem()
powerHeros.nayeem()
powerHeros.azeem()

// **** inheritance ****

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
   //  yahan pr jo proto hai old syntax hai 
   // proto type karke kisi aur object k properties ko use kar sakte hai
}

Teacher.__proto__ = User

// modern syntax
// ye wala modern syntax hai jis seedha object k ooper likh kar do argument k jaisa deke access kar sakte
Object.setPrototypeOf(TeachingSupport, Teacher)

// ********** goal ka answer *************

let anotherUsername = "ChaiAurCode     "
let myName = 'Nayeem'
let name = 'Mirza    '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"nayeem".trueLength()
"iceTea".trueLength()
myName.trueLength()


