const form = document.getElementById("loginForm");
const messageBox = document.getElementById("message");

function validateLogin(username, password) {
  const errors = [];

  if (!/^.{5,}$/.test(username)) {
    errors.push("Username must be at least 5 characters");
  }
  if (!/^.{8,}$/.test(password)) {
    errors.push("Password must be at least 8 characters");
  }
  if (!/\d/.test(password)) {
    errors.push("Password must include a number");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include an uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must include a lowercase letter");
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("Password must include a special character");
  }

  return errors;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errors = validateLogin(username, password);

  if (errors.length === 0) {
    messageBox.innerHTML = '<p class="success">Login successful</p>';
    console.log("Login successful");
  } else {
    messageBox.innerHTML = errors.map((error) => `<p class="error">${error}</p>`).join("");
    console.log("Login failed:");
    errors.forEach((error) => console.log("- " + error));
  }
});
