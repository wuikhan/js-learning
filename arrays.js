/**
 * Arrays
 */

// arrays are like collection of variables

var names = ["John", "Mark", "James"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

// we can also mutate the data as well
names[1] = "Ben";
names[6] = "Mary";
console.log(names);
console.log(names.length);
names[names.length] = "Waqas"; // this will add Waqas in the end
console.log(names);

// Different data types
var john = ["Waqas", "black", 20, 1990, true];
console.log(john);
john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log("index of method " + john.indexOf(210));

var isColor =
  john.indexOf("black") === -1
    ? "john does not like black color"
    : " john likes the black color";
console.log(isColor);

/**
 * Coding Challenge
 * john and his family went on a holiday and went to 3 different restaurants. The bills
 * were $124, $48, and $268.
 * to tip the waiter a fair amount, john created a simple tip calculator (as a function)
 * He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between
 * $50 and $200 and 10% if the bill is more than $200.
 *
 * In the end, john would like to have 2 arrays :
 * 1) containing all three tips (one for each  bill)
 * 2) containing all three final paid amounts  (bill + tip)
 *
 * (Note: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)
 */

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill > 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}
var bills = [124, 48, 240];
var tip = [
  tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])
];

var finalValue = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(tip, finalValue);
