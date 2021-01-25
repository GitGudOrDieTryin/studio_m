'use strict';

const menuButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('nav');
const links = document.querySelectorAll('.nav-links li a');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuButton.classList.toggle('switch');
})
