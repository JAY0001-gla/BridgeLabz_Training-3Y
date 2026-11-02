function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Innova");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

console.log("car1 has own getDetails:", car1.hasOwnProperty("getDetails"));
console.log("car2 has own getDetails:", car2.hasOwnProperty("getDetails"));
console.log("Both cars share the same method:", car1.getDetails === car2.getDetails);
console.log("Shared method lives on Car.prototype:", Object.getPrototypeOf(car1) === Car.prototype);
