// for each loop 
const program = ['js','java','python','cpp','ruby']

// program.forEach(function(item){
// console.log(item);
// })
// this is the way we can use for each fun
// in this call back fun parameters known as val, item, index, what ever name u want
// not only the item we  can access key, and whole array example given below

// program.forEach((item,key,arr)=>{
//     console.log(item,key,arr);
    
// })


// program.forEach((val)=>{
//     console.log(val);
// })

// function code (item) {
//     console.log(item);

// }
// program.forEach(code)
// like this also we can use the fun in place of call back fun

const myCoding = [
    {
        codingLanguage : 'javascript',
        codingFile : 'js'
    },
    {
        codingLanguage : 'python',
        codingFile : 'pyt'
    },
    {
        codingLanguage : 'java',
        codingFile : 'java'
    }
]
myCoding.forEach((item)=>{
    console.log(item.codingLanguage);
    
})
