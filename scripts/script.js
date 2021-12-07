document.querySelector(".red_button").addEventListener("click", changeRed);
document.querySelector(".blue_button").addEventListener("click", changeBlue);
document.querySelector(".green_button").addEventListener("click", changeGreen);
document.querySelector(".orange_button").addEventListener("click", changeOrange);
document.querySelector(".standard_button").addEventListener("click", changeStandard);

function changeRed() {
    document.querySelector("body").className = "red"
}

function changeBlue() {
    document.querySelector("body").className = "blue"
}

function changeGreen() {
    document.querySelector("body").className = "green"
}

function changeOrange() {
    document.querySelector("body").className = "orange"
}

function changeStandard() {
    document.querySelector("body").className = "standard"
}