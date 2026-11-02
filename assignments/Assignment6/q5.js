function runStage(stageName, callback) {
  setTimeout(() => {
    console.log(`Stage completed: ${stageName}`);
    callback();
  }, 1000);
}

function waitForStage(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Stage completed: ${stageName}`);
      resolve();
    }, 1000);
  });
}

async function runPipelineWithAsyncAwait() {
  console.log("--- Version 2: async/await ---");
  await waitForStage("design");
  await waitForStage("build");
  await waitForStage("test");
  await waitForStage("deploy");
  await waitForStage("celebrate");
  console.log("Pipeline finished with async/await");
  console.log("Why async/await is better:");
  console.log("- The stages read top to bottom like normal synchronous code.");
  console.log("- No deep nesting, so the code stays flat and easy to follow.");
  console.log("- Adding, removing or reordering a stage is a one-line change.");
  console.log("- Errors can be handled in one try/catch instead of at every level.");
}

console.log("--- Version 1: callback hell ---");
runStage("design", () => {
  runStage("build", () => {
    runStage("test", () => {
      runStage("deploy", () => {
        runStage("celebrate", () => {
          console.log("Pipeline finished with callbacks");
          runPipelineWithAsyncAwait();
        });
      });
    });
  });
});
