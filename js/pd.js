// Get project from URL
const params = new URLSearchParams(window.location.search);
const project = params.get("project");

const projectDetails = {
    "snake-game": {
        title: "🐍 Snake Game",
        image: "./img/snake.webp",
        description: "The Snake Game is a classic arcade game where players control a snake that moves across the screen, eating food to grow longer while avoiding collisions with itself and the screen edges. Built using Python and Pygame, it features smooth controls, randomized food placement, real-time score tracking, and a restart option upon game over. This project is great for learning game logic, event handling, and fundamental programming concepts."
    },
    "nummos": {
        title: "Nummos",
        image: "./img/nummos.webp",
        description: "​Nummos is a comprehensive business management platform designed to streamline operations for startups and small to medium-sized enterprises (SMEs). Emphasizing simplicity, transparency, professionalism, and security, Nummos offers an intuitive interface that simplifies daily tasks, enabling businesses to focus on growth. Key features include built-in analytics and reporting tools, allowing users to monitor progress and make informed decisions to enhance performance. Additionally, Nummos provides a social and meeting platform for startups and SMEs, fostering collaboration and networking opportunities. The platform is developed using modern web technologies, ensuring a responsive and user-friendly experience across devices."
    },
    "online-library": {
        title: "Online Library",
        image: "./img/online-library.webp",
        description: "The Online Library is a web-based platform that allows users to browse, read, and manage books efficiently. Built using HTML, CSS, Bootstrap for a responsive design, Node.js for backend processing, and EJS for dynamic templating, the system ensures a smooth user experience. The project integrates APIs to fetch book details and provides features like user authentication, book categorization, and a personalized library for saved books. Users can search for books, read PDFs, and track their reading progress, making it a complete solution for digital book lovers. "
    },
    "ludo": {
        title: "Ludo Game",
        image: "./img/ludo.webp",
        description: "The Ludo Game is a web-based version of the classic board game, developed using HTML, CSS, and Bootstrap for a responsive and visually appealing interface. This project allows players to enjoy an interactive digital version of Ludo with smooth animations and turn-based gameplay. Bootstrap enhances the design, making it mobile-friendly and user-friendly. The game logic is implemented using JavaScript to handle dice rolls, player turns, and movement rules. This project provides a great opportunity to learn frontend development and interactive UI design."
    }
};


// Update page content dynamically
if (projectDetails[project]) {
    document.getElementById("project-title").innerText = projectDetails[project].title;
    document.getElementById("project-image").src = projectDetails[project].image;
    document.getElementById("project-description").innerText = projectDetails[project].description;
} else {
    document.getElementById("project-title").innerText = "Project Not Found";
    document.getElementById("project-description").innerText = "Sorry, the project details you are looking for do not exist.";
}