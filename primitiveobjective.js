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

var years = [1990, 1991, 1992, 1993, 2011, 1977];

function test(arr, fo) {
    var ar = [];
    for (var i = 0; i < arr.length; i++) {
        ar.push(fo(arr[i]));
    }
    return ar;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var fe = test(years, isFullAge);
console.log(fe);

var fa = test(years, calculateAge);
console.log(fa);

var rates = test(fa, maxHeartRate);
console.log(rates);

// functions returning functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explaon what UX design is ?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', What subjects do you teach ?');
        }
    } else {
        return function (name) {
            console.log(name + ' , what do you do ?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
interviewQuestion('designer')('Waqas');


// lecture : IIFE
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// lecutre : closures
// an inner function has always access to the variables and paramters of its outer functions
// even after the outer function has returned.

function retirement(retirementAge) {
    var a = ' year left until retirement';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

// or
retirement(66)(1990);


// Section Advanced Javascript: Objects and Functions
// Lecture BIND, Call and Apply
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen ! I\'m ' +
                this.name + ' I\'m ' +
                this.job + ' and I\'m ' +
                this.age + ' years old');
        } else if (style === 'friendly') {
            console.log('Hey ! what\'s up ? I\'m ' +
                this.name + ' I\'m ' +
                this.job + ' and I\'m ' +
                this.age + ' years old');
        }
    }
}
john.presentation('formal', 'morning');
john.presentation('friendly', 'evening');
var emily = {
    name: 'Emily',
    age: 34,
    job: 'designer'
}

john.presentation.call(emily, 'formal', 'morning');
//john.presentation.apply(emily,['friendly', 'evening']);
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var score ;
        if (ans === this.correct) {
            console.log('Correct answer!');
           sc = callback(true);
        } else {
            console.log('Wrong answer!, Try again');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is : ' + score);
    }
    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe this course ?', ['Boring', 'Fun', 'Hard'], 1);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }

    }
    nextQuestion();
})();