// Q1. Personalized Login Greeting

// Declare variables
let userName = "Jay";
let hour = new Date().getHours(); // current hour (0 - 23)

let greeting;

// Check the time of the day
if (hour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (hour >= 12 && hour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
