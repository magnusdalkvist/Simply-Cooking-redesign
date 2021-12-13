window.addEventListener("scroll", navColor)
window.addEventListener("load", navColor)

function navColor() {
    if (window.scrollY > 0) {
        document.querySelector(".web").classList.remove("nocolor");
    } else {
        document.querySelector(".web").classList.add("nocolor");
    }
}