"use strict";

console.log("Hoisting observations:");
console.log("var declarations are hoisted and initialized with undefined.");
console.log("Function declarations are hoisted with their function body.");
console.log("let declarations are hoisted but remain in the temporal dead zone until initialized.");

const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

const announceArrow = () => console.log("Game started with arrow function");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();

console.log("Arrow function expressions are not usable before their initialization.");
