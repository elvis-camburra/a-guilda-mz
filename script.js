const menuToggle = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuToggle.classList.toggle('toggle');
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    menuToggle.classList.remove('toggle');
});
