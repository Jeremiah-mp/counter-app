//Counter Variables
const number = document.getElementById("number")
const styleSheet = document.getElementById("myStyleSheet")
const settingButtonImage = document.getElementById("app-settings")
const resetButtonImage = document.getElementById("reset")
const changeThemeImage = document.getElementById("theme")
const increaseButtonImage = document.getElementById("increase")
const decreaseButtonImage = document.getElementById("decrease")
const cancelButtonImage = document.getElementById("exit")
const limitSwitch = document.getElementById("on-off")
const limitState = document.getElementById("button-state")
const setCount = document.getElementById("set-count")
const maxNumber = document.getElementById("set-max-number")
let newNumber = parseInt(number.textContent)
let currentValue;

//Counter Actions
function resetNumber(){
    document.getElementById("main-content").style.display = "none"
    document.getElementById("reset-counter-div").style.display = "flex"
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

function yesReset(){
    newNumber = 0
    displayNumber()
    document.getElementById("main-content").style.display = "block"
    document.getElementById("reset-counter-div").style.display = "none"
}

function cancelReset(){
    document.getElementById("main-content").style.display = "block"
    document.getElementById("reset-counter-div").style.display = "none"
}

function exitSettings(){
    document.getElementById("main-content").style.display = "block"
    document.getElementById("counter-settings").style.display = "none"
    currentValue = parseInt(setCount.value)
    newNumber = 0
    newNumber = newNumber + currentValue
    number.textContent = newNumber
    console.log(newNumber)
    console.log(currentValue)
}

function viewSetting(){
    document.getElementById("main-content").style.display = "none"
    document.getElementById("counter-settings").style.display = "flex"
}

function changeTheme(){
    if (styleSheet.getAttribute("href") === "./css/style.css") {
        styleSheet.setAttribute("href", "./css/light.css")
    } else {
        styleSheet.setAttribute("href", "./css/style.css")
    }
    toggleImageSrc()
}

function toggleImageSrc(){
    if (settingButtonImage.getAttribute("src") === "./images/setting.png") {
        // If it's the first image, change the src attribute to the second image
        settingButtonImage.setAttribute("src", "./images/setting (1).png");
    } else {
        // If it's the second image, change the src attribute to the first image
        settingButtonImage.setAttribute("src", "./images/setting.png");
    }

    if (resetButtonImage.getAttribute("src") === "./images/rotate-left-circular-arrow-interface-symbol (1).png") {
        // If it's the first image, change the src attribute to the second image
        resetButtonImage.setAttribute("src", "./images/rotate-left-circular-arrow-interface-symbol (2).png");
    } else {
        // If it's the second image, change the src attribute to the first image
        resetButtonImage.setAttribute("src", "./images/rotate-left-circular-arrow-interface-symbol (1).png");
    }

    if (increaseButtonImage.getAttribute("src") === "./images/add (4).png") {
        // If it's the first image, change the src attribute to the second image
        increaseButtonImage.setAttribute("src", "./images/add (5).png");
    } else {
        // If it's the second image, change the src attribute to the first image
        increaseButtonImage.setAttribute("src", "./images/add (4).png");
    }

    if (decreaseButtonImage.getAttribute("src") === "./images/minus (5).png") {
        // If it's the first image, change the src attribute to the second image
        decreaseButtonImage.setAttribute("src", "./images/minus (6).png");
    } else {
        // If it's the second image, change the src attribute to the first image
        decreaseButtonImage.setAttribute("src", "./images/minus (5).png");
    }

    if (cancelButtonImage.getAttribute("src") === "./images/reject.png") {
        // If it's the first image, change the src attribute to the second image
        cancelButtonImage.setAttribute("src", "./images/close.png");
    } else {
        // If it's the second image, change the src attribute to the first image
        cancelButtonImage.setAttribute("src", "./images/reject.png");
    }

    if (changeThemeImage.getAttribute("src") === "./images/paint-roller (3).png") {
        // If it's the first image, change the src attribute to the second image
        changeThemeImage.setAttribute("src", "./images/paint-roller (4).png");
    } else {
        // If it's the second image, change the src attribute to the first image
        changeThemeImage.setAttribute("src", "./images/paint-roller (3).png");
    }
}
