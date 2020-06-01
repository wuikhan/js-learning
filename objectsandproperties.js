/**
 * objects and properties
 */
// object literal
 var john = {
     firstName : 'John',
     lastName : 'Smith',
     birthYear : 1990,
     family : ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried : false
 };
 console.log(john);

 console.log(john.job);
 // or
 console.log(john['isMarried']);

 john.join = 'designer';
 john['isMarried'] = true;
 console.log(john);

 // new Object syntax
 var jane = new Object();
 jane.firstName = 'Jane';
 jane.birthYear = 1988;
 jane['lastName'] = 'Smith';
 console.log(jane);
