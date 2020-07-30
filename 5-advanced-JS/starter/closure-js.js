// closures

function retirement(retirementAge){
    return function(yearOfBirth){
        var a = ' years left until retirement';
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
// retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);

retirementGermany(1990);
retirementIceLand(1990);

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ", can you please explain what UX design is ?");
        } else if (job === 'teacher') {
            console.log("What subject do you teach, " + name + "?");
        } else {
            console.log("Hello " + name + ", what do you do ?");
        }
    }
}

interviewQuestion('teacher')('Waqas');