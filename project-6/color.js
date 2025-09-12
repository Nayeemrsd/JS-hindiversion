const randomColor = function (){
    const hex = '123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6 ; i++) {
     color += hex[Math.floor(Math.random()*16)];
        
    }
    return color
}
let intervalId
function startColorChange (){
    if (!intervalId) {
        intervalId =  setInterval(changeBgColor, 1000)
    }
    
function changeBgColor (){
    document.body.style.backgroundColor = randomColor()
}
}
function stopColorChange (){
    clearInterval(intervalId)
    intervalId = null
}

document.getElementById('start').addEventListener('click', startColorChange)
document.getElementById('stop').addEventListener('click', stopColorChange)