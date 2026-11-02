class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    const match = /^(SAVE|DISC)(\d{2})$/.exec(code.trim().toUpperCase());
    if (!match) {
      this.discountPercent = 0;
      console.log(`Invalid coupon: ${code}`);
      return false;
    }
    this.discountPercent = Number(match[2]);
    console.log(`Coupon ${code.toUpperCase()} applied: ${this.discountPercent}% off`);
    return true;
  }

  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discountPercent) / 100;
  }

  display() {
    console.log("Cart Items:");
    this.items.forEach((item) => {
      console.log(`${item.name} - Rs.${item.price} x ${item.quantity} = Rs.${item.price * item.quantity}`);
    });
    console.log(`Total: Rs.${this.getTotal()}`);
    console.log(`Discount: ${this.discountPercent}%`);
    console.log(`Final Total: Rs.${this.getFinalTotal().toFixed(2)}`);
  }
}

const cart = new Cart();
cart.addItem("Shoes", 2500, 1);
cart.addItem("T-Shirt", 799, 3);
cart.addItem("Socks", 150, 4);

console.log("--- Without coupon ---");
cart.display();

console.log("\n--- Invalid coupon ---");
cart.applyCoupon("OFFER50");
cart.display();

console.log("\n--- Valid coupon SAVE20 ---");
cart.applyCoupon("SAVE20");
cart.display();

console.log("\n--- Valid coupon DISC10 ---");
cart.applyCoupon("DISC10");
cart.display();
