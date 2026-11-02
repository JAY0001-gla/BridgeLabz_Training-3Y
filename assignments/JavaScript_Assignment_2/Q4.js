let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;
let passedStudents = scores.filter(score => score >= 50);
let formattedScores = scores.map((score, index) => `Student ${index + 1}: ${score}`);

console.log(`Scores:
${formattedScores.join("\n")}
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed: ${passedStudents.length}`);
