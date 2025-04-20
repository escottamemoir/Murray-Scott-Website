// Select elements
const snapContainer = document.querySelector(".container");
const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu a");
const header = document.querySelector("header");
const logoImg = document.querySelector(".logo img");
const heroSection = document.querySelector("section .full-width-section"); // Hero section

// Function to determine the current section in view
function getCurrentSection() {
    const sections = document.querySelectorAll("section .full-width-section");
    let currentSection = null;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Adjust for the snap-container's scroll position
        const containerRect = snapContainer.getBoundingClientRect();
        const sectionTop = rect.top - containerRect.top;
        if (sectionTop >= -50 && sectionTop <= window.innerHeight / 2) {
            currentSection = section;
        }
    });

    return currentSection;
}

// Function to handle scroll behavior (active link highlighting and header/logo toggle)
function handleScroll() {
    // Highlight active navigation link
    const currentSection = getCurrentSection();
    if (currentSection) {
        const currentSectionId = currentSection.id; // e.g., "section2"

        // Remove active class from all links
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });

        // Add active class to the corresponding link
        const activeLink = Array.from(navLinks).find(
            (link) => link.getAttribute("href") === `#${currentSectionId}`
        );
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // Toggle fixed header and logo image
    const heroHeight = heroSection.offsetHeight; // Height of hero section
    const scrollPosition = snapContainer.scrollTop; // Current scroll position of snap-container

    if (scrollPosition > heroHeight) {
        header.classList.add("fixed");
        logoImg.src = "../Assets/Murray Scott.png"; // Dark logo when fixed
        navLinks.forEach(link => link.classList.add("dark")); // Add dark class to all links
    } else {
        header.classList.remove("fixed");
        logoImg.src = "../Assets/MS Logo Light.png"; // Light logo when transparent
        navLinks.forEach(link => link.classList.remove("dark")); // Remove dark class from all links
    }
}

// Attach scroll event listener to the snap-container
snapContainer.addEventListener("scroll", () => {
    // Debounce the scroll event for performance
    let isScrolling;
    clearTimeout(isScrolling);
    isScrolling = setTimeout(handleScroll, 150);
});

// Trigger the scroll behavior once on page load
handleScroll();

// Ensure navigation links work with smooth scrolling
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").substring(1); // Remove the #
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});