console.log("JS is connected! 🚀");
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.getAttribute("data-theme") === "dark";
    console.log("Current theme:", isDarkMode ? "Dark" : "Light");
    
    if(isDarkMode) {
        console.log("Switching to light mode...");
        document.body.removeAttribute("data-theme");
    } else {
        console.log("Switching to dark mode...");
        document.body.setAttribute("data-theme", "dark");
    }
});
