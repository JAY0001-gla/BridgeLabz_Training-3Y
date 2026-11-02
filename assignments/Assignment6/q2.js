console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then callback");
});

console.log("Synchronous log");

console.log("End");

setTimeout(() => {
  console.log("Explanation:");
  console.log("- Synchronous code runs first on the call stack: Start, Synchronous log, End.");
  console.log("- setTimeout callback is sent to the macrotask queue.");
  console.log("- Promise.then callback is sent to the microtask queue.");
  console.log("- When the call stack is empty, the event loop empties the whole microtask queue first.");
  console.log("- Only then does it take the next macrotask, so the Promise callback runs before the timeout callback.");
}, 50);
