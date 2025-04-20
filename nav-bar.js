
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.full-width-image');
    const logoImg = document.querySelector('.logo img');
    const NavBar = document.querySelector('.desktop-nav ul li a');

    // Toggle fixed header and logo image when scrolling past hero section
    window.addEventListener('scroll', () => {
        const heroHeight = heroSection.offsetHeight; // Height of hero section
        const scrollPosition = window.scrollY; // Current scroll position

        if (scrollPosition > heroHeight) {
            header.classList.add('fixed');
            logoImg.src = '../Assets/Murray Scott.png'; // Dark logo when fixed
            navLinks.forEach(link => link.classList.add('dark')); // Add dark class to all links
        } else {
            header.classList.remove('fixed');
            logoImg.src = '../Assets/MS Logo Light.png'; // Light logo when transparent
            navLinks.forEach(link => link.classList.remove('dark')); // Remove dark class from all links
        }
    });
});