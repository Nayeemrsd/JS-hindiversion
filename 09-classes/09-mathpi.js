// this is about pi value i,e 3.14 we cannot change this value 
// because it has some properties that we can find if we use getOwnPropertyDescriptor shown below

// console.log(Math.PI);
// PI = 5  
// console.log(Math.PI);

// yahan pr pi ki value over write nhi hogi q k some behind the scene property hai jo disabled hai
// jaise k writeable, inumerable, configrable all are false is liye nhi hoti change 
 const descriptor =  Object.getOwnPropertyDescriptor(Math, 'PI')
 console.log(descriptor);

//  object k andar is tarah ki property hoti hai jis se hum kisi b value ko hardcodded karke 
// us mein store kar sakte hai even some times hum kisi object k ooper loop lagane se b rok sakte hai
// yahi jo properties milti hai wo pi disabled kardeta hai is liye pi ki value change nhi ho sakti

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
 

