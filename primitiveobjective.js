/*
primitives and objectives
*/
var a = 23;
var b = a;

a = 47;
console.log(a);
console.log(b);

//objects
var obj1 = {
  name: 'John',
  value: document.getElementById('hello').textContent,
  age: 26
};
var xx = document.getElementById('hello').textContent;
console.log(xx);
console.log(obj1.value);
console.log(obj1.name);

// functions
var age = 27;
var obj = {
  name: 'Waqas',
  city: 'Woodbridge'
};

function change(a, b) {
  a = 30;
  b.city = 'San franciso';
}

function hello(name) {
  console.log('Hello' + name);
}
hello('Waqas');

for (let i = 0; i < 5; i++) {
  hello('john' + i);
  //console.log(hello('Waqas'+i));
}
// Passing functions as arguments
// var years = [1990, 1991, 1999, 1998, 1997];
// function arrayCal(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el){
//     return 2016 -el;
// }

// var ages = arrayCal(years, calculateAge);
// console.log(ages);

var years = [1990,1991,1992,1993,2011,1977];

function test (arr, fo){
    var ar = [];
    for(var i=0; i < arr.length; i++){
        ar.push(fo(arr[i]));
    }
    return ar;
}

function calculateAge(el){
    return 2016 -el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var fe = test(years,isFullAge);
console.log(fe);

var fa = test(years,calculateAge);
console.log(fa);

var rates = test(fa, maxHeartRate);
console.log(rates);

// functions returning functions
function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(name + ', can you please explaon what UX design is ?');
        }
    }  else if (job === 'teacher'){
        return function(name){
            console.log(name + ', What subjects do you teach ?');
        }
    } else {
        return function (name) {
            console.log(name +' , what do you do ?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
interviewQuestion('designer')('Waqas');


 // lecture : IIFE
 function game(){
    var score = Math.random() * 10;
    console.log(score>=5);
}
game();

(function(){
    var score = Math.random() * 10;
    console.log(score>=5);
})();

// lecutre : closures
// an inner function has always access to the variables and paramters of its outer functions
// even after the outer function has returned.

function retirement(retirementAge){
    var a = ' year left until retirement';
    return function (yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

// or
retirement(66)(1990);
