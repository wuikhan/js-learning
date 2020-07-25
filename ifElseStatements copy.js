/*
if Else Statements
*/
var fName = "John";
var civilStatus = "single";

if (civilStatus === "maried") {
  console.log(fName + " is married.");
} else {
  console.log(fName + " is single.");
}

var isMarried = true;
if (isMarried) {
    console.log(fName + " is married.");
  } else {
    console.log(fName + " is single.");
  }

  var markMass = 88; // kg
  var markHeight = 1.69; // meters
  var markBmi = markMass / (markHeight * markHeight);
 
  var johnMass = 86;
  var johnHeight = 1.54;
  var johnBmi = johnMass / (johnHeight * johnHeight);

  if(markBmi > johnBmi){
      console.log('Mark\'s BMI is higher than John.');
  } else {
      console.log('John\'s BMI is higher than Mark\'s BMI');
  }