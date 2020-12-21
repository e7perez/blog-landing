var dropdown = document.getElementById("dropdown");
var open = document.getElementById("hamburger");
var close = document.getElementById('close');
let openMenu = () => {
    console.log("Menu Open")
    dropdown.style.display = 'block';
}
let closeMenu = () => {
    dropdown.style.display = 'none';
}
open.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu);