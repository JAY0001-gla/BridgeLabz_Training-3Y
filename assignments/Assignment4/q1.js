class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
    return this.price;
  }

  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: Rs.${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Accessories"),
  new Product(3, "Smartphone", 22000, "Electronics"),
  new Product(4, "Keyboard", 1500, "Accessories"),
  new Product(5, "Notebook", 120, "Stationery"),
  new Product(6, "Headphones", 2999, "Electronics")
];

console.log("All Products:");
products.forEach((product) => console.log(product.getDetails()));

products[0].applyDiscount(10);
console.log("\nAfter applying 10% discount on Laptop:");
console.log(products[0].getDetails());

const expensiveProducts = products.filter((product) => product.price > 1000);
console.log("\nProducts with price > 1000:");
expensiveProducts.forEach((product) => console.log(product.getDetails()));
