// Q3. Monthly Expense Tracker

// Expenses for 5 categories: food, travel, rent, bills, leisure
let expenses = [4500, 2000, 12000, 3000, 1500];

// Calculate total using a loop
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i]; // assignment operator
}

// Average expense
let average = total / expenses.length;

// Add 10% tax to the total
let finalAmount = total;
finalAmount += total * 10 / 100;

// Display results rounded to 2 decimals
console.log("Total Expense: " + total.toFixed(2));
console.log("Average Expense: " + average.toFixed(2));
console.log("Final Amount after 10% tax: " + finalAmount.toFixed(2));
