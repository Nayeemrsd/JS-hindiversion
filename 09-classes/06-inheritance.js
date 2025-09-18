class user {
    constructor(username){
        this.username = username
    }
    logMe () {
        console.log(`logged in by the ${this.username}`);
        
    }

}

class teacher extends user{
    constructor (username, email,password) {
        super(username)
        // jaisa fun mein 'call' use karke doosre fun mein se call lagake access liye the
        // waise he yahan class mein 'super' lagake doosre class se access le sakte as shwn above ex
        this.email = email
        this.password = password
    }
    addCourse (){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const tea = new teacher('Nayeem', 'nayeem@gmail','abcd123')
tea.addCourse()
tea.logMe()
// yahan pr tea k pass dono fun ka access rahega q k teacher class inherit kar rahi hai user ko
const coffee = new user('mirza')
coffee.addCourse()
coffee.logMe()
// yahan coffee k pass addCourse ka access nhi hoga q k parent k pass child ka access nhi hoga
// but child k pass parent ka access hoga jaisa k ooper example mein dekhe
// pr wo user ka instance zaroor hoga jisko 'instanceOf' karke dekh sakte hain
console.log(tea instanceof user);

    
