function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

const simulateApiFailure = Math.random() < 0.3;

function getBugs() {
  return new Promise((resolve, reject) => {
    fetchBugs((bugs) => {
      if (simulateApiFailure) {
        reject(new Error("API request failed"));
        return;
      }
      resolve(bugs);
    });
  });
}

console.log("Fetching bugs...");
console.log("Simulated failure:", simulateApiFailure);

getBugs()
  .then((bugs) => {
    const bugTable = bugs.map((bug, index) => ({ id: index + 1, bug: bug }));
    console.table(bugTable);
  })
  .catch((error) => {
    console.log("Could not load bugs:", error.message);
  });
