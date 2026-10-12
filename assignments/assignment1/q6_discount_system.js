// Q6. Progressive Discount System

let total = 6500; // total purchase amount
let discountPercent;

// Decide the discount tier
if (total >= 10000) {
  discountPercent = 25;
} else if (total >= 5000) {
  discountPercent = 15;
} else if (total >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

// Final price after discount (rounded)
let finalPrice = Math.round(total - (total * discountPercent / 100));

console.log("Original Total: " + total);
console.log("Discount Percentage: " + discountPercent + "%");
console.log("Final Price: " + finalPrice);
