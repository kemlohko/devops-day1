console.log("JS is connected! 🚀");
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.getAttribute("data-theme") === "dark";
    
    if(isDarkMode) {
        document.body.removeAttribute("data-theme");
    } else {
        document.body.setAttribute("data-theme", "dark");
    }
});
