// for loop 
// this loop is very very easy u already did the practice 

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    // console.log(element);
    
    
}


for (let index = 1; index <= 10; index++) {
    const element = index;
    if (index == 5) {
        // console.log(`5 is the best number ${index}`);   
    }
    // console.log(element,);
       
}



for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop is ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        const jElement = j;
        // console.log(`outer loop is ${i} and inner loop is ${j}`);
        // console.log(i + `*` + j + `=` +i*j);
        
    }
}

let myArray = ["thor", "hulk",'ironman', 'flash']
for (let index = 0; index < myArray.length; index++) {
// console.log(myArray[index]);
    
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`5 is my fav`);
//         break
//     }
//     console.log(index);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`5 is my fav`);
        continue
    }
    // console.log(index);
    
}
let num = 6
for (let i = 1; i <= 10 ; i++) {
    
    // console.log(num + `*` + i + `=` +num*i);
    
}