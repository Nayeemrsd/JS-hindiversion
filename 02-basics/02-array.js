const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros);
// push will push one array into another array and form a new array of array
console.log(marvel_heros[3][1]);
// this will let u know about the element of an array of array

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
//  concat method will join both the array in one array only

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
// this will perform same operation as concat will do


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);
// to convert the arrays of array into a single array we flat method 
// we use parameter for no of array we want to convert most of the times use infinity 



 console.log(Array.isArray("Nayeem"))
// to check wheather the it is a array or not
 console.log(Array.from("Nayeem"))
// to convert the string into array we use from method
 console.log(Array.from({name: "nayeem"})) // interesting
// if we want to convert this type then it will give u the empty array mostly asked in interview

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));
// this will use to form an array from variable and others (of method)