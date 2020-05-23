/**
 * Function Statement and expressions
 */

// function declaration
//  function whatDoYouDo(job, firstName){

//  }

// function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches students how to code.";
    case "driver":
      return firstName + " drives the car in the city.";
    case "designer":
      return firstName + " designes house.";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo('teacher', 'Waqas'));

/**
 * expression is which provides a value
 * statement does not provide the immediate value 
 */