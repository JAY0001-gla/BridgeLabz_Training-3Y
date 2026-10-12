// Q2. Multi-Type Data Summary

// Variables of different data types
let name = "Jay Sharma";
let age = 21;
let isStudent = true;
let subjects = ["Maths", "Science", "English"];
let address = { city: "Mathura", state: "Uttar Pradesh" };
let middleName = null;
let phone; // undefined

// One console.table() statement showing label + value + type
// typeof gives "object" for arrays and null, so we handle them with Array.isArray() and a null check
console.table([
  { label: "name", value: name, type: typeof name },
  { label: "age", value: age, type: typeof age },
  { label: "isStudent", value: isStudent, type: typeof isStudent },
  { label: "subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
  { label: "address", value: JSON.stringify(address), type: Array.isArray(address) ? "array" : typeof address },
  { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "phone", value: phone, type: typeof phone }
]);
