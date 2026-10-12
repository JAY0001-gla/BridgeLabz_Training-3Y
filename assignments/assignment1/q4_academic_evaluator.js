// Q4. Academic Performance Evaluator

// Marks of 5 subjects (each out of 100)
let marks = [78, 85, 90, 66, 72];

// Calculate total
let total = 0;
let failedSubject = false; // becomes true if any subject < 35

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
  if (marks[i] < 35) {
    failedSubject = true;
  }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log("Total Marks: " + total);
console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

// Validation first: any subject < 35 means Detained
if (failedSubject) {
  console.log("Detained (scored below 35 in a subject)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
