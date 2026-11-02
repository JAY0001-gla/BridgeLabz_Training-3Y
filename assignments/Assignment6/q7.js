function loadProfile() { return new Promise((resolve) => setTimeout(() => resolve("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise((resolve) => setTimeout(() => resolve("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise((resolve) => setTimeout(() => resolve("Messages Loaded"), 1000)); }

function randomlyRejectOne(loaders) {
  const failingIndex = Math.floor(Math.random() * loaders.length);
  return loaders.map((loader, index) => {
    if (index !== failingIndex) {
      return loader.promise;
    }
    return loader.promise.then(() => {
      throw new Error(`${loader.name} failed to load`);
    });
  });
}

const modules = [
  { name: "Profile", promise: loadProfile() },
  { name: "Posts", promise: loadPosts() },
  { name: "Messages", promise: loadMessages() }
];

const startTime = Date.now();
console.log("Loading dashboard sections...");

Promise.allSettled(randomlyRejectOne(modules)).then((results) => {
  results.forEach((result, index) => {
    const moduleName = modules[index].name;
    if (result.status === "fulfilled") {
      console.log(`${moduleName}: succeeded - ${result.value}`);
    } else {
      console.log(`${moduleName}: failed - ${result.reason.message}`);
    }
  });

  const totalTime = Date.now() - startTime;
  console.log(`Total time taken: ${totalTime} ms`);
});
