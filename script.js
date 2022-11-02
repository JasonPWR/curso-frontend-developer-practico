const navbarEmail = document.querySelector(".navbar-email");
const navbarMenuRight = document.querySelector(".desktop-menu");
const iconTopLeft = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconBuyCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

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

const productList = [];

productList.push({
    name:"Bike",
    price:120,
    image:"https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name:"Monitor Gaming 19' ",
    price:200.00,
    image:"https://s3-sa-east-1.amazonaws.com/saasargentina/j4DpPMMwYTAnprKIyW0N/imagen",
});

productList.push({
    name:"Tecno Camon 18p",
    price:180,
    image:"https://fdn2.gsmarena.com/vv/pics/tecno/tecno-camon-18p-2.jpg",
});

function renderProducts(arr){
    
    for (product of arr){

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const divProductInfo = document.createElement("div");
    
    const priceProduct = document.createElement("p");
    priceProduct.innerText = "$" + product.price;
    
    const nameProduct = document.createElement("p");
    nameProduct.innerText = product.name;
    
    const figureImg = document.createElement("figure");
    const iconCartImg = document.createElement("img");
    iconCartImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    productInfo.appendChild(divProductInfo);
    divProductInfo.appendChild(priceProduct);
    divProductInfo.appendChild(nameProduct);
    
    productInfo.appendChild(figureImg);

    figureImg.appendChild(iconCartImg);
    
    cardsContainer.appendChild(productCard);
}};

renderProducts(productList);