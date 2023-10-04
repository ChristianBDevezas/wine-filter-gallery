// Hamburger Menu
const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", () => {;
    header.classList.toggle("open-menu");
});

// Link to Top
const linkTop = document.querySelector('.link-top');

window.addEventListener("scroll", () => {
    const heightScroll = window.scrollY;    
    if(heightScroll >= 300) linkTop.classList.add("show-link");
    else linkTop.classList.remove("show-link");
});