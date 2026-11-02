"use strict";

let limit = 5;
const userInput = prompt("Enter pyramid height (default 5):");

if (userInput !== null && userInput.trim() !== "") {
    const enteredLimit = Number(userInput);
    if (Number.isInteger(enteredLimit) && enteredLimit > 0) {
        limit = enteredLimit;
    }
}

console.log("Pyramid using let:");

for (let row = 1; row <= limit; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line += "* ";
    }
    console.log(line.trim());
}

console.log("Pyramid using var:");

for (var rowVar = 1; rowVar <= limit; rowVar++) {
    var lineVar = "";
    for (var columnVar = 1; columnVar <= rowVar; columnVar++) {
        lineVar += "* ";
    }
    console.log(lineVar.trim());
}

console.log(`Final var row value: ${rowVar}`);
console.log("var is function-scoped; let is block-scoped.");
