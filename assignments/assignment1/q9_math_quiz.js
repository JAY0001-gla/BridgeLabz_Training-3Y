// Q9. Random Math Quiz Generator

// Two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Random operator
let operators = ['+', '-', '*', '/'];
let operator = operators[Math.floor(Math.random() * 4)];

let answer;

// Calculate the correct answer using switch
switch (operator) {
  case '+':
    answer = num1 + num2;
    break;
  case '-':
    answer = num1 - num2;
    break;
  case '*':
    answer = num1 * num2;
    break;
  case '/':
    answer = (num1 / num2).toFixed(2); // two decimals for division
    break;
}

console.log("Question: " + num1 + " " + operator + " " + num2 + " = ?");
console.log("Correct Answer: " + answer);
