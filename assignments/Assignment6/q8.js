function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error("Server error"));
        return;
      }
      resolve("Order submitted");
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return "Order processed successfully";
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
    }
  }

  throw new Error("Order could not be processed");
}

processOrder()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Final result:", error.message);
  });
