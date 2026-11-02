const rules = {
  name: {
    regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
    message: "Name must contain only alphabets"
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    message: "Enter a valid email like example@domain.com"
  },
  phone: {
    regex: /^\d{10}$/,
    message: "Phone must be exactly 10 digits"
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs 1 uppercase letter, 1 number and 1 special character"
  }
};

const form = document.getElementById("studentForm");

function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const errorBox = document.getElementById(fieldId + "Error");
  const isValid = rules[fieldId].regex.test(input.value);

  input.classList.remove("valid", "invalid");
  input.classList.add(isValid ? "valid" : "invalid");
  errorBox.textContent = isValid ? "" : rules[fieldId].message;

  return isValid;
}

Object.keys(rules).forEach((fieldId) => {
  document.getElementById(fieldId).addEventListener("input", () => validateField(fieldId));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const results = Object.keys(rules).map((fieldId) => validateField(fieldId));

  if (results.every(Boolean)) {
    console.log("Registration successful:");
    console.log({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
    });
  } else {
    console.log("Registration failed: please fix the highlighted fields");
  }
});
