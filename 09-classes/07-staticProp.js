class user {
    constructor(username){
        this.username = username
    }
     logMe () {
        console.log(`logged in by the ${this.username}`);
        
    }
    static createId (){
        return `1234abc`
    }
}

const gawa = new user('nayeem')
// console.log(gawa.createId());
// yahan pr createId jo hai wo print nhi hoongi console mein q k wo fun nhi batayega
// q k sometimes hum kisi code ko execute hone se rokna b chahte hai 
// us liye hum yahan "static" keyword use kar rahe hai take wo ruk jaye

class teacher extends user {
    constructor(username , email){
        super(username)
        this.email = email
    }

}
const blackTea = new teacher('nayeem', 'nayeem@gmail')
console.log(blackTea.createId());
