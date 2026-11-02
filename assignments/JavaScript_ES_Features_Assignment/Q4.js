"use strict";

function showMessage() {
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

console.log("The original code failed because greeting was assigned without let, const, or var.");
console.log("Strict mode prevents accidental creation of global variables.");
console.log("Debugger watch: greeting");
console.log("Call stack: showMessage() -> global script");
