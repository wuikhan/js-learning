/**
 * Functions
 */

 function calculateAge(birthYear){
     return 2020 - birthYear;
 }

 var age = calculateAge(1985);
 console.log(age);

 function yearUntilRetirement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;
     if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years');
     } else {
         console.log(firstName + ' already retired.');
     }
     
 }

 yearUntilRetirement(1985, "Waqas");
 yearUntilRetirement(1930, 'John');
