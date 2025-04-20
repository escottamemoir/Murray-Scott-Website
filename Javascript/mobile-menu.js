document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    // Open menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when close button is clicked
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});