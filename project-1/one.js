const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (button) {
    document.addEventListener("click", function (event) {
// console.log(event);
// console.log(event.target.id); just to known what is there inside the event and event.target
if (event.target.id === "grey") {
    // body.style.backgroundColor = "grey" another way below
    body.style.backgroundColor = event.target.id // not hard coded
}
if (event.target.id === "white") {
    // body.style.backgroundColor = "grey" another way below
    body.style.backgroundColor = event.target.id // not hard coded
}
if (event.target.id === "blue") {
    // body.style.backgroundColor = "grey" another way below
    body.style.backgroundColor = event.target.id // not hard coded
}
if (event.target.id === "yellow") {
    // body.style.backgroundColor = "grey" another way below
    body.style.backgroundColor = event.target.id // not hard coded
}


    })

})


