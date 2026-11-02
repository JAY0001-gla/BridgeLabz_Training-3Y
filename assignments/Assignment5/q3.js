(function () {
  const userWithArrow = {
    name: "Jay",
    showName: () => {
      return this.name;
    }
  };

  const userWithFunction = {
    name: "Jay",
    showName: function () {
      return this.name;
    }
  };

  console.log("Arrow function result:", userWithArrow.showName());
  console.log("Normal function result:", userWithFunction.showName());

  console.log("Why the arrow function gives undefined:");
  console.log("- An arrow function has no this of its own.");
  console.log("- It uses the this of the place where it was written, not the object it is called on.");
  console.log("- Here that outer this is not the user object, so this.name is undefined.");
  console.log("Fix: a normal function gets this from the object before the dot, so this.name works.");
}).call({});
