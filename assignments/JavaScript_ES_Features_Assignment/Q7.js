"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) {
                throw new RangeError("Cannot divide by zero");
            }
            return firstNumber / secondNumber;
        case "power":
            return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) {
                throw new RangeError("Cannot calculate the real square root of a negative number");
            }
            return Math.sqrt(firstNumber);
        case "subtract":
            return firstNumber - secondNumber;
        default:
            throw new InvalidOperationError(`Unknown operation: ${operation}`);
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation} error: ${error.name} - ${error.message}`);
    }
}

try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(`Invalid operation test: ${error.name} - ${error.message}`);
}
