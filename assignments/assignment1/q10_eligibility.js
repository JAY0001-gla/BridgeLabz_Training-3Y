// Q10. Citizen Eligibility Validator

let age = 19;
let isCitizen = true;

// Note: the assignment lists "citizen and age >= 18" for both "all services"
// and "vote only (18-20)". To avoid overlap, "all services" is taken as age >= 21.

if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
