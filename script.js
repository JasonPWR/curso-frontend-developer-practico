const navbarEmail = document.querySelector(".navbar-email");
const navbarMenuRight = document.querySelector(".desktop-menu");
const iconTopLeft = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconBuyCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");


navbarEmail.addEventListener("click", toggleEmail);
iconTopLeft.addEventListener("click", toggleMobileMenu);
iconBuyCart.addEventListener("click", toggleProductDetails);

function toggleEmail(){
    const isAsideActive = !aside.classList.contains("inactive");
    if (isAsideActive){
        aside.classList.add("inactive");
    }
    navbarMenuRight.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideActive = !aside.classList.contains("inactive");
    if (isAsideActive){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetails(){
    const isNavbarMenuRightActive = !navbarMenuRight.classList.contains("inactive");
    const isMenuMobileActive = !mobileMenu.classList.contains("inactive");

    if (isMenuMobileActive){
        mobileMenu.classList.add("inactive");
    }
    if (isNavbarMenuRightActive){
        navbarMenuRight.classList.add("inactive");
    }
    aside.classList.toggle("inactive");
}