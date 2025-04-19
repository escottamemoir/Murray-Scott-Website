document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.full-width-image');
    const logoImg = document.querySelector('.logo img');

    // Toggle fixed header and logo image when scrolling past hero section
    window.addEventListener('scroll', () => {
        const heroHeight = heroSection.offsetHeight; // Height of hero section
        const scrollPosition = window.scrollY; // Current scroll position

        if (scrollPosition > heroHeight) {
            header.classList.add('fixed');
            logoImg.src = '../Assets/Murray Scott.png'; // Dark logo when fixed
        } else {
            header.classList.remove('fixed');
            logoImg.src = '../Assets/MS Logo Light.png'; // Light logo when transparent
        }
    });
});