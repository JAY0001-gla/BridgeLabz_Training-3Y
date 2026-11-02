const user = { name: "John", email: "john@mail.com", age: 21 };

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");

function showUser() {
  output.innerHTML = `
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Age:</strong> ${user.age}</p>
  `;
  console.log("User:", user);
}

function updateUser() {
  user.name = nameInput.value;
  user.email = emailInput.value;
  user.age = Number(ageInput.value);
  showUser();
}

nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;

[nameInput, emailInput, ageInput].forEach((input) => {
  input.addEventListener("input", updateUser);
});

document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  updateUser();
});

showUser();
