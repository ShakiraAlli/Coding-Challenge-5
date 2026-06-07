// Step 1: Create an array of 3–5 employee objects. Each should include: name, hourlyRate, hoursWorked
const employees = [
    { name: "Alice Johnson", hourlyRate: 15, hoursWorked: 40 },
    { name: "Bob Smith", hourlyRate: 20, hoursWorked: 35 },
    { name: "Charlie Brown", hourlyRate: 18, hoursWorked: 45 },
    { name: "Diana Prince", hourlyRate: 22, hoursWorked: 30 }
];

// Step 2: Write a function calculateBasePay(rate, hours) that returns pay for up to 40 hours only
function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}

// Step 3: Write a function calculateOvertimePay(rate, hours) that returns pay for hours worked over 40 at 1.5 times the hourly rate
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        const overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;
    }
    return 0;
}

// Step 4: Write calculateTaxes(grossPay) that deducts 15% tax.
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

// Step 5: Write processPayroll(employee) that returns an object with: name, basePay, overtimePay, grossPay, and netPay
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

// Testing functions
console.log(calculateBasePay(15, 40)); // Should return 600
console.log(calculateOvertimePay(15, 45)); // Should return 112.5
console.log(calculateTaxes(712.5)); // Should return 106.875
console.log(processPayroll(employees[0])); // Should return payroll info for Alice Johnson

// Step 6: Loop through the employee array and log the payroll information for each employee
for (const employee of employees) {
    console.log(processPayroll(employee));
}