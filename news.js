let menu = document.querySelector("#menu");
let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
menu.style.display = "none";

openMenu.addEventListener("click", open);
function open() {
  menu.style.display = "block";
  menu.style.left = "30vw";
  window.document.body.style.overflow = "hidden";
}
closeMenu.addEventListener("click", close);
function close() {
  menu.style.left = "100vw";
  menu.style.display = "none";
}
