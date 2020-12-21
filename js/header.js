const dropDown = () => {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = 'block';
    var close = document.getElementById('close');
    let closeMenu = () => {
        dropdown.style.display = 'none';
    }
    close.addEventListener("click", closeMenu);
}