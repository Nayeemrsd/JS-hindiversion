const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
// if we declare this outside the event then whenever the page load we get the empty value also 
// thats y we are declaring inside the event
form.addEventListener('submit', function(event){
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    
    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `please enter a valid height ${height}`
    } else
    if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `please enter a valid weight ${weight}`
    } else {

        let bmi = (weight/((height*height)/ 10000)).toFixed(2)
        // result.innerHTML += `<span>your bmi is ${bmi} = </span>`
        
        if (bmi < 18.6) {
            result.innerHTML = `<span>Your BMI = ${bmi} , </span> you are under weight please have a healthy diet`
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `<span>Your BMI = ${bmi} , </span> you are in normal range good for you`
        } {
            result.innerHTML = `<span>Your BMI = ${bmi} , </span> you are overweight please go to gym`
        }

        // let bmi = (weight/((height*height)/ 10000)).toFixed(2)
        // // result.innerHTML = `<span>${bmi}</span>`
        
        // if (bmi < 18.6) {
        //     result.innerHTML = `<span>${bmi}</span> you are under weight please have a healthy diet`
        // } else if (bmi >= 18.6 && bmi < 24.9) {
        //     result.innerHTML = `<span>${bmi}</span> you are in normal range good for you`
        // } {
        //     result.innerHTML = `<span>${bmi}</span> you are overweight please go to gym`
        // }
    }
     
})