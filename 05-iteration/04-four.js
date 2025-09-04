 const myObj = {
    game1 : 'cricket',
    game2 : 'football',
    game3 : 'vollyball'
 }

 for (const key in myObj) {
    // console.log(key);
    // we can access key like this
    // console.log(myObj[key]);
    // we can access value like this 
    // console.log(`${key} is ${myObj[key]}`);
    // we can access key value pair like this as shown above 
 }

 const Array1 =['cricket','football','vallyball']
 for (const key in Array1) {
    // console.log(key);
    // we can access index of an array like this
    // console.log(Array1[key]);
    // we can access the elements of array like this 
    
 }

 const map = new Map()
map.set("IN", "india")
map.set("USA", "america")
map.set("UK", "london")
map.set("UAE", "dubai") 

for (const key in map) {
    // console.log(key);
    // on this map for in loop is not possible
}