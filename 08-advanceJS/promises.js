// there are two things in promise 
// 1. create a promise ... 2. consume a promise 
//  creation of a promise 
const promiseOne = new Promise(function(resolve, reject){
     //Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('async task complete');
        resolve()

    },1000)
})

// consume of promise
promiseOne.then(function(){
    console.log('promise consume');
    
})
// a promise cannot be consume without execution of resolve method 
// this method should b executed in promise creation

// ********** another way of creation and consume a promise *********
// in this way we are not storing a promise into a variable
// so we can directly use .then and execute it 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
        
    },1000)
}).then(function(){
    console.log('promise 2 consume');
    
})

// in third promise we can pass the parameters in resolve method and then we can access it in then 
// this is shown below

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : 'Mirza', email:'Nayeemmirza@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
console.log(user);

})

// 4. in this case we can use multiple then and catch see this use case

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if (!error) {
             resolve({username:'nayeem',password:1234})
        } else{
            reject('ERROR , SOMETHING WENT WRONG')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    // yaha pr jo value return karri wohi value doosre (then) me as parameter user hoongi
}).then((username)=> {
    console.log(username);
}).catch((error)=>{
    console.log(error); 
}).finally(()=> {
    console.log('The promise is either RESOLVED or REJECT');
    // this (finally method ) is use as default 
})

// 5. "async await method" approach
// async await cannot handle the 'error' directly 
// but it will handle with "catch block"

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(params) {
    try {
     const response =  await promiseFive
    console.log(response);
    
    } catch (error) {
        console.log(error);  
    }  
}
consumePromiseFive()

// this will b done by fetch method

// async function getAllUser(params) {
//     try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//      const data = await response.json() 
//      console.log(data);
     
//     } catch (error) {
//         console.log("E:", error);
        
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => {
   return response.json()
}).then((data) => {
    console.log(data);
    
}).catch((error) => {
    console.log(error);
    
})