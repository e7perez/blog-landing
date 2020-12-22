var dropdown = document.getElementById("dropdown");
var open = document.getElementById("hamburger");
var close = document.getElementById('close');
let openMenu = () => {
    dropdown.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}
let closeMenu = () => {
    dropdown.style.display = 'none';
    document.body.style.overflow = null;
}
dropdown.addEventListener("click",closeMenu);
open.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu);