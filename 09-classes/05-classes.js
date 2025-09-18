class user {
    constructor (username, email,password) {
    this.username = username
    this.email = email
    this.password = password
    }
encryptPassword (){
    return `${this.email}abc`
}
changeUsername (){
    return `${this.username.toUpperCase()}`
}

}

const maryam = new user("nayeem", "nayeem@google", '12345')
console.log(maryam.encryptPassword());
console.log(maryam.changeUsername());

// **** behind the scene *****

function getUser (username, email, password){
this.username = username
this.email = email
this.password = password
}

getUser.prototype.passwordEncrpt = function(){
     return `${this.email}abc`
}
getUser.prototype.usernameChange = function(){
    return `${this.username.toUpperCase()}`
}
const mirza = new getUser('azeem', 'azeemrsd@gmail','124554')
console.log(mirza.passwordEncrpt());
console.log(mirza.usernameChange());

