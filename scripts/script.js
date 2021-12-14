document.querySelector(".closeMenu").addEventListener("click", closeMenu);
document.querySelector(".openMenu").addEventListener("click", openMenu);

function openMenu() {
  document.querySelector("#menu").style.height = "100%";
}

function closeMenu() {
  document.querySelector("#menu").style.height = "0%";
}

// funktioner til 'Vælg Uge'-knap under Ugens Menu
// let uger = document.querySelector(".uger");
// uger.classList.add(".hide_uge");
// console.log("gemuger");

document.querySelector("#jan").addEventListener("toggle", openJan);
function openJan() {
  console.log("click jan");
  document.querySelector("jan_uger").classList.remove(".hide");
}
