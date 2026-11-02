Array.prototype.myMap = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (index in this) {
      result.push(callback(this[index], index, this));
    }
  }
  return result;
};

const numbers = [1, 2, 3];

console.log("myMap:", numbers.myMap((num) => num * 2));
console.log("map   :", numbers.map((num) => num * 2));
console.log("With index:", numbers.myMap((num, index) => `${index}:${num}`));
console.log("Strings:", ["a", "b", "c"].myMap((letter) => letter.toUpperCase()));
