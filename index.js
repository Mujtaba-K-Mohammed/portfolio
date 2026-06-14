// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(theme) {
  if (theme === "dark") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("light-theme") ? "dark" : "light";
  setTheme(newTheme);
});

// Project card animation on scroll
const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

cards.forEach((card) => {
  observer.observe(card);
});
