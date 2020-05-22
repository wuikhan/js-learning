/**
 * Ternary Operator and Switch Statement
 */

var fName = "John";
var age = 16;

age >= 18
  ? console.log(fName + " can drink ")
  : console.log(fName + " can drink juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

//  if(age>=18){
//      var drink = 'beer';
//  } else {
//      var drink = 'juice';
//  }

/**
 * Switch Statement
 */
var job = "teacher";
switch (job) {
  case "teacher":
  case " instructor":
    console.log(fName + "teaches kids how to code");
    break;
  case "driver":
    console.log(fName + "teaches kids how to code");
    break;
  case "designer":
    console.log(fName + "designs beautifl websites");
    break;
  default:
    console.log(fName + " does something else ");
}

age = 17;
switch (true) {
  case age < 13:
    console.log(fName + " is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(fName + " is a teenager");
    break;
  case age >= 20 && age < 30:
    console.log(fName + " is a young man.");
    break;
  default:
    console.log(fName + " is a man");
}

/**
 * Truthy and Falsy values and equality operators
 * falsy values : udefined, null, 0 , '', NaN
 * truthy values : NOT falsy values
 *  === strickt quality comparison
 */
var height;
height = '1';

if (height || height === 0) {
  console.log("variable is defined");
} else {
  console.log("variable is not defined");
}

if(height == 1){
    console.log('The == does type coersion');
}