const themeToggle = document.getElementById("theme-toggle");

console.log("Theme toggle button:", themeToggle);

if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDarkMode = document.body.classList.contains("dark-mode");

        if (isDarkMode) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
}

const projects = [
    {
        title: "How Old Are You? (MATH 4997 Project in Collaboration w/ PBRC)",
        category: "Machine Learning · Data Analysis",
        description:
            "Worked on regression models for biological age prediction using clinical biomarker data, with focus on model evaluation, feature selection, PCA, and statistical analysis."
    },
    {
        title: "Quantum Visualizer",
        category: "Data Visualization · Scientific Computing",
        description:
            "An interactive project for visualizing quantum mechanics concepts such as wavefunctions, probability densities, and simple quantum systems."
    },
    {
        title: "New Vraja Dham Website",
        category: "HTML · CSS · JavaScript",
        description:
            "Built a static website for the ISKCON Baton Rouge community, focusing on clean structure, responsive design, and accessible information for visitors."
    }
];

const projectsContainer = document.getElementById("projects-container");

function renderProjects() {
    projectsContainer.innerHTML = "";

    projects.forEach((project) => {
        projectsContainer.innerHTML += `
            <article class="project-card">
                <h3>${project.title}</h3>
                <p class="project-tag">${project.category}</p>
                <p>${project.description}</p>
            </article>
        `;
    });
}

renderProjects();