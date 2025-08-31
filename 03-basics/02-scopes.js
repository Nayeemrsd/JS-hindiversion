function one(){
    const username = "nayeem"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
}
// one()


if (true) {
    const username = "nayeem"
    if (username === "nayeem") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}
// here we can get the result of this fun even if it declare before fun


addTwo(5)
const addTwo = function(num){
    return num + 2
}
// here we cannot get the result because we hold the fun in a variable 
// so the function call should b after function declaration