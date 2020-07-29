// object.create

var PersonProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};
// not an ideal way
var john = Object.create(PersonProto);
john.name = 'John';
john.age = 1990;
john.job = 'Analyst';

var jane = Object.create(PersonProto, {
    name: { value: 'Jane' },
    age: { value: 1965 },
    job: { value: 'Designer' }
})

// Primitive vs Objects
//Primitive

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'John',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);

// functions are also objects
// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];
