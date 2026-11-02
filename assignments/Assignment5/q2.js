function applyOperation(numbers, operation) {
  const result = [];
  for (const number of numbers) {
    result.push(operation(number));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

const doubled = applyOperation(numbers, (number) => number * 2);
const squared = applyOperation(numbers, (number) => number * number);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
