let menu = document.querySelector("#menu");
let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", open);
function open() {
  menu.style.left = "30vw";
}
closeMenu.addEventListener("click", close);
function close() {
  menu.style.left = "100vw";
}
