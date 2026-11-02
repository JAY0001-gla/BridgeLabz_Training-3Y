const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    if (value === null || value === undefined || String(value).trim() === "" || Number.isNaN(numberValue)) {
        invalidNumbers.push(value);
        console.log(`Invalid value: ${stringValue} | Number: ${numberValue} | Boolean: ${booleanValue} | String: ${stringValue}`);
    } else {
        validNumbers.push(numberValue);
        console.log(`Valid value: ${stringValue} | Number: ${numberValue} | Boolean: ${booleanValue} | String: ${stringValue}`);
    }
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log(`Valid count: ${validNumbers.length}`);
console.log(`Invalid count: ${invalidNumbers.length}`);
