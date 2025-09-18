// function setUserName (username){
//     this.username = username
// }

// function userName (username, email, password) {
// setUserName(username)

// this.email = email
// this.password = password
// }

// const aayat = new userName('azeem', 'azeem@google', '12345')
// console.log(aayat);

// agr hum yahan pr aisa code karenge to sirf email aur password he milega
// username is liye nhi milega q k username ko "this" context pata he nhi hai 
// q k username setUserName function mein likha hua hai 
// is liye hum yaha call use karenge


function setUserName (username){
    this.username = username
    console.log('called');
    
}

function userName (username, email, password) {
setUserName.call(this, username)

this.email = email
this.password = password
}

const aayat = new userName('azeem', 'azeem@google', '12345')
console.log(aayat);

// is tarah hum call use kar sakte hai