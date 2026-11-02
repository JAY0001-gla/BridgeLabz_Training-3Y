function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log(`Person: My name is ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
  console.log(`Faculty: I work in the ${this.department} department`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teachSubject = function () {
  console.log(`Professor: I teach ${this.subject}`);
};

const professor = new Professor("Dr. Sharma", "Computer Science", "JavaScript");

professor.introduce();
professor.showDepartment();
professor.teachSubject();

console.log("Professor is a Professor:", professor instanceof Professor);
console.log("Professor is a Faculty:", professor instanceof Faculty);
console.log("Professor is a Person:", professor instanceof Person);
console.log("Chain: professor -> Professor.prototype -> Faculty.prototype -> Person.prototype -> Object.prototype");
