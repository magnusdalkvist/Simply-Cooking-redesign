window.addEventListener("scroll", navColor)

function navColor() {
    if (window.scrollY > 0) {
        document.querySelector("#mobile").classList.remove("nocolor");
        document.querySelector("#web").classList.remove("nocolor");
    } else {
        document.querySelector("#mobile").classList.add("nocolor");
        document.querySelector("#web").classList.add("nocolor");
    }
}