"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        const parsedData = JSON.parse(rawData[index]);

        if (!Object.prototype.hasOwnProperty.call(parsedData, "user") ||
            !Object.prototype.hasOwnProperty.call(parsedData, "age")) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsedData.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age value");
        }

        const user = {
            user: parsedData.user,
            age: age
        };

        cleanData.push(user);

        if (age < 18) {
            under18Users.push(user);
        }
    } catch (error) {
        errors.push({ line: lineNumber, message: error.message });
        console.log(`Line ${lineNumber} error: ${error.message}`);
    }
}

console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Users under 18:", under18Users);
