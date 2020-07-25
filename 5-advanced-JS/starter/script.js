// function constructor

var john = {
    name: 'John',
    yearOfBith: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBith, job) {
    this.name = name;
        this.yearOfBith = yearOfBith;
        this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBith);
};

var john = new Person('Waqas', 1985, 'Analyst');
john.calculateAge();