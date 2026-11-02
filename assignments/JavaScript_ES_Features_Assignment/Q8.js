const sloppyDemo = Function("a", "a", "total = 10; var deleteResult = delete total; return { total: total, deleteResult: deleteResult };");

try {
    const result = sloppyDemo(5, 10);
    console.log("Without strict mode:");
    console.log(`Duplicate parameters are accepted. total: ${result.total}`);
    console.log(`delete identifier result: ${result.deleteResult}`);
} catch (error) {
    console.log(`Sloppy mode error: ${error.name} - ${error.message}`);
}

try {
    Function('"use strict"; return function(a, a) { return a; };');
} catch (error) {
    console.log(`With strict mode: ${error.name} - ${error.message}`);
}

function correctDemo(firstValue, secondValue) {
    "use strict";
    const total = firstValue + secondValue;
    return total;
}

console.log(`Correct ES6 version result: ${correctDemo(5, 10)}`);
console.log("Strict mode rejects duplicate parameter names and undeclared assignments.");
