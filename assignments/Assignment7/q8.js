const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");

function openDropdown() {
  dropdownList.classList.add("open");
}

function closeDropdown() {
  dropdownList.classList.remove("open");
}

dropdownButton.addEventListener("click", () => {
  dropdownList.classList.toggle("open");
});

dropdownList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    dropdownButton.textContent = event.target.textContent;
    console.log(`Selected: ${event.target.textContent}`);
    closeDropdown();
  }
});

document.addEventListener(
  "click",
  (event) => {
    const isOpen = dropdownList.classList.contains("open");
    if (isOpen && !dropdown.contains(event.target)) {
      closeDropdown();
      console.log("Dropdown closed by outside click (capturing phase)");
    }
  },
  true
);
