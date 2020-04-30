/**
 * CODING CHALLENEGE 1
 * Mark and John are trying to compare their BMI (Body Mass Index),
 * which is calculated using the formula: BMI = mass / height ^ 2 
 * (mass in kg and height in meter).
 * 1. Store Mark's and John's mass and height in variables
 * 2. Calculate both their BMIs
 * 3. Create a boolean variable containing information about whether
 * Mark has a higher BMI than John.
 * 4. Print a string to the console containing the variable from step 3.
 * (Something like "Is Marks's BMI higher than John's ? true").
 */

 var markMass = 88; // kg
 var markHeight = 1.69; // meters
 var markBmi = markMass / (markHeight * markHeight);

 var johnMass = 86;
 var johnHeight = 1.54;
 var johnBmi = johnMass / (johnHeight * johnHeight);

 var isMarkGreater = markBmi > johnBmi;
console.log('is mark\'s BMI greater than john\'s '+isMarkGreater);