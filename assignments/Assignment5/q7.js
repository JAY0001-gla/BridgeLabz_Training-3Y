function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("triple(5):", triple(5));
console.log("triple(10):", triple(10));
console.log("double(5):", double(5));

console.log("How closure works here:");
console.log("- makeMultiplier(3) runs and returns the inner function, then its execution finishes.");
console.log("- The inner function still remembers the variable multiplier from where it was created.");
console.log("- That remembered link to the outer variable is the closure.");
console.log("- double and triple each keep their own separate multiplier value.");
