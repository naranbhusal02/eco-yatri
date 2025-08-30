const EnvironmentalFacts = [
    "The Amazon rainforest produces more than 20% of the world's oxygen.",
    "One tree can absorb approximately 48 pounds of carbon dioxide per year.",
    "Coral reefs support about 25% of all marine life.",
    "Plastic takes 500 to 1,000 years to decompose in landfills.",
    "The Great Pacific Garbage Patch is twice the size of Texas."
];
const themeToggle = document.getElementById("themeToggle")
const body = document.body
const currentTheme = localStorage.getItem("theme") || "light"
if (currentTheme === "dark") {
  body.setAttribute("data-theme", "dark")
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
}
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  if (currentTheme === "dark") {
    body.removeAttribute("data-theme")
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
    localStorage.setItem("theme", "light")
  } else {
    body.setAttribute("data-theme", "dark")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
    localStorage.setItem("theme", "dark")
  }
})
