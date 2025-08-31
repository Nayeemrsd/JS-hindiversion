// Immediately Invoked Function Expressions (IIFE)
// To avoid the pollution of global scope we use iife


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('nayeem')

(function chai (){
// THIS IS AN EXAMPLE OF NAMED IIFE
    console.log(`DB CONNECTED`);
    
})() ; // here this semicolon should use to end the iif to run the next fun

((name) => {
    console.log(`DB CONNECTED : ${name}` );
    
})('NAYEEM')
