// Q7. Smart Guessing Game (Number Range)

// Random secret number between 1 and 50
let secret = Math.floor(Math.random() * 50) + 1;

// Test value for the user's guess
let userGuess = 25;

console.log("Secret number: " + secret); // shown only for testing
console.log("Your guess: " + userGuess);

// Nested if conditions
if (userGuess === secret) {
  console.log("Correct guess!");
} else {
  if (userGuess >= secret - 3 && userGuess <= secret + 3) {
    console.log("Very close!");
  } else {
    if (userGuess > secret) {
      console.log("Too high");
    } else {
      console.log("Too low");
    }
  }
}
