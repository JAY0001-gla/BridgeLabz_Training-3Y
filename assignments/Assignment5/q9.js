function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.printName = function () {
  return `Name: ${this.name}`;
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.printBranch = function () {
  return `Branch: ${this.branch}`;
};

class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    return `Name: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  printBranch() {
    return `Branch: ${this.branch}`;
  }
}

const protoStudent = new StudentProto("Jay", "Computer Science");
const classStudent = new Student("Jay", "Computer Science");

console.log("Prototype version:");
console.log(protoStudent.printName());
console.log(protoStudent.printBranch());

console.log("Class version:");
console.log(classStudent.printName());
console.log(classStudent.printBranch());

console.log("Same name output:", protoStudent.printName() === classStudent.printName());
console.log("Same branch output:", protoStudent.printBranch() === classStudent.printBranch());
console.log("Prototype student instanceof PersonProto:", protoStudent instanceof PersonProto);
console.log("Class student instanceof Person:", classStudent instanceof Person);
console.log("Class Student.prototype inherits from Person.prototype:", Object.getPrototypeOf(Student.prototype) === Person.prototype);
