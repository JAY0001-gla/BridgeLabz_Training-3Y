function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

console.log("Step 1: calling greetUser with showEndMessage as the callback");
greetUser("Jay", showEndMessage);
console.log("Step 3: greetUser has finished, control is back to the caller");
