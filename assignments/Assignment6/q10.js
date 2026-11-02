function randomStep(successMessage, failureMessage) {
  const delay = 1000 + Math.random() * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(failureMessage));
        return;
      }
      resolve(successMessage);
    }, delay);
  });
}

function takeOrder() {
  return randomStep("Order taken", "Could not take the order");
}

function prepare() {
  return randomStep("Food prepared", "Kitchen failed to prepare the food");
}

function pack() {
  return randomStep("Package ready", "Packing failed");
}

function dispatch() {
  return randomStep("Out for delivery", "No delivery partner available");
}

function deliver() {
  return randomStep("Delivered", "Delivery failed");
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    console.log(`Step 1: ${await takeOrder()}`);
    console.log(`Step 2: ${await prepare()}`);
    console.log(`Step 3: ${await pack()}`);
    console.log(`Step 4: ${await dispatch()}`);
    await deliver();
    console.log("Delivery completed!");
  } catch (error) {
    console.log("Pipeline failed!");
    console.log("Reason:", error.message);
  }
}

runPipeline();
console.log("runPipeline() called - the main script has finished while the pipeline waits asynchronously");
