const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Function to update active class on scroll
function updateActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
}

// Scroll Event Listener
window.addEventListener("scroll", updateActiveNav);

// Typing Effect
const textArray = ["Frontend Developer", "Web Designer", "Freelancer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (!isDeleting && charIndex <= textArray[textIndex].length) {
        typingElement.textContent = textArray[textIndex].slice(0, charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        typingElement.textContent = textArray[textIndex].slice(0, charIndex);
        charIndex--;
    }

    let speed = isDeleting ? 50 : 150;
    if (charIndex === textArray[textIndex].length) {
        isDeleting = true;
        speed = 1000;
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
