function deployToServer(serverName, delayInSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${serverName} failed to respond`));
        return;
      }
      resolve(`${serverName} responded in ${delayInSeconds} seconds`);
    }, delayInSeconds * 1000);
  });
}

const serverA = deployToServer("Server A", 2);
const serverB = deployToServer("Server B", 3);

console.log("Deployment started on both servers...");

Promise.race([serverA, serverB])
  .then((fastest) => {
    console.log("Fastest response:", fastest);
  })
  .catch((error) => {
    console.log("Race error:", error.message);
  });

Promise.all([serverA, serverB])
  .then((responses) => {
    console.log("Deployment completed for all servers");
    responses.forEach((response) => console.log("-", response));
  })
  .catch((error) => {
    console.log("Deployment failed:", error.message);
  });
