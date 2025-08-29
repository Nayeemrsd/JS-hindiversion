//const myobj = new Object() another way to declare object (singleton)
const tinderUser = {}

tinderUser.name = "Nayeem"
tinderUser.id = "1234mnb"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const anotherUser = {
    email : 'mirzanayeem@gmail.com',
    username : {
        fullname:{
            firstName : 'mirza',
            lastName : 'nayeem'
        }
    }
}
// console.log(anotherUser.username.fullname.firstName);
// this is the way we can create objects in object and we can access by dot notation

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'c',4:'s'}

// const obj3 = {obj1,obj2}
// output is { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 's' } } 
// which is not correct so we use another method
// const obj3 = {...obj1,...obj2}
const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
// both the above method is used to combine two or more objects in one object

const users = [
    {
        id : 1,
        email: 'nayeem@google.com'
    },
    {
        id : 1,
        email: 'nayeem@google.com'
    },
    {
        id : 1,
        email: 'nayeem@google.com'
    }
] 
users[1].email // this is the way we use array of objects 

// console.log(Object.keys(tinderUser)); // will give us the array of keys
// console.log(Object.values(tinderUser)); // will give us the array of values
// console.log(Object.entries(tinderUser)); // will give us the array of key value pair as shown below
// [ [ 'name', 'Nayeem' ], [ 'id', '1234mnb' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// to check whether the property of object is occur or not

// ********* destructure of objects **********

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nayeem"
}

// course.courseInstructor

const {courseInstructor : instructor,coursename,price} = course
// console.log(courseInstructor);
console.log(instructor);
console.log(price);
console.log(coursename);
// this is way to destructure the object if u want u can do one key or else all the keys



// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


