// Q8. Employee Salary Projection

let salary = 50000;      // current salary
let incrementRate = 8;   // annual increment in %

let projection = []; // will store the data for the table

// Loop for 5 years
for (let year = 1; year <= 5; year++) {
  salary += salary * incrementRate / 100; // add yearly increment
  projection.push({
    Year: year,
    Salary: Math.round(salary) // rounded salary
  });
}

console.table(projection);
