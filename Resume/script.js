const burgerMenuBtn = document.querySelector('.hamburger-menu-btn');
const burgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const burgerMenu = document.querySelector('.hamburger-menu');

let menuOpen = false;

burgerMenuBtn.addEventListener('click', () => {
    if (menuOpen) {
        burgerMenuIcon.classList.remove('hamburger-menu-icon-x');
        burgerMenu.classList.remove('hamburger-menu-down');
        menuOpen = false;
    } else {
        burgerMenuIcon.classList.add('hamburger-menu-icon-x');
        burgerMenu.classList.add('hamburger-menu-down');
        menuOpen = true;
    }
});