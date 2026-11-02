let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;
    let totalSalary = isPermanent ? salary + bonus : salary;
    console.log(`Permanent: ${isPermanent}`);
    console.log(`Total salary: ${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus: ${bonus}`);
