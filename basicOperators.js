var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeOf operator
console.log(typeof johnOlder);

// Operator precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// see the below link to see the complete list of precendence

// http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

// why the below code works is because it works right to left first it is going to add 26 to variable y and then assign the value of y to variable x
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// 2 + 4 + 5 // it will add the number from left to right

// more operators
x = 2;
x = x * 2;
x *= 2;
console.log('the value of x is '+x);

x += 2;
console.log('the value of x is after sum '+x);

x += 1;
console.log(x); // 11

x++;
console.log(x); // 12

x--;
console.log(x); // 11

let a = 10;

document.getElementById("hello").innerHTML = a;
