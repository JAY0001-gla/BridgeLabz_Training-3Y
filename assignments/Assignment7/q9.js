const form = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

const validators = {
  name: {
    test: (value) => value.trim() !== "",
    message: "Name is required"
  },
  email: {
    test: (value) => value.trim() !== "" && value.includes("@"),
    message: "Email is required and must contain @"
  },
  password: {
    test: (value) => value.length >= 6,
    message: "Password must be at least 6 characters"
  }
};

function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const errorBox = document.getElementById(fieldId + "Error");
  const isValid = validators[fieldId].test(input.value);

  input.classList.toggle("invalid", !isValid);
  errorBox.textContent = isValid ? "" : validators[fieldId].message;
  return isValid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.style.display = "none";

  const results = Object.keys(validators).map((fieldId) => validateField(fieldId));

  if (results.every(Boolean)) {
    successMessage.style.display = "block";
    console.log("Form Submitted Successfully");
    console.log({
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim()
    });
  } else {
    console.log("Submission blocked: fix the errors");
  }
});

Object.keys(validators).forEach((fieldId) => {
  const input = document.getElementById(fieldId);
  input.addEventListener("input", () => {
    if (input.classList.contains("invalid")) {
      validateField(fieldId);
    }
    successMessage.style.display = "none";
  });
});
