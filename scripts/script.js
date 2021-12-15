document.querySelector(".closeMenu").addEventListener("click", closeMenu);
document.querySelector(".openMenu").addEventListener("click", openMenu);

function openMenu() {
  document.querySelector("#menu").style.height = "100%";
}

function closeMenu() {
  document.querySelector("#menu").style.height = "0%";
}

// funktion der går at du kan trykke på vælg-uge-knappen
const menu = document.querySelector("#menu_uger");
const pil = document.querySelector(".arrow");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  menu.classList.remove("show");
  pil.classList.remove("up");
}

function toggleMenu() {
  console.log("click vælg uge");
  menu.classList.toggle("show");
  pil.classList.toggle("up");
}

document.querySelector("#uge_knap").addEventListener("click", toggleMenu);

// funktion der gør at du kan klikke på en måned og der så kommer uge nr. frem
const ugerJan = document.querySelector("#jan_uger");
function toggleJan() {
  console.log("click jan");
  ugerJan.classList.toggle("show");
}

document.querySelector("#jan").addEventListener("click", toggleJan);

const ugerFeb = document.querySelector("#feb_uger");
function toggleFeb() {
  console.log("click feb");
  ugerFeb.classList.toggle("show");
}

document.querySelector("#feb").addEventListener("click", toggleFeb);
