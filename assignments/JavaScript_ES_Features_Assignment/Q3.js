"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new TypeError("Null transaction entry");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("Missing transaction id or amount");
        }

        if (transaction.amount < 0) {
            throw new RangeError("Negative transaction amount");
        }

        validTransactions.push(transaction);
        console.log(`Valid transaction: ID ${transaction.id}, Amount ₹${transaction.amount}`);
    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            errorType: error.name,
            message: error.message
        });
        console.log(`Invalid transaction: ${error.name} - ${error.message}`);
    }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
