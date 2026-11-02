const rules = {
  name: {
    regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
    message: "Name must contain only alphabets"
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    message: "Enter a valid email address"
  },
  seats: {
    regex: /^([1-9]|10)$/,
    message: "Seats must be a number from 1 to 10"
  }
};

function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const errorBox = document.getElementById(fieldId + "Error");
  const isValid = rules[fieldId].regex.test(input.value.trim());

  input.classList.remove("valid", "invalid");
  input.classList.add(isValid ? "valid" : "invalid");
  errorBox.textContent = isValid ? "" : rules[fieldId].message;

  return isValid;
}

Object.keys(rules).forEach((fieldId) => {
  document.getElementById(fieldId).addEventListener("input", () => validateField(fieldId));
});

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const results = Object.keys(rules).map((fieldId) => validateField(fieldId));

  if (!results.every(Boolean)) {
    console.log("Booking failed: invalid input");
    return;
  }

  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value.trim())
  };

  console.log("Booking Confirmed");
  console.log("-----------------");
  console.log(`Name  : ${booking.name}`);
  console.log(`Email : ${booking.email}`);
  console.log(`Seats : ${booking.seats}`);
  console.log(booking);
});
