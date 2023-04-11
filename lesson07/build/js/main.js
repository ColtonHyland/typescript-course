"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    //Colton: 27 optional
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']); //undefined
const student = {
    name: "Colton",
    GPA: 3.0,
    classes: [100, 200]
};
console.log(student.test); // undefined
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//iterates without key signature
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
