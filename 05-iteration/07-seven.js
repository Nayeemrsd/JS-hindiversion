const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const myNewNum = myNumber.map((num) => (num + 100))
// console.log(myNewNum);
// ************************** done by nayeem on his own *************
// same operation can be done by using for each as shown below
let myNew = []
 myNumber.forEach( (num) => {
 myNew.push(num + 10)
})

 const myOld = myNew.filter((num) => (num >= 15))
console.log(myOld);

// ******************************************************

const myNewNum = myNumber
                 .map((num) => num* 10)
                 .map( (num) => {return num +1 } )
                 .filter(  (num) => { return num >= 40})
// console.log(myNewNum);

// here we can use multiple methods on a single array
// the first num = first element of array
// the sec num = the value which we get after first map method
//  the third num = the value which we get after second map method
// like this chain will continue if we want to continue and this is also called as chain of meth