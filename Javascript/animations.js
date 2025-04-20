// Select all sections
const sections = document.querySelectorAll("section");
const container = document.querySelector(".container");

// Function to smoothly scroll to a section
function scrollToSection(section) {
  section.scrollIntoView({ behavior: "smooth" });
}

// Optional: Add event listeners for manual navigation (e.g., arrow keys)
document.addEventListener("keydown", (event) => {
  const currentSection = Array.from(sections).find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  });

  const currentIndex = Array.from(sections).indexOf(currentSection);

  if (event.key === "ArrowDown" && currentIndex < sections.length - 1) {
    event.preventDefault(); // Prevent default scroll
    scrollToSection(sections[currentIndex + 1]);
  } else if (event.key === "ArrowUp" && currentIndex > 0) {
    event.preventDefault(); // Prevent default scroll
    scrollToSection(sections[currentIndex - 1]);
  }
});

// Optional: Enhance snapping behavior by ensuring scroll ends at a section
container.addEventListener("scroll", () => {
  let currentSection = null;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      currentSection = section;
    }
  });

  if (currentSection) {
    scrollToSection(currentSection);
  }
});