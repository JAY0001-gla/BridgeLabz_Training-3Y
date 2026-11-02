const MAX_CHARACTERS = 100;
const WARNING_LIMIT = 20;

const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

function updateCounter() {
  const remaining = MAX_CHARACTERS - messageBox.value.length;
  counter.textContent = `${remaining} characters left`;
  counter.classList.remove("warning", "danger");

  if (remaining <= 0) {
    counter.classList.add("danger");
  } else if (remaining <= WARNING_LIMIT) {
    counter.classList.add("warning");
  }
}

messageBox.addEventListener("keydown", (event) => {
  const isLimitReached = messageBox.value.length >= MAX_CHARACTERS;
  const isPrintableKey = event.key.length === 1 && !event.ctrlKey && !event.metaKey;
  const isEnterKey = event.key === "Enter";

  if (isLimitReached && (isPrintableKey || isEnterKey)) {
    const hasSelection = messageBox.selectionStart !== messageBox.selectionEnd;
    if (!hasSelection) {
      event.preventDefault();
      console.log("Limit reached: typing blocked");
    }
  }
});

messageBox.addEventListener("input", () => {
  if (messageBox.value.length > MAX_CHARACTERS) {
    messageBox.value = messageBox.value.slice(0, MAX_CHARACTERS);
  }
  updateCounter();
});

resetButton.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
  messageBox.focus();
  console.log("Counter reset");
});

updateCounter();
