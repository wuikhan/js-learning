// object.create

var PersonProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  },
};
// not an ideal way
var john = Object.create(PersonProto);
john.name = "John";
john.age = 1990;
john.job = "Analyst";

var jane = Object.create(PersonProto, {
  name: { value: "Jane" },
  age: { value: 1965 },
  job: { value: "Designer" },
});

// Primitive vs Objects
//Primitive

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects

var obj1 = {
  name: "John",
  age: 26,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: "John",
  city: "Lisbon",
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);
console.log(age);
console.log(obj.city);

// functions are also objects
// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function isFullAge(el) {
  return el >= 18;
}

function calculateAge(el) {
  return 2016 - el;
}

function maxHearRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHearRate);
console.log(rates);
console.log(ages);
console.log(fullAges);

// Functions returning functions
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is ?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do ?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");

var designerQuestion = interviewQuestion("designer");
designerQuestion("Mark");

interviewQuestion("teacher")("Waqas");

// IIFE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// // below is code is the example of IIFE
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
  })(5);