// script.js

const icon = document.querySelector('.icon');
const links = document.querySelector('.links');

icon.addEventListener('click', () => {
    links.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;
  
          if (entry.isIntersecting) {
            // Play entry animation
            section.classList.remove("animate__slideLeft");
            section.classList.add("animate__slideRight");
          } else {
            // Play exit animation
            section.classList.remove("animate__slideLeft");
            section.classList.add("animate__slideRight");
          }
        });
      },
      {
        threshold: 0.2, // Trigger animations when 20% of the section is visible
      }
    );
  
    sections.forEach((section) => {
      section.classList.add("animate__animated"); // Ensure all sections have the base animation class
      observer.observe(section); // Start observing each section
    });
  });
  
