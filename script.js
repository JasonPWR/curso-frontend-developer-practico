const navbarEmail = document.querySelector(".navbar-email");
const navbarMenuRight = document.querySelector(".desktop-menu");
navbarEmail.addEventListener("click", toggleMenu);

function toggleMenu(){
    navbarMenuRight.classList.toggle("inactive");
};