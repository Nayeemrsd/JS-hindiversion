
// ********* my code ****************

let randomNumber = parseInt(Math.random()*100 + 1)
// console.log(randomNumber);
const submit = document.getElementById('subt')
const userInput = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const para = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(event) {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
    
}


function validateGuess (guess){
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if (guess < 1) {
        alert('please enter a number greater than 0')
    } else if (guess > 100) {
        alert('please enter a number between 1 to 100')
    } else {
    prevGuess.push(guess)
    if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over , random rumber was ${randomNumber}`) 
        endGame() 
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
        
    }
}

function checkGuess (guess){
if (guess === randomNumber) {
    displayMessage(`you guessed it right`)
    endGame()
} else if (guess < randomNumber) {
    displayMessage(`your number is tooo low`)
} else if (guess > randomNumber) {
    displayMessage(`your number is tooo high`)
 }  
}

function displayGuess (guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remaining.innerHTML = `${ 11 - numGuess}`
}

function displayMessage (message) {
    lowHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame () {
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    para.classList.add('button')
    para.innerHTML = `<h2 id = newGame>  Start new game </h2>`
    startOver.appendChild(para)
    playGame = false
    newGame()
}

function newGame (){
    const myNewGame = document.querySelector('#newGame')
    myNewGame.addEventListener('click', function(event){
     randomNumber = parseInt(Math.random()*100 + 1)
     prevGuess = []
     numGuess = 1
     guessSlot.innerHTML = ''
     remaining.innerHTML = `${11 - numGuess} `
     userInput.removeAttribute('disabled')
     startOver.removeChild(para)


     playGame = true
    })
}
