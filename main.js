const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const yearElements = document.querySelectorAll("[data-current-year]");

function preferredTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;

  if (themeButton) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeButton.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    themeButton.setAttribute("title", `Switch to ${nextTheme} theme`);
  }
}

applyTheme(preferredTheme());

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
}

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});
