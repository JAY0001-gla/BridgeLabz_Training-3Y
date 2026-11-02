const predictedOrder = [
  "Script start",
  "Script end",
  "Promise callback",
  "Timeout callback"
];

const actualOrder = [];

function log(message) {
  console.log(message);
  actualOrder.push(message);
}

console.log("Predicted output order:");
predictedOrder.forEach((line, index) => console.log(`${index + 1}. ${line}`));
console.log("");
console.log("Actual output:");

log("Script start");
setTimeout(() => log("Timeout callback"), 0);
Promise.resolve().then(() => log("Promise callback"));
log("Script end");

setTimeout(() => {
  console.log("");
  const matches = predictedOrder.every((line, index) => line === actualOrder[index]);
  console.log("Prediction matches actual output:", matches);
  console.log("Explanation:");
  console.log("- Script start and Script end are synchronous, so they run first on the call stack.");
  console.log("- The Promise callback goes to the microtask queue, the timeout callback to the macrotask queue.");
  console.log("- After the call stack empties, the event loop always drains all microtasks before taking a macrotask.");
  console.log("- So the Promise callback runs before the timeout callback, even with a delay of 0.");
}, 50);
