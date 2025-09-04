// const program = ['js','java','python','cpp','ruby']
// const myProgram = program.forEach((item) => {
// console.log(item);

// })
// console.log(myProgram);
// note: for each loop doesnot return anything thats y we cannot hold in a variable

const myArray = [1,2,3,4,5,6,7,8,9,10]
//  const myNewArray = myArray.filter((num) => {
//     return num > 4
// })
// console.log(myNewArray);

//when we use {} then we should write return keyword in arrow fun
// else if we are writing in a single line then no need to write 
const newNums = []
myArray.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
        
    }
})
console.log(newNums);
// here we can do the same thing as we did above with the help of (for each loop) shown above


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((bk) => bk.genre === 'History' )


//   userBooks = books.filter((bk) => {
//    return bk.publish >= 2000
//   })
//   console.log(userBooks);
userBooks = books.filter((bk)=> {
    return bk.publish >= 1990 && bk.genre === 'History'
})
  console.log(userBooks);
  
