const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedItems = [];

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 0.10;
    } else if (product.category === "fashion") {
        discount = 0.05;
    }

    discountedItems.push({
        item: product.item,
        finalPrice: product.price * (1 - discount)
    });
}

let cartTotal = cart.reduce((total, product) => total + product.price, 0);
let finalTotal = discountedItems.reduce((total, product) => total + product.finalPrice, 0);

if (cartTotal > 50000) {
    finalTotal *= 0.95;
}

console.log(`Original total: ₹${cartTotal.toFixed(2)}`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
console.log(`Extra 5% discount applied: ${cartTotal > 50000 ? "Yes" : "No"}`);
