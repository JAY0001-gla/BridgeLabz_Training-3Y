function randomDelay() {
  return 1000 + Math.random() * 1000;
}

function shouldFail() {
  return Math.random() < 0.2;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject(new Error("Kettle stopped working"));
        return;
      }
      console.log("Step 1: Water boiled");
      resolve();
    }, randomDelay());
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject(new Error("Coffee machine jammed"));
        return;
      }
      console.log("Step 2: Coffee brewed");
      resolve();
    }, randomDelay());
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject(new Error("Cup broke while pouring"));
        return;
      }
      console.log("Step 3: Coffee poured into cup");
      resolve();
    }, randomDelay());
  });
}

console.log("Making coffee...");

boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    console.log("Coffee process failed:", error.message);
  });
