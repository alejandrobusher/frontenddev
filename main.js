const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarrito = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const productList = []
const cardsContainer = document.querySelector(".cards-container")


menuEmail.addEventListener("click", toggleDesktopMenu)
burgerMenu.addEventListener("click", toggleMobileMenu)
menuCarrito.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive")
    
    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
}

productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})
productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})
productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})
productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})
productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = `$${product.price}`
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)
