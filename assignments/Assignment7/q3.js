const form = document.getElementById("multiStepForm");
const steps = document.querySelectorAll(".step");
const stepIndicator = document.getElementById("stepIndicator");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");

const fieldRules = [
  {
    id: "name",
    test: (value) => /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value.trim()),
    message: "Name must contain only alphabets"
  },
  {
    id: "email",
    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()),
    message: "Enter a valid email address"
  },
  {
    id: "password",
    test: (value) => value.length >= 6,
    message: "Password must be at least 6 characters"
  }
];

let currentStep = 0;

function showStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
  stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
  backButton.style.visibility = currentStep === 0 ? "hidden" : "visible";
  nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

function validateCurrentStep() {
  const rule = fieldRules[currentStep];
  const input = document.getElementById(rule.id);
  const errorBox = document.getElementById(rule.id + "Error");
  const isValid = rule.test(input.value);

  input.classList.toggle("invalid", !isValid);
  errorBox.textContent = isValid ? "" : rule.message;
  return isValid;
}

function showSummary() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  form.style.display = "none";
  summary.style.display = "block";
  summary.innerHTML = `
    <h2>Summary</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${"*".repeat(password.length)}</p>
  `;
  console.log("Form completed:", { name, email, password: "*".repeat(password.length) });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateCurrentStep()) {
    console.log(`Step ${currentStep + 1} is invalid`);
    return;
  }

  console.log(`Step ${currentStep + 1} completed`);
  if (currentStep === steps.length - 1) {
    showSummary();
    return;
  }
  currentStep++;
  showStep();
  document.getElementById(fieldRules[currentStep].id).focus();
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep();
    console.log(`Moved back to step ${currentStep + 1}`);
  }
});

showStep();
