const number = document.getElementById("number")
let newNumber = parseInt(number.textContent)
console.log(typeof(newNumber))

function reset(){
    newNumber = 0
    displayNumber()
}

function increase(){
    newNumber += 1
    displayNumber()
}

function decrease(){
    newNumber -= 1
    displayNumber()
}

function displayNumber(){
    number.textContent = newNumber
}

