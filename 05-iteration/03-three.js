// for of loop


// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "hello mirza nayeem welcome"
// for (const greet of greetings) {
//     console.log(`each char of greeting is : ${greet}`);
    
// }

const map = new Map()
map.set("IN", "india")
map.set("USA", "america")
map.set("UK", "london")
map.set("UAE", "dubai")
// console.log(map);
// this "map" will only take unique values it cannot take duplicat values
for (const [key,value] of map) {
    console.log(key, `:-` ,value);
     
}

// const myGame = {
//     game1 : 'cricket',
//     game2 : 'football'
// }

// for (const [key,value] of myGame) {
//     // console.log(key, `:-`,value);
//     // For of loop is not possible on objects for that we use "for in loop"
// }
