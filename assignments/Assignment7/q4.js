const themeButtons = document.querySelectorAll(".theme-button");
const themeStatus = document.getElementById("themeStatus");

function applyTheme(themeName) {
  document.body.setAttribute("class", `theme-${themeName}`);
  document.body.setAttribute("data-theme", themeName);
  themeStatus.textContent = `Current theme: ${document.body.getAttribute("data-theme")}`;
  console.log(`Theme changed to ${themeName}`);
  console.log(`body class="${document.body.getAttribute("class")}" data-theme="${document.body.getAttribute("data-theme")}"`);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-value"));
  });
});
