const myValue = [1,2,3]
 const myNewValue = myValue.reduce((acc , num) => {
    console.log(`acc value : ${acc} current value : ${num}`);
    
    return acc + num
},0)
console.log(myNewValue);
// this is the way we can calculate the total value of an array by using reduce
// in this we have one accumulator value and another is current value
// remember that intial value should b given as 0 at the end of parenthesis
// this is mostly used in calculating the cart value in shopping app


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

 const cartTotal = shoppingCart.reduce((acc, item ) => {
    return acc + item.price
},0)
console.log(cartTotal);

// this is the example how we calculate the value of an shopping cart