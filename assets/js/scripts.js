const navToggel = document.querySelector(".nav__toggel");
const navMenu = document.querySelector(".nav__menu");

navToggel.addEventListener("click", () => {
    navMenu.classList.toggle("nav__slide")
})

