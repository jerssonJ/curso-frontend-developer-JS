const menuaEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');



menuaEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
}