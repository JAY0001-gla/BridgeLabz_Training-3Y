"use strict";

function outer() {
    console.log("Outer count before assignment:", count);
    var count = 5;

    function inner() {
        console.log("Inner count before assignment:", count);
        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    inner();
    console.log("Outer count after inner:", count);
}

outer();

function outerWithArrow() {
    console.log("Arrow example outer count:", count);
    var count = 5;

    const inner = () => {
        console.log("Arrow reads outer count:", count);
    };

    inner();
}

outerWithArrow();

console.log("Each function has its own execution context.");
console.log("The inner function's var count is hoisted separately and shadows the outer count.");
console.log("The arrow function example has no local count, so it closes over the outer count.");
