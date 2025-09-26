const nav = document.querySelector(".navbar");
const trendingSection = document.querySelector(".trending-products");
const productSection = document.querySelector(".product-section");
const contactSection = document.querySelector(".contact-section")
window.addEventListener("scroll", () => {

    if (window.scrollY >= trendingSection.offsetTop) {
        nav.classList.remove("navbar-dark")
        nav.classList.remove("nav")

        nav.classList.add("navscroll");
    } else {
        nav.classList.remove("navscroll");
        nav.classList.add("navbar-dark");
        nav.classList.add("nav")

    }
});


window.addEventListener("scroll", () => {

    if (window.scrollY >= productSection.offsetTop) {
        
        nav.classList.remove("nav")

        nav.classList.add("navscroll");
    } else {
        nav.classList.remove("navscroll");
        
        nav.classList.add("nav")

    }
});

window.addEventListener("scroll", () => {

    if (window.scrollY >= contactSection.offsetTop) {
        
        nav.classList.remove("nav")

        nav.classList.add("navscroll");
    } else {
        nav.classList.remove("navscroll");
        
        nav.classList.add("nav")

    }
});