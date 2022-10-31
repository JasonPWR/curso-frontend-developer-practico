const navbarEmail = document.querySelector(".navbar-email");
const navbarMenuRight = document.querySelector(".desktop-menu");
const iconTopLeft = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


navbarEmail.addEventListener("click", toggleMenu);
iconTopLeft.addEventListener("click", toggleMobileMenu);

function toggleMenu(){
    navbarMenuRight.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}