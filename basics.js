var fName = "John";
console.log(fName);

var lName = "Doe";
var age = 29;

var fullAge = true;
console.log(fullAge);

var job; // it will print undefined because the value is not initialized
console.log(job);

job = "Programmer";
console.log(job);

/*
 Variable mutation and type coercion
*/

var fName = 'John';
var age = 29;
console.log(fName + ' ' +age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(fName + ' ' + age + ' ' + job + ' ' + isMarried );

// variable mutation is changing the value of variable
age = 'twenty eight';
console.log(age);

// var lastName = prompt('What is his last name ?');
// console.log(lastName)

